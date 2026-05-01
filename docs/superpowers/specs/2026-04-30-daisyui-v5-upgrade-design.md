# DaisyUI v5 + Tailwind v4 Upgrade Design

**Date:** 2026-04-30
**Stack:** Vue 3 + Vite 5 + Tailwind CSS v4 + DaisyUI v5

---

## Overview

Upgrade from Tailwind CSS v3 + DaisyUI v4 to Tailwind CSS v4 + DaisyUI v5. Tailwind v4 moves to a CSS-first configuration model — no more `tailwind.config.js` or `postcss.config.js`. DaisyUI v5 is designed for Tailwind v4 and configures themes in CSS via `@plugin`.

No new UI behavior. No test changes. Visual output must be identical before and after.

---

## Package Changes

| Action | Package |
|--------|---------|
| Upgrade | `tailwindcss` `^3.4.14` → `^4.x` |
| Add | `@tailwindcss/vite` |
| Remove | `autoprefixer` (Tailwind v4 handles vendor prefixing natively) |
| Upgrade | `daisyui` `^4.12.14` → `^5.x` |

---

## File Changes

### Delete

- `postcss.config.js` — replaced by `@tailwindcss/vite` Vite plugin
- `tailwind.config.js` — replaced by CSS `@import`/`@plugin` configuration

### `vite.config.ts`

Add `@tailwindcss/vite` as the first plugin. The `/// <reference types="vitest" />` directive and test config are preserved.

```typescript
/// <reference types="vitest" />
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig({
  plugins: [tailwindcss(), vue(), vueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  test: {
    environment: 'jsdom',
  },
})
```

### `src/assets/main.css`

Replace the three `@tailwind` directives with a single `@import`, add the DaisyUI plugin, and define both custom themes using DaisyUI v5's CSS theme syntax. The scroll/hero animation classes below the directives are unchanged.

```css
@import "tailwindcss";
@plugin "daisyui";

@plugin "daisyui/theme" {
  name: "teal-light";
  default: true;
  color-scheme: light;
  --color-primary: oklch(from #0d9488 l c h);
  --color-primary-content: oklch(from #ffffff l c h);
  --color-secondary: oklch(from #5eead4 l c h);
  --color-accent: oklch(from #ccfbf1 l c h);
  --color-neutral: oklch(from #134e4a l c h);
  --color-base-100: oklch(from #f0fdfa l c h);
  --color-base-200: oklch(from #ccfbf1 l c h);
  --color-base-300: oklch(from #99f6e4 l c h);
  --color-base-content: oklch(from #134e4a l c h);
}

@plugin "daisyui/theme" {
  name: "teal-dark";
  color-scheme: dark;
  --color-primary: oklch(from #0d9488 l c h);
  --color-primary-content: oklch(from #ffffff l c h);
  --color-secondary: oklch(from #0f766e l c h);
  --color-accent: oklch(from #134e4a l c h);
  --color-neutral: oklch(from #042f2e l c h);
  --color-base-100: oklch(from #042f2e l c h);
  --color-base-200: oklch(from #0d3330 l c h);
  --color-base-300: oklch(from #134e4a l c h);
  --color-base-content: oklch(from #ccfbf1 l c h);
}

/* scroll and hero animation classes below this line — unchanged */
```

> **Note on colors:** DaisyUI v5 uses oklch internally. The exact syntax for specifying hex colors in `@plugin "daisyui/theme"` must be verified against the DaisyUI v5 docs during implementation — the implementer should check whether hex values are accepted directly or require oklch conversion.

---

## DaisyUI Class Audit

The following DaisyUI component classes are used in this project. All are confirmed unchanged between v4 and v5:

| Class | Status |
|-------|--------|
| `btn`, `btn-circle`, `btn-ghost`, `btn-primary`, `btn-sm` | Unchanged |
| `badge`, `badge-outline`, `badge-primary` | Unchanged |
| `card`, `card-actions`, `card-body`, `card-title` | Unchanged |
| `navbar`, `navbar-start`, `navbar-end` | Unchanged |
| `menu`, `menu-horizontal`, `menu-sm` | Unchanged |
| `dropdown` | Unchanged |
| `swap`, `swap-off`, `swap-on`, `swap-rotate` | Unchanged |
| `theme-controller` | Unchanged |

No class renames required.

---

## Dark Mode

The app sets `data-theme="teal-light"` or `data-theme="teal-dark"` on the root `<main>` element via Vue reactive state. No Tailwind `dark:` utility classes are used anywhere. The dark mode experience is driven entirely by DaisyUI CSS variables switching on `data-theme`, which is unaffected by removing the `darkMode` config from `tailwind.config.js`.

---

## Verification

1. `npm run dev` — dev server starts without errors
2. Visual check: scroll through the full page in both light and dark themes, confirm colors match the existing design
3. `npm run test:unit -- --run` — all 33 tests pass
4. `npm run type-check` — no TypeScript errors
5. `npm run build` — production build succeeds

---

## Out of Scope

- Migrating to `oklch` color values directly in the theme (hex passthrough is sufficient)
- Any visual design changes
- Upgrading other dependencies (Vue, Vite, etc.)
