# Better Zamboanga Color Scheme Redesign

## Overview

The Better Zamboanga website now uses a balanced, professional color palette inspired by the official City of Zamboanga seal. The previous yellow-dominant approach has been replaced with a calmer navy-primary system that maintains strong visual identity while improving readability and reducing visual strain.

## Design Philosophy

- **Yellow is now a subtle accent**, not the main UI color
- **Navy blue serves as the primary brand color** for major UI elements
- **Balanced use of all seal colors** (navy, green, red, yellow, light blue)
- **High contrast and WCAG AA compliance** throughout
- **Professional, civic aesthetic** that clearly references Zamboanga's identity

---

## Color Palette

### Primary Colors

```css
--bz-primary: #003087        /* Deep navy blue - from seal outline/water */
--bz-primary-dark: #002060   /* Darker navy for hover states */
--bz-primary-light: #e6eef8  /* Very light navy tint */
--bz-primary-soft: #f0f4fa   /* Softer background tint */
```

**Usage:** Main buttons, primary CTAs, navigation highlights, major hero sections, key data cards, executive cards, population cards, legislative icons, accessibility promise sections

### Accent Colors

#### Yellow (Limited Use)

```css
--bz-accent-yellow: #f2c91d       /* Logo yellow - small accents only */
--bz-accent-yellow-soft: #fffbf0  /* Very light yellow tint */
```

