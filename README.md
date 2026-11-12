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
- **Ribbon:** drifts all the time at a gentle cruising speed, and speeds up while the visitor scrolls (either direction), easing back when scrolling stops. The pause button beside it stops all movement for the rest of the visit (WCAG 2.2.2).
- **Scroll:** progress bar, section titles, experience rows, stack lanes, education cards, and the contact letters.
- **Mouse only:** case-card tilt with a light that follows the cursor, and magnetic buttons.
- **Reduced motion:** all animation is turned off and the 3D field draws one still frame.
- **Checked with axe-core** against WCAG 2.0/2.1 A and AA plus best practices, with 0 violations. Also includes a skip link, 44px+ tap targets and screen-reader hints on links that open a new tab.

## Play mode

`play/index.html` (davidphamle.com/play/) is a 3D retro-console version of the portfolio, built with Three.js r128 from cdnjs. On desktop it's a desk scene: a CRT on a stand, an 8-bit console with a top-loading slot, a corded controller and a cartridge rack. On phones (narrower than 700px or portrait) it switches to a vertical pocket handheld.

- **Look:** reflections come from a small softbox scene rendered once at load (no image assets), plus canvas-drawn wood, wall and poster textures and soft contact shadows.
- **Camera (desktop):** *Room*, *Console* and *Screen* views from the switch in the bottom-right corner or keys `1` `2` `3`. Scroll zooms.
- **HUD:** finish swatches, sound and a `?` button that shows or hides the controls card (remembered per browser). Hovering a button or cartridge shows a small tip.
- **Phone:** the handheld sits between the top bar and a cartridge tray. Tap a cartridge in the tray (or the one in the top slot) to load a project, tap the loaded one to eject. The finish button beside the tray cycles finishes.
- **Browse:** controller D-pad, A, B, SELECT and START; tap the TV screen; or the keyboard (arrows, Enter, Esc, Space, Shift).
- **Cartridges:** drag one from the rack into the slot to load that project, or drag the loaded one out to eject it. Clicking a cartridge also inserts or ejects it.
- **Content:** projects, career, about and contact live in the `CATS` array near the top of the script. Career entries mirror the Experience section; company logos load from `logos/`, and entries without one show initials.
- **Sprint Rush (game cartridge):** a side-scrolling delivery roguelike that lives in the `GAME` block of the script. Ten sprints: plan (pick backlog items within capacity), run (three lanes, each hit drops the last item picked), review (score and sprint goal), retro (pick one artifact). High scores are kept in the browser (`localStorage` key `dpl8-sprint-rush-scores`). Tuning tables sit at the top of the block: `REQS` (sprint goals), `ARTS` (artifacts), `OBS` (obstacles), `NAMES` (backlog items).
- **3D logo shelves:** *Tech stack* and *Three countries* (About tab) show floating 3D logos on a ring instead of tag pills. Left and right (or tapping the sides of the screen) turn the ring; the channel knob and Q/E still change tab. Icons come from Simple Icons (CC0) and flags from flag-icons (MIT), stored in `logos/stack/` and `logos/flags/`; Power BI, Braze and SQL have no icon there, so they show initials. Each shelf is the `shelf` field on its item in `CATS`.
- **Links:** START on a career entry opens the company site; Contact opens email, LinkedIn or the CV.
- **Getting there:** a *Play* link in the nav, a *Play mode* button in the hero, and a floating *Play mode* button in the bottom-right corner that appears once the hero buttons scroll out of view. In play mode, *Classic view* returns to the homepage.
- **Reduced motion:** ambient motion is cut back to a minimum. A screen-reader summary of the content sits in a visually hidden section.

## Company logos

The logos on the case-study cards come from each company's own website, listed in `logos/sources.json`. The **Fetch company logos** GitHub Action (`.github/workflows/fetch-logos.yml`) downloads them into `logos/` and commits them. It runs whenever `sources.json` changes, or manually from the Actions tab. If a logo file is missing, its card shows the company's initials instead.
