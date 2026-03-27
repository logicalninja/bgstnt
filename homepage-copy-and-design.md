# BGS Travel and Tourism — Homepage Copy & Design Spec
**Version 1.0** | Platform: Go High Level | Last Updated: 2026-03-24

---

## Design System

| Element | Value |
|---|---|
| Primary Color | `#0D1B2A` — Deep Navy |
| Accent / CTA | `#C9972C` — Gold Amber |
| Background | `#FAF7F2` — Warm White |
| Section Alt BG | `#F0EDE8` — Warm Sand |
| Dark Section BG | `#0D1B2A` — Deep Navy |
| Earth Section BG | `#1A1209` — Deep Earth (Africa section) |
| Text Primary | `#0D1B2A` — Deep Navy |
| Text Muted | `#6B7280` — Cool Grey |
| Star / Rating Color | `#F59E0B` — Amber |
| WhatsApp CTA Color | `#25D366` — WhatsApp Green |
| Heading Font | Cormorant (Google Fonts — weights 400, 500, 600, 700) |
| Body Font | Montserrat (Google Fonts — weights 300, 400, 500, 600) |
| Button Radius | 4px (slightly rounded — not pill, not sharp) |
| Card Radius | 8px |
| Max Content Width | 1280px |
| Section Vertical Padding | 80px desktop / 48px mobile |

**Google Fonts Import:**
```
@import url('https://fonts.googleapis.com/css2?family=Cormorant:wght@400;500;600;700&family=Montserrat:wght@300;400;500;600;700&display=swap');
```

---

## SECTION 1 — Navigation Bar

**Design Spec:**
- Background: `#0D1B2A` (deep navy), full width, sticky on scroll
- Height: 72px desktop / 60px mobile
- On scroll: background becomes `#0D1B2A` with `box-shadow: 0 2px 20px rgba(0,0,0,0.3)`
- Logo: Left-aligned. White version of BGS Travel logo.
- Nav links: Montserrat 500, 14px, `#FFFFFF` with 80% opacity on default, 100% on hover
- Mega-menu trigger: "Destinations" and "Packages" show dropdown arrow
- CTA Button: Background `#C9972C` (gold), text `#0D1B2A` (navy), Montserrat 600, 14px, padding 12px 24px, radius 4px

**Nav Link Labels (left to right):**
```
Destinations  |  Packages  |  Activities  |  Blog  |  About  |  Contact
```

**CTA Button Text:**
```
Book Now
```

**Mobile Nav:**
- Hamburger icon (right side), logo centered
- Full-screen dark overlay menu
- Accordion expand for Destinations and Packages
- Gold "Book Now" button pinned to bottom of drawer, full width

---

## SECTION 2 — Hero

**Design Spec:**
- Full viewport height (100vh)
- Background: Autoplay, muted, looping video — Dubai aerial at golden hour (Burj Khalifa, desert dunes, or Marina skyline). Fallback: high-resolution photo.
- Video overlay: `linear-gradient(to bottom, rgba(13,27,42,0.3) 0%, rgba(13,27,42,0.75) 60%, rgba(13,27,42,0.95) 100%)`
- Content: Vertically centered, left-aligned on desktop / centered on mobile
- Content max-width: 760px

**Pre-Headline (eyebrow text):**
> Font: Montserrat 500, 13px, letter-spacing 3px, uppercase, color `#C9972C` (gold)
```
DUBAI'S TRUSTED TRAVEL COMPANY
```

**Main Headline:**
> Font: Cormorant 700, 72px desktop / 48px tablet / 36px mobile, color `#FFFFFF`, line-height 1.1
```
Extraordinary Trips.
Crafted for You.
```

**Subheadline:**
> Font: Montserrat 300, 20px desktop / 17px mobile, color `rgba(255,255,255,0.85)`, line-height 1.6, max-width 560px
```
From Dubai's iconic desert safaris to African safaris, cultural journeys
across Asia, and beyond — we plan every detail so you experience every moment.
```

