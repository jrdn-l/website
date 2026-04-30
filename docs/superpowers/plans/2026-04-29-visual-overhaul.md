# Visual Overhaul Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add geometric shapes, entrance/scroll animations, alternating section backgrounds, color-coded skill badges, and improved component styling to make the portfolio feel warm, expressive, and polished.

**Architecture:** New `useScrollAnimate` composable wraps `IntersectionObserver` for scroll-triggered fade+slide animations applied to all sections. `HeroSection` gets a full rebuild with CSS entrance animations (staggered on page load). Alternating `bg-base-200` on Experience and Skills sections creates visual rhythm. No new npm dependencies — all native browser APIs and existing Tailwind/DaisyUI classes.

**Tech Stack:** Vue 3, TypeScript, Tailwind CSS v3, DaisyUI v4, Vitest, @vue/test-utils, native IntersectionObserver

---

## File Map

| File | Action | Responsibility |
|------|--------|----------------|
| `vite.config.ts` | Modify | Add jsdom test environment |
| `src/assets/main.css` | Modify | Add scroll and hero animation CSS classes |
| `src/composables/useScrollAnimate.ts` | Create | IntersectionObserver wrapper — adds `scroll-visible` class when element enters viewport |
| `src/composables/__tests__/useScrollAnimate.spec.ts` | Create | Unit tests for composable |
| `src/components/HeroSection.vue` | Full rebuild | Gradient bg, 3 geometric shapes, avatar circle, LinkedIn pill, staggered CSS entrance animation |
| `src/components/__tests__/HeroSection.spec.ts` | Create | Render tests for rebuilt hero |
| `src/components/NavHeader.vue` | Modify | Scroll-triggered `border-b` on the navbar |
| `src/components/__tests__/NavHeader.spec.ts` | Create | Scroll border tests |
| `src/components/views/AboutView.vue` | Modify | Left-border accent on second paragraph + scroll animation |
| `src/components/views/__tests__/AboutView.spec.ts` | Create | Render tests |
| `src/components/VerticalSteps.vue` | Modify | Teal dot with ring-2 border, line-draw scale-y animation |
| `src/components/__tests__/VerticalSteps.spec.ts` | Create | Render + animation class tests |
| `src/components/views/ExperienceView.vue` | Modify | Full-width `bg-base-200` wrapper + scroll animation |
| `src/components/views/__tests__/ExperienceView.spec.ts` | Create | bg + animation tests |
| `src/components/views/ProjectsView.vue` | Modify | Card image strip, hover lift, staggered scroll animation |
| `src/components/views/__tests__/ProjectsView.spec.ts` | Create | Card structure tests |
| `src/components/views/SkillsView.vue` | Modify | Color-coded badges, full-width `bg-base-200`, staggered scroll animation |
| `src/components/views/__tests__/SkillsView.spec.ts` | Create | Badge style tests |

---

### Task 1: Configure jsdom test environment

**Files:**
- Modify: `vite.config.ts`

- [ ] **Step 1: Add vitest type reference and test config**

Replace the entire contents of `vite.config.ts` with:

```typescript
/// <reference types="vitest" />
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig({
  plugins: [vue(), vueDevTools()],
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

- [ ] **Step 2: Verify test runner works**

Run: `npm run test:unit -- --run`
Expected: `No test files found` or 0 failures (no errors about missing environment)

- [ ] **Step 3: Commit**

```bash
git add vite.config.ts
git commit -m "test: configure jsdom test environment"
```

---

### Task 2: Add animation CSS classes

**Files:**
- Modify: `src/assets/main.css`

- [ ] **Step 1: Append animation classes**

Append to `src/assets/main.css`:

```css
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

- [ ] **Step 2: Verify dev server starts without errors**

Run: `npm run dev`
Expected: dev server starts on port 5173 with no CSS errors (Ctrl+C to stop)

- [ ] **Step 3: Commit**

```bash
git add src/assets/main.css
git commit -m "feat: add scroll and hero entrance animation CSS classes"
```

---

### Task 3: Create useScrollAnimate composable

**Files:**
- Create: `src/composables/useScrollAnimate.ts`
- Create: `src/composables/__tests__/useScrollAnimate.spec.ts`

- [ ] **Step 1: Create the test file**

Create `src/composables/__tests__/useScrollAnimate.spec.ts`:

