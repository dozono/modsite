<script setup lang="ts">
import logoUrl from '../assets/sign_dark.png'
import logoUrlLight from '../assets/sign.png'
import { isDark, toggleDark } from '~/composables'

const { t } = useI18n()
const logo = computed(() => isDark.value ? logoUrlLight : logoUrl)
// const count = ref(0)
// const logoSize = computed(() => (count.value + 1) * 20)
const router = useRouter()
function jumpMods() {
  router.push('/mods/')
}
function jumpMemo() {
  router.push('/memo/')
}
function jumpHome() {
  router.push('/')
}
</script>
<template>
  <main
    class="main flex flex-col text-centertext-gray-700 100vh dark:text-gray-200 z-100"
    style="font-family: ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif)"
  >
    <div class="flex shadow px-4 header items-center w-100vw fixed z-100 solid bg-light-100 dark:bg-dark-900">
      <div class="p-4">
        <img
          :src="logo"
          :width="80"
          style="filter: contrast(300%) brightness(103%) drop-shadow(0.5px 0.5px 0.5px white);"
          hover="cursor-pointer"
          @click="jumpHome"
        >
      </div>
      <div class="flex flex-grow" />
      <div class="flex pr-5 text-gray-500 gap-4">
        <div class="cursor-pointer text-xl hover:text-gray-400" @click="jumpMods">
          MODS
        </div>
        <div class="cursor-pointer text-xl hover:text-gray-400" @click="jumpMemo">
          MEMO
        </div>
        <div
          :title="t('header.contact')"
          i-carbon-email
          style="font-size: 1.5rem; color: gray;"
          hover="cursor-pointer bg-gray-400"
        />
        <a class="icon-btn" rel="noreferrer" href="https://github.com/dozono?tab=repositories" target="_blank" title="GitHub" style="font-size:1.5rem;color: gray;">
          <div i-carbon-logo-github />
        </a>
        <button class="icon-btn !outline-none" :title="t('button.toggle_dark')" style="font-size: 1.5rem;color: gray;" @click="toggleDark()">
          <div i="carbon-sun dark:carbon-moon" />
        </button>
      </div>
    </div>

    <router-view />
  </main>
</template>
