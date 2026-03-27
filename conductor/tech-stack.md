# Tech Stack — BGS Travel and Tourism

## CMS Recommendation & Decision

### ✅ CHOSEN: WordPress + WP Travel Engine

**Why WordPress over other options:**

| CMS | Pros | Cons | Verdict |
|---|---|---|---|
| **WordPress + WP Travel Engine** | Purpose-built for travel agencies, team can manage without devs, 50,000+ plugins, REST API, free core | Needs security hardening, can get bloated | ✅ CHOSEN |
| Strapi (headless) | Modern API-first, great developer experience | Non-technical team needs developer for content types | ❌ Too dev-heavy for content team |
| Directus | Beautiful admin UI, works on any DB | No travel-specific features | ❌ No travel tooling |
| Payload CMS | TypeScript-native, very modern | Small community, no travel plugins | ❌ Too new |
| Ghost | Great for blogs | Not a travel CMS | ❌ Blog only |

### WP Travel Engine — What It Gives You For Free
- ✅ Tour/package management with itinerary builder
- ✅ Pricing tiers (single, couple, group, child)
- ✅ Trip duration, difficulty, included/excluded lists
- ✅ Booking enquiry forms built in
- ✅ Review system
- ✅ Gallery per trip
- ✅ SEO-friendly URLs (`/tours/dubai-desert-safari/`)
- ✅ Destination taxonomy (filter by destination)
- ✅ Trip category taxonomy (safari, luxury, family, etc.)
- ✅ REST API endpoints for all tour data

### Premium Plugins (Worth Purchasing)
| Plugin | Purpose | Cost |
|---|---|---|
| WP Travel Engine - Elementor Widgets | Drag-drop tour cards in Elementor | ~$49 |
| Elementor Pro | Full page builder | ~$99/yr |
| Yoast SEO Premium | SEO management | ~$99/yr |
| WPForms Pro | Advanced lead capture forms | ~$99/yr |
| WP Rocket | Performance/caching | ~$59/yr |

## Full Stack

### Frontend
- **Page Builder:** Elementor Pro (on WordPress)
- **Theme Base:** Custom child theme or Hello Elementor (lightweight base)
- **CSS:** Custom CSS via Elementor + child theme stylesheet
- **Fonts:** Cormorant + Montserrat via Google Fonts
- **Icons:** Flaticon / Remix Icons / custom SVGs
- **Animations:** CSS transitions + AOS (Animate on Scroll) library

### Backend / CMS
- **CMS:** WordPress 6.x
- **Tour Management:** WP Travel Engine (free + premium addons)
- **Forms / Lead Capture:** WPForms or GHL embedded forms
- **Email:** WP Mail SMTP + Gmail/SendGrid
- **Booking:** WP Travel Engine booking flow OR redirect to WhatsApp/GHL

### Database
- **MySQL 8.x** (standard WordPress)
- Hosted on same server as WordPress

### Infrastructure
- **Recommended Host:** Cloudways (managed, fast, ~$14/mo) OR Kinsta (premium, ~$35/mo)
- **CDN:** Cloudflare (free tier sufficient)
- **SSL:** Let's Encrypt via host (free)
- **Backups:** UpdraftPlus (daily automated backups to Google Drive)
- **Staging:** Cloudways/Kinsta both include staging environments

### GHL Integration
- **Blog sync:** GHL REST API — Claude-built script to publish blog posts from GHL to WordPress or vice versa
- **Lead capture:** GHL form embed OR webhook from WPForms → GHL contact creation
- **WhatsApp CTAs:** `wa.me` links with pre-filled message text
- **CRM tags:** WPForms → Webhook → GHL API creates contact with correct tags

### SEO Tools
- Yoast SEO (meta, schema, sitemap)
- Rank Math (alternative to Yoast)
- Google Search Console
- Google Analytics 4

### Performance Targets
- Core Web Vitals: LCP < 2.5s, FID < 100ms, CLS < 0.1
- PageSpeed score: 85+ mobile / 90+ desktop
- Image format: WebP with JPEG fallback

## Development Workflow

### Phase 1 — Design & Prototype (Current)
- Build reference HTML/CSS homepage prototype (in `/src/`)
- All design decisions locked in static prototype first
- Review with client before WordPress build begins

### Phase 2 — WordPress Setup
- Install WordPress on Cloudways staging
- Install + configure WP Travel Engine
- Install + configure Elementor Pro
- Set up child theme with design system CSS variables

### Phase 3 — Homepage Build
- Implement approved prototype design in Elementor
- Add all 13 homepage sections
- Mobile responsive QA

### Phase 4 — Content Pages
- Destination pages (15)
- Package pages (initially 10 flagship packages)
- Activities pages
- Visa services page
- Blog setup + import 30 posts from WDOnlines

### Phase 5 — GHL Integration
- Lead capture webhook to GHL
- Blog post sync script
- WhatsApp automation flows