```typescript
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { defineComponent, ref, nextTick } from 'vue'
import { useScrollAnimate } from '@/composables/useScrollAnimate'

const callbacks: IntersectionObserverCallback[] = []
const mockObserve = vi.fn()
const mockDisconnect = vi.fn()

beforeEach(() => {
  callbacks.length = 0
  mockObserve.mockClear()
  mockDisconnect.mockClear()
  vi.stubGlobal(
    'IntersectionObserver',
    vi.fn((cb: IntersectionObserverCallback) => {
      callbacks.push(cb)
      return { observe: mockObserve, disconnect: mockDisconnect, unobserve: vi.fn() }
    }),
  )
})

const TestComponent = defineComponent({
  setup() {
    const el1 = ref<HTMLElement | null>(null)
    const el2 = ref<HTMLElement | null>(null)
    useScrollAnimate(() => [el1.value, el2.value].filter(Boolean) as HTMLElement[], { staggerMs: 80 })
    return { el1, el2 }
  },
  template: `
    <div>
      <div ref="el1" class="scroll-hidden" data-testid="el1">one</div>
      <div ref="el2" class="scroll-hidden" data-testid="el2">two</div>
    </div>
  `,
})

describe('useScrollAnimate', () => {
  it('observes all elements on mount', async () => {
    mount(TestComponent)
    await nextTick()
    expect(mockObserve).toHaveBeenCalledTimes(2)
  })

  it('adds scroll-visible when element intersects', async () => {
    const wrapper = mount(TestComponent)
    await nextTick()
    const el = wrapper.find('[data-testid="el1"]').element as HTMLElement
    callbacks[0]([{ isIntersecting: true, target: el } as IntersectionObserverEntry], {} as IntersectionObserver)
    expect(el.classList.contains('scroll-visible')).toBe(true)
  })

  it('does not add scroll-visible when not intersecting', async () => {
    const wrapper = mount(TestComponent)
    await nextTick()
    const el = wrapper.find('[data-testid="el1"]').element as HTMLElement
    callbacks[0]([{ isIntersecting: false, target: el } as IntersectionObserverEntry], {} as IntersectionObserver)
    expect(el.classList.contains('scroll-visible')).toBe(false)
  })

  it('sets stagger transition-delay on elements', async () => {
    const wrapper = mount(TestComponent)
    await nextTick()
    const el1 = wrapper.find('[data-testid="el1"]').element as HTMLElement
    const el2 = wrapper.find('[data-testid="el2"]').element as HTMLElement
    expect(el1.style.transitionDelay).toBe('0ms')
    expect(el2.style.transitionDelay).toBe('80ms')
  })

  it('disconnects all observers on unmount', async () => {
    const wrapper = mount(TestComponent)
    await nextTick()
    wrapper.unmount()
    expect(mockDisconnect).toHaveBeenCalledTimes(2)
  })
})
```

- [ ] **Step 2: Run tests — expect failure**

Run: `npm run test:unit -- --run`
Expected: FAIL — `Cannot find module '@/composables/useScrollAnimate'`

- [ ] **Step 3: Create the composable**

Create `src/composables/useScrollAnimate.ts`:

```typescript
import { onMounted, onUnmounted } from 'vue'

export function useScrollAnimate(
  getEls: () => HTMLElement[],
  { staggerMs = 0 }: { staggerMs?: number } = {},
) {
  const observers: IntersectionObserver[] = []

  onMounted(() => {
    getEls().forEach((el, i) => {
      el.style.transitionDelay = `${i * staggerMs}ms`
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.classList.add('scroll-visible')
            observer.disconnect()
          }
        },
        { threshold: 0.1 },
      )
      observer.observe(el)
      observers.push(observer)
    })
  })

  onUnmounted(() => observers.forEach((o) => o.disconnect()))
}
```

- [ ] **Step 4: Run tests — expect pass**

Run: `npm run test:unit -- --run`
Expected: 5 tests pass

- [ ] **Step 5: Commit**

```bash
git add src/composables/useScrollAnimate.ts src/composables/__tests__/useScrollAnimate.spec.ts
git commit -m "feat: add useScrollAnimate composable with IntersectionObserver"
```

---

### Task 4: Rebuild HeroSection

**Files:**
- Modify: `src/components/HeroSection.vue`
- Create: `src/components/__tests__/HeroSection.spec.ts`

- [ ] **Step 1: Write the render tests**

Create `src/components/__tests__/HeroSection.spec.ts`:

```typescript
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import HeroSection from '@/components/HeroSection.vue'

describe('HeroSection', () => {
  it('renders the name Jordan', () => {
    const wrapper = mount(HeroSection)
    expect(wrapper.text()).toContain('Jordan')
  })

  it('renders LinkedIn link', () => {
    const wrapper = mount(HeroSection)
    const link = wrapper.find('a[href*="linkedin"]')
    expect(link.exists()).toBe(true)
    expect(link.text()).toContain('LinkedIn')
  })

  it('renders avatar with J initial', () => {
    const wrapper = mount(HeroSection)
    expect(wrapper.find('[data-testid="avatar"]').text().trim()).toBe('J')
  })

  it('renders three geometric shapes', () => {
    const wrapper = mount(HeroSection)
    expect(wrapper.findAll('[data-testid="shape"]')).toHaveLength(3)
  })

  it('does not render a GitHub link', () => {
    const wrapper = mount(HeroSection)
    const githubLinks = wrapper.findAll('a').filter((a) => a.text().toLowerCase().includes('github'))
    expect(githubLinks).toHaveLength(0)
  })
})
```