**Search Bar:**
> White card, border-radius 8px, padding 8px, `box-shadow: 0 8px 40px rgba(0,0,0,0.25)`
> On mobile: stacks to single column with "Search" button full width below

| Field | Placeholder |
|---|---|
| Where to? (dropdown) | Where would you like to go? |
| When? (date picker) | Select travel month |
| Travellers (number) | 2 Adults |
| [SEARCH PACKAGES] button | Gold background `#C9972C`, navy text `#0D1B2A`, Montserrat 600 |

**Quick-Access Pills** (below search bar):
> Small pill buttons, white/10% background, white text, border 1px white/30%, Montserrat 500 12px
```
Desert Safari   Dhow Cruise   African Safari   Luxury Dubai   View All Experiences →
```

**Design note:** Use subtle parallax scroll effect on the background video/image (moves slower than content on scroll).

---

## SECTION 3 — Trust Bar

**Design Spec:**
- Background: `#FAF7F2` (warm white)
- Full width, no top/bottom padding — tight strip ~80px tall
- Divider lines between stats (1px `#E5E0D8`)
- Centered content, max-width 1100px

**Headline:** *(none — stats speak for themselves)*

**5 Stats (displayed horizontally on desktop, 2x grid on mobile):**

| Icon (SVG) | Stat | Label |
|---|---|---|
| Users/people icon | 10,000+ | Happy Travellers |
| Globe icon | 15 | Destinations Worldwide |
| Calendar/shield icon | [X]+ Years | In Business |
| Star icon | 4.9 / 5 | Average Rating |
| Badge/check icon | Dubai Tourism | Licensed & Certified |

> Font: Stat number = Cormorant 700 28px `#0D1B2A` / Label = Montserrat 500 13px `#6B7280`
> Icons: 28px, color `#C9972C` (gold)

---

## SECTION 4 — Featured Destinations

**Design Spec:**
- Background: `#FAF7F2` (warm white)
- Section label above headline: Montserrat 500, 12px, uppercase, letter-spacing 3px, `#C9972C`
- Headline: Cormorant 700, 48px desktop / 36px mobile, `#0D1B2A`
- Card grid: 3 columns desktop / 2 columns tablet / 1 column mobile
- Cards: Image top (16:9 ratio), content below, hover = image zooms 5%, card shadow deepens
- Image overlay on hover: semi-transparent navy gradient + "Explore →" button appears

**Section Label:**
```
WHERE WILL YOU GO?
```

**Section Headline:**
```
Destinations Waiting for You
```

**Section Subheadline:**
> Font: Montserrat 400, 17px, `#6B7280`
```
One company. Fifteen extraordinary destinations. All handled with local expertise.
```

**6 Destination Cards:**

| # | Image Caption | Destination Name | Sub-label | Badge |
|---|---|---|---|---|
| 1 | Burj Khalifa / desert dunes | Dubai, UAE | "Where desert meets skyline" | `FLAGSHIP` (gold badge) |
| 2 | Serengeti herd | Tanzania | "Serengeti · Kilimanjaro · Zanzibar" | — |
| 3 | Table Mountain / Cape Town | South Africa | "Safari · Wine · Ocean" | `POPULAR` |
| 4 | Taj Mahal | India | "Heritage · Spirit · Colour" | — |
| 5 | Bali rice terraces | Indonesia | "Temples · Beaches · Serenity" | — |
| 6 | Bwindi gorilla | Uganda | "Gorilla Trekking · Pearl of Africa" | — |

**Card CTA on hover:**
```
Explore Packages →
```

**Below grid link:**
```
View All 15 Destinations →
```
> Montserrat 600 14px, `#C9972C`, underline on hover

---

## SECTION 5 — Top Dubai Experiences

