<script setup lang="ts">
import { ref } from 'vue'
import { useScrollAnimate } from '@/composables/useScrollAnimate'

const animatedEls: HTMLElement[] = []
useScrollAnimate(() => animatedEls)
</script>

<template>
  <section id="about" class="py-24 px-8 max-w-2xl mx-auto">
    <h2
      :ref="(el) => { if (el) animatedEls[0] = el as HTMLElement }"
      class="scroll-hidden text-sm uppercase tracking-widest text-primary mb-6 border-l-2 border-primary pl-3"
    >
      About
    </h2>
    <p
      :ref="(el) => { if (el) animatedEls[1] = el as HTMLElement }"
      class="scroll-hidden text-base-content text-lg leading-relaxed mb-4"
    >
      I'm a software developer currently working at Amazon. I graduated from the
      University of Toronto with a specialization in computer science, where I
      graduated with distinction.
    </p>
    <p
      :ref="(el) => { if (el) animatedEls[2] = el as HTMLElement }"
      class="scroll-hidden text-base-content/70 leading-relaxed border-l-2 border-primary pl-3"
    >
      Outside of work I keep it simple — video games, anime, and weekend walks.
      I've also been making my way to the gym, even if it's not always the
      highlight of my day. I also appreciate good food and have a soft spot for
      a good bubble tea, coffee, matcha, or hojicha.
    </p>
  </section>
</template>
