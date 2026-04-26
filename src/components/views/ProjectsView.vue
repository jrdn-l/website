<script setup lang="ts">
const projects = [
  {
    title: 'Beats and Bolts',
    description:
      'a rhythm-based action game set in a railway factory during the Industrial Revolution. Play as a worker who is trying to get his job back after recently being replaced by machines, all while abiding to the rhythmic rule of the factory. Your goal is to sneak in and battle against the central machine that is taking control in order to save the factory',
    tags: ['Unity', 'C#', 'FMOD'],
    link: 'https://github.com/',
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
    link: 'https://github.com/',
  },
  {
    title: 'RushMate App',
    description:
      'A short description of what this project does and why you built it.',
    tags: ['ReactNative', 'JavaScript', 'ExpressJS', 'MongoDB'],
    link: '',
  },
]
</script>

<template>
  <section id="projects" class="py-24 px-8 max-w-4xl mx-auto">
    <h2 class="text-sm uppercase tracking-widest text-primary mb-10">
      Projects
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div
        v-for="project in projects"
        :key="project.title"
        class="card bg-base-200 shadow-sm hover:shadow-md transition-shadow"
      >
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
