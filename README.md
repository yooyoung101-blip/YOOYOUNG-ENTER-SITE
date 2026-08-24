# YOOYOUNG ENTER SITE — SM International A&R Campaign Kit

Deployment-ready SM International A&R campaign portfolio.

The design direction is an image-free campaign kit: polished, strange, playful,
and interactive, but built around YOOYOUNG's actual production ability rather
than portrait or mood photography.
The core message is:

```text
YOOYOUNG
MUSIC · ARTIST INSIGHT · VISUAL · PRODUCTION
```

## Included
- HOME / ID SCANNER / CORE / TRACK DECK / RELEASE MAP / CASE FILES / DOC PACK / CONTACT chapters
- Image-free graphic system using typography, grids, cards, meters, scanner motion, and document objects
- Interactive track deck with project detail console
- Responsive navigation and mobile layout
- Hash deep-links (`#profile`, `#core`, `#works`, `#release`, `#files`, ...)
- Resume and self-introduction PDF + HTML fallback
- Local SOMI Visual Album Proposal at `projects/somi/index.html`
- SoundCloud collection link + local audio drop-in folder
- GitHub Pages root structure (`.nojekyll`, `404.html`, manifest, favicon)
- `noindex` by default for recruiter-link privacy

## QA completed
- Inline JavaScript syntax check: PASS
- Internal file references: PASS
- Menu `data-go` targets: PASS
- Required deployment files: PASS
- PDF/document paths: PASS

See `QA.md` for the exact checks.

## Preview on Mac
Double-click `START_PREVIEW.command`, or run:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080` in Safari/Chrome. Do not judge interactions from the iPhone Files HTML preview; it does not behave like a normal deployed browser page.

## Before final public release
1. Drop approved audio files into `assets/audio/` and connect them only when public sharing is permitted.
2. Confirm which contact/social links should be public.
3. If you want search-engine indexing, remove `noindex,nofollow` and update `robots.txt`.

## Deploy
See `DEPLOY.md` for the exact `YOOYOUNG-ENTER-SITE` GitHub Pages steps.
