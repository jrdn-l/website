<script setup lang="ts">
const skillGroups = [
  {
    category: 'Languages',
    skills: ['TypeScript', 'JavaScript', 'Python', 'SQL'],
  },
  {
    category: 'Frameworks & Libraries',
    skills: ['Vue', 'React', 'Node.js', 'FastAPI'],
  },
  {
    category: 'Tools',
    skills: ['Git', 'Docker', 'PostgreSQL', 'Vite'],
  },
]
</script>

<template>
  <section id="skills" class="py-24 px-8 max-w-2xl mx-auto">
    <h2 class="text-sm uppercase tracking-widest text-primary mb-10">Skills</h2>
    <div class="flex flex-col gap-8">
      <div v-for="group in skillGroups" :key="group.category">
        <h3 class="text-xs uppercase tracking-widest text-primary/60 mb-4">{{ group.category }}</h3>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="skill in group.skills"
            :key="skill"
            class="badge badge-outline text-base-content/80 text-sm py-3 px-4"
          >{{ skill }}</span>
        </div>
      </div>
    </div>
  </section>
</template>
