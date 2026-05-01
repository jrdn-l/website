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
          :ref="(el) => { if (el) groupRefs[i] = el as HTMLElement }"
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
