<script setup lang="ts">
defineProps<{
  items: { title: string; subtitle: string; date: string }[]
}>()
</script>

<template>
  <ul class="flex flex-col gap-0">
    <li v-for="(item, i) in items" :key="i" class="flex gap-4 pb-6 last:pb-0">
      <div class="flex flex-col items-center">
        <div class="w-2.5 h-2.5 rounded-full bg-primary mt-1.5 shrink-0"></div>
        <div
          v-if="i < items.length - 1"
          class="w-0.5 flex-1 bg-base-300 mt-1"
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