**Design Spec:**
- Background: `#0D1B2A` (deep navy) — creates visual contrast break
- Section label: `#C9972C` (gold), uppercase, letter-spacing 3px
- Headline: Cormorant 700, 48px, `#FFFFFF`
- Subheadline: Montserrat 300, 18px, `rgba(255,255,255,0.75)`
- Cards: Circular images (120px diameter on desktop), white label below, price tag in gold
- Layout: 5-column grid desktop / horizontal scroll on mobile (snap points)
- Card hover: subtle scale 1.05 + white glow ring around circle

**Section Label:**
```
ONLY IN DUBAI
```

**Section Headline:**
```
Experiences You Won't Find Anywhere Else
```

**Section Subheadline:**
```
Handpicked for every type of traveller — from first-timers to seasoned explorers.
```

**10 Experience Cards:**

| # | Experience Name | From Price | Image Subject |
|---|---|---|---|
| 1 | Desert Safari | From AED [XXX] | Golden dunes at sunset |
| 2 | Dhow Cruise Dinner | From AED [XXX] | Lit dhow on Dubai Creek |
| 3 | Burj Khalifa | From AED [XXX] | Aerial view from the top |
| 4 | Dubai Frame | From AED [XXX] | Frame with old/new Dubai |
| 5 | Hot Air Balloon | From AED [XXX] | Balloon over desert at dawn |
| 6 | Dune Bashing | From AED [XXX] | 4x4 on red dunes |
| 7 | Luxury Yacht | From AED [XXX] | Yacht against Marina skyline |
| 8 | Dubai City Tour | From AED [XXX] | Collage of landmarks |
| 9 | Waterpark Day | From AED [XXX] | Atlantis water slide |
| 10 | Cultural Tour | From AED [XXX] | Gold Souk / Al Fahidi |

**CTA below cards:**
```
Explore All Dubai Experiences →
```

---

## SECTION 6 — Best-Selling Packages

**Design Spec:**
- Background: `#FAF7F2` (warm white)
- Filter tabs: Pill buttons, inactive = border `#E5E0D8` / active = `#0D1B2A` filled, white text
- Package cards: white background, 8px radius, subtle shadow, hover = shadow deepens
- Duration badge: top-left overlay on card image — navy background, white Montserrat 500 11px text
- Category tag: below image, `#C9972C` text, Montserrat 600 12px uppercase
- Price: Cormorant 600 22px, `#0D1B2A`
- Rating stars: `#F59E0B` amber

**Section Label:**
```
MOST BOOKED
```

**Section Headline:**
```
Our Best-Selling Packages
```

**Section Subheadline:**
```
Tried, tested, and loved by thousands of travellers.
```

**Filter Tab Labels:**
```
All  |  Dubai  |  Africa  |  Asia  |  Luxury  |  Family
```

**Package Card Structure (repeat for each):**

---

### Card 1 — Evening Desert Safari
- **Duration Badge:** Full Day
- **Category Tag:** DESERT SAFARI · DUBAI
- **Package Name:** Evening Desert Safari with BBQ Dinner
- **Rating:** ★★★★★ 4.9  *(142 reviews)*
- **Description:** Dune bashing, camel rides, sandboarding, traditional henna, and a lavish BBQ dinner under the stars.
- **Price:** From AED [XXX] / person
- **CTA Button:** View Package

---

### Card 2 — Dubai Dhow Cruise
- **Duration Badge:** Half Day
- **Category Tag:** WATER EXPERIENCE · DUBAI
- **Package Name:** Luxury Dhow Cruise Dinner on Dubai Creek
- **Rating:** ★★★★★ 4.8  *(98 reviews)*
- **Description:** Glide along historic Dubai Creek on a traditional wooden dhow. Live entertainment, unlimited buffet, and skyline views.
- **Price:** From AED [XXX] / person
- **CTA Button:** View Package

---

