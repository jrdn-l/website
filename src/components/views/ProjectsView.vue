<script setup lang="ts">
const projects = [
  {
    title: 'Project Name',
    description: 'A short description of what this project does and why you built it.',
    tags: ['TypeScript', 'Vue', 'Node'],
    link: 'https://github.com/',
  },
  {
    title: 'Project Name',
    description: 'A short description of what this project does and why you built it.',
    tags: ['Python', 'FastAPI'],
    link: 'https://github.com/',
  },
  {
    title: 'Project Name',
    description: 'A short description of what this project does and why you built it.',
    tags: ['React', 'TypeScript'],
    link: '',
  },
]
</script>

<template>
  <section id="projects" class="py-24 px-8 max-w-4xl mx-auto">
    <h2 class="text-sm uppercase tracking-widest text-primary mb-10">Projects</h2>
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
