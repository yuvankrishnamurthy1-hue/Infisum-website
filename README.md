# Infisum Website

Official static website for Infinite Sum Modelling LLC (Infisum).

The pages retain their existing HTML/CSS design while repeated content is
stored in structured, CMS-editable records. The compatibility build turns those
records back into the same public pages without changing their URLs.

## Preview locally

The site uses plain HTML, CSS, and JavaScript, so it does not require a build step.

1. Open a terminal in this folder.
2. Start a local static server, for example: `python -m http.server 4173`
3. Visit `http://localhost:4173/` in a browser.

## Main pages

- Home, About, Capabilities, Industries, Spotlight, Contact, and Privacy
- Individual research-library pages for 12 industries
- Core Team, Distinguished Advisors, and Advisors directories

## Project structure

- `index.html` — homepage
- `styles.css` — shared design system and responsive styles
- `app.js` — shared interactions and page behavior
- `paper-images.js` — unique research-card image assignments
- `people-data.js` — team and advisor directory data
- `assets/logos/` — client and partner logos

## Structured content

- `content/papers/` contains one JSON record per paper, including its industry
  placements, card order and image.
- `content/people/` contains one JSON record per team member or advisor.
- `content/industries/` contains one JSON record per industry.
- `.pages.yml` defines the editing forms used by Pages CMS.
- `assets/content/` stores images uploaded through the CMS.

Run `npm run content:validate` after changing records. The validator checks
required fields, slugs, URLs, industry references, placement order and images.

Run `npm run build` to create the deployable site in `dist/`. The build keeps
the existing design while generating paper cards, summaries, industry grids and
people directories from the structured records. Static hosting should publish
the `dist/` directory.

The one-time `npm run content:migrate` command extracts records from the legacy
HTML and JavaScript sources. It refuses to overwrite an existing content
library. The `-- --force` option intentionally remigrates and overwrites those
generated records, so it must not be used after CMS editing begins.

Existing remote images are preserved in `image_url` fields. New CMS uploads use
the corresponding `image` field and are saved under `assets/content/`.

## Deployment

The repository can be deployed by any static host that runs `npm run build` and
publishes `dist/`. The unbuilt root files remain available as a compatibility
fallback during the hosting transition.

## Business

Infinite Sum Modelling LLC  
[infisum.com](https://infisum.com)
