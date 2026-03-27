# Workflow — BGS Travel and Tourism

## Development Philosophy
Design and prototype in static HTML/CSS first. Approve with client. Then implement in WordPress/Elementor. This prevents costly rework in the page builder.

## Task Lifecycle
1. **Define** — Spec written in track `plan.md` before any code
2. **Build** — Implement in static prototype or WordPress
3. **Review** — Visual QA on desktop + mobile (iPhone SE + iPhone 14 Pro + iPad)
4. **Approve** — Client sign-off before moving to next track
5. **Publish** — Deploy to staging → client review → production

## Commit Strategy
Conventional Commits format:
- `feat: add desert safari package card component`
- `fix: mobile nav overflow on iPhone SE`
- `content: add Tanzania destination page copy`
- `style: update gold hover states on CTA buttons`
- `chore: install WP Travel Engine and configure`

## Code Review
- Required for all WordPress theme/plugin customisations
- Not required for content updates (package descriptions, blog posts)
- Claude reviews all custom CSS and JavaScript before publishing

## Verification Checkpoints
- After each homepage section: screenshot review on mobile + desktop
- After each new page type: full browser test (Chrome, Safari, Firefox)
- Before production deploy: full Lighthouse audit (target 85+ mobile)
- After GHL integration: test lead capture end-to-end

## Content Update Process (for BGS team — post-launch)
1. Log into WordPress admin (`/wp-admin`)
2. For **packages**: Tours > Add New — use WP Travel Engine form
3. For **blog posts**: Posts > Add New — use Gutenberg editor
4. For **destinations**: Pages > find destination page — Edit with Elementor
5. For **prices/availability**: Tours > [Tour Name] > Pricing tab
6. For **gallery images**: Media > Add New — then add to relevant tour

## Naming Conventions
- Page URLs: `/dubai-desert-safari/`, `/serengeti-safari-tanzania/`
- Image filenames: `dubai-desert-safari-sunset-bgs.jpg` (descriptive, SEO-friendly)
- CSS classes: BEM methodology — `.bgs-card__title`, `.bgs-nav__link--active`
- WordPress templates: `page-destination.php`, `single-tour.php`