- [ ] **Step 2: Run tests — expect failure**

Run: `npm run test:unit -- --run`
Expected: FAIL — `avatar` and `shape` testids don't exist yet

- [ ] **Step 3: Replace HeroSection.vue**

Replace the entire contents of `src/components/HeroSection.vue`:

```vue
<script setup lang="ts">
import { ref, onMounted } from 'vue'

const loaded = ref(false)

onMounted(() => {
  requestAnimationFrame(() => {
    loaded.value = true
  })
})
</script>

<template>
  <section
    id="hero"
    class="h-screen flex flex-col justify-between px-8 py-10 relative overflow-hidden bg-gradient-to-br from-base-100 to-base-200"
  >
    <div data-testid="shape" class="absolute top-[-60px] right-[-50px] w-[220px] h-[220px] rounded-full bg-primary opacity-[0.07] pointer-events-none"></div>
    <div data-testid="shape" class="absolute bottom-[30px] right-[80px] w-[120px] h-[120px] rounded-full bg-primary opacity-[0.06] pointer-events-none"></div>
    <div data-testid="shape" class="absolute top-[60px] right-[140px] w-[60px] h-[60px] rounded-full bg-primary opacity-[0.10] pointer-events-none"></div>

    <div></div>

    <div class="flex items-end justify-between">
      <div>
        <p
          class="hero-el text-xs uppercase tracking-[3px] text-primary mb-2"
          :class="{ 'hero-el--visible': loaded }"
          style="transition-delay: 150ms"
        >
          Software Developer
        </p>
        <h1
          class="hero-el text-6xl font-black text-base-content leading-none tracking-tight"
          :class="{ 'hero-el--visible': loaded }"
          style="transition-delay: 0ms"
        >
          Jordan<span class="text-primary">.</span>
        </h1>
        <p
          class="hero-el text-sm text-primary/80 mt-2 font-medium"
          :class="{ 'hero-el--visible': loaded }"
          style="transition-delay: 250ms"
        >
          Amazon · University of Toronto
        </p>
        <div
          class="hero-el mt-4"
          :class="{ 'hero-el--visible': loaded }"
          style="transition-delay: 400ms"
        >
          <a
            href="https://linkedin.com/in/"
            target="_blank"
            class="inline-block bg-primary text-primary-content text-xs font-medium px-4 py-2 rounded-full hover:opacity-90 transition-opacity"
          >
            LinkedIn →
          </a>
        </div>
      </div>

      <div
        data-testid="avatar"
        class="hero-avatar-el w-[90px] h-[90px] rounded-full bg-gradient-to-br from-base-200 to-base-300 border-2 border-primary flex items-center justify-center text-2xl font-black text-primary shrink-0 mb-4"
        :class="{ 'hero-avatar-el--visible': loaded }"
      >
        J
      </div>
    </div>

    <div class="flex justify-between items-center border-t border-base-300 pt-4 text-xs text-primary/60">
      <span>Toronto, Canada</span>
      <span>Open to opportunities</span>
    </div>
  </section>
</template>
```

- [ ] **Step 4: Run tests — expect pass**

Run: `npm run test:unit -- --run`
Expected: all 5 HeroSection tests pass

- [ ] **Step 5: Verify in browser**

Run: `npm run dev`
Open `http://localhost:5173`. The hero should show: gradient background, three subtle teal circles in the upper-right area, "Jordan." name with a staggered fade-in, single LinkedIn pill button, and a "J" avatar circle that slides in from the right.

- [ ] **Step 6: Commit**

```bash
git add src/components/HeroSection.vue src/components/__tests__/HeroSection.spec.ts
git commit -m "feat: rebuild HeroSection with gradient, shapes, avatar, and entrance animation"
```

---

### Task 5: Add scroll-triggered border to NavHeader

**Files:**
- Modify: `src/components/NavHeader.vue`
- Create: `src/components/__tests__/NavHeader.spec.ts`

- [ ] **Step 1: Write the tests**

Create `src/components/__tests__/NavHeader.spec.ts`:

```typescript
import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { nextTick } from 'vue'
import NavHeader from '@/components/NavHeader.vue'

describe('NavHeader', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'scrollY', { value: 0, writable: true, configurable: true })
  })

  it('does not show border when at top of page', () => {
    const wrapper = mount(NavHeader)
    expect(wrapper.find('.navbar').classes()).not.toContain('border-b')
  })

  it('adds border-b after scrolling past hero', async () => {
    const wrapper = mount(NavHeader)
    Object.defineProperty(window, 'scrollY', { value: 100, writable: true, configurable: true })
    window.dispatchEvent(new Event('scroll'))
    await nextTick()
    expect(wrapper.find('.navbar').classes()).toContain('border-b')
  })
})
```

- [ ] **Step 2: Run tests — expect failure**

Run: `npm run test:unit -- --run`
Expected: FAIL — scroll border not yet implemented

- [ ] **Step 3: Update NavHeader.vue**

In `src/components/NavHeader.vue`, replace the `<script setup>` block and the opening `<div class="navbar ...">` tag:

Replace:
```vue
<script setup lang="ts">
import ThemeToggle from '@/components/ThemeToggle.vue'
// MAYBE ADD IN VUE ROUTER IDK
</script>
<template>
  <div class="navbar bg-base-100 fixed">
```

With:
```vue
<script setup lang="ts">
import ThemeToggle from '@/components/ThemeToggle.vue'
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false)

function onScroll() {
  scrolled.value = window.scrollY > 10
}

onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>
<template>
  <div
    class="navbar bg-base-100 fixed transition-shadow duration-200"
    :class="{ 'border-b border-base-300 shadow-sm backdrop-blur-sm': scrolled }"
  >
```

- [ ] **Step 4: Run tests — expect pass**

Run: `npm run test:unit -- --run`
Expected: NavHeader tests pass, all previous tests still pass

- [ ] **Step 5: Commit**

```bash
git add src/components/NavHeader.vue src/components/__tests__/NavHeader.spec.ts
git commit -m "feat: add scroll-triggered border to NavHeader"
```

---

### Task 6: Update AboutView with accent and scroll animation

**Files:**
- Modify: `src/components/views/AboutView.vue`
- Create: `src/components/views/__tests__/AboutView.spec.ts`

- [ ] **Step 1: Write the tests**

Create `src/components/views/__tests__/AboutView.spec.ts`:

```typescript
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import AboutView from '@/components/views/AboutView.vue'

beforeEach(() => {
  vi.stubGlobal(
    'IntersectionObserver',
    vi.fn(() => ({ observe: vi.fn(), disconnect: vi.fn(), unobserve: vi.fn() })),
  )
})

describe('AboutView', () => {
  it('section heading has left-border accent', () => {
    const wrapper = mount(AboutView)
    expect(wrapper.find('h2').classes()).toContain('border-l-2')
  })

  it('second paragraph has left-border accent', () => {
    const wrapper = mount(AboutView)
    const paras = wrapper.findAll('p')
    expect(paras[1].classes()).toContain('border-l-2')
  })

  it('elements have scroll-hidden class', () => {
    const wrapper = mount(AboutView)
    expect(wrapper.findAll('.scroll-hidden').length).toBeGreaterThan(0)
  })
})
```

- [ ] **Step 2: Run tests — expect failure**

Run: `npm run test:unit -- --run`
Expected: FAIL — `border-l-2` and `scroll-hidden` not present yet

- [ ] **Step 3: Update AboutView.vue**

Replace the entire contents of `src/components/views/AboutView.vue`:

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { useScrollAnimate } from '@/composables/useScrollAnimate'

const animatedEls = ref<HTMLElement[]>([])
useScrollAnimate(() => animatedEls.value)
</script>

<template>
  <section id="about" class="py-24 px-8 max-w-2xl mx-auto">
    <h2
      :ref="(el) => { if (el) animatedEls.value[0] = el as HTMLElement }"
      class="scroll-hidden text-sm uppercase tracking-widest text-primary mb-6 border-l-2 border-primary pl-3"
    >
      About
    </h2>
    <p
      :ref="(el) => { if (el) animatedEls.value[1] = el as HTMLElement }"
      class="scroll-hidden text-base-content text-lg leading-relaxed mb-4"
    >
      I'm a software developer currently working at Amazon. I graduated from the
      University of Toronto with a specialization in computer science, where I
      graduated with distinction.
    </p>
    <p
      :ref="(el) => { if (el) animatedEls.value[2] = el as HTMLElement }"
      class="scroll-hidden text-base-content/70 leading-relaxed border-l-2 border-primary pl-3"
    >
      Outside of work I keep it simple — video games, anime, and weekend walks.
      I've also been making my way to the gym, even if it's not always the
      highlight of my day. I also appreciate good food and have a soft spot for
      a good bubble tea, coffee, matcha, or hojicha.
    </p>
  </section>
