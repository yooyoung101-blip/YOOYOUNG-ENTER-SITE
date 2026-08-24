# QA — v12

## Static validation
- [x] Inline JavaScript parses with Node `--check`
- [x] No missing internal file references found in `index.html`
- [x] Every `data-go` route points to an existing chapter ID
- [x] Resume PDF exists
- [x] Self-introduction PDF exists
- [x] SOMI local case page exists
- [x] `.nojekyll` exists
- [x] `404.html` exists
- [x] Manifest and favicon exist
- [x] Site images are referenced from local `assets/images/` paths in `index.html`
- [x] Site images are referenced from local `assets/images/` paths in `404.html`

## Browser QA completed in Codex
- [x] Desktop load: active HOME, console errors 0
- [x] Desktop horizontal overflow: 0 at 1440px
- [x] Mobile horizontal overflow: 0 at 375px, 390px, and 430px
- [x] SVG orbit textPath exists on mobile
- [x] INDEX opens and shows PROFILE / WORKS / DOCUMENTS / CONTACT with subitems
- [x] WORKS deep-link loads correctly
- [x] SOMI project drawer opens and links to `projects/somi/index.html`
- [x] DOCUMENTS deep-link loads correctly
- [x] Resume in-site sheet opens and links to `assets/docs/resume.pdf`
- [x] Resume PDF returns 200 locally
- [x] Self-introduction PDF returns 200 locally
- [x] SOMI local case page returns 200 locally
- [x] Browser console errors: 0 during checked flows

## Browser behaviors to verify after real deployment
- [ ] HOME loading animation completes on GitHub Pages
- [ ] MUSIC waveform animates on GitHub Pages
- [ ] Swipe navigation works on a physical iPhone
- [ ] Local reference photography loads consistently from GitHub Pages

## Final-content dependencies
These cannot be finalized until the final assets are chosen:
- Hero/reference photography
- Individual public audio previews
- Final public contact/social links