### Card 3 — Serengeti Safari
- **Duration Badge:** 7 Days
- **Category Tag:** SAFARI · TANZANIA
- **Package Name:** Classic Serengeti Safari & Zanzibar Extension
- **Rating:** ★★★★★ 5.0  *(34 reviews)*
- **Description:** Witness the Great Migration, track the Big Five, then unwind on Zanzibar's white-sand beaches. The ultimate Africa experience.
- **Price:** From USD [XXX] / person
- **CTA Button:** View Package

---

### Card 4 — Dubai Luxury Day
- **Duration Badge:** Full Day
- **Category Tag:** LUXURY · DUBAI
- **Package Name:** Private Dubai City Tour — Helicopter & Burj Khalifa
- **Rating:** ★★★★★ 5.0  *(21 reviews)*
- **Description:** Arrive in style. Private helicopter flight over the Palm, exclusive Burj Khalifa access, and a luxury lunch in Downtown Dubai.
- **Price:** From AED [XXX] / person
- **CTA Button:** View Package

---

### Card 5 — Uganda Gorilla Trek
- **Duration Badge:** 5 Days
- **Category Tag:** WILDLIFE · UGANDA
- **Package Name:** Bwindi Gorilla Trekking — Pearl of Africa
- **Rating:** ★★★★★ 4.9  *(19 reviews)*
- **Description:** A once-in-a-lifetime encounter with mountain gorillas deep in Bwindi Impenetrable Forest. Guided by certified trackers.
- **Price:** From USD [XXX] / person
- **CTA Button:** View Package

---

### Card 6 — Family Dubai Fun
- **Duration Badge:** Full Day
- **Category Tag:** FAMILY · DUBAI
- **Package Name:** Ultimate Dubai Family Day — Theme Parks & Desert
- **Rating:** ★★★★★ 4.7  *(77 reviews)*
- **Description:** The kids' dream day. Morning at Legoland or IMG Worlds, afternoon desert camel ride, evening Dhow Cruise with children's entertainment.
- **Price:** From AED [XXX] / person
- **CTA Button:** View Package

---

**Below cards CTA:**
> Primary button: `#0D1B2A` filled, white text
```
View All Packages
```

---

## SECTION 7 — Why Choose BGS Travel

**Design Spec:**
- Background: `#F0EDE8` (warm sand) — subtle break from white
- Two-column layout: USP grid left (60%), lifestyle image right (40%) — desktop only
- Mobile: single column, image moves below content
- Icon color: `#C9972C` (gold), 32px SVG icons
- Headline: Cormorant 700, 48px, `#0D1B2A`
- USP item headline: Montserrat 600, 16px, `#0D1B2A`
- USP item body: Montserrat 400, 15px, `#6B7280`, line-height 1.6

**Section Label:**
```
WHY BGS TRAVEL
```

**Section Headline:**
```
We Don't Just Book Trips.
We Build Experiences.
```

**Section Subheadline:**
```
There's no shortage of travel companies. Here's why thousands choose BGS.
```

**6 USP Items:**

---

**1. Born in Dubai, Built for the World**
> [Location pin icon]
We're not an app or a foreign aggregator. BGS Travel is headquartered in Dubai — we know every sand dune, every souk, and every shortcut. And with offices in 14 other countries, we bring the same on-the-ground expertise to every destination we sell.

---

**2. Tailor-Made from Day One**
> [Custom/design icon]
No two travellers are the same. Whether you want a private desert camp at sunrise or a family-friendly city tour, we craft your itinerary around you — not the other way around.

---

**3. 24/7 WhatsApp Support**
> [WhatsApp / chat icon]
Real people. Real answers. Day or night. Our team is available on WhatsApp before, during, and after your trip. Not a chatbot — an actual travel specialist who knows your booking.

---

**4. Local Offices. Not Local Agents.**
> [Globe / office icon]
In Tanzania, Uganda, South Africa, India, Indonesia, and beyond — we don't hand you off to third parties. Our own teams on the ground mean your trip runs exactly as planned.

