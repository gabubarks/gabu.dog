<template>
<main class="text-slate-900 font-light tracking-wide">
  <div class="flex grow flex-col items-center justify-center p-5">
    <div class="container max-w-screen-lg p-10 rounded-2xl bg-gradient-to-b from-indigo-50 to-indigo-200 text-center">
      <img class="mx-auto rounded-xl max-w-[300px] mb-4 border-slate-100" src="/static/img/pfp_500px.png">
      <h1 class="text-6xl text-indigo-600 mb-2">hi!! i'm gabu!!</h1>
      <p class="text-2xl mb-3">
        {{ age  }} ⋅ he/him ⋅ samoyed taur furry
      </p>
      <p class="mb-16">social links ↓↓↓ after my cool ref sheet :3</p>
      <a href="/static/img/gabu-ref-sheet-2022.jpg"><img class="mx-auto mb-2 rounded-lg border-2 border-slate-100" src="/static/img/gabu-ref-sheet-2022.jpg"></a>
      <p class="text-xl mb-16">
        ref sheet art by <a class="text-indigo-600" href="https://twitter.com/DDen009">@DDen009</a>
      </p>

      <p class="text-2xl mb-8">
        you can find me on these websites
      </p>
      <ul class="flex flex-col justify-center max-w-xl mx-auto text-xl">
        <a href="https://cohost.org/gabu">
          <li class="bg-indigo-100 p-4 rounded-xl mb-1 font-medium text-indigo-600">cohost!!! <br><small>(my new home!)</small></li>
        </a>
        <a rel="me" href="https://chitter.xyz/@gabu">
          <li class="bg-indigo-100 p-4 rounded-xl mb-1 font-medium text-indigo-600">mastodon! <br><small>(my other new home!)</small></li>
        </a>
        <a href="https://twitch.tv/gabubarks">
          <li class="bg-indigo-100 p-4 rounded-xl mb-1 font-medium text-indigo-600">twitch! <br><small>(I STREAM!!! come watch me sometime!)</small></li>
        </a>
        <small class="mb-2">also there's these sites i guess</small>
        <a href="https://twitter.com/gabubarks">
          <li class="bg-indigo-100 p-4 rounded-xl mb-1 font-medium text-indigo-600 line-through">twitter <br><small>(leaving!! bye!!!!)</small></li>
        </a>
        <a href="https://www.furaffinity.net/user/wildgabu/">
            <li class="bg-indigo-100 p-4 rounded-xl mb-1 font-medium text-indigo-600">furaffinity</li>
        </a>
        <a href="https://toyhou.se/gabubarks">
            <li class="bg-indigo-100 p-4 rounded-xl mb-1 font-medium text-indigo-600">toyhouse</li>
        </a>
        <a href="https://www.tumblr.com/gabubarks">
          <li class="bg-indigo-100 p-4 rounded-xl mb-1 font-medium text-indigo-600">tumblr</li>
        </a>
        <a href="https://www.instagram.com/gabubarks/">
            <li class="bg-indigo-100 p-4 rounded-xl mb-1 font-medium text-indigo-600">instagram</li>
        </a>
        <a href="https://github.com/gabubarks">
          <li class="bg-indigo-100 p-4 rounded-xl mb-1 font-medium text-indigo-600">github</li>
        </a>
      </ul>
    </div>
  </div>
</main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Links from '../components/Links.vue'
import { differenceInYears } from 'date-fns'

export default defineComponent({
    components: {
        Links,
    },
    computed: {
        age () {
            return differenceInYears(
                new Date(),
                new Date(1991, 12, 11),
            )
        },
    },
})
</script>
