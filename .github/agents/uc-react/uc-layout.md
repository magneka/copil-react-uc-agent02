# Layout Specification

Modeled after the design of [uc.no](https://www.uc.no) — a clean, warm, professional look with an earthy/olive-green color palette, generous whitespace, and the Montserrat font throughout.

> **Important**: Follow every value in this spec exactly. Do not improvise sizes, colors, or spacing. The CSS custom properties, font sizes, breakpoints, and class names listed here must be used verbatim so every generated project looks identical.

---

## Color Palette (CSS Custom Properties)

Define these on `:root` in `App.css`:

```css
:root {
  --color-bg: #fffff2;            /* Page background (warm cream) */
  --color-bg-card: #f7f2e6;       /* Card / section background (desert air) */
  --color-bg-sunshine: #fff1a9;   /* Yellow card background (industry cards) */
  --color-bg-spring-light: #e5efca; /* Light green accent */
  --color-bg-air-green: #f0f5df;  /* Very light green accent */
  --color-text: #232322;          /* Body text (near black) */
  --color-text-dark-green: #262c03; /* Header / dark text */
  --color-heading: #748849;       /* Headings (olive green) */
  --color-link: #748849;          /* Link text */
  --color-link-hover: #405b06;    /* Link hover (darker olive) */
  --color-footer-bg: #262c03;     /* Footer background (very dark green) */
  --color-footer-text: #f5f0f6;   /* Footer text (light gray) */
  --color-accent: #a9c273;        /* CTA buttons / active underline (mossy green) */
  --color-bg-accent: #f2e1b9;     /* Feature / story panel background (warm desert) */
}
```

---

## Typography

### Font

Use **Montserrat** everywhere — headings, body, nav, buttons. No serif fonts.

Import in `index.html` inside `<head>`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

Font stack: `'Montserrat', 'Segoe UI', Arial, sans-serif`

### Font Sizes — Responsive Breakpoints

All headings use `line-height: 1.25`. Body uses `line-height: 1.5`.

| Element | Base (<640px) | sm (≥640px) | xl (≥1280px) | Weight |
|---------|---------------|-------------|--------------|--------|
| h1      | 2rem          | 2.5rem      | 3rem         | 700    |
| h2      | 1.75rem       | 2rem        | 2.5rem       | 700    |
| h3      | 1.25rem       | 1.5rem      | 1.75rem      | 600    |
| body    | 1rem          | 1rem        | 1.125rem     | 400    |

### Hero-Specific Sizes

The hero section `h1` uses larger sizes than the global `h1`:

| Element      | Base    | sm (≥640px) | xl (≥1280px) |
|--------------|---------|-------------|--------------|
| `.hero h1`   | 2rem    | 2.5rem      | 3.75rem      |
| `.hero p`    | 1.125rem| 1.25rem     | 1.25rem      |

### Section Description Text

Paragraphs directly inside `.service-cards`, `.industry-grid`, and similar sections use `font-size: 1.125rem; line-height: 1.5`.

---

## Page Layout

Vertical stack: **Header → Main Content → Footer**. All three render on every route.

### Content Wrapper

All page sections use a `.content-wrapper` class:

```css
.content-wrapper {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 1rem;
}
@media (min-width: 768px)  { .content-wrapper { padding: 0 2rem; } }
@media (min-width: 1024px) { .content-wrapper { padding: 0 6rem; } }
```

### Section Spacing

```css
.section {
  padding-top: 4rem;
  padding-bottom: 4rem;
}
```

> **Critical**: Always use **longhand** `padding-top` / `padding-bottom` for section and hero vertical padding. Never use the shorthand `padding: 4rem 0` because it zeroes out the horizontal padding set by `.content-wrapper`, breaking left-alignment.

### Painted Cards (background sections)

Sections with their own background color and padding (`.service-cards`, `.contact-card`) must be **nested inside** a `content-wrapper` div — do NOT put both classes on the same element:

```tsx
{/* CORRECT — nested */}
<div className="content-wrapper section">
  <section className="service-cards">...</section>
</div>

{/* WRONG — padding conflict */}
<section className="service-cards content-wrapper section">...</section>
```

Unpainted sections (hero, industry-grid, cta-banner) can use `content-wrapper` directly on the `<section>` element.

### File Structure

```
src/
  App.tsx              — BrowserRouter + Routes + MainLayout
  App.css              — ALL styles (single file, CSS custom properties)
  main.tsx             — ReactDOM.createRoot, imports App only
  components/
    Header.tsx
    Footer.tsx
    sections/
      HeroSection.tsx
      ServiceCardsSection.tsx
      IndustryGridSection.tsx
      CtaBannerSection.tsx
      ContactCardSection.tsx
      FeatureStoryCard.tsx
      CaseStudyCard.tsx
      ValuesGridSection.tsx
      AccordionSection.tsx
  layouts/
    MainLayout.tsx     — Header + <Outlet /> + Footer
  pages/
    Home.tsx           — Composes section components with content
```

---

## Header

The header is **not** sticky. It uses the SVG logo file (`/images/ulriken-logo.svg`), not rendered text.

### Structure (Header.tsx)

```tsx
<header className="site-header">
  <div className="content-wrapper">
    <Link to="/" className="site-header__brand" aria-label="Ulriken — hjem">
      <img src="/images/ulriken-logo.svg" alt="Ulriken" className="site-header__logo" />
    </Link>
    <nav>
      <ul className="site-header__nav">
        <li><NavLink to="/" end><span>Link text</span></NavLink></li>
        <!-- more nav items, each with <span> wrapper inside -->
      </ul>
    </nav>
  </div>
</header>
```

### CSS (exact values)

```css
.site-header {
  background-color: var(--color-bg);
  width: 100%;
  color: var(--color-text-dark-green);
}

.site-header .content-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 1.5rem;
  padding-bottom: 2.25rem;
  margin-bottom: 1rem;
}
@media (min-width: 768px) {
  .site-header .content-wrapper {
    padding-top: 4rem;
    margin-bottom: 2.25rem;
  }
}

.site-header__brand {
  display: inline-flex;
  text-decoration: none;
  color: var(--color-text-dark-green);
  flex-shrink: 0;
}

.site-header__logo {
  height: 16px; width: auto;
}
@media (min-width: 768px) {
  .site-header__logo { height: 30px; }
}

.site-header__nav {
  display: flex;
  gap: 2rem;
  list-style: none;
}

.site-header__nav a {
  font-family: 'Montserrat', 'Segoe UI', Arial, sans-serif;
  font-size: 1rem;
  font-weight: 300;
  text-decoration: none;
  color: var(--color-text-dark-green);
  display: flex;
  align-items: center;
}
@media (min-width: 768px) {
  .site-header__nav a { font-size: 1.125rem; }
}

/* Active link: semibold with mossy-green bottom border */
.site-header__nav a span {
  padding-block: 2px;
  border-bottom: 2px solid transparent;
  transition: border-color 0.2s ease;
}
.site-header__nav a:hover span {
  border-bottom-color: var(--color-accent);
}
.site-header__nav a.active { font-weight: 600; }
.site-header__nav a.active span {
  border-bottom: 2px solid var(--color-accent);
}
```

---

## Footer

Full-width dark green background.

### Structure

- **Top row** (flex, space-between):
  - Left: "Kontakt oss →" link, company name, address
  - Right: Social links (Facebook, LinkedIn) with `↗` icon
- **Bottom row**: Policy / legal links, smaller font, separated by a thin border-top.

### CSS (exact values)

```css
.site-footer {
  background-color: var(--color-footer-bg);
  color: var(--color-footer-text);
  margin-top: 4rem;
}
.site-footer .content-wrapper {
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
}
.footer-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 2rem;
}
.footer-contact a, .footer-social a {
  color: var(--color-footer-text);
  text-decoration: none;
}
.footer-contact a:hover, .footer-social a:hover {
  text-decoration: underline;
}
.footer-contact-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;
  margin-bottom: 1rem;
}
.footer-address { font-size: 0.9rem; line-height: 1.6; }
.footer-social {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: flex-end;
}
.footer-bottom {
  display: flex;
  justify-content: space-between;
  border-top: 1px solid rgba(245, 241, 230, 0.2);
  padding-top: 1.25rem;
  font-size: 0.85rem;
}
.footer-bottom a {
  color: var(--color-footer-text);
  text-decoration: underline;
}
```

---

## Section Components

All section components live in `src/components/sections/`. Each accepts typed `Readonly<Props>`.

### 1. HeroSection.tsx

Two-column layout — text left (~50%), image right (~50%).

```css
.hero {
  display: flex;
  align-items: center;
  gap: 3rem;
  padding-top: 4rem;
  padding-bottom: 4rem;
}
.hero__text { flex: 0 0 50%; }
.hero__text h1 { font-size: 2rem; margin-bottom: 1rem; }
@media (min-width: 640px)  { .hero__text h1 { font-size: 2.5rem; } }
@media (min-width: 1280px) { .hero__text h1 { font-size: 3.75rem; } }
.hero__text p { font-size: 1.125rem; line-height: 1.5; margin-bottom: 1.5rem; }
@media (min-width: 640px)  { .hero__text p { font-size: 1.25rem; } }
.hero__image { flex: 0 0 50%; }
.hero__image img { width: 100%; height: auto; }
.cta-link {
  display: inline-flex; align-items: center; gap: 0.5rem;
  font-size: 1.125rem; font-weight: 500; text-decoration: underline;
}
```

**Props**: `heading`, `body`, `ctaText`, `ctaLink`, `imageSrc?`, `imageAlt?`

---

### 2. ServiceCardsSection.tsx

Card wrapper with icon grid. **Nest inside** a `content-wrapper` div (see Painted Cards rule above).

```tsx
<div className="content-wrapper section">
  <section className="service-cards">...</section>
</div>
```

```css
.service-cards {
  background-color: var(--color-bg-card);
  border-radius: 1rem;
  padding: 2.5rem;
}
.service-cards > p { font-size: 1.125rem; line-height: 1.5; margin-bottom: 2rem; }
.service-cards__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 2rem;
  text-align: center;
}
.service-card { display: flex; flex-direction: column; align-items: center; gap: 0.75rem; }
.service-card img { width: 72px; height: 72px; }
.service-card h3 { font-size: 1.125rem; font-weight: 600; }
```

**Props**: `heading`, `description`, `services: { icon: string; label: string }[]`

---

### 3. IndustryGridSection.tsx

Grid of text cards with **yellow/sunshine** background.

```css
.industry-grid > p { font-size: 1.125rem; line-height: 1.5; margin-bottom: 2rem; }
.industry-grid__cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
}
.industry-card {
  background-color: var(--color-bg-sunshine);   /* #fff1a9 — yellow */
  border-radius: 0.75rem;
  padding: 1.5rem;
}
```

**Props**: `heading`, `intro`, `industries: { title: string; description: string | ReactNode }[]`

---

### 4. CtaBannerSection.tsx

Simple CTA with pill button.

```css
.btn-pill {
  display: inline-flex; align-items: center; gap: 0.5rem;
  background-color: var(--color-accent); color: #fff;
  padding: 0.75rem 1.75rem; border-radius: 999px; border: none;
  font-size: 1.125rem; font-weight: 500; text-decoration: none; cursor: pointer;
  transition: background-color 0.2s ease;
}
.btn-pill:hover { background-color: #748849; color: #fff; }
```

**Props**: `heading`, `body`, `ctaText`, `ctaLink`

---

### 5. ContactCardSection.tsx

Card with team member grid. **Nest inside** a `content-wrapper` div (see Painted Cards rule above).

```tsx
<div className="content-wrapper section">
  <section className="contact-card">...</section>
</div>
```

```css
.contact-card {
  background-color: var(--color-bg-card);
  border-radius: 1rem;
  padding: 2.5rem;
}
.contact-card__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}
.person-card__photo {
  width: 150px; height: 150px;
  border-radius: 50%; object-fit: cover; margin-bottom: 0.75rem;
}
.person-card__name {
  font-weight: 500;
  display: inline-flex; align-items: center; gap: 0.35rem;
}
.person-card__title { font-size: 0.9rem; margin-bottom: 0.5rem; }
.person-card a { font-size: 0.9rem; }
```

**Props**: `heading`, `description`, `people: { name, profileLink, title, imageSrc, email, phone }[]`

---

### 6. FeatureStoryCard.tsx

Two-column: image + colored panel.

```css
.feature-story { display: flex; border-radius: 1rem; overflow: hidden; }
.feature-story--image-right { flex-direction: row-reverse; }
.feature-story__image { flex: 0 0 40%; }
.feature-story__image img { width: 100%; height: 100%; object-fit: cover; }
.feature-story__text {
  flex: 0 0 60%;
  background-color: var(--color-bg-accent);
  padding: 2.5rem;
  display: flex; flex-direction: column; justify-content: center;
}
```

**Props**: `imageSrc`, `imageAlt`, `heading`, `body`, `ctaText`, `ctaLink`, `imagePosition?: 'left' | 'right'`

---

### 7. CaseStudyCard.tsx

Overlapping text panel + image.

```css
.case-study { display: flex; align-items: center; position: relative; }
.case-study--text-right { flex-direction: row-reverse; }
.case-study__panel {
  flex: 0 0 60%;
  background-color: var(--color-bg-card);
  border-radius: 1rem;
  padding: 2rem 2.5rem;
  position: relative; z-index: 1;
}
.case-study__image {
  flex: 0 0 45%;
  margin-left: -2rem;
  position: relative; z-index: 2;
}
.case-study--text-right .case-study__image {
  margin-left: 0; margin-right: -2rem;
}
.case-study__image img { width: 100%; border-radius: 0.75rem; object-fit: cover; }
```

**Props**: `imageSrc`, `imageAlt`, `clientName`, `description`, `ctaText`, `ctaLink`, `direction?: 'text-left' | 'text-right'`

---

### 8. ValuesGridSection.tsx

3-column grid of text-only value cards.

```css
.values-grid__cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem; margin-bottom: 1.5rem;
}
.value-card {
  background-color: var(--color-bg-card);
  border-radius: 0.75rem;
  padding: 1.5rem 2rem;
}
```

**Props**: `heading`, `values: { title, description }[]`, `ctaText?`, `ctaLink?`

---

### 9. AccordionSection.tsx

Expandable list with chevron toggle and smooth `max-height` animation.

```css
.accordion__item { border-bottom: 1px solid var(--color-bg-card); }
.accordion__trigger {
  width: 100%; display: flex; justify-content: space-between; align-items: center;
  padding: 1rem 0; background: none; border: none;
  font-family: 'Montserrat', 'Segoe UI', Arial, sans-serif;
  font-size: 1rem; color: var(--color-text); cursor: pointer;
}
.accordion__content { overflow: hidden; max-height: 0; transition: max-height 0.3s ease; }
.accordion__content--open { max-height: 500px; padding-bottom: 1rem; }
```

**Props**: `items: { label, content: string | ReactNode }[]`

---

## Responsive Breakpoints

| Name | Min-width | Usage |
|------|-----------|-------|
| sm   | 640px     | Font size bumps |
| md   | 768px     | Header padding, grid → stack |
| lg   | 1024px    | Content wrapper `padding: 0 6rem` |
| xl   | 1280px    | Largest font sizes, body 1.125rem |

### Mobile (< 768px)

Stack all multi-column layouts to single column:
- Hero, feature story, case study → `flex-direction: column`
- Industry / contact / values grids → `grid-template-columns: 1fr`
- Footer → single column

---

## Styling Rules

- **Single plain CSS file** `src/App.css` — no CSS modules, Sass, Tailwind, styled-components.
- Remove any extra `.css` files from the Vite template (e.g. `src/index.css`).
- Import `App.css` once in `App.tsx`.
- Links: underline by default, darker shade on hover.
- Buttons/CTAs: pill shape, `var(--color-accent)` bg, white text.
- Profile photos: `border-radius: 50%`.
- No box-shadows — rely on background color contrast and whitespace.
- Transitions: `0.2s ease` on interactive elements.

---

## Assets

The agent's `images/` folder contains all required image files. Copy every file to `public/images/` in the scaffolded project. Components reference these via `/images/<filename>`.

| File | Used by |
|------|---------|
| `ulriken-logo.svg` | Header (brand logo) |
| `Illustrasjonseksempel.svg` | HeroSection (illustration) |
| `Group-9741.svg` | ServiceCardsSection (BI icon) |
| `Group-9742.svg` | ServiceCardsSection (Fullstack icon) |
| `Group-9750.svg` | ServiceCardsSection (App icon) |
| `Frame-9745.svg` | ServiceCardsSection (Cloud icon) |
| `Group-9748.svg` | ServiceCardsSection (PM icon) |
| `*.webp` | ContactCardSection (employee photos) |