---

**5. Best Price Guarantee**
> [Price tag / shield icon]
Found the same package cheaper elsewhere? We'll match it. No questions, no hidden conditions. We'd rather earn your trust than your first booking only.

---

**6. Fully Licensed & Accredited**
> [Badge / certificate icon]
BGS Travel holds a Dubai Tourism licence and operates in full compliance across all our destinations. You travel with complete peace of mind.

---

**Image (right column):**
> Suggest: Group of travellers on a dune at sunset, or family on safari with guide — authentic, not stock-looking. Warm tones to match section palette.

---

## SECTION 8 — Social Proof / Reviews

**Design Spec:**
- Background: `#FAF7F2` (warm white)
- Review cards: white bg, 8px radius, soft shadow, left-aligned content
- Stars: `#F59E0B` amber, 18px
- Reviewer name: Montserrat 600 15px `#0D1B2A`
- Reviewer details (country + trip): Montserrat 400 13px `#6B7280`
- Quote text: Cormorant 400 italic 20px `#0D1B2A`, line-height 1.6
- Desktop: 3 cards side by side / mobile: carousel with dots
- Below cards: Trust badge strip (Google / TripAdvisor / Trustpilot logos)

**Section Label:**
```
TRAVELLER STORIES
```

**Section Headline:**
```
Don't Take Our Word for It
```

**Section Subheadline:**
```
[X]+ reviews across Google, TripAdvisor, and Trustpilot. Here's what our travellers say.
```

**3 Testimonial Cards:**

---

**Review 1**
★★★★★
> "The evening desert safari was genuinely the highlight of our entire Dubai trip. BGS handled everything — pickup, the dune bashing, the BBQ dinner, even the camel rides for our kids. Not a single thing went wrong. Will be booking with them again for Tanzania next year."

**— Sarah M., United Kingdom**
*Evening Desert Safari, Dubai — January 2026*

---

**Review 2**
★★★★★
> "I've booked with a lot of travel companies over the years. BGS is different. They responded on WhatsApp within minutes, customised our Bwindi gorilla trek itinerary exactly how we wanted it, and their guide Francis was extraordinary. Worth every dirham."

**— Ahmed K., UAE**
*Gorilla Trekking, Uganda — November 2025*

---

**Review 3**
★★★★★
> "We used BGS for a family holiday — Dubai theme parks, desert evening, and a Dhow Cruise. With three kids under 10 that's no small task. They handled every detail. The kids still talk about the camels. Absolutely brilliant service."

**— Priya R., India**
*Family Dubai Package — December 2025*

---

**Trust Badge Row (below cards):**
```
[Google logo]  4.9★  [X] Reviews  |  [TripAdvisor logo]  Certificate of Excellence  |  [Trustpilot logo]  Excellent [X] Reviews
```

**CTA below badges:**
```
Read All Reviews →
```
> Montserrat 600 14px, `#C9972C`, links to Google Reviews

---

## SECTION 9 — Africa Safari Feature

**Design Spec:**
- Background: `#1A1209` (deep earth/dark brown) with a full-bleed background image (savannah at dusk, silhouetted acacia trees and wildlife) at ~20% opacity beneath the dark overlay
- Overlay: `rgba(26, 18, 9, 0.88)` — keeps image visible but text readable
- Section label: `#C9972C` (gold)
- Headline: Cormorant 700, 56px desktop / 38px mobile, `#FFFFFF`
- Subheadline: Montserrat 300, 18px, `rgba(255,255,255,0.80)`
- Destination cards: semi-transparent `rgba(255,255,255,0.06)` bg, border `1px rgba(255,255,255,0.12)`, hover = border becomes gold
- Card image: top, full width, 200px height, object-fit cover
- Card destination name: Cormorant 600, 24px, white
- Card tagline: Montserrat 400, 13px, `rgba(255,255,255,0.65)`
- Card "From $XXX" price: Montserrat 600, 14px, `#C9972C`

