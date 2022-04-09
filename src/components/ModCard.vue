<script lang="ts" setup>
import Sidebar from 'primevue/sidebar'
const visibleFull = ref(false)
function jumpDetail() {
  visibleFull.value = true
}
const modName = ref('pig mod-1.16.4')
</script>

<template>
  <div class="flex px-20 gap-5 flex text-center">
    <div>
      <img src="../assets/1.jpg" width="400" hover:cursor-pointer @click="jumpDetail">
      <div>{{ modName }}</div>
    </div>
    <Sidebar
      v-model:visible="visibleFull"
      :base-z-index="1000"
      position="bottom"
      class="p-sidebar-lg bg-light-900 text-gray-700 dark:bg-dark-500"
    >
      <h3>Full ScreenFull ScreenFull ScreenFull ScreenFull Screen</h3>
    </Sidebar>
    <div>
      <img src="../assets/2.jpg" width="400">
      <div>pig mod</div>
    </div>
    <div>
      <img src="../assets/3.jpg" width="400">
      <div>pig mod</div>
    </div>
    <div>
      <img src="../assets/4.jpg" width="400">
      <div>pig mod</div>
    </div>
  </div>
</template>
<style>
.p-sidebar-icon {
  @apply text-gray-700;
}
</style>