</template>
```

- [ ] **Step 4: Run tests — expect pass**

Run: `npm run test:unit -- --run`
Expected: AboutView tests pass

- [ ] **Step 5: Commit**

```bash
git add src/components/views/AboutView.vue src/components/views/__tests__/AboutView.spec.ts
git commit -m "feat: add left-border accent and scroll animation to AboutView"
```

---

### Task 7: Update VerticalSteps with ring dots and line-draw animation

**Files:**
- Modify: `src/components/VerticalSteps.vue`
- Create: `src/components/__tests__/VerticalSteps.spec.ts`

- [ ] **Step 1: Write the tests**

Create `src/components/__tests__/VerticalSteps.spec.ts`:

```typescript
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import VerticalSteps from '@/components/VerticalSteps.vue'

const items = [
  { title: 'Senior Engineer', subtitle: 'Acme', date: '2023–present' },
  { title: 'Engineer', subtitle: 'Initech', date: '2021–2023' },
]

beforeEach(() => {
  vi.stubGlobal(
    'IntersectionObserver',
    vi.fn(() => ({ observe: vi.fn(), disconnect: vi.fn(), unobserve: vi.fn() })),
  )
})

describe('VerticalSteps', () => {
  it('renders the correct number of list items', () => {
    const wrapper = mount(VerticalSteps, { props: { items } })
    expect(wrapper.findAll('li')).toHaveLength(2)
  })

  it('dots have ring-2 class', () => {
    const wrapper = mount(VerticalSteps, { props: { items } })
    expect(wrapper.find('[data-testid="timeline-dot"]').classes()).toContain('ring-2')
  })

  it('connecting line has scale-y-0 class initially', () => {
    const wrapper = mount(VerticalSteps, { props: { items } })
    expect(wrapper.find('[data-testid="timeline-line"]').classes()).toContain('scale-y-0')
  })

  it('shows one connecting line between two items', () => {
    const wrapper = mount(VerticalSteps, { props: { items } })
    expect(wrapper.findAll('[data-testid="timeline-line"]')).toHaveLength(1)
  })
})
```

- [ ] **Step 2: Run tests — expect failure**

Run: `npm run test:unit -- --run`
Expected: FAIL — testids and `ring-2` / `scale-y-0` not present

- [ ] **Step 3: Replace VerticalSteps.vue**

Replace the entire contents of `src/components/VerticalSteps.vue`:

```vue
<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'

const props = defineProps<{
  items: { title: string; subtitle: string; date: string }[]
}>()

const containerRef = ref<HTMLElement | null>(null)
const visibleLines = reactive<boolean[]>([])

onMounted(() => {
  props.items.forEach((_, i) => {
    visibleLines[i] = false
  })
  if (!containerRef.value) return
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        props.items.forEach((_, i) => {
          setTimeout(() => {
            visibleLines[i] = true
          }, i * 250)
        })
        observer.disconnect()
      }
    },
    { threshold: 0.2 },
  )
  observer.observe(containerRef.value)
})
</script>

<template>
  <ul ref="containerRef" class="flex flex-col gap-0">
    <li v-for="(item, i) in items" :key="i" class="flex gap-4 pb-6 last:pb-0">
      <div class="flex flex-col items-center">
        <div
          data-testid="timeline-dot"
          class="w-2.5 h-2.5 rounded-full bg-primary ring-2 ring-base-100 mt-1.5 shrink-0 z-10"
        ></div>
        <div
          v-if="i < items.length - 1"
          data-testid="timeline-line"
          class="w-0.5 flex-1 mt-1 bg-primary/40 origin-top transition-transform duration-500"
          :class="visibleLines[i] ? 'scale-y-100' : 'scale-y-0'"
        ></div>
      </div>
      <div>
        <p class="font-semibold text-base-content">{{ item.title }}</p>
        <p class="text-sm text-primary">{{ item.subtitle }}</p>
        <p class="text-xs text-base-content/50 mt-0.5">{{ item.date }}</p>
      </div>
    </li>
  </ul>
</template>
```

- [ ] **Step 4: Run tests — expect pass**

Run: `npm run test:unit -- --run`
Expected: all VerticalSteps tests pass

- [ ] **Step 5: Commit**

```bash
git add src/components/VerticalSteps.vue src/components/__tests__/VerticalSteps.spec.ts
git commit -m "feat: update VerticalSteps with ring dots and line-draw animation"
```

---

### Task 8: Update ExperienceView with full-width bg and scroll animation

**Files:**
- Modify: `src/components/views/ExperienceView.vue`
- Create: `src/components/views/__tests__/ExperienceView.spec.ts`

Note: the section becomes a full-width wrapper (`<section class="bg-base-200">`) with an inner `<div class="py-24 px-8 max-w-2xl mx-auto">` so the background fills the viewport width.

- [ ] **Step 1: Write the tests**

Create `src/components/views/__tests__/ExperienceView.spec.ts`:

```typescript
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import ExperienceView from '@/components/views/ExperienceView.vue'

