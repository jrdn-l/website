<script setup lang="ts">
import NavHeader from '@/components/NavHeader.vue'
import HeroSection from '@/components/HeroSection.vue'
import About from '@/components/views/AboutView.vue'
import Experience from '@/components/views/ExperienceView.vue'
import Projects from '@/components/views/ProjectsView.vue'
import Skills from '@/components/views/SkillsView.vue'
import { ref, provide } from 'vue'

const isDark = ref(false)
const preferredTheme = localStorage.getItem('theme')
provide('isDark', isDark)
if (preferredTheme == null) {
  const prefersDarkMode = window.matchMedia(
    '(prefers-color-scheme: dark)',
  ).matches
  if (prefersDarkMode) {
    isDark.value = true
  }
  localStorage.setItem('theme', prefersDarkMode ? 'dark' : 'light')
} else if (preferredTheme === 'dark') {
  isDark.value = true
}
</script>

<template>
  <main :data-theme="isDark ? 'teal-dark' : 'teal-light'">
    <NavHeader />
    <div class="flex flex-col col-span-2">
      <HeroSection />
      <About />
      <Experience />
      <Projects />
      <Skills />
    </div>
  </main>
</template>