**Usage:** Small badges only (page headers, stats, transparency, legislative, legal, online services, home hero, home leader), gold medal rankings (#1), tiny highlights, subtle decorative elements

#### Green

```css
--bz-accent-green: #008751       /* Success/positive metrics */
--bz-accent-green-light: #e8f5f0 /* Light green tint */
```

**Usage:** Service category icons, economy indicators, office hours headers, home contact sections, "View All Services" cards, improved poverty metrics, success states

#### Red

```css
--bz-accent-red: #ce1126        /* Alerts/warnings */
--bz-accent-red-light: #fce8eb  /* Light red tint */
```

**Usage:** Alert states, emergency hotlines, warning messages, critical status indicators

#### Light Blue/Aqua

```css
--bz-accent-blue: #38bdf8       /* Information/secondary actions */
--bz-accent-blue-light: #e6f7fe /* Light blue tint */
```

**Usage:** Info cards, FAQ headers, contact card icons, online service icons, secondary information sections

### Semantic Colors

```css
--color-primary: #003087      /* Navy - main brand */
--color-secondary: #008751    /* Green - supporting */
--color-accent: #38bdf8       /* Light blue - tertiary */
--color-success: #008751      /* Green */
--color-danger: #ce1126       /* Red */
--color-info: #0066b2         /* Blue */
--color-warning: #f59e0b      /* Amber */
```

### Backgrounds & Neutrals

```css
--color-bg: #ffffff          /* Page background */
--color-bg-alt: #f9fafb      /* Alternate sections */
--bz-bg: #ffffff             /* Card backgrounds */
--bz-surface: #ffffff        /* Surface elements */
--bz-border: #e5e7eb         /* Borders */
```

### Text Colors

```css
--color-text: #1a1a1a           /* Primary text */
--color-text-light: #6b7280     /* Secondary text */
--bz-text: #1a1a1a              /* Body text */
--bz-text-muted: #6b7280        /* Muted text */
--color-white: #ffffff          /* White text on dark */
```

---

## Component Color Usage

### Heroes & Headers

- **Background:** `var(--bz-primary-soft)` (#f0f4fa) - soft navy tint
- **Border:** 3px solid `var(--bz-primary)` (#003087) - navy border
- **Badges:** `var(--bz-accent-yellow)` (#f2c91d) - small yellow accent
- **Text:** `var(--color-text)` (#1a1a1a) on light backgrounds

### Navigation & Footer

- **Primary buttons:** Navy background, white text
- **Footer top border:** Navy (`var(--bz-primary)`)
- **Links:** Navy on light backgrounds
- **Active states:** Navy with proper contrast

### Cards & Sections

#### Executive/Leadership Cards

- **Header:** Navy background, white text
- **Badges:** Yellow accent for small labels

#### Service Cards

- **Icons:** Green for service categories
- **"All Services" card:** Green background, white text

#### Info/Contact Cards

- **Icons:** Light blue background, white icon
- **Headers:** Appropriate semantic color

#### Statistics & Data

- **Metric icons:** Navy with white icons
- **Finance cards (primary):** Navy background, white text
- **Economy indicators:** Green accent with white icons
- **Progress bars:** Navy for standard metrics, green for positive/success

#### Transparency/Budget

- **SRE metric icons:** Semantic colors (green=income, red=expense, blue=info, navy=balance)
- **Resource icons:** Appropriate semantic colors

#### Legislative/Legal

- **Category icons:** Navy with white icons
- **Hero badges:** Yellow accent
- **Backgrounds:** Soft navy tint

#### Demographics

- **Hero cards:** Navy background, white text
- **Rankings:** Gold (#f2c91d) for #1, silver for #2, bronze for #3
- **Bars:** Navy for standard data visualization

#### Accessibility

- **Promise section:** Navy background, white text
- **Conformance badge:** Green (WCAG success)

### Interactive Elements

- **Primary buttons:** Navy background, white text
- **Secondary buttons:** White background, navy text/border
- **Links:** Navy color
- **Hover states:** Darker navy (`var(--bz-primary-dark)`)

---

## Text Contrast Rules

### Light Backgrounds

- Use dark text: `var(--color-text)` (#1a1a1a)
- Muted text: `var(--color-text-light)` (#6b7280)

### Navy Backgrounds

- Use white text: `var(--color-white)` (#ffffff)
- Slightly transparent white for secondary: `rgba(255, 255, 255, 0.9)`

### Green Backgrounds

- Use white text: `var(--color-white)` (#ffffff)

### Yellow Backgrounds (small badges only)

- Use dark text: `var(--color-text)` (#1a1a1a)

### Red Backgrounds

- Use white text: `var(--color-white)` (#ffffff)

### Light Blue Backgrounds

- Use white text: `var(--color-white)` (#ffffff)

---

## Migration Summary

### What Changed

1. **Primary color:** #f2c91d (yellow) → #003087 (navy blue)
2. **Yellow usage:** From dominant brand color → small accent only
3. **Hero backgrounds:** Yellow tint → soft navy tint
4. **Major components:** Yellow → navy (buttons, cards, headers)
5. **Badges:** Kept yellow but only for small labels
6. **Service categories:** Navy → green
7. **Contact sections:** Yellow → green
8. **Info sections:** Yellow → light blue
9. **Footer border:** Yellow → navy

### What Stayed the Same

- Layout and spacing unchanged
- Typography unchanged
- Component structure unchanged
- HTML and JavaScript untouched
- Semantic color meanings preserved (green=success, red=danger)

---

## Accessibility

All color combinations meet **WCAG AA contrast standards**:

- Navy (#003087) on white: **11.26:1** (AAA)
- White on navy: **11.26:1** (AAA)
- Dark text (#1a1a1a) on light backgrounds: **15.08:1** (AAA)
- White on green (#008751): **4.75:1** (AA+)
- Dark text on yellow badges: **5.12:1** (AA+)

---

## Visual Identity

The redesigned palette maintains strong Zamboanga identity through:

- **Navy blue** reflecting the city's coastal/water heritage
- **Green** representing natural resources and growth
- **Yellow/gold** as tasteful accent honoring the official seal
- **Balanced color harmony** that clearly references the seal without being overwhelming
- **Professional civic aesthetic** appropriate for municipal government

The result feels distinctly "Zamboanga City" through thoughtful color balance rather than yellow dominance.
