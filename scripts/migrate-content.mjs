import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const contentRoot = path.join(root, 'content');
const force = process.argv.includes('--force');

function read(relativePath) {
  return fs.readFileSync(path.join(root, relativePath), 'utf8');
}

function extractInitializer(source, variableName) {
  const marker = `const ${variableName} =`;
  const markerIndex = source.indexOf(marker);
  if (markerIndex === -1) throw new Error(`Could not find ${variableName}`);
  const tail = source.slice(markerIndex + marker.length);
  const relativeStart = tail.search(/[\[{]/);
  if (relativeStart === -1) throw new Error(`Could not find the start of ${variableName}`);
  const start = markerIndex + marker.length + relativeStart;
  const opening = source[start];
  const closing = opening === '{' ? '}' : ']';
  let depth = 0;
  let quote = '';
  let escaped = false;

  for (let index = start; index < source.length; index += 1) {
    const character = source[index];
    if (quote) {
      if (escaped) escaped = false;
      else if (character === '\\') escaped = true;
      else if (character === quote) quote = '';
      continue;
    }
    if (character === '"' || character === "'" || character === '`') {
      quote = character;
      continue;
    }
    if (character === opening) depth += 1;
    if (character === closing) depth -= 1;
    if (depth === 0) return source.slice(start, index + 1);
  }
  throw new Error(`Could not find the end of ${variableName}`);
}

function parseInitializer(source, variableName) {
  const literal = extractInitializer(source, variableName);
  return Function(`"use strict"; return (${literal});`)();
}

function repairPaperTitle(value) {
  return value
    .replace(/\u00e2\u20ac\u02dc/g, '\u2018')
    .replace(/\u00e2\u20ac\u2122/g, '\u2019')
    .replace(/\u00e2\u20ac\u201c/g, '\u2013')
    .replace(/\u00c3\u00a0/g, '\u00e0');
}

function decodeHtml(value = '') {
  return value
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&#x([0-9a-f]+);/gi, (_, code) => String.fromCodePoint(Number.parseInt(code, 16)));
}

function slugify(value) {
  return value
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 110);
}

function prepareDirectory(relativePath) {
  const directory = path.join(contentRoot, relativePath);
  fs.mkdirSync(directory, { recursive: true });
  const existing = fs.readdirSync(directory).filter((name) => name.endsWith('.json'));
  if (existing.length && !force) {
    throw new Error(`${path.relative(root, directory)} already contains records. Re-run with --force only for an intentional remigration.`);
  }
  if (force) existing.forEach((name) => fs.rmSync(path.join(directory, name)));
  return directory;
}

function writeJson(directory, filename, value) {
  fs.writeFileSync(path.join(directory, filename), `${JSON.stringify(value, null, 2)}\n`, 'utf8');
}

const appSource = read('app.js');
const industries = parseInitializer(appSource, 'INDUSTRIES');
const industryImages = parseInitializer(appSource, 'INDUSTRY_IMAGES');
const homeIndustryImages = parseInitializer(appSource, 'HOME_INDUSTRY_IMAGES');
const paperLinksRaw = parseInitializer(appSource, 'PAPER_LINKS');
const paperSummaries = parseInitializer(appSource, 'PAPER_SUMMARIES');
const paperLinks = Object.fromEntries(Object.entries(paperLinksRaw).map(([title, links]) => [repairPaperTitle(title), links]));

const imageWindow = {};
const paperImages = Function('window', `${read('paper-images.js')}\nreturn window.PAPER_CARD_IMAGES;`)(imageWindow);
const peopleWindow = {};
const peopleDirectories = Function('window', `${read('people-data.js')}\nreturn window.PEOPLE_DIRECTORIES;`)(peopleWindow);

const industriesDirectory = prepareDirectory('industries');
industries.forEach((industry, index) => {
  const fullImage = industryImages[industry.slug] || {};
  const homeImage = homeIndustryImages[industry.slug] || {};
  writeJson(industriesDirectory, `${industry.slug}.json`, {
    slug: industry.slug,
    name: industry.name,
    order: index + 1,
    published: true,
    summary: industry.summary,
    approach_points: industry.points || [],
    icon_svg: industry.icon,
    image: null,
    image_url: fullImage.src || null,
    image_alt: fullImage.alt || '',
    home_image: null,
    home_image_url: homeImage.src || null,
    home_image_alt: homeImage.alt || '',
    related_study: industry.study || null
  });
});

const paperMap = new Map();
const industryPages = fs.readdirSync(root).filter((name) => /^industry-[a-z0-9-]+\.html$/.test(name)).sort();
for (const pageName of industryPages) {
  const industry = pageName.replace(/^industry-/, '').replace(/\.html$/, '');
  const html = read(pageName);
  const cardTags = [...html.matchAll(/<a class="paper-card"[^>]*data-paper-title="[^"]+"[^>]*>/g)].map((match) => match[0]);
  const images = paperImages[pageName] || [];
  if (cardTags.length !== images.length) throw new Error(`${pageName} has ${cardTags.length} paper cards but ${images.length} images`);

  cardTags.forEach((tag, index) => {
    const attribute = (name) => decodeHtml(tag.match(new RegExp(`${name}="([^"]*)"`))?.[1] || '');
    const title = attribute('data-paper-title');
    const category = attribute('data-paper-category');
    const sourceUrl = attribute('data-source-url') || null;
    const links = paperLinks[title] || { pageUrl: sourceUrl, paperUrl: null };
    if (!paperMap.has(title)) {
      paperMap.set(title, {
        slug: slugify(title),
        title,
        published: true,
        source_url: links.pageUrl || sourceUrl,
        paper_url: links.paperUrl || null,
        summary: paperSummaries[title] || null,
        placements: []
      });
    }
    paperMap.get(title).placements.push({ industry, order: index + 1, category, image: null, image_url: images[index] });
  });
}

const papersDirectory = prepareDirectory('papers');
const usedPaperSlugs = new Set();
[...paperMap.values()].sort((a, b) => a.title.localeCompare(b.title)).forEach((paper) => {
  let slug = paper.slug;
  let suffix = 2;
  while (usedPaperSlugs.has(slug)) slug = `${paper.slug}-${suffix++}`;
  usedPaperSlugs.add(slug);
  paper.slug = slug;
  writeJson(papersDirectory, `${slug}.json`, paper);
});

const peopleDirectory = prepareDirectory('people');
const usedPeopleSlugs = new Set();
let peopleCount = 0;
for (const [group, people] of Object.entries(peopleDirectories)) {
  people.forEach((person, index) => {
    const baseSlug = `${group}-${slugify(person.name)}`;
    let slug = baseSlug;
    let suffix = 2;
    while (usedPeopleSlugs.has(slug)) slug = `${baseSlug}-${suffix++}`;
    usedPeopleSlugs.add(slug);
    peopleCount += 1;
    writeJson(peopleDirectory, `${slug}.json`, {
      slug,
      name: person.name,
      group,
      order: index + 1,
      published: true,
      role: person.role || '',
      bio: person.bio || '',
      image: null,
      image_url: person.image || null,
      linkedin_url: person.linkedin || null
    });
  });
}

const placementCount = [...paperMap.values()].reduce((total, paper) => total + paper.placements.length, 0);
fs.mkdirSync(contentRoot, { recursive: true });
writeJson(contentRoot, '_migration-report.json', {
  industries: industries.length,
  papers: paperMap.size,
  paper_placements: placementCount,
  people: peopleCount,
  people_groups: Object.fromEntries(Object.entries(peopleDirectories).map(([group, people]) => [group, people.length]))
});

console.log(`Created ${industries.length} industry records.`);
console.log(`Created ${paperMap.size} paper records with ${placementCount} industry placements.`);
console.log(`Created ${peopleCount} people records.`);
