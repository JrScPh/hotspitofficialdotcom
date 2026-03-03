# Hot Spit — Band Website

A mobile-first, lightweight static website built from scratch in vanilla HTML, CSS, and JavaScript — no frameworks, no dependencies, no bloat.

The project was motivated by a real UX problem: local bands typically either overwhelm visitors with link aggregators (option paralysis) or point to a single platform like Spotify (too little context). This site is designed as a focused hub that loads fast on legacy and low-end mobile devices while giving visitors everything they need in one place — music, shows, social links, and press info.

---

## Problem Solved

Most local band web presences fall into one of two failure modes:

- **Too much:** Link aggregators like Linktree dump a wall of options on a distracted mobile user
- **Too little:** A single Spotify or Instagram link provides no narrative or context

This site is a purpose-built middle ground — a mini EPK and discovery page optimized for the doomscrolling attention span.

---

## Technical Approach

- **Zero frameworks** — pure HTML, CSS, and JavaScript only
- **Mobile-first layout** — designed for small screens first, scales up naturally
- **Legacy device optimization** — minimal asset weight, no render-blocking resources
- **Cache busting via version propagation** — a single `SITE_VERSION` constant appended as a query parameter to all versioned assets at runtime, avoiding stale cache issues without a build tool
- **Lazy asset loading** — images and scripts use `data-src` attributes resolved at runtime to defer loading
- **Modular JS** — shows and social icons are driven by JS modules (`UpcomingShows.js`, `Icons.js`) keeping the HTML clean and data easy to update
- **SEO and structured data** — Open Graph, Twitter Card, and Schema.org `MusicGroup` markup included for discoverability

---

## Structure

```
/
├── index.html
├── css/
│   └── styles.css
├── js/
│   ├── UpcomingShows.js
│   └── Icons.js
└── assets/
    └── (images)
```

---

## Running Locally

No build step or server required — works with any static host or locally in a browser.

```bash
git clone https://github.com/yourusername/hotspit-website.git
cd hotspit-website
open index.html
```

---

## Live Site

[hotspitofficial.com](https://hotspitofficial.com)
