import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const contentRoot = path.join(root, 'content');
const errors = [];
const warnings = [];

function records(folder) {
  const directory = path.join(contentRoot, folder);
  return fs.readdirSync(directory).filter((name) => name.endsWith('.json')).map((name) => ({
    file: name,
    ...JSON.parse(fs.readFileSync(path.join(directory, name), 'utf8'))
  }));
}

function requireValue(record, field, label) {
  if (record[field] === undefined || record[field] === null || record[field] === '') errors.push(`${label}: missing ${field}`);
}

function validUrl(value) {
  if (!value) return true;
  try {
    return ['http:', 'https:'].includes(new URL(value, 'https://infisum.com').protocol);
  } catch {
    return false;
  }
}

const industries = records('industries');
const papers = records('papers');
const people = records('people');
const industrySlugs = new Set();
for (const industry of industries) {
  const label = `Industry ${industry.file}`;
  ['slug', 'name', 'summary', 'order'].forEach((field) => requireValue(industry, field, label));
  if (industrySlugs.has(industry.slug)) errors.push(`${label}: duplicate slug ${industry.slug}`);
  industrySlugs.add(industry.slug);
  if (!Array.isArray(industry.approach_points) || !industry.approach_points.length) errors.push(`${label}: approach_points must contain at least one item`);
  if (!(industry.image || industry.image_url)) errors.push(`${label}: missing primary image`);
}

const paperSlugs = new Set();
const placementKeys = new Set();
let placementCount = 0;
for (const paper of papers) {
  const label = `Paper ${paper.file}`;
  ['slug', 'title'].forEach((field) => requireValue(paper, field, label));
  if (paperSlugs.has(paper.slug)) errors.push(`${label}: duplicate slug ${paper.slug}`);
  paperSlugs.add(paper.slug);
  if (!validUrl(paper.source_url)) errors.push(`${label}: invalid source_url`);
  if (!validUrl(paper.paper_url)) errors.push(`${label}: invalid paper_url`);
  if (!paper.summary) warnings.push(`${label}: no approved summary is stored`);
  if (!Array.isArray(paper.placements) || !paper.placements.length) {
    errors.push(`${label}: requires at least one industry placement`);
    continue;
  }
  for (const placement of paper.placements) {
    placementCount += 1;
    if (!industrySlugs.has(placement.industry)) errors.push(`${label}: unknown industry ${placement.industry}`);
    if (!Number.isInteger(placement.order) || placement.order < 1) errors.push(`${label}: placement order must be a positive integer`);
    if (!(placement.image || placement.image_url)) errors.push(`${label}: placement is missing an image`);
    const key = `${placement.industry}:${placement.order}`;
    if (placementKeys.has(key)) errors.push(`${label}: duplicate placement position ${key}`);
    placementKeys.add(key);
  }
}

const peopleSlugs = new Set();
const allowedGroups = new Set(['core', 'distinguished', 'advisors']);
for (const person of people) {
  const label = `Person ${person.file}`;
  ['slug', 'name', 'group', 'order'].forEach((field) => requireValue(person, field, label));
  if (peopleSlugs.has(person.slug)) errors.push(`${label}: duplicate slug ${person.slug}`);
  peopleSlugs.add(person.slug);
  if (!allowedGroups.has(person.group)) errors.push(`${label}: invalid group ${person.group}`);
  if (person.linkedin_url && !validUrl(person.linkedin_url)) errors.push(`${label}: invalid linkedin_url`);
  if (!(person.image || person.image_url)) warnings.push(`${label}: no image is stored`);
}

console.log(`Industries: ${industries.length}`);
console.log(`Papers: ${papers.length} (${placementCount} industry placements)`);
console.log(`People: ${people.length}`);
if (warnings.length) {
  console.log(`Warnings: ${warnings.length}`);
  warnings.forEach((warning) => console.log(`- ${warning}`));
}
if (errors.length) {
  console.error(`Errors: ${errors.length}`);
  errors.forEach((error) => console.error(`- ${error}`));
  process.exit(1);
}
console.log('Content validation passed.');