beforeEach(() => {
  vi.stubGlobal(
    'IntersectionObserver',
    vi.fn(() => ({ observe: vi.fn(), disconnect: vi.fn(), unobserve: vi.fn() })),
  )
})

describe('ExperienceView', () => {
  it('section uses bg-base-200', () => {
    const wrapper = mount(ExperienceView)
    expect(wrapper.find('section').classes()).toContain('bg-base-200')
  })

  it('section heading has left-border accent', () => {
    const wrapper = mount(ExperienceView)
    expect(wrapper.find('h2').classes()).toContain('border-l-2')
  })

  it('has scroll-hidden elements for animation', () => {
    const wrapper = mount(ExperienceView)
    expect(wrapper.findAll('.scroll-hidden').length).toBeGreaterThan(0)
  })
})
```

- [ ] **Step 2: Run tests — expect failure**

Run: `npm run test:unit -- --run`
Expected: FAIL — `bg-base-200` and `border-l-2` not present yet

- [ ] **Step 3: Replace ExperienceView.vue**

Replace the entire contents of `src/components/views/ExperienceView.vue`:

```vue
<script setup lang="ts">
import { ref } from 'vue'
import VerticalSteps from '@/components/VerticalSteps.vue'
import { useScrollAnimate } from '@/composables/useScrollAnimate'

const workItems = [
  { title: 'Software Development Engineer', subtitle: 'Amazon', date: '2025 – Present' },
  { title: 'Software Developer (Intern)', subtitle: 'SmartTrade Technologies', date: '2022 – 2023' },
]

const educationItems = [
  { title: 'B.Sc. Computer Science', subtitle: 'University of Toronto', date: '2019 – 2023' },
]

const animatedEls = ref<HTMLElement[]>([])
useScrollAnimate(() => animatedEls.value, { staggerMs: 100 })
</script>

<template>
  <section id="experience" class="bg-base-200">
    <div class="py-24 px-8 max-w-2xl mx-auto">
      <h2
        :ref="(el) => { if (el) animatedEls.value[0] = el as HTMLElement }"
        class="scroll-hidden text-sm uppercase tracking-widest text-primary mb-10 border-l-2 border-primary pl-3"
      >
        Experience
      </h2>

      <div class="mb-12">
        <h3
          :ref="(el) => { if (el) animatedEls.value[1] = el as HTMLElement }"
          class="scroll-hidden text-xs uppercase tracking-widest text-primary/60 mb-6"
        >
          Work
        </h3>
        <VerticalSteps :items="workItems" />
      </div>

      <div>
        <h3
          :ref="(el) => { if (el) animatedEls.value[2] = el as HTMLElement }"
          class="scroll-hidden text-xs uppercase tracking-widest text-primary/60 mb-6"
        >
          Education
        </h3>
        <VerticalSteps :items="educationItems" />
      </div>
    </div>
  </section>
</template>
```

- [ ] **Step 4: Run tests — expect pass**

Run: `npm run test:unit -- --run`
Expected: ExperienceView tests pass, all prior tests still pass

- [ ] **Step 5: Commit**

```bash
git add src/components/views/ExperienceView.vue src/components/views/__tests__/ExperienceView.spec.ts
git commit -m "feat: add full-width bg-base-200 and scroll animation to ExperienceView"
```

---

### Task 9: Update ProjectsView with card image strip, hover lift, scroll animation

**Files:**
- Modify: `src/components/views/ProjectsView.vue`
- Create: `src/components/views/__tests__/ProjectsView.spec.ts`

- [ ] **Step 1: Write the tests**

Create `src/components/views/__tests__/ProjectsView.spec.ts`:

```typescript
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import ProjectsView from '@/components/views/ProjectsView.vue'

beforeEach(() => {
  vi.stubGlobal(
    'IntersectionObserver',
    vi.fn(() => ({ observe: vi.fn(), disconnect: vi.fn(), unobserve: vi.fn() })),
  )
})

