# MSY Limo Service - Product Requirements Document

## Original Problem Statement
Redesign and fully upgrade the website https://msylimoservice.com/ to be highly professional, premium, and authoritative, with best-possible SEO optimization for a luxury limo / chauffeur service. The website must look like a well-established, high-end transportation company and be optimized to rank on Google, dominate local search, and convert visitors into calls and bookings. The branding and service area has since pivoted to a black/gold theme focused on the New Orleans, Louisiana area.

## Target Audience
- Travelers needing airport transportation (MSY Louis Armstrong Airport)
- Corporate clients requiring executive transportation
- Wedding parties seeking luxury limo services
- Event attendees needing special event transportation
- High-net-worth individuals seeking premium chauffeur services

## Core Requirements
1. **SEO & Technical:** Core Web Vitals, semantic HTML, proper heading hierarchy, SEO-optimized meta tags, internal linking, image optimization, Schema markup (LocalBusiness, Service, FAQ)
2. **Local SEO Focus:** New Orleans, Kenner, Metairie, and Greater Louisiana Area
3. **Site Structure:** Multi-page site with Homepage, Services (Airport, Corporate, Wedding), Fleet, About, FAQ, Contact
4. **Design & Branding:** High-end luxury black and gold aesthetic with booking widget
5. **Features:** AI-powered chatbot for customer assistance
6. **Conversion & Trust:** Prominent CTAs, comprehensive footer with NAP details, testimonials

---

## What's Been Implemented

### February 2026 - Session Updates

**SEO Fixes (Latest)**
- ✅ Created and deployed Apple Touch Icon (180x180px)
- ✅ Created favicon.ico and icon-192.png
- ✅ Added proper icon link tags to index.html
- ✅ Created `_redirects` file for www to non-www redirect (Netlify)
- ✅ Created `vercel.json` for www to non-www redirect (Vercel)
- ✅ Fixed backend API description (Maryland → New Orleans)

**Previous Session Work**
- ✅ Premium black/gold theme with New Orleans branding
- ✅ AI chatbot (OpenAI GPT-5.2) integrated
- ✅ Subtle video background on homepage hero
- ✅ Framer-motion animations across all pages
- ✅ Comprehensive SEO overhaul (sitemap.xml, robots.txt, 100+ internal links)
- ✅ All "Maryland/DC" references removed
- ✅ Schema.org LocalBusiness markup
- ✅ Limo Anywhere booking widget embedded
- ✅ Full suite of pages: Services, Fleet, About, FAQ, Contact

---

## Prioritized Backlog

### P0 - Critical (None currently)

### P1 - High Priority
- [ ] Add more high-quality pictures to all service pages
- [ ] Systematic image review across all content pages

### P2 - Medium Priority
- [ ] Create individual location pages (/areas/kenner, /areas/metairie, etc.)
- [ ] Add customer testimonials with photos
- [ ] Google Business Profile integration

### P3 - Low Priority / Future
- [ ] Refactor theme colors to CSS variables
- [ ] Add more animation polish
- [ ] Consider video testimonials

---

## Technical Architecture

```
/app
├── backend/
│   ├── server.py      # FastAPI with /api/contact and /api/chat
│   ├── .env
│   └── requirements.txt
└── frontend/
    ├── public/
    │   ├── index.html       # Main HTML with Schema.org & SEO
    │   ├── robots.txt       # Crawling rules
    │   ├── sitemap.xml      # Site map
    │   ├── _redirects       # Netlify redirects
    │   ├── apple-touch-icon.png
    │   ├── favicon.ico
    │   └── icon-192.png
    ├── vercel.json          # Vercel redirects
    ├── src/
    │   ├── components/      # Navigation, Footer, HeroSection, etc.
    │   ├── pages/           # Page components
    │   │   ├── services/    # AirportPage, CorporatePage, etc.
    │   │   └── ...
    │   ├── App.js
    │   └── index.css
    └── package.json
```

## Key Integrations
- **Limo Anywhere:** Booking widget via iframe
- **OpenAI GPT-5.2:** AI chatbot via emergentintegrations

## Known Limitations
- "Live Ride Tracking" is a static UI element (MOCKED)
- WWW redirect requires DNS/hosting provider configuration
