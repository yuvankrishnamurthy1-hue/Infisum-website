// One-off (but re-runnable) utility: downloads any content/people record's
// external `image_url` into assets/content/people/ and repoints the record at
// the local file, so the deployed site never depends on the old infisum.com
// WordPress media library staying online. Safe to re-run — records that
// already have a local `image` set are skipped.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const peopleDir = path.join(root, 'content', 'people');
const outputDir = path.join(root, 'assets', 'content', 'people');
fs.mkdirSync(outputDir, { recursive: true });

function extensionFor(url, contentType) {
  const fromUrl = path.extname(new URL(url).pathname).toLowerCase();
  if (['.jpg', '.jpeg', '.png', '.webp', '.gif'].includes(fromUrl)) return fromUrl;
  if (contentType?.includes('png')) return '.png';
  if (contentType?.includes('webp')) return '.webp';
  if (contentType?.includes('gif')) return '.gif';
  return '.jpg';
}

const files = fs.readdirSync(peopleDir).filter((name) => name.endsWith('.json'));
let downloaded = 0;
let skipped = 0;
let failed = 0;

for (const name of files) {
  const filePath = path.join(peopleDir, name);
  const record = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  if (record.image) { skipped += 1; continue; }
  if (!record.image_url || !record.image_url.includes('infisum.com')) { skipped += 1; continue; }

  try {
    const response = await fetch(record.image_url);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const buffer = Buffer.from(await response.arrayBuffer());
    const ext = extensionFor(record.image_url, response.headers.get('content-type'));
    const localName = `${record.slug}${ext}`;
    fs.writeFileSync(path.join(outputDir, localName), buffer);

    record.image = `assets/content/people/${localName}`;
    record.image_url = '';
    fs.writeFileSync(filePath, `${JSON.stringify(record, null, 2)}\n`, 'utf8');
    downloaded += 1;
    console.log(`OK   ${record.slug} -> ${localName} (${(buffer.length / 1024).toFixed(0)} KB)`);
  } catch (error) {
    failed += 1;
    console.error(`FAIL ${record.slug}: ${error.message}`);
  }
}

console.log(`\nDownloaded ${downloaded}, skipped ${skipped}, failed ${failed}.`);
if (failed > 0) process.exitCode = 1;
