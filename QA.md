# QA — SM International A&R Campaign Kit

## Static validation
- [x] Inline JavaScript parses with Node
- [x] No `<img>` tags in `index.html`
- [x] No `assets/images` references in `index.html`
- [x] Resume PDF exists
- [x] Self-introduction PDF exists
- [x] SOMI local case page exists
- [x] `.nojekyll` exists
- [x] `404.html` exists
- [x] Manifest and favicon exist

## Local preview
- [x] Local preview server served `index.html`
- [x] Codex browser panel requested the updated preview URL

## Browser QA to verify visually
- [ ] Desktop load shows `A&R CAMPAIGN KIT`
- [ ] Desktop horizontal overflow: 0
- [ ] Mobile horizontal overflow: 0 at 375px
- [ ] Mobile navigation opens and exposes ID / Core / Works / Release / Files
- [ ] Track deck buttons update the selected proof console
- [ ] Contact copy button shows confirmation

## Browser behaviors to verify after real deployment
- [ ] GitHub Pages cache serves the latest commit
- [ ] PDF links open from the deployed URL
- [ ] SoundCloud link opens correctly

## Final-content dependencies
These can be adjusted later without changing the design system:
- Individual public audio previews
- Final public contact/social links