**Section Label:**
```
AFRICA COLLECTION
```

**Section Headline:**
```
Africa Awaits.
Where Will You Answer the Call?
```

**Section Subheadline:**
```
Seven extraordinary destinations. One company with offices on the ground.
From the Serengeti plains to Victoria Falls, from gorilla forests to hidden island beaches.
```

**3 Destination Spotlight Cards:**

---

**Card 1 — Tanzania**
*Image: Wildebeest crossing the Mara River or Kilimanjaro above clouds*
**Tanzania**
"The Complete Africa Experience"
Serengeti · Kilimanjaro · Zanzibar
From USD [XXX] / person
> [Explore Tanzania →]

---

**Card 2 — South Africa**
*Image: Lion at golden hour, Kruger / or Table Mountain panorama*
**South Africa**
"A World in One Country"
Kruger Safari · Cape Town · Garden Route
From USD [XXX] / person
> [Explore South Africa →]

---

**Card 3 — Uganda**
*Image: Silverback mountain gorilla close-up, Bwindi*
**Uganda**
"Pearl of Africa"
Gorilla Trekking · Bwindi Forest · Nile Source
From USD [XXX] / person
> [Explore Uganda →]

---

**Section CTA (below cards):**
> Outlined button — border `#C9972C`, text `#C9972C`, hover = filled gold background
```
Explore All 7 African Destinations →
```

---

## SECTION 10 — Latest Blog Posts

**Design Spec:**
- Background: `#FAF7F2` (warm white)
- Card image: top, 16:9 ratio, 8px top radius
- Category tag: Montserrat 600 11px uppercase, `#C9972C`, no background
- Post title: Cormorant 600 22px, `#0D1B2A`, hover = `#C9972C`
- Date + read time: Montserrat 400 12px, `#6B7280`
- Excerpt: Montserrat 400 14px, `#6B7280`, 2 lines max, line-height 1.6
- "Read Article →" link: Montserrat 600 13px, `#0D1B2A`, arrow nudges right on hover

**Section Label:**
```
TRAVEL INSPIRATION
```

**Section Headline:**
```
Guides, Tips & Stories from the Road
```

**3 Blog Cards (placeholder — replace with real posts):**

---

**Post 1**
*Category Tag:* DUBAI GUIDE
*Title:* The Ultimate Dubai Desert Safari Guide: Everything You Need to Know Before You Go
*Date:* March 2026 · 7 min read
*Excerpt:* Morning vs evening, private vs group, what to wear, what to expect — everything first-timers need covered in one guide.
*Link:* Read Article →

---

**Post 2**
*Category Tag:* AFRICA
*Title:* Tanzania Safari vs Kenya Safari: Which One Is Right for You?
*Date:* February 2026 · 9 min read
*Excerpt:* Both are world-class safari destinations. But they're very different experiences. Here's how to decide which one to book first.
*Link:* Read Article →

---

**Post 3**
*Category Tag:* INSIDER TIPS
*Title:* 10 Things Nobody Tells You About Visiting Dubai for the First Time
*Date:* January 2026 · 6 min read
*Excerpt:* From dress codes to tipping culture to the best time to visit the souks — the insider knowledge that makes your first trip genuinely great.
*Link:* Read Article →

---

**Below cards CTA:**
```
Visit Our Travel Blog →
```

---

## SECTION 11 — WhatsApp Lead Capture

**Design Spec:**
- Background: `#0D1B2A` (deep navy), full width
- Headline: Cormorant 700, 44px, `#FFFFFF`
- Subheadline: Montserrat 300, 18px, `rgba(255,255,255,0.80)`
- Form: Inline on desktop (fields side by side + button) / stacked on mobile
- Input fields: white bg, `#0D1B2A` text, border `rgba(255,255,255,0.2)`, focus border `#C9972C`
- Subscribe button: `#C9972C` gold bg, `#0D1B2A` navy text, Montserrat 700, hover = slightly darker gold
- Trust line below: Montserrat 400 12px, `rgba(255,255,255,0.50)`

