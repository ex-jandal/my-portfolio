<script lang="ts">
  import { slide, blur } from 'svelte/transition';
	import { page } from '$app/state';
	import { locales, localizeHref } from '$lib/paraglide/runtime';
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
  import favicon256 from '../lib/assets/favicon256.png';

  let menu_clecked = $state(false);

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<style>
a:hover {
  text-decoration: none;
}
a:playing {
  color: black;
}
</style>

<div class="max-w-257 m-auto">
  <header class="bg-gruvbox-dark3 shadow-gruvbox-bright-orange shadow-md text-gruvbox-bright-orange m-5">
    <nav class="flex flex-row justify-between items-center pl-2 pr-2 py-2">
      <div class="flex flex-row items-center gap-2">
          <img src="{favicon256}" class="h-12 hidden sm:inline pr-2 border-r border-gruvbox-green" alt="">
        <!-- <h1>It's me. Abu_jandal </h1> -->

        <div class="text-md">
          <div class="align-middle">
            <span class="text-gruvbox-bright-yellow text-[18.5px] bg-none"></span><span class="bg-gruvbox-bright-yellow text-gruvbox-dark0">󰪢 22s</span><span class="text-gruvbox-bright-yellow text-[18.5px] bg-none"></span><span class="text-gruvbox-light0">•</span><span class="text-gruvbox-bright-yellow text-[18.5px] bg-none"></span><span class="bg-gruvbox-bright-yellow text-gruvbox-dark0">󰉋  ../abu_jandal</span><span class="text-gruvbox-bright-yellow text-[18.5px] bg-none"></span><br/>
          </div>

          <div class="ml-4 flex flex-row">
            <img src="{favicon256}" class="h-6 inline sm:hidden pr-2 mr-2 border-r border-gruvbox-green" alt="">
            <div class="text-gruvbox-bright-green flex flex-row gap-2">
              <span>󱆃 cat</span>
              <button onclick={() => menu_clecked = true} 
                class="sm:hidden relative -translate-x-3 translate-y-0.5 scale-[60%] text-gruvbox-gray hover:cursor-pointer bg-gruvbox-dark1 opacity-70 hover:opacity-100 transition-all duration-200 rounded-xl px-3">󰇘</button>

              {#if (menu_clecked.valueOf())}
                <button in:slide={{ duration: 400 }} out:blur={{ duration: 400 }} onclick={() => menu_clecked = false} class="absolute h-screen w-screen top-0 left-0 backdrop-opacity-70">
                  <div class="absolute w-40 top-20 left-30 bg-gruvbox-dark0 flex flex-col items-baseline p-5 rounded-4xl">
                    <a href="/">./</a>
                    <a href="/projects">./projects</a>
                    <a href="/contact">./contact</a>
                  </div>
                </button>
              {/if}

              <div class="hidden sm:flex flex-row ml-5 gap-6">
                <a href="/">
                  ./ 
                </a>
                <a href="/projects">
                  ./projects
                </a>
                <a href="/contact">
                  ./contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-row items-center gap-2">
      </div>
    </nav>
  </header>

  <main class="m-5 mt-0 p-5 bg-gruvbox-dark1">
    {@render children()}
    <footer>
      <p class="comment">// "Talk is cheap. Show me the code." — Linus Torvalds</p>
      <p class="comment">// All wrongs reversed. 󱤹 Copyleft 2025. </p>
    </footer>
  </main>
  <div style="display:none">
    {#each locales as locale}
      <a href={localizeHref(page.url.pathname, { locale })}>
        {locale}
      </a>
    {/each}
  </div>
</div>

