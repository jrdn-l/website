<script setup lang="ts">
import { ref } from 'vue'
import VerticalSteps from '@/components/VerticalSteps.vue'
import { useScrollAnimate } from '@/composables/useScrollAnimate'

const workItems = [
  {
    title: 'Software Development Engineer',
    subtitle: 'Amazon',
    date: '2025 – Present',
  },
  {
    title: 'Software Developer (Intern)',
    subtitle: 'SmartTrade Technologies',
    date: '2022 – 2023',
  },
]

const educationItems = [
  {
    title: 'B.Sc. Computer Science',
    subtitle: 'University of Toronto',
    date: '2019 – 2024',
  },
]

const animatedEls = ref<HTMLElement[]>([])
useScrollAnimate(() => animatedEls.value, { staggerMs: 100 })
</script>

<template>
  <section id="experience" class="bg-base-200">
    <div class="py-24 px-8 max-w-2xl mx-auto">
      <h2
        :ref="
          el => {
            if (el) animatedEls[0] = el as HTMLElement
          }
        "
        class="scroll-hidden text-sm uppercase tracking-widest text-primary mb-10 border-l-2 border-primary pl-3"
      >
        Experience
      </h2>

      <div class="mb-12">
        <h3
          :ref="
            el => {
              if (el) animatedEls[1] = el as HTMLElement
            }
          "
          class="scroll-hidden text-xs uppercase tracking-widest text-primary/60 mb-6"
        >
          Work
        </h3>
        <VerticalSteps :items="workItems" />
      </div>

      <div>
        <h3
          :ref="
            el => {
              if (el) animatedEls[2] = el as HTMLElement
            }
          "
          class="scroll-hidden text-xs uppercase tracking-widest text-primary/60 mb-6"
        >
          Education
        </h3>
        <VerticalSteps :items="educationItems" />
      </div>
    </div>
  </section>
</template>
