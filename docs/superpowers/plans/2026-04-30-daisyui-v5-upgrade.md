# DaisyUI v5 + Tailwind v4 Upgrade Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Upgrade from Tailwind CSS v3 + DaisyUI v4 to Tailwind CSS v4 + DaisyUI v5, migrating configuration from `tailwind.config.js`/`postcss.config.js` to CSS-first `@plugin` declarations.

**Architecture:** Tailwind v4 replaces the PostCSS pipeline with a Vite-native plugin (`@tailwindcss/vite`). Configuration moves entirely into CSS — the `@tailwind` directives become `@import "tailwindcss"` and DaisyUI themes are declared via `@plugin "daisyui/theme" {}` blocks. No component class renames are required.

**Tech Stack:** Vue 3, Vite 5, TypeScript, Tailwind CSS v4, DaisyUI v5, Vitest

---

## File Map

| File | Action | Notes |
|------|--------|-------|
| `package.json` | Modified by npm | Add `@tailwindcss/vite`, upgrade `tailwindcss` + `daisyui`, remove `autoprefixer` |
| `vite.config.ts` | Modify | Add `tailwindcss()` as first plugin |
| `postcss.config.js` | **Delete** | No longer needed with `@tailwindcss/vite` |
| `tailwind.config.js` | **Delete** | Replaced by CSS `@plugin` configuration |
| `src/assets/main.css` | Modify | Replace `@tailwind` directives, add `@plugin "daisyui"`, define both themes |

---

### Task 1: Install new packages and remove old ones

**Files:**
- Modified by npm: `package.json`, `package-lock.json`

- [ ] **Step 1: Install Tailwind v4, the Vite plugin, and DaisyUI v5**

```bash
npm install -D tailwindcss@^4 @tailwindcss/vite daisyui@^5
```

Expected: installs complete with no errors. `package.json` devDependencies now shows `tailwindcss: "^4.x.x"`, `@tailwindcss/vite: "^..."`, `daisyui: "^5.x.x"`.

- [ ] **Step 2: Remove autoprefixer**

```bash
npm uninstall autoprefixer
```

Expected: `autoprefixer` removed from `package.json` devDependencies.

- [ ] **Step 3: Verify package.json looks correct**

Run: `cat package.json | grep -E '"tailwindcss|daisyui|autoprefixer|@tailwindcss'`

Expected output should show `tailwindcss` at v4, `daisyui` at v5, `@tailwindcss/vite` present, and no `autoprefixer` line.

- [ ] **Step 4: Commit**

```bash
git add package.json package-lock.json
git commit -m "chore: upgrade to tailwindcss v4, daisyui v5, remove autoprefixer"
```

---

### Task 2: Delete old config files and update vite.config.ts

**Files:**
- Delete: `postcss.config.js`
- Delete: `tailwind.config.js`
- Modify: `vite.config.ts`

- [ ] **Step 1: Delete postcss.config.js**

```bash
rm postcss.config.js
```

- [ ] **Step 2: Delete tailwind.config.js**

```bash
rm tailwind.config.js
```

- [ ] **Step 3: Replace vite.config.ts**

Replace the entire contents of `vite.config.ts`:

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

- [ ] **Step 4: Run type-check to confirm vite.config.ts is valid**

```bash
npm run type-check
```

Expected: no TypeScript errors.

- [ ] **Step 5: Commit**

```bash
git add vite.config.ts
git commit -m "chore: switch to @tailwindcss/vite plugin, remove postcss and tailwind configs"
```

---

### Task 3: Migrate main.css to Tailwind v4 + DaisyUI v5

**Files:**
- Modify: `src/assets/main.css`

- [ ] **Step 1: Replace the contents of src/assets/main.css**

Replace the entire file. The `@tailwind` directives become a single `@import`. The DaisyUI plugin and both custom themes are declared with `@plugin`. The scroll/hero animation classes at the bottom are preserved unchanged.

```css
@import "tailwindcss";
@plugin "daisyui";

@plugin "daisyui/theme" {
  name: "teal-light";
  default: true;
  color-scheme: light;

  --color-primary: #0d9488;
  --color-primary-content: #ffffff;
  --color-secondary: #5eead4;
  --color-accent: #ccfbf1;
  --color-neutral: #134e4a;
  --color-base-100: #f0fdfa;
  --color-base-200: #ccfbf1;
  --color-base-300: #99f6e4;
  --color-base-content: #134e4a;
}

@plugin "daisyui/theme" {
  name: "teal-dark";
  color-scheme: dark;

  --color-primary: #0d9488;
  --color-primary-content: #ffffff;
  --color-secondary: #0f766e;
  --color-accent: #134e4a;
  --color-neutral: #042f2e;
  --color-base-100: #042f2e;
  --color-base-200: #0d3330;
  --color-base-300: #134e4a;
  --color-base-content: #ccfbf1;
}

.scroll-hidden {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.scroll-visible {
  opacity: 1;
  transform: translateY(0);
}

.hero-el {
  opacity: 0;
  transform: translateY(16px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.hero-el--visible {
  opacity: 1;
  transform: translateY(0);
}

.hero-avatar-el {
  opacity: 0;
  transform: translateX(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
  transition-delay: 200ms;
}

.hero-avatar-el--visible {
  opacity: 1;
  transform: translateX(0);
}
```

- [ ] **Step 2: Start the dev server**

```bash
npm run dev
```

Expected: dev server starts on `http://localhost:5173` with no errors in the terminal.

- [ ] **Step 3: Visual check — light theme**

Open `http://localhost:5173`. Verify:
- Hero section has the teal gradient background and teal circles
- Text `Jordan.` appears with the teal accent dot
- LinkedIn pill button is filled teal
- Section headings have a teal left border
- Badges in Skills section are color-coded (filled teal for Languages, outlined for Frameworks, soft fill for Tools)

- [ ] **Step 4: Visual check — dark theme**

Click the sun/moon toggle in the navbar. Verify:
- Background switches to the dark teal (`#042f2e` base)
- Text is light (`#ccfbf1` base-content)
- Primary teal accents remain consistent
- Toggle back to light theme and verify it looks correct

Stop the dev server (Ctrl+C).

- [ ] **Step 5: Run the full test suite**

```bash
npm run test:unit -- --run
```

Expected: 33 tests pass, 0 failures. (Tests check HTML classes and structure, not CSS rendering, so they are unaffected by the CSS migration.)

- [ ] **Step 6: Run type-check**

```bash
npm run type-check
```

Expected: no TypeScript errors.

- [ ] **Step 7: Run production build**

```bash
npm run build
```

Expected: build completes successfully in `dist/`.

- [ ] **Step 8: Commit**

```bash
git add src/assets/main.css
git commit -m "feat: migrate to tailwindcss v4 css-first config and daisyui v5 theme syntax"
```
