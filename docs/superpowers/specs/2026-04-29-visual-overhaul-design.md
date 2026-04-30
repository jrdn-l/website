# Visual Overhaul Design

**Date:** 2026-04-29  
**Direction:** Warm & Expressive — full visual overhaul  
**Stack:** Vue 3 + Tailwind + DaisyUI (teal theme, no new dependencies)

---

## Overview

The portfolio feels visually plain — flat typography, no decorative elements, all sections look identical, no motion. This spec covers a full visual overhaul that adds depth and personality while staying within the existing teal palette and single-page scroll architecture.

No new UI libraries required. Scroll animations use the native IntersectionObserver API.

---

## Hero Section

**Background:** Subtle teal gradient — `linear-gradient(135deg, base-100 → base-200)`.

**Geometric shapes:** Three teal circles at low opacity (7–10%), absolutely positioned. Large (220px) top-right, medium (120px) bottom-right, small (60px) mid-right. Creates depth without visual noise.

**Layout:** Horizontal split — text left, avatar right, both vertically anchored to bottom of content area.

**Avatar:** 90px circle with teal border and "J" initial. Ready to swap for a photo without layout changes.

**Typography:**
- Eyebrow: `SOFTWARE DEVELOPER` in small uppercase teal, letter-spaced
- Name: `Jordan.` — large bold (text-6xl+), teal accent dot
- Subline: `Amazon · University of Toronto` in muted teal

**Social link:** Single LinkedIn pill button (filled teal, `LinkedIn →`). GitHub link removed from hero.

**Footer bar:** Kept. Shows `Toronto, Canada` left, `Open to opportunities` right.

**Entrance animation:** Staggered CSS transitions on page load:
- Name: 0ms delay
- Eyebrow: 150ms
- Subline: 250ms
- LinkedIn pill: 400ms
- Avatar: slides in from right, 200ms

---

## Page-Level Design

**Alternating section backgrounds:**
- About, Projects: `bg-base-100` (lightest teal)
- Experience, Skills: `bg-base-200` (soft tint)

This creates visual rhythm between sections without introducing new colors.

**Section headers:** The existing small uppercase labels get a `border-l-2 border-primary pl-3` left accent line.

**Nav on scroll:** Add a `border-b border-base-300 backdrop-blur-sm` class to `NavHeader` when the user has scrolled past the hero. Implemented via a scroll event listener in `NavHeader.vue`.

---

## Scroll Animations

A `useScrollAnimate` composable wraps `IntersectionObserver`. Elements start hidden (`opacity-0 translate-y-6`) and transition to visible (`opacity-100 translate-y-0`) when they enter the viewport.

Applied to:
- Section headings and intro text (fade in together)
- Timeline items (staggered, 100ms apart)
- Project cards (staggered, 80ms apart)
- Skill badges (staggered by group)

Transition: `transition: opacity 0.5s ease, transform 0.5s ease`.

Usage: call `useScrollAnimate(elRef, { delay })` in each view component's `onMounted`, passing a template ref or array of refs. Staggered items pass an index-based delay.

---

## Component Changes

### About
- Second paragraph gets a `border-l-2 border-primary pl-3` accent — visually separates the personal tone from the professional intro.

### Experience (`ExperienceView.vue` + `VerticalSteps.vue`)
- Timeline line gets a gradient: solid teal for filled items, fading to base-200 at the bottom.
- Timeline dots: filled teal with a white inner border (`ring-2 ring-base-100`).
- Scroll animation: line "draws" from top to bottom as the section enters the viewport (CSS scaleY transition on the line element, triggered by IntersectionObserver).

### Projects (`ProjectsView.vue`)
- Each card gets a `card-image` area at the top: 56px tall, `bg-gradient-to-r from-base-200 to-base-300`. Acts as a decorative placeholder now, swappable for a screenshot later.
- Hover state: `hover:shadow-md hover:-translate-y-1 transition-all` for a lift effect.

### Skills (`SkillsView.vue`)
- **Languages:** `badge-primary` (filled teal)
- **Frameworks & Libraries:** `badge-outline badge-primary` (outlined teal — existing style, kept)
- **Tools:** soft teal fill using `bg-base-200 text-primary border border-base-300`

---

## File Impact

| File | Change |
|------|--------|
| `HeroSection.vue` | Full rebuild — gradient bg, shapes, avatar, pill button, animations |
| `NavHeader.vue` | Add scroll-triggered border |
| `AboutView.vue` | Add left-border accent to second paragraph |
| `ExperienceView.vue` | Add alternating bg class, scroll animation |
| `VerticalSteps.vue` | Timeline dot + line style updates, line-draw animation |
| `ProjectsView.vue` | Add card image area, hover lift, alternating bg |
| `SkillsView.vue` | Color-code badge categories, add alternating bg |
| `composables/useScrollAnimate.ts` | New — IntersectionObserver wrapper |
| `App.vue` | No changes |
| `main.css` | Add scroll-animate base classes |

---

## Out of Scope

- Dark mode adjustments (existing teal-dark theme remains unchanged for now)
- Vue Router or navigation changes
- Real project screenshots or photos
- New sections or content changes
