# davidphamle.com

Personal portfolio for David Pham Le. It's a single static page (`index.html`) with GSAP scroll animations, hosted on Vercel.

## Edit

Open `index.html`. Colours are CSS variables at the top of the file (`--signal` is the blue accent, #4d9bff).

## Accessibility

- Checked with axe-core against WCAG 2.0/2.1 A and AA plus best practices, with 0 violations.
- The accent passes AA contrast both as text on black (7.45:1) and as a background behind black text.
- No motion runs on its own for more than 5 seconds. With "reduce motion" turned on, all animation is off.
- Includes a skip link, 44px nav touch targets, and screen-reader hints on links that open a new tab.

## Deploy

The page is deployed to the Vercel project `davidphamle`. To get automatic deploys on push, connect this repo in Vercel under Project → Settings → Git.
