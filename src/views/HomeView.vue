<template>
<main class="text-slate-900 font-light tracking-wide">
  <div class="flex grow flex-col items-center justify-center p-5">
    <div class="container max-w-screen-lg p-10 rounded-2xl bg-slate-100/75 text-center">
      <img class="mx-auto rounded-xl max-w-[300px] mb-4 border-slate-100" src="/static/img/pfp_500px.png">
      <h1 class="text-6xl text-gablue mb-2">hi!! i'm gabu!!</h1>
      <p class="text-2xl mb-16">
        30 | he/him
      </p>
      <img class="mx-auto mb-2 rounded-lg border-2 border-slate-100" src="/static/img/gabu-ref-sheet-2022.jpg">
      <p class="text-xl mb-16">
        art by <a class="text-gablue" href="https://twitter.com/DDen009">@DDen009</a>
        (<a class="text-gablue" href="/static/img/gabu-ref-sheet-2022.jpg">full size</a>)
      </p>
      
      <p class="text-2xl">
        you can find me on these websites
      </p>
      <p class="text-xl">
        <a class="text-gablue" href="https://twitter.com/gabubarks">Twitter</a>
        |
        <a class="text-gablue" href="https://www.furaffinity.net/user/wildgabu/">FurAffinity</a>
        |
        <a class="text-gablue" href="https://toyhou.se/gabubarks">Toyhouse</a>
        |
        <a class="text-gablue" href="https://github.com/gabubarks">GitHub</a>
      </p>
    </div>
  </div>
</main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Links from '../components/Links.vue'

export default defineComponent({
    components: {
        Links,
    },
})
</script>