**Section Headline:**
```
Get Exclusive Dubai Deals — Straight to Your WhatsApp.
```

**Section Subheadline:**
```
Join thousands of travellers receiving early-bird offers, flash deals,
and hidden gem itineraries every week. Zero spam. Unsubscribe any time.
```

**Form Fields:**
```
[First Name]    [WhatsApp Number (with +971 flag default)]    [Email Address (optional)]

[Get My Free Deals  →]
```

**Trust Line:**
```
Your details are safe with us. Dubai Tourism compliant. WhatsApp consent required.
```

**Small print below button:**
```
By subscribing you agree to receive marketing messages from BGS Travel & Tourism via WhatsApp and email. You can unsubscribe at any time.
```

---

## SECTION 12 — Partners & Accreditations

**Design Spec:**
- Background: `#F0EDE8` (warm sand)
- Label: Montserrat 500, 12px, uppercase, letter-spacing 3px, `#6B7280`, centered
- Logos: desaturated (greyscale), opacity 60%, hover = full colour + 100% opacity, transition 200ms
- Logo strip: horizontal flex row, centered, gap 48px desktop / scrollable on mobile

**Label:**
```
OUR TRUSTED PARTNERS & ACCREDITATIONS
```

**Logos to include:**
- Dubai Department of Economy and Tourism (DET) logo
- IATA logo
- ATOL *(if applicable — verify with client)*
- Partner airline logos *(e.g., Emirates, flydubai — verify partnerships)*
- Partner hotel group logos *(e.g., Jumeirah, Marriott — verify)*
- TripAdvisor logo

---

## SECTION 13 — Footer

**Design Spec:**
- Background: `#080F18` (very dark navy — slightly darker than primary navy)
- Divider line: `rgba(255,255,255,0.08)`
- Top section: 4-column grid desktop / 2-column tablet / 1-column mobile, padding-top 64px
- Bottom bar: `rgba(255,255,255,0.05)` background, 48px height, Montserrat 400 13px
- All footer text: `rgba(255,255,255,0.65)` default
- Link hover: `#C9972C` (gold)
- Section headings: Montserrat 600, 13px, uppercase, letter-spacing 2px, `rgba(255,255,255,0.40)`
- Social icons: 20px, white 70% opacity, hover = gold, transition 200ms

---

**Column 1 — About BGS**

```
[BGS Travel & Tourism Logo — white version]

Dubai's home-grown travel company,
crafting tailor-made trips to 15
destinations worldwide since [YEAR].

📍 [Office Address], Dubai, UAE
📞 [Phone Number]
📧 [Email Address]
💬 WhatsApp: [WhatsApp Number]

[Instagram icon]  [Facebook icon]  [TikTok icon]  [YouTube icon]  [LinkedIn icon]
```

---

**Column 2 — Destinations**

```
DESTINATIONS

UAE & Dubai
Tanzania
South Africa
Ethiopia
Uganda
Zambia
Malawi
Mozambique
India
Pakistan
Indonesia
Moldova
Panama
Germany
United Kingdom

→ View All Destinations
```

---

**Column 3 — Quick Links**

```
QUICK LINKS

All Packages
Activities
Blog & Travel Guides
About Us
Contact Us
Book Now
──────────────────
Privacy Policy
Terms & Conditions
Cookie Policy
Sitemap
```

---

**Column 4 — Stay Inspired**

```
STAY INSPIRED

Get weekly travel deals, destination
guides, and insider tips delivered
straight to your inbox.

[Email Address        ] [Subscribe]

Dubai Tourism Licence: [LICENSE NO]
```

---

**Footer Bottom Bar:**

