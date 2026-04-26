<script setup lang="ts"></script>

<template>
  <section
    id="hero"
    class="h-screen flex flex-col justify-between px-8 py-10 bg-base-100"
  >
    <div></div>

    <div>
      <h1 class="text-6xl font-bold text-base-content">Jordan</h1>
      <p class="text-lg text-primary mt-2">Software developer</p>
    </div>

    <div
      class="flex justify-between items-center border-t border-base-300 pt-4 text-sm text-base-content/60"
    >
      <span>University of Toronto</span>
      <div class="flex gap-6">
        <a
          href="https://github.com/"
          target="_blank"
          class="hover:text-primary transition-colors"
          >GitHub</a
        >
        <a
          href="https://linkedin.com/in/"
          target="_blank"
          class="hover:text-primary transition-colors"
          >LinkedIn</a
        >
      </div>
    </div>
  </section>
</template>
