<script lang="ts" setup>
import MarkdownIt from 'markdown-it'
import type Renderer from 'markdown-it/lib/renderer'
import 'primeicons/primeicons.css'
import Sidebar from 'primevue/sidebar'

const visibleFull = ref(false)
const modName = ref('pig mod-1.16.4')
const htmlContent = ref('')

async function load() {
  const readme = await fetch('https://raw.githubusercontent.com/Voxelum/Sentry/master/README.md', {
    mode: 'cors',
  }).then(e => e.text())

  const md = new MarkdownIt()
  md.renderer.rules.image = (token, i, op, self: Renderer) => {
    for (const t of token) {
      if (t.tag === 'img') {
        for (const a of t.attrs) {
          if (a[0] === 'src' && a[1])
            a[1] = `https://raw.githubusercontent.com/Voxelum/Sentry/master/${a[1]}`
        }
      }
    }
    return token.filter(b => b.tag === 'img').map(t => `<${t.tag} class="md-image" ${t.attrs?.map(a => `${a[0]}=${a[1]}`).join(' ')} >`).join('')
  }
  htmlContent.value = md.render(readme)
}

// function swtichImageUrl() {
//   const obj = document.getElementById('md')
//   if (typeof (obj) != 'undefined') {
//     for (let i = 0; i < obj?.childElementCount; i++) {
//       const oldUrl = obj?.getAttribute('src')
//       document.getElementById('md')?.setAttribute('src', `https://raw.githubusercontent.com/Voxelum/Sentry/master/${oldUrl}`)
//     }
//   }
// }
load()
// swtichImageUrl()

// function convert(o: object) {
//   const props = Object.getOwnPropertyDescriptors(Object.getPrototypeOf(o))
//   const state: any = { ...o }
//   for (const [key, prop] of Object.entries(props)) {
//     if (prop.get)
//       state[key] = computed(prop.get.bind(state))
//   }
//   return state
// }

function jumpDetail() {
  visibleFull.value = true
}
function download() {
  window.open('https://www.curseforge.com/minecraft/mc-mods/sentry/download/3737171')
}
function github() {
  window.open('https://www.baidu.com')
}
</script>

<template>
  <div class="flex px-20 gap-5 flex text-center">
    <div>
      <img src="../assets/1.jpg" width="400" hover:cursor-pointer @click="jumpDetail">
      <div>{{ modName }}</div>
    </div>
    <Sidebar
      v-model:visible="visibleFull" :base-z-index="1000" position="bottom"
      class=" p-sidebar bg-light-900 text-gray-700 dark:bg-dark-500 overflow-auto flex"
    >
      <div class="flex">
        <div id="md" class="m-5" v-html="htmlContent" />
        <div class="flex gap-20">
          <div
            class="flex p-1 gap-1 bg-blue-500 text-white w-50 h-50 rounded-full items-center justify-center hover:cursor-pointer"
            @click="download"
          >
            <div i-carbon-download />
            <div>Download</div>
          </div>
          <div
            class="flex p-1 gap-1 bg-blue-500 text-white w-50 h-50 rounded-full rounded items-center justify-center hover:cursor-pointer"
            @click="github"
          >
            <div i-carbon-logo-github />
            <div>Github</div>
          </div>
        </div>
      </div>
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

.md-image {
  min-width: 300px;
  max-width: 800px;
}

.p-sidebar{
  height:45rem;
}
</style>
