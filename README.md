# davidphamle.com

Personal portfolio for David Pham Le. It's a single static page (`index.html`) using GSAP for scroll animation and Three.js for the 3D data field in the hero. Hosted on Vercel, and every push to `main` deploys automatically.

## Edit

Open `index.html`. The colour tokens are at the top of the `<style>` block:

| Token | Use | Contrast |
|---|---|---|
| `--fill` #1a56f0 | buttons, band, hover rows, contact (with white text) | 5.8:1, APCA Lc 83 |
| `--blue-text` #8cc0ff | small blue text on dark | 11.1:1 on black, 9.7:1 on cards |
| `--ash` #bdbdb5 | secondary text | 11.1:1 on black |
| `--bone` #ecece4 | body text | 17.7:1 |
| `--glow` #4d9bff | decoration only (3D field, accent bar) | n/a |

## Light and dark mode

The site follows the visitor's device setting until they press the sun/moon button in the menu, then remembers their choice. Light colours are set in `:root[data-theme="light"]`. Light-mode contrast: body text 17.5:1, grey 7.4:1, blue text 7.2:1, white on blue 5.8:1. The 3D field switches to deep blue dots in light mode.

## Animation and accessibility

- **Load:** blue wipe, the name cuts in, the band sweeps across.
- **Hero 3D field (Three.js):** moves on load, on scroll and under the cursor, then settles to still. It never animates on its own for more than about 5 seconds (WCAG 2.2.2). It fades out behind the intro text, and pauses when it's off screen.
- **Scroll:** progress bar, section titles, experience rows, stack lanes, education cards, and the contact letters.
- **Mouse only:** case-card tilt with a light that follows the cursor, and magnetic buttons.
- **Reduced motion:** all animation is turned off and the 3D field draws one still frame.
- **Checked with axe-core** against WCAG 2.0/2.1 A and AA plus best practices, with 0 violations. Also includes a skip link, 44px+ tap targets and screen-reader hints on links that open a new tab.

## Company logos

The logos on the case-study cards come from each company's own website, listed in `logos/sources.json`. The **Fetch company logos** GitHub Action (`.github/workflows/fetch-logos.yml`) downloads them into `logos/` and commits them. It runs whenever `sources.json` changes, or manually from the Actions tab. If a logo file is missing, its card shows the company's initials instead.
