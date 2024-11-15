<script setup lang="ts"></script>

<template>
  <ul class="steps steps-vertical">
    <li class="step" :class="isActive ? 'step-primary' : ''">
      <a class="btn btn-ghost"> About Me </a>
    </li>
    <li class="step" :class="isActive ? 'step-primary' : ''">
      <a class="btn btn-ghost">Experience</a>
    </li>
    <li class="step" :class="isActive ? 'step-primary' : ''">
      <a class="btn btn-ghost"> Projects </a>
    </li>
  </ul>
</template>
