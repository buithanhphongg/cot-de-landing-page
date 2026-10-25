# Cốt Đê landing page

A dependency-free static landing page for Cốt Đê. Vietnamese is the default language; visitors can switch to English, and the choice is stored locally.

## Files

- `index.html` — page metadata and app mount point.
- `styles.css` — responsive layout and visual tokens.
- `src/site-data.js` — the single source for bilingual copy and public channel/contact URLs.
- `src/app.js` — renders the page and handles language selection.
- `founders.jpg` — original photo of Phong and Bảo.
- `DESIGN.md` — visual and editorial rules for future changes.

To update a channel or contact link, change it once in `links` in `src/site-data.js`. To edit text, change the matching `vi` and `en` entries there. Topic and channel lists render from arrays in that file.

## Local preview

Serve the repository root with any static HTTP server and open its local URL. ES modules require HTTP; opening `index.html` directly as a `file://` URL may be blocked by the browser. The site has no build step or package dependencies.
