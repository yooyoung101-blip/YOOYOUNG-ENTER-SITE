# YOOYOUNG A&R Campaign Site

A static campaign-style personal promotion site for an A&R / Music Production application.

This is intentionally not a traditional resume page. It is structured like a music release campaign or EPK, with section-specific interactions:

- Cover / Campaign Key Visual
- ID Scanner
- Experience Map
- Track Deck
- Build Your A&R
- Case Files
- Scroll Story
- End Credit

## Run Locally

Open `index.html` directly in a browser, or use any simple static server.

```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.

## GitHub Pages

This repository is ready for GitHub Pages as a static site.

1. Open the repository settings on GitHub.
2. Go to Pages.
3. Set the source to the `main` branch and the root folder.
4. Save.

The site uses only static HTML, CSS, JavaScript, and local assets.

## Files

- `index.html`: site content and section structure
- `styles.css`: responsive campaign visual system
- `script.js`: scanner, map, track deck, builder, and reveal interactions
- `assets/campaign-key-visual.png`: generated campaign key visual
