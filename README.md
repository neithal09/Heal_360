# Heal360 Wellness — Conversion Landing Page v2

> **Brand-aligned redesign.** Deep plum/magenta brand palette, no nav bar, video hero, animated CTAs, emotional storytelling.

---

## 🌸 Project Overview

**Client:** Dr. Tahera Khaledi — Heal360 Wellness  
**Goal:** Increase conversion from <1% → 3–8% via trust-first, brand-consistent funnel  
**Version:** v2 — Full brand redesign from user feedback  
**Primary Brand Color:** `#8B1A5C` (Deep Plum/Magenta, extracted from logo)

---

## ✅ Completed Features

### Page Structure
| Section | Description |
|---------|-------------|
| **Hero** | No nav bar. Brand logo strip. Strong headline with italic. Video thumbnail with play animation. 3 animated CTA buttons (Reserve Spot / Free Discovery Call / Wellness Assessment). Trust row. Floating stat badges. |
| **Who It's For** | 5-item listical format with check icons. Sticky left header on desktop. Left-border hover animation. |
| **How It Works** | 4 steps on brand gradient background. Emotional endpoint "Welcome Your Baby." Connectors + refund note. |
| **Why Heal360** | 3 pillar cards (featured card). Founder block with spinning ring animation. |
| **Don't Wait** | Emotional urgency band — "Don't wait any longer to start your family." |
| **Testimonials** | 6 formatted cards in 3-column grid. No screenshots. |
| **FAQ** | 7 questions. Compact accordion, no excess spacing. |
| **Footer** | Brand logo, quick links, social links, WhatsApp CTA (cushioned, bottom). |
| **Sticky CTA** | Mobile-only. Appears after 250px scroll. Book + WhatsApp side by side. |

### Technical
- ✅ Brand color system (`#8B1A5C` palette throughout)
- ✅ Local logo saved at `images/logo.png` (no external dependency)
- ✅ Video thumbnail with animated play button ring
- ✅ 3 animated CTA button styles (primary, outlined, soft)
- ✅ Scroll reveal (IntersectionObserver, respects reduced-motion)
- ✅ FAQ accordion (accessible, ARIA)
- ✅ UTM parameter persistence and booking URL builder
- ✅ Tracking scaffolding (GA4 + Meta Pixel ready)
- ✅ Zero console errors

---

## 📁 File Structure

```
/
├── index.html
├── images/
│   └── logo.png        ← Heal360 Wellness brand logo (local)
├── css/
│   └── style.css       ← Full brand CSS (CSS variables, mobile-first)
├── js/
│   └── main.js         ← All JS (video, FAQ, sticky, tracking, CTAs)
└── README.md
```

---

## ⚠️ 3 Things to Set Before Going Live

### 1. `BOOKING_URL` in `js/main.js` (line ~29)
```javascript
const BOOKING_URL = '#'; // ← Replace with actual booking page
```

### 2. WhatsApp Number
Replace `919XXXXXXXXX` in `index.html` (2 occurrences) with real WhatsApp number.

### 3. Analytics Pixels
Replace the two placeholder comments in `<head>`:
- `<!-- REPLACE_WITH_META_PIXEL_CODE -->`
- `<!-- REPLACE_WITH_GA4_CODE -->`

---

## 🎨 Brand System

| Token | Hex | Usage |
|-------|-----|-------|
| `--brand` | `#8B1A5C` | Buttons, icons, accents |
| `--brand-dark` | `#6B1347` | Hover states |
| `--brand-deeper` | `#4E0D35` | Hero gradient dark |
| `--brand-light` | `#f7e8f0` | Badges, backgrounds |
| `--rose` | `#C9637A` | Gradient accents |
| `--wa` | `#25D366` | WhatsApp button |

---

## 🔗 Section Anchors

| Anchor | Section |
|--------|---------|
| `#hero` | Hero |
| `#who-its-for` | Who It's For |
| `#how-it-works` | How It Works |
| `#why-us` | Why Heal360 |
| `#testimonials` | Testimonials |
| `#faq` | FAQ |
| `#footer` | Footer / WhatsApp |

---

## 📈 Tracking Events

| Event | Trigger |
|-------|---------|
| `PageView` | On load |
| `CTA_Click_BookAppointment` | Any booking CTA click |
| `Booking_Start` | Booking redirect initiated |
| `CTA_Click_WhatsApp` | WhatsApp button |
| `Video_Play` | Play button clicked |

---

*Built for Heal360 Wellness · Dr. Tahera Khaledi · v2 Brand Redesign*