describe('ProjectsView', () => {
  it('renders a card for each project', () => {
    const wrapper = mount(ProjectsView)
    expect(wrapper.findAll('[data-testid="project-card"]')).toHaveLength(3)
  })

  it('each card has an image strip', () => {
    const wrapper = mount(ProjectsView)
    expect(wrapper.findAll('[data-testid="card-image"]')).toHaveLength(3)
  })

  it('cards have hover lift class', () => {
    const wrapper = mount(ProjectsView)
    expect(wrapper.find('[data-testid="project-card"]').classes()).toContain('hover:-translate-y-1')
  })

  it('section heading has left-border accent', () => {
    const wrapper = mount(ProjectsView)
    expect(wrapper.find('h2').classes()).toContain('border-l-2')
  })

  it('cards have scroll-hidden class', () => {
    const wrapper = mount(ProjectsView)
    expect(wrapper.findAll('[data-testid="project-card"]')[0].classes()).toContain('scroll-hidden')
  })
})
```

- [ ] **Step 2: Run tests — expect failure**

Run: `npm run test:unit -- --run`
Expected: FAIL — testids and hover class not present

- [ ] **Step 3: Replace ProjectsView.vue**

Replace the entire contents of `src/components/views/ProjectsView.vue`:

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { useScrollAnimate } from '@/composables/useScrollAnimate'

const projects = [
  {
    title: 'Beats and Bolts',
    description:
      'A rhythm-based action game set in a railway factory during the Industrial Revolution. Play as a worker who is trying to get his job back after recently being replaced by machines, all while abiding to the rhythmic rule of the factory.',
    tags: ['Unity', 'C#', 'FMOD'],
    link: 'https://github.com/',
  },
  {
    title: 'Covid Go Away',
    description:
      'Web-based application in which 2-5 players race to collect points by performing the best actionable tasks, in order to prevent the spread of COVID-19. Whichever player has the most points after 3 fast-paced rounds is the winner.',
    tags: ['JavaScript', 'ExpressJS', 'PostgreSQL', 'SQL', 'Socket.io', 'Docker'],
    link: 'https://github.com/',
  },
  {
    title: 'RushMate App',
    description: 'A short description of what this project does and why you built it.',
    tags: ['ReactNative', 'JavaScript', 'ExpressJS', 'MongoDB'],
    link: '',
  },
]

const headerRef = ref<HTMLElement | null>(null)
const cardRefs = ref<HTMLElement[]>([])
useScrollAnimate(() => (headerRef.value ? [headerRef.value] : []))
useScrollAnimate(() => cardRefs.value, { staggerMs: 80 })
</script>

<template>
  <section id="projects" class="py-24 px-8 max-w-4xl mx-auto">
    <h2
      ref="headerRef"
      class="scroll-hidden text-sm uppercase tracking-widest text-primary mb-10 border-l-2 border-primary pl-3"
    >
      Projects
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div
        v-for="(project, i) in projects"
        :key="project.title"
        :ref="(el) => { if (el) cardRefs.value[i] = el as HTMLElement }"
        data-testid="project-card"
        class="scroll-hidden card bg-base-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 overflow-hidden"
      >
        <div
          data-testid="card-image"
          class="h-14 bg-gradient-to-r from-base-200 to-base-300"
        ></div>
        <div class="card-body">
          <h3 class="card-title text-base-content">{{ project.title }}</h3>
          <p class="text-base-content/70 text-sm">{{ project.description }}</p>
          <div class="flex flex-wrap gap-2 mt-2">
            <span
              v-for="tag in project.tags"
              :key="tag"
              class="badge badge-outline badge-primary text-xs"
            >{{ tag }}</span>
          </div>
          <div v-if="project.link" class="card-actions justify-end mt-4">
            <a :href="project.link" target="_blank" class="btn btn-primary btn-sm">View →</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
```

- [ ] **Step 4: Run tests — expect pass**

Run: `npm run test:unit -- --run`
Expected: ProjectsView tests pass, all prior tests still pass

- [ ] **Step 5: Commit**

```bash
git add src/components/views/ProjectsView.vue src/components/views/__tests__/ProjectsView.spec.ts
git commit -m "feat: add card image strip, hover lift, and scroll animation to ProjectsView"
```

---

### Task 10: Update SkillsView with color-coded badges, full-width bg, scroll animation

**Files:**
- Modify: `src/components/views/SkillsView.vue`
- Create: `src/components/views/__tests__/SkillsView.spec.ts`

- [ ] **Step 1: Write the tests**

Create `src/components/views/__tests__/SkillsView.spec.ts`:

