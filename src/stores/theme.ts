import { defineStore } from 'pinia'
import darkCss from 'primevue/resources/themes/arya-orange/theme.css'
import lightCss from 'primevue/resources/themes/tailwind-light/theme.css'
import { isDark } from '~/composables'

export const usePrimeVueThemeStore = defineStore('primevue', () => {
  const themeStyle = computed(() => isDark.value ? darkCss : lightCss)
  let styleTag = document.createElement('style')
  styleTag.innerHTML = themeStyle.value
  styleTag.setAttribute('id', 'theme-style')
  styleTag.setAttribute(isDark.value ? 'dark' : 'light', '')
  document.head.appendChild(styleTag)
  watch(themeStyle, (text) => {
    const newStyle = document.createElement('style')
    newStyle.innerHTML = text
    newStyle.setAttribute('id', 'theme-style')
    newStyle.setAttribute(isDark.value ? 'dark' : 'light', '')
    styleTag.remove()
    document.head.appendChild(newStyle)
    styleTag = newStyle
  })
})
