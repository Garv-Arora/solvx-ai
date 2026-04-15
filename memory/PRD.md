# SolvX.AI Landing Page — Product Requirements Document

## Problem Statement
Build a single-page, conversion-optimized landing page for "SolvX.AI", a done-for-you automation & internal tools agency. Target audience: digital agencies, real estate, lead gen, and SaaS. Goal: move visitors to book a strategy call in under 90 seconds.

## Brand Rules
- **Name**: SolvX.AI
- **CTA Link**: https://cal.com/solvx-ai/15min
- **NO** social media links
- **NO** email capture section
- **NO** exact pricing values (just "$0")

## Core Sections
1. Hero (centered headline + subheadline, inline stats, capability tags)
2. Problem (pain points list)
3. Solutions (6 service cards)
4. How It Works (3-step process)
5. Proof (4 project case study cards — placeholder data)
6. Offer (value stack — renamed from "Pricing")
7. CTA (final conversion block)
8. Footer

## Tech Stack
- React (CRA), Tailwind CSS, Framer Motion
- Fonts: Bebas Neue (condensed headings), DM Sans (body)
- Color accent: #C8814A (copper/bronze)
- Dark/light theme via ThemeContext

## Design Constraints
- All buttons: **strictly rectangular** (no rounded corners)
- All cards/badges: **sharp edges** (no rounded-lg/rounded-full)
- Typography: **large, bold, condensed** — headings "shout"
- Tight spacing: reduced section padding (py-12/py-16)
- Navbar: center-aligned tabs, rectangular active states

## Architecture
```
/app/frontend/src/
├── App.js
├── index.css (CSS vars for light/dark themes)
├── components/
│   ├── Navbar.js (scroll-merge logo, fading toggle)
│   ├── HeroSection.js (centered layout, inline stats)
│   ├── ProblemSection.js
│   ├── SolutionsSection.js
│   ├── HowItWorksSection.js
│   ├── ProofSection.js
│   ├── OfferSection.js (renamed from Pricing)
│   ├── CTASection.js
│   ├── Footer.js
│   └── ThemeContext.js
```

## Completed Features (Feb 2026)
- [x] Full landing page with all 8 sections
- [x] Dark/light theme toggle
- [x] Scroll-triggered Framer Motion animations
- [x] Responsive mobile layout with hamburger menu
- [x] Navbar: Logo merges into nav on scroll (smooth width animation)
- [x] Navbar: Theme toggle fades out on scroll (stays at top only)
- [x] Navbar: "Pricing" renamed to "Offer"
- [x] Hero: Centered heading & subheadline
- [x] Hero: Stats displayed inline (no box container)
- [x] All buttons rectangular, all cards sharp-edged
- [x] Typography boosted across all sections
- [x] Section spacing tightened to reduce dead space
- [x] All CTAs link to cal.com/solvx-ai/15min
- [x] Testing: 31/31 frontend tests passed (iteration 3)

## Backlog
- None (all requirements fulfilled)
