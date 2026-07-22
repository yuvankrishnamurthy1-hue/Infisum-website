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
- `content/pages/` contains one JSON file per page (`home.json`, `about.json`,
  `capabilities.json`, `spotlight.json`, `contact.json`, `privacy.json`) with
  that page's editable heading/paragraph/button text.
- `content/settings/global.json` holds sitewide text reused in the footer on
  every page (tagline, contact email, copyright line).
- `.pages.yml` defines the editing forms used by Pages CMS.
- `assets/content/` stores images uploaded through the CMS.

Run `npm run content:validate` after changing records. The validator checks
required fields, slugs, URLs, industry references, placement order and images.

### How page text becomes editable (the `cms:` marker convention)

Most of the site's prose (headings, ledes, button labels, CTA text) lives
directly in the root HTML files, wrapped like this:

```html
<h1><!-- cms:about.hero_heading -->Economic insight for real decisions.<!-- /cms:about.hero_heading --></h1>
```

The part between the two comments is the *only* thing that changes — the
`cms:about.hero_heading` marker itself is permanent scaffolding, not content.
`npm run build` reads `content/pages/about.json`'s `hero_heading` field and
swaps in whatever text is stored there, leaving the markers in place so the
page stays editable on every future build. Markers named `cms:global.*` pull
from `content/settings/global.json` instead of a page file.

This is intentionally plain string substitution — no templating engine, no
build step required to preview a change (open the HTML file directly and
you'll just see the current text baked in). That makes it easy for a future
AI coding session, or anyone editing by hand, to:

- **Add a new editable field to an existing page**: wrap the text in
  `<!-- cms:pagename.new_field_name -->...<!-- /cms:pagename.new_field_name -->`
  in the HTML, add `new_field_name` to the matching file in `content/pages/`,
  and add a matching entry under that page's `fields:` list in `.pages.yml`.
- **Add a whole new editable page**: create `content/pages/<slug>.json` with a
  `slug`/`published` plus whatever fields it needs, wrap the corresponding HTML
  in `cms:<slug>.field` markers, and add a `type: file` entry to `.pages.yml`
  pointing at it (copy one of the existing `*-page` entries as a template).
- **Not everything needs to be a CMS field.** Repeating structures that are
  already data-driven collections (research cards, industry tiles, team
  photos) are handled by `content/papers`, `content/industries` and
  `content/people` instead — don't wrap those in `cms:` markers. Likewise,
  content that changes only via a real code change (the 4 capability tabs and
  4 deliverable cards on `capabilities.html`, the Spotlight study cards, client
  and partner logos) is left as plain HTML on purpose; editing it directly in
  the HTML is simpler than adding a form field for something that rarely
  changes and has real layout/structure attached to it.

`npm run content:validate` scans every root HTML file for `cms:` markers and
checks that each one resolves to a real field in `content/pages/` or
`content/settings/global.json` — a typo'd or renamed marker fails validation
instead of silently leaving stale text on the live site.

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
