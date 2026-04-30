<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'

const props = defineProps<{
  items: { title: string; subtitle: string; date: string }[]
}>()

const containerRef = ref<HTMLElement | null>(null)
const visibleLines = reactive<boolean[]>([])

onMounted(() => {
  props.items.forEach((_, i) => {
    visibleLines[i] = false
  })
  if (!containerRef.value) return
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        props.items.forEach((_, i) => {
          setTimeout(() => {
            visibleLines[i] = true
          }, i * 250)
        })
        observer.disconnect()
      }
    },
    { threshold: 0.2 },
  )
  observer.observe(containerRef.value)
})
</script>

<template>
  <ul ref="containerRef" class="flex flex-col gap-0">
    <li v-for="(item, i) in items" :key="i" class="flex gap-4 pb-6 last:pb-0">
      <div class="flex flex-col items-center">
        <div
          data-testid="timeline-dot"
          class="w-2.5 h-2.5 rounded-full bg-primary ring-2 ring-base-100 mt-1.5 shrink-0 z-10"
        ></div>
        <div
          v-if="i < items.length - 1"
          data-testid="timeline-line"
          class="w-0.5 flex-1 mt-1 bg-primary/40 origin-top transition-transform duration-500"
          :class="visibleLines[i] ? 'scale-y-100' : 'scale-y-0'"
        ></div>
      </div>
      <div>
        <p class="font-semibold text-base-content">{{ item.title }}</p>
        <p class="text-sm text-primary">{{ item.subtitle }}</p>
        <p class="text-xs text-base-content/50 mt-0.5">{{ item.date }}</p>
      </div>
    </li>
  </ul>
</template>
