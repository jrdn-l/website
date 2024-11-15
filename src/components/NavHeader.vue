<script setup lang="ts">
import ThemeToggle from '@/components/ThemeToggle.vue'
// MAYBE ADD IN VUE ROUTER IDK
</script>
<template>
  <div class="navbar bg-base-100 fixed">
    <div class="navbar-start">
      <!-- Mobile Nav Bar -->
      <div class="dropdown">
        <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </div>
        <ul
          tabindex="0"
          class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
        >
          <li><a href="#about">About Me</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
        </ul>
      </div>
      <!-- Title -->
      <a class="btn btn-ghost text-xl px-16">Me</a>
    </div>

    <!-- Regular Nav Bar -->
    <div class="navbar-end hidden lg:flex pr-12">
      <ul class="menu menu-horizontal px-1">
        <li class="py-1"><a href="#about">About Me</a></li>
        <li class="py-1"><a href="#experience">Experience</a></li>
        <li class="py-1"><a href="#projects">Projects</a></li>
        <li><ThemeToggle /></li>
      </ul>
    </div>
  </div>
</template>
