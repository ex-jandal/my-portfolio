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

<svelte:head>
  <link rel="icon" href={favicon} />
  <title>Abu Jandal - The humble servant of Allah</title>
</svelte:head>

<div class="max-w-257 m-auto">
  <header class="bg-gruvbox-dark3 shadow-gruvbox-bright-orange shadow-sm text-gruvbox-bright-orange m-5 rounded-sm">
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
            <div class="text-gruvbox-bright-blue flex flex-row gap-1">
              <span class="text-gruvbox-bright-green">󱆃 cd</span>
              <span class="text-gruvbox-bright-green sm:ml-5 ml-2">[</span>
              <button onclick={() => menu_clecked = true} 
                class="sm:hidden relative scale-[80%] text-gruvbox-bright-blue hover:cursor-pointer bg-gruvbox-dark1 underline underline-offset-2 hover:opacity-100 transition-all duration-200 rounded-xl px-3 after:contect-[''] after:absolute after:top-0 after:left-0 after:h-full after:w-full after:bg-gruvbox-bright-blue after:rounded-xl after:animate-ping">...More</button>

              {#if (menu_clecked.valueOf())}
                <button in:blur={{ duration: 400 }} out:blur={{ duration: 400 }} onclick={() => menu_clecked = false} class="fixed h-screen w-screen top-0 left-0 bg-gruvbox-dark1 opacity-50">&af;
                </button>
                  <button onclick={() => menu_clecked = false} in:slide={{ duration: 400 }} out:blur={{ duration: 400 }} class="absolute text-start w-40 top-20 left-30 bg-gruvbox-dark0 flex flex-col gap-3 items-baseline p-4 border border-gruvbox-orange rounded-sm">
                    <a class="block w-full rounded-xl px-2 py-0.5 {(page.url.pathname === '/') ? 'bg-gruvbox-bright-blue text-gruvbox-dark0' : ''}" href="/">./</a>
                    <a class="block w-full rounded-xl px-2 py-0.5 {(page.url.pathname === '/my-dotfiles') ? 'bg-gruvbox-bright-blue text-gruvbox-dark0' : ''}" href="/my-dotfiles">./my-dots</a>
                    <a class="block w-full rounded-xl px-2 py-0.5 {(page.url.pathname === '/projects') ? 'bg-gruvbox-bright-blue text-gruvbox-dark0' : ''}" href="/projects">./projects</a>
                    <a class="block w-full rounded-xl px-2 py-0.5 {(page.url.pathname === '/contact') ? 'bg-gruvbox-bright-blue text-gruvbox-dark0' : ''}" href="/contact">./contact</a>
                  </button>
              {/if}

              <div class="text-gruvbox-bright-blue hidden sm:flex flex-row gap-6">
                <a class=" rounded-xl px-2 {(page.url.pathname === '/') ? 'bg-gruvbox-bright-blue text-gruvbox-dark0' : ''}" href="/">
                  ./<span class="text-gruvbox-light2">,</span>
                </a>
                <a class=" rounded-xl px-2 {(page.url.pathname === '/my-dotfiles') ? 'bg-gruvbox-bright-blue text-gruvbox-dark0' : ''}" href="/my-dotfiles">
                  ./my-dots<span class="text-gruvbox-light2">,</span>
                </a>
                <a class=" rounded-xl px-2 {(page.url.pathname === '/projects') ? 'bg-gruvbox-bright-blue text-gruvbox-dark0' : ''}" href="/projects">
                  ./projects<span class="text-gruvbox-light2">,</span>
                </a>
                <a class=" rounded-xl px-2 {(page.url.pathname === '/contact') ? 'bg-gruvbox-bright-blue text-gruvbox-dark0' : ''}" href="/contact">
                  ./contact
                </a>
              </div>
              <span class="text-gruvbox-bright-green">]</span>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-row items-center gap-2"></div>
    </nav>
  </header>

  <main class="m-5 mt-0 p-5 bg-gruvbox-dark1 rounded-sm">
    {@render children()}
    <footer>
      <p class="comment">// "Talk is cheap. Show me the code." — Linus Torvalds</p>
      <p class="comment">// All wrongs reversed. 󱤹 Copyleft 2026. </p>
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

<style>
a:hover {
  text-decoration: none;
}
a:playing {
  color: black;
}
</style>

