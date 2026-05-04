<script setup lang="ts">
import { ref } from 'vue'
import { useScrollAnimate } from '@/composables/useScrollAnimate'

const projects = [
  {
    title: 'Beats and Bolts',
    description:
      'a rhythm-based action game set in a railway factory during the Industrial Revolution. Play as a worker who is trying to get his job back after recently being replaced by machines, all while abiding to the rhythmic rule of the factory. Your goal is to sneak in and battle against the central machine that is taking control in order to save the factory',
    tags: ['Unity', 'C#', 'FMOD'],
    link: 'https://github.com/notjustine/Lucid-Mystery',
  },
  {
    title: 'Covid Go Away',
    description:
      'Web-based application in which 2-5 players race to collect points by performing the best actionable tasks, in order to prevent the spread of COVID-19. Whichever player has the most points after 3 fast-paced rounds is the winner.',
    tags: [
      'JavaScript',
      'ExpressJS',
      'PostgreSQL',
      'SQL',
      'Socket.io',
      'Docker',
    ],
    link: 'https://github.com/jrdn-l/finalprojectw22-allaboardgames',
  },
  {
    title: 'RushMate App',
    description:
      'A short description of what this project does and why you built it.',
    tags: ['ReactNative', 'JavaScript', 'ExpressJS', 'MongoDB'],
    link: 'https://github.com/RushMate/RushMate',
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
        :ref="
          el => {
            if (el) cardRefs[i] = el as HTMLElement
          }
        "
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
              >{{ tag }}</span
            >
          </div>
          <div v-if="project.link" class="card-actions justify-end mt-4">
            <a
              :href="project.link"
              target="_blank"
              class="btn btn-primary btn-sm"
              >View →</a
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