```typescript
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import SkillsView from '@/components/views/SkillsView.vue'

beforeEach(() => {
  vi.stubGlobal(
    'IntersectionObserver',
    vi.fn(() => ({ observe: vi.fn(), disconnect: vi.fn(), unobserve: vi.fn() })),
  )
})

describe('SkillsView', () => {
  it('section uses bg-base-200', () => {
    const wrapper = mount(SkillsView)
    expect(wrapper.find('section').classes()).toContain('bg-base-200')
  })

  it('section heading has left-border accent', () => {
    const wrapper = mount(SkillsView)
    expect(wrapper.find('h2').classes()).toContain('border-l-2')
  })

  it('Language badges are filled (badge-primary, no badge-outline)', () => {
    const wrapper = mount(SkillsView)
    const badge = wrapper.find('[data-testid="badge-lang"]')
    expect(badge.classes()).toContain('badge-primary')
    expect(badge.classes()).not.toContain('badge-outline')
  })

  it('Framework badges are outlined (badge-outline)', () => {
    const wrapper = mount(SkillsView)
    expect(wrapper.find('[data-testid="badge-fw"]').classes()).toContain('badge-outline')
  })

  it('Tool badges use soft bg-base-100 fill', () => {
    const wrapper = mount(SkillsView)
    const badge = wrapper.find('[data-testid="badge-tool"]')
    expect(badge.classes()).toContain('bg-base-100')
    expect(badge.classes()).not.toContain('badge-primary')
  })

  it('skill groups have scroll-hidden class', () => {
    const wrapper = mount(SkillsView)
    expect(wrapper.findAll('.scroll-hidden').length).toBeGreaterThan(0)
  })
})
```

- [ ] **Step 2: Run tests — expect failure**

Run: `npm run test:unit -- --run`
Expected: FAIL — testids and badge classes not present

- [ ] **Step 3: Replace SkillsView.vue**

Replace the entire contents of `src/components/views/SkillsView.vue`:

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { useScrollAnimate } from '@/composables/useScrollAnimate'

const skillGroups = [
  {
    category: 'Languages',
    badgeStyle: 'lang' as const,
    skills: ['TypeScript', 'JavaScript', 'Java', 'Python', 'C/C++', 'C#', 'HTML/CSS'],
  },
  {
    category: 'Frameworks & Libraries',
    badgeStyle: 'fw' as const,
    skills: ['Vue', 'React', 'Node.js', 'ExpressJS', 'Angular', 'ReactNative', 'Unity', 'Spring', 'Django'],
  },
  {
    category: 'Tools',
    badgeStyle: 'tool' as const,
    skills: ['Git', 'Docker', 'PostgreSQL', 'Latex', 'MongoDB', 'Gen AI'],
  },
]

const headerRef = ref<HTMLElement | null>(null)
const groupRefs = ref<HTMLElement[]>([])
useScrollAnimate(() => (headerRef.value ? [headerRef.value] : []))
useScrollAnimate(() => groupRefs.value, { staggerMs: 120 })
</script>

<template>
  <section id="skills" class="bg-base-200">
    <div class="py-24 px-8 max-w-2xl mx-auto">
      <h2
        ref="headerRef"
        class="scroll-hidden text-sm uppercase tracking-widest text-primary mb-10 border-l-2 border-primary pl-3"
      >
        Skills
      </h2>
      <div class="flex flex-col gap-8">
        <div
          v-for="(group, i) in skillGroups"
          :key="group.category"
          :ref="(el) => { if (el) groupRefs.value[i] = el as HTMLElement }"
          class="scroll-hidden"
        >
          <h3 class="text-xs uppercase tracking-widest text-primary/60 mb-4">
            {{ group.category }}
          </h3>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="skill in group.skills"
              :key="skill"
              :data-testid="`badge-${group.badgeStyle}`"
              class="badge text-sm py-3 px-4"
              :class="{
                'badge-primary': group.badgeStyle === 'lang',
                'badge-outline badge-primary': group.badgeStyle === 'fw',
                'bg-base-100 text-primary border border-base-300': group.badgeStyle === 'tool',
              }"
            >{{ skill }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
```

- [ ] **Step 4: Run the full test suite**

Run: `npm run test:unit -- --run`
Expected: all tests across all spec files pass (0 failures)

- [ ] **Step 5: Run type-check**

Run: `npm run type-check`
Expected: no TypeScript errors

- [ ] **Step 6: Full visual verification**

Run: `npm run dev`
Open `http://localhost:5173` and scroll through the page end-to-end:

- **Hero:** gradient bg, three subtle teal shapes, "Jordan." name fades in first, then eyebrow label, then subline, then LinkedIn pill; avatar slides in from right
- **Nav:** a `border-b` line appears on the navbar once you scroll past the hero
- **About:** section label has left teal border; second paragraph has left teal border accent; both fade in on scroll
- **Experience:** full-width `bg-base-200` background; section/sub-headings fade in; timeline dots have white ring; connecting line draws downward on scroll
- **Projects:** alternating back to light bg; cards have a teal gradient strip at top; staggered card fade-in; hover makes cards lift with shadow
- **Skills:** full-width `bg-base-200`; Languages = filled teal badges; Frameworks = outlined teal; Tools = soft teal fill; groups stagger in on scroll

- [ ] **Step 7: Commit**

```bash
git add src/components/views/SkillsView.vue src/components/views/__tests__/SkillsView.spec.ts
git commit -m "feat: add color-coded badges, full-width bg, and scroll animation to SkillsView"
```
