# YOOYOUNG ENTER SITE — SM International A&R Pop Lab

Deployment-ready SM International A&R campaign portfolio.

The design direction is a kit-based album-promotion microsite: bright, playful,
kitchy, and interactive, but built around YOOYOUNG's actual production ability.
The core message is:

```text
YOOYOUNG
MUSIC · ARTIST INSIGHT · VISUAL · PRODUCTION
```

## Included
- Full-screen HOME / INDEX navigation
- PROFILE / STRENGTHS / WORKS / PROCESS / MUSIC / DOCUMENTS / CONTACT chapters
- One-typeface YOOYOUNG wordmark and oversized orbit typography
- Desktop cursor states, hover previews and project detail stage
- Mobile swipe chapter navigation and coarse-pointer fallbacks
- Hash deep-links (`#profile`, `#strengths`, `#works`, `#music`, ...)
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
1. Replace the temporary local reference photography in `assets/images/` with your final approved image set.
2. Drop approved audio files into `assets/audio/` and connect them only when public sharing is permitted.
3. Confirm which contact/social links should be public.
4. If you want search-engine indexing, remove `noindex,nofollow` and update `robots.txt`.

## Deploy
See `DEPLOY.md` for the exact `YOOYOUNG-ENTER-SITE` GitHub Pages steps.
