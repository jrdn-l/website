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
    <div
      data-testid="shape"
      class="absolute top-[-60px] right-[-50px] w-[220px] h-[220px] rounded-full bg-primary opacity-[0.07] pointer-events-none"
    ></div>
    <div
      data-testid="shape"
      class="absolute bottom-[30px] right-[80px] w-[120px] h-[120px] rounded-full bg-primary opacity-[0.06] pointer-events-none"
    ></div>
    <div
      data-testid="shape"
      class="absolute top-[60px] right-[140px] w-[60px] h-[60px] rounded-full bg-primary opacity-[0.10] pointer-events-none"
    ></div>

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
          Jordan Lin<span class="text-primary">.</span>
        </h1>
        <p
          class="hero-el text-sm text-primary/80 mt-2 font-medium"
          :class="{ 'hero-el--visible': loaded }"
          style="transition-delay: 250ms"
        >
          Amazon AWS· University of Toronto
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

      <img
        data-testid="avatar"
        src="/ghost.gif"
        alt="Avatar"
        class="hero-avatar-el w-[90px] h-[90px] rounded-full border-2 border-primary object-cover shrink-0 mb-4"
        :class="{ 'hero-avatar-el--visible': loaded }"
      />
    </div>

    <div
      class="flex justify-between items-center border-t border-base-300 pt-4 text-xs text-primary/60"
    >
      <span>Toronto, Canada</span>
      <span>Open to opportunities</span>
    </div>
  </section>
</template>
