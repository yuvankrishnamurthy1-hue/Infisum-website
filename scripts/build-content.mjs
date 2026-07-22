import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const contentRoot = path.join(root, 'content');

if (dist !== path.resolve(root, 'dist') || !dist.startsWith(`${root}${path.sep}`)) {
  throw new Error('Refusing to build outside the project dist directory.');
}

function readRecords(folder) {
  const directory = path.join(contentRoot, folder);
  return fs.readdirSync(directory)
    .filter((name) => name.endsWith('.json'))
    .map((name) => JSON.parse(fs.readFileSync(path.join(directory, name), 'utf8')))
    .filter((record) => record.published !== false);
}

function imageValue(record, uploadedField = 'image', externalField = 'image_url') {
  return record[uploadedField] || record[externalField] || '';
}

function escapeHtml(value = '') {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function copy(relativePath) {
  const source = path.join(root, relativePath);
  if (!fs.existsSync(source)) return;
  fs.cpSync(source, path.join(dist, relativePath), { recursive: true });
}

if (process.argv.includes('--clean') && fs.existsSync(dist)) fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(dist, { recursive: true });

for (const entry of fs.readdirSync(root, { withFileTypes: true })) {
  if (entry.isFile() && /\.(?:html|css|js|svg|txt|xml)$/.test(entry.name)) copy(entry.name);
}
copy('assets');
copy('.nojekyll');

const industries = readRecords('industries').sort((a, b) => a.order - b.order || a.name.localeCompare(b.name));
const papers = readRecords('papers').sort((a, b) => a.title.localeCompare(b.title));
const people = readRecords('people').sort((a, b) => a.group.localeCompare(b.group) || a.order - b.order || a.name.localeCompare(b.name));

const pagesBySlug = Object.fromEntries(readRecords('pages').map((page) => [page.slug, page]));
const globalSettingsPath = path.join(contentRoot, 'settings', 'global.json');
const globalSettings = fs.existsSync(globalSettingsPath) ? JSON.parse(fs.readFileSync(globalSettingsPath, 'utf8')) : {};

const runtimeIndustries = industries.map((industry) => ({
  slug: industry.slug,
  name: industry.name,
  icon: industry.icon_svg,
  summary: industry.summary,
  points: industry.approach_points,
  ...(industry.related_study ? { study: industry.related_study } : {})
}));

const industryImages = Object.fromEntries(industries.map((industry) => [industry.slug, {
  src: imageValue(industry),
  alt: industry.image_alt || ''
}]));

const homeIndustryImages = Object.fromEntries(industries.map((industry) => [industry.slug, {
  src: imageValue(industry, 'home_image', 'home_image_url') || imageValue(industry),
  alt: industry.home_image_alt || industry.image_alt || ''
}]));

const paperLinks = Object.fromEntries(papers.map((paper) => [paper.title, {
  pageUrl: paper.source_url || null,
  paperUrl: paper.paper_url || null
}]));
const paperSummaries = Object.fromEntries(papers.filter((paper) => paper.summary).map((paper) => [paper.title, paper.summary]));

const runtime = {
  industries: runtimeIndustries,
  industryImages,
  homeIndustryImages,
  paperLinks,
  paperSummaries
};
fs.writeFileSync(path.join(dist, 'content-runtime.js'), `window.INFISUM_CONTENT = ${JSON.stringify(runtime, null, 2)};\n`, 'utf8');

const peopleDirectories = { core: [], distinguished: [], advisors: [] };
for (const person of people) {
  if (!peopleDirectories[person.group]) continue;
  peopleDirectories[person.group].push({
    name: person.name,
    role: person.role || '',
    ...(person.bio ? { bio: person.bio } : {}),
    image: imageValue(person),
    linkedin: person.linkedin_url || ''
  });
}
fs.writeFileSync(path.join(dist, 'people-data.js'), `window.PEOPLE_DIRECTORIES = ${JSON.stringify(peopleDirectories, null, 2)};\n`, 'utf8');

const paperImages = {};
for (const industry of industries) {
  const pageName = `industry-${industry.slug}.html`;
  paperImages[pageName] = papers
    .flatMap((paper) => paper.placements.filter((placement) => placement.industry === industry.slug).map((placement) => ({ paper, placement })))
    .sort((a, b) => a.placement.order - b.placement.order)
    .map(({ placement }) => imageValue(placement));
}
fs.writeFileSync(path.join(dist, 'paper-images.js'), `window.PAPER_CARD_IMAGES = ${JSON.stringify(paperImages, null, 2)};\n`, 'utf8');

// Replaces every `<!-- cms:scope.field -->...<!-- /cms:scope.field -->` marker pair in a
// page with the matching content/pages/<scope>.json or content/settings/global.json value.
// The markers themselves are kept in the output so the page stays editable after future builds.
const cmsMarkerPattern = /<!-- cms:([\w-]+\.[\w-]+) -->([\s\S]*?)<!-- \/cms:\1 -->/g;
function applyCmsMarkers(html) {
  return html.replace(cmsMarkerPattern, (match, key) => {
    const [scope, field] = key.split('.');
    const source = scope === 'global' ? globalSettings : pagesBySlug[scope];
    const value = source ? source[field] : undefined;
    if (value === undefined || value === null) return match;
    return `<!-- cms:${key} -->${value}<!-- /cms:${key} -->`;
  });
}

for (const filename of fs.readdirSync(dist).filter((name) => name.endsWith('.html'))) {
  const filePath = path.join(dist, filename);
  let html = fs.readFileSync(filePath, 'utf8');
  if (!html.includes('content-runtime.js')) {
    html = html.replace('<script src="app.js"></script>', '<script src="content-runtime.js"></script>\n<script src="app.js"></script>');
  }
  html = applyCmsMarkers(html);

  const industryMatch = filename.match(/^industry-([a-z0-9-]+)\.html$/);
  if (industryMatch) {
    const industry = industryMatch[1];
    const placements = papers
      .flatMap((paper) => paper.placements.filter((placement) => placement.industry === industry).map((placement) => ({ paper, placement })))
      .sort((a, b) => a.placement.order - b.placement.order);
    const cards = placements.map(({ paper, placement }) => (
      `      <a class="paper-card" href="#paper-detail" data-paper-title="${escapeHtml(paper.title)}" data-paper-category="${escapeHtml(placement.category || 'Research')}"><span class="tag">Research ${String(placement.order).padStart(2, '0')}</span><h3>${escapeHtml(paper.title)}</h3><p>Select this paper to open its summary record.</p><span class="paper-arr" aria-hidden="true">→</span></a>`
    )).join('\n');

    const libraryPattern = /(<section class="band tight paper-library-section"[\s\S]*?<div class="paper-grid reveal">)[\s\S]*?(\s*<\/div>\s*<article class="paper-detail reveal")/;
    if (!libraryPattern.test(html)) throw new Error(`Could not find the research library in ${filename}`);
    html = html.replace(libraryPattern, `$1\n${cards}$2`);
    html = html.replace(
      /(<section class="band tight paper-library-section"[\s\S]*?<div class="band-head reveal">[\s\S]*?<p>)[^<]*(<\/p>)/,
      `$1${placements.length} papers and research articles.$2`
    );
  }
  fs.writeFileSync(filePath, html, 'utf8');
}

console.log(`Built ${industries.length} industries, ${papers.length} papers, ${people.length} people and ${Object.keys(pagesBySlug).length} pages into dist/.`);
