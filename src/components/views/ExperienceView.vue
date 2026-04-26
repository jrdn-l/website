<script setup lang="ts">
import VerticalSteps from '@/components/VerticalSteps.vue'

const workItems = [
  { title: 'Role Title', subtitle: 'Company Name', date: 'Year – Present' },
  { title: 'Role Title', subtitle: 'Company Name', date: 'Year – Year' },
]

const educationItems = [
  {
    title: 'B.Sc. Computer Science',
    subtitle: 'University of Toronto',
    date: '2019 – 2023',
  },
]
</script>

<template>
  <section id="experience" class="py-24 px-8 max-w-2xl mx-auto">
    <h2 class="text-sm uppercase tracking-widest text-primary mb-10">Experience</h2>

    <div class="mb-12">
      <h3 class="text-xs uppercase tracking-widest text-primary/60 mb-6">Work</h3>
      <VerticalSteps :items="workItems" />
    </div>

    <div>
      <h3 class="text-xs uppercase tracking-widest text-primary/60 mb-6">Education</h3>
      <VerticalSteps :items="educationItems" />
    </div>
  </section>
</template>
