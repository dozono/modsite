<script setup lang="ts">
// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,

import { usePrimeVueThemeStore } from './stores/theme'

// they will be rendered correctly in the html results with vite-ssg
usePrimeVueThemeStore()

useHead({
  title: 'Vitesse',
  meta: [
    { name: 'description', content: 'Opinionated Vite Starter Template' },
  ],
})
</script>

<template>
  <router-view class="h-full" />
</template>