```
© 2026 BGS Travel and Tourism LLC. All Rights Reserved.  |  Dubai, UAE  |  Designed with care for every traveller.
```

---

## EXIT-INTENT POPUP

*(Triggered when user moves cursor toward browser close / after 45 seconds on page)*

**Design Spec:**
- Modal overlay: `rgba(13,27,42,0.90)` full screen
- Card: white, 520px max-width, 8px radius, padding 48px
- Close button: top-right × icon, `#6B7280`
- Headline: Cormorant 700, 38px, `#0D1B2A`
- Subheadline: Montserrat 400, 16px, `#6B7280`
- CTA button: `#C9972C` gold, full width
- Image strip: Top of modal — 3 small destination images in a row (Dubai / Africa / Asia)

**Headline:**
```
Before You Go — Claim Your AED 200 Discount.
```

**Subheadline:**
```
Valid on any Dubai or international package. One-time offer for new customers.
No catch. Just great travel at a better price.
```

**Form Fields:**
```
[First Name]
[Email Address]
[WhatsApp Number — optional]
```

**CTA Button:**
```
Claim My AED 200 Discount →
```

**Below button:**
```
One per customer. Valid 30 days from sign-up. T&Cs apply.
```

**Skip link:**
```
No thanks, I'll pay full price →
```
> Montserrat 400 12px, `#6B7280`, slightly humorous — standard dark-pattern softener

---

## STICKY BOTTOM BAR (Mobile Only)

**Design Spec:**
- Fixed to bottom of viewport on mobile
- Background: `#0D1B2A` navy, height 60px
- Two buttons side by side:

```
[WhatsApp Us — green bg #25D366]   [Plan My Trip — gold bg #C9972C]
```

> Both: Montserrat 700 13px, full uppercase, flex 1

---

## PAGE META (SEO)

**Page Title:**
```
BGS Travel & Tourism | Dubai Tours, Safari Packages & Worldwide Trips
```

**Meta Description:**
```
Dubai's trusted travel company. Expert-crafted desert safaris, dhow cruises, African safaris, and tailor-made trips to 15 destinations worldwide. Get a free quote today.
```

**OG Image:**
> 1200×630px — Dubai skyline at golden hour with BGS Travel logo overlay and headline text

---

## IMPLEMENTATION NOTES FOR GHL

1. **Video Hero:** GHL supports background video in sections. Set to autoplay, muted, loop. Upload MP4 + WebM versions. Provide a static image fallback for mobile (video may not autoplay on iOS).

2. **Fonts:** Add Cormorant and Montserrat via GHL's custom CSS/head tracking code: paste the Google Fonts @import.

3. **Sticky Nav:** Use GHL's "sticky header" section setting. Add scroll behaviour via custom CSS class.

4. **Destination Cards hover effects:** Add via GHL custom CSS on card elements.

5. **Filter Tabs (Section 6):** GHL's native blog/listing filters can handle this if packages are set up as blog-style CMS entries with tags. Alternatively, use JavaScript injected via GHL's custom code block.

6. **Exit-Intent Popup:** Build as a GHL popup with "Exit intent" trigger setting. Form connects directly to CRM with `exit-intent` and `discount-offered` tags.

7. **Sticky Mobile Bottom Bar:** Add via custom HTML/CSS in GHL footer or as a separate sticky section with mobile-only visibility setting.

8. **WhatsApp CTAs:** Format all WhatsApp links as: `https://wa.me/[FULL_NUMBER_WITH_COUNTRY_CODE]?text=Hi%20BGS%20Travel%2C%20I%27d%20like%20to%20enquire%20about%20a%20trip`

9. **Trust Bar stats:** Hard-code these for now. Can be updated manually as numbers grow.

10. **Package cards in Section 6:** Build 6 individual card elements manually in GHL for the homepage. These are not dynamically pulled — they are static hero cards linking to individual package pages.
