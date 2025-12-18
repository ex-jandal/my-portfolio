<script lang="ts">
	import { page } from '$app/state';
	import { locales, localizeHref } from '$lib/paraglide/runtime';
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
  import favicon256 from '../lib/assets/favicon256.png';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<style>
  h1 {
    font-size: var(--text-xl);
  }
</style>

<div class="max-w-257 m-auto">
  <header class="bg-gruvbox-dark3 shadow-gruvbox-bright-orange shadow-md text-gruvbox-bright-orange m-5">
    <nav class="flex flex-row justify-between items-center pl-2 pr-4 py-2">
      <div class="flex flex-row items-center gap-2">
        <img src="{favicon256}" class="h-15 pr-2 border-r border-gruvbox-green" alt="">
        <!-- <h1>It's me. Abu_jandal </h1> -->

        <div class="text-xl">
          <div class="align-middle">
            <span class="text-gruvbox-bright-yellow text-[23.6px] bg-none"></span><span class="bg-gruvbox-bright-yellow text-gruvbox-dark0">󰪢 22s</span><span class="text-gruvbox-bright-yellow text-[23.6px] bg-none"></span><span class="text-gruvbox-light0">•</span><span class="text-gruvbox-bright-yellow text-[23.6px] bg-none"></span><span class="bg-gruvbox-bright-yellow text-gruvbox-dark0">󰉋  ../abu_jandal</span><span class="text-gruvbox-bright-yellow text-[23.6px] bg-none"></span><br/>
          </div>

          <div class="ml-4">
            <span class="text-gruvbox-bright-green"> letsfetch <span></span> </span>
          </div>
        </div>
      </div>
      <div class="flex flex-row items-center gap-2">
      </div>
    </nav>
  </header>

  <main class="m-5 p-5 bg-gruvbox-dark1">
    {@render children()}
  </main>
  <div style="display:none">
    {#each locales as locale}
      <a href={localizeHref(page.url.pathname, { locale })}>
        {locale}
      </a>
    {/each}
  </div>
</div>
