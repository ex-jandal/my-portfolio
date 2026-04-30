<script lang="ts">
  import { slide, blur } from 'svelte/transition';
  import { page } from '$app/state';
  // import { locales, localizeHref } from '$lib/paraglide/runtime';
  import './layout.css';
  // import favicon from '$lib/assets/favicon.svg';
  import aj_logo from '$lib/assets/AJ_brand.svg';
  // import favicon256 from '../lib/assets/favicon256.png';

  import { setLocale, getLocale } from "$lib/paraglide/runtime.js";
  import * as m from '$lib/paraglide/messages';
	import { PUBLIC_URL, PUBLIC_GOATCOUNTER_API } from '$env/static/public';
	import { onMount } from 'svelte';

  async function getTotalCommits(): Promise<number> {
    const url = `https://api.github.com/repos/ex-jandal/my-portfolio/commits?per_page=1`;
    
    try {
      const response = await fetch(url, {
        // headers: {
        //   "Accept": "application/vnd.github+json",
        //   // Best Practice: Always include a User-Agent or Auth token to avoid strict rate limiting
        //   // "Authorization": `Bearer ${process.env.GITHUB_TOKEN}` 
        // }
      });

      if (!response.ok) throw new Error(`GitHub API error: ${response.status}`);

      const linkHeader = response.headers.get("link");

      if (!linkHeader) {
        // If no Link header, there is only one page (meaning 0 or 1 commit)
        const commits: any = await response.json();
        return commits.length;
      }

      // Improved Regex: Handles different spacing/ordering in the Link header
      const match = linkHeader.match(/page=(\d+)>;\s*rel="last"/);
      return match ? parseInt(match[1], 10) : 1;
      
    } catch (error) {
      console.error("Failed to fetch commit count:", error);
      return 0;
    }
  }

  let views: string = $state("-");
  let commits: string | number = $state("-");

  onMount(async () => {
    const res = await fetch('https://ex-jandal.goatcounter.com/api/v0/stats/total', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${PUBLIC_GOATCOUNTER_API}`,
      }
      });
    const data: any = await res.json();
    views = data.total;
    commits = await getTotalCommits();
  });

  let currentLang = $state(getLocale());

  function swapLang() {
    if (getLocale() === 'ar') {
      setLocale('en')
      currentLang = getLocale();
    } else {
      setLocale('ar')
      currentLang = getLocale();
    }
  }

  let prompt_paths = m["prompt_bar.pages"]()
    .split(' ')
    .map((i) => i.replaceAll("_", " "));

  let menu_clecked = $state(false);

  let { children } = $props();
</script>

<svelte:head>
  <meta property="og:image" content="{PUBLIC_URL}/images/me-preview.jpg">
  <meta property="og:type" content="website">
  <meta property="og:url" content="me.abujandal.qzz.io">
  <meta property="og:description" content="Cybersecurity • Arch Linux • Rustaceans">
  <meta property="og:site_name" content="Sultan Al-Salahi Portfolio">

  <meta name="twitter:card" content="summary_large_image">
  <meta property="twitter:domain" content="me.abujandal.qzz.io">
  <meta property="twitter:url" content="https://me.abujandal.qzz.io">
  <meta name="twitter:title" content="Abu Jandal - The humble servant of Allah">
  <meta name="twitter:description" content="Cybersecurity • Arch Linux • Rustaceans">
  <meta name="twitter:image" content="{PUBLIC_URL}/images/me-preview.jpg">

  <link rel="icon" href={aj_logo} />
  <title>Abu Jandal - The humble servant of Allah</title>

</svelte:head>

<div 
  class="max-w-257 m-auto font-main" 
  dir="{(currentLang === 'ar') ? 'rtl' : 'ltr'}"
>
  <header class="sticky z-20 top-2 shadow-gruvbox-bright-orange shadow-sm text-gruvbox-bright-orange m-2 mb-5 sm:m-5 rounded-xl sm:rounded-2xl after:content-[''] after:absolute after:top-0 after:-z-10 after:w-full after:h-full after:backdrop-blur-lg after:rounded-xl after:sm:rounded-2xl">
    <nav class="relative flex flex-col px-2 sm:px-4 py-2">
      <div class="flex flex-row items-center gap-2">
        <img src="{aj_logo}" class="h-12 scale-110 hidden sm:inline {(currentLang === 'ar' ? 'pl-2 ml-2 border-l' : 'pr-2 mr-2 border-r')} border-gruvbox-green" alt="">
        <!-- <h1>It's me. Abu_jandal </h1> -->

        <div class="text-md flex flex-col gap-1 py-1">
          <div class="flex flex-row leading-5 gap-2">
            <span class="bg-gruvbox-bright-yellow text-gruvbox-dark0 px-2 rounded-full">󰪢 22s</span>
            <span class="text-gruvbox-light0">•</span>
            <span class="px-2 bg-gruvbox-bright-yellow text-gruvbox-dark0 rounded-full">󰉋  ../{m['prompt_bar.name']()}</span><br/>
          </div>

          <div class="ml-4 flex flex-row">
            <img src="{aj_logo}" class="h-6 inline sm:hidden {(currentLang === 'ar' ? 'pl-2 ml-2 border-l' : 'pr-2 mr-2 border-r')} border-gruvbox-green" alt="">
            <div class="text-gruvbox-bright-blue flex flex-row gap-1 z-20">
              <span class="text-gruvbox-bright-green flex flex-row gap-2"><span>󱆃</span> cd</span>
              <span class="text-gruvbox-bright-green">[</span>
              <div class="relative">
                <button onclick={() => menu_clecked = true} 
                  class="md:hidden relative scale-[80%] text-gruvbox-bright-blue hover:cursor-pointer bg-gruvbox-dark1 underline underline-offset-2 hover:opacity-100 transition-all duration-200 rounded-xl px-3 after:contect-[''] after:absolute after:top-0 after:left-0 after:h-full after:w-full after:bg-gruvbox-bright-blue after:rounded-xl after:animate-ping">...{m['prompt_bar.clickable']()}</button>

                {#if (menu_clecked.valueOf())}
                  <button in:blur={{ duration: 400 }} out:blur={{ duration: 400 }} onclick={() => menu_clecked = false} class="fixed h-screen w-screen top-0 {(currentLang == 'ar') ? 'right-0' : 'left-0'} backdrop-blur-md backdrop-brightness-80">&af;
                  </button>
                    <button onclick={() => menu_clecked = false} in:slide={{ duration: 400 }} out:slide={{ duration: 400 }} class="absolute text-start w-40 top-8 {(currentLang == 'ar') ? 'right-0' : 'left-0'} bg-gruvbox-dark0 flex flex-col gap-3 items-baseline p-4 border border-gruvbox-orange rounded-sm">
                      <a class="block w-full rounded-xl px-2 py-0.5 {(page.url.pathname === '/') ? 'bg-gruvbox-bright-blue text-gruvbox-dark0' : ''}" href="/">{prompt_paths[0]}</a>
                      <a class="block w-full rounded-xl px-2 py-0.5 {(page.url.pathname === '/my-dotfiles') ? 'bg-gruvbox-bright-blue text-gruvbox-dark0' : ''}" href="/my-dotfiles">{prompt_paths[1]}</a>
                      <a class="block w-full rounded-xl px-2 py-0.5 {(page.url.pathname === '/projects') ? 'bg-gruvbox-bright-blue text-gruvbox-dark0' : ''}" href="/projects">{prompt_paths[2]}</a>
                      <a class="block w-full rounded-xl px-2 py-0.5 {(page.url.pathname === '/contact') ? 'bg-gruvbox-bright-blue text-gruvbox-dark0' : ''}" href="/contact">{prompt_paths[3]}</a>
                    </button>
                {/if}
              </div>

              <div class="text-gruvbox-bright-blue hidden md:flex flex-row gap-6">
                <a class=" rounded-xl px-2 {(page.url.pathname === '/') ? 'bg-gruvbox-bright-blue text-gruvbox-dark0' : ''}" href="/">
                  {prompt_paths[0]}<span class="text-gruvbox-light2">{m['prompt_bar.sep']()}</span>
                </a>
                <a class=" rounded-xl px-2 {(page.url.pathname === '/my-dotfiles') ? 'bg-gruvbox-bright-blue text-gruvbox-dark0' : ''}" href="/my-dotfiles">
                  {prompt_paths[1]}<span class="text-gruvbox-light2">{m['prompt_bar.sep']()}</span>
                </a>
                <a class=" rounded-xl px-2 {(page.url.pathname === '/projects') ? 'bg-gruvbox-bright-blue text-gruvbox-dark0' : ''}" href="/projects">
                  {prompt_paths[2]}<span class="text-gruvbox-light2">{m['prompt_bar.sep']()}</span>
                </a>
                <a class=" rounded-xl px-2 {(page.url.pathname === '/contact') ? 'bg-gruvbox-bright-blue text-gruvbox-dark0' : ''}" href="/contact">
                  {prompt_paths[3]}
                </a>
              </div>
              <span class="text-gruvbox-bright-green">]</span>
            </div>
          </div>
        </div>
      </div>
      <button class="cursor-pointer px-3 py-1 sm:mt-2 w-24 absolute bottom-1.75 flex flex-row self-end justify-between items-center bg-gruvbox-dark1 gap-1 rounded-full" dir="ltr" onclick={swapLang}>
        {#key currentLang}
          <div class="absolute {(currentLang == 'ar') ? 'right-px' : 'left-px'} bg-gruvbox-orange  text-gruvbox-light0 leading-0 w-12 h-7 scale-90 text-center flex justify-center items-center rounded-full">
            <span class="text-2xl"></span>
          </div>
        {/key}
        <div class="flex">Eng</div>
        <div class="flex">عربي</div>
      </button>
    </nav>
  </header>
  <!-- <dev class="px-2 sm:px-10 sm:m-5 py-5 m-2 rounded-sm bg-gruvbox-dark1 flex flex-col gap-2"> -->
  <!--   <table class="table-caption"> -->
  <!--     <tbody> -->
  <!--       <tr> -->
  <!--         <td class="pl-5 sm:pl-4 text-gruvbox-bright-red text-3xl sm:text-5xl translate-y-4"> </td> -->
  <!--         <td class='pl-5 sm:pl-10 text-3xl sm:text-3xl'>Warnning:</td> -->
  <!--       </tr> -->
  <!--       <tr> -->
  <!--         <td></td> -->
  <!--         <td class="pl-5 sm:pl-10">  -->
  <!--           <span class="text-gruvbox-bright-green text-right"> -->
  <!--              -->
  <!--           </span> -->
  <!--           Android Will be Locked -->
  <!--         </td> -->
  <!--       </tr> -->
  <!--     </tbody> -->
  <!--   </table> -->
  <!--   <p class="px-5 italic text-xs sm:text-sm"> -->
  <!--     Starting in September 2026, Android will require all apps to be registered by verified developers in order to be installed on certified Android devices. -->
  <!--   </p> -->
  <!--   <a  -->
  <!--     class="block w-full rounded-sm border-2 border-gruvbox-red p-2 mt-2 bg-gruvbox-dark3 text-gruvbox-light0 text-center hover:bg-gruvbox-bright-red hover:text-gruvbox-light0" -->
  <!--     href="https://keepandroidopen.org/" -->
  <!--     target="_blank" -->
  <!--   >Learn More</a> -->
  <!-- </dev> -->

  <div class="
      relative m-2 mb-4 sm:m-5 mt-0 p-2 sm:p-5 rounded-xl sm:rounded-2xl shadow-sm shadow-gruvbox-aqua overflow-hidden
      after:content-[''] after:absolute after:w-full after:h-full after:top-0 after:left-0 after:right-0 after:z-[-1] 
      after:backdrop-blur-xs flex flex-row justify-center items-center
    "
  >
    <div class="w-full flex flex-col justify-center items-center text-center align-middle {(getLocale() == 'ar')? 'border-l': 'border-r'} border-gruvbox-light0/20">
      <span class="icon pl-1.5"></span>
      <span>{(getLocale() == 'ar')? 'مشاهدة': 'views'}</span>
      <span class="bold"><strong>{views}</strong></span>
    </div>

    <a href="https://github.com/ex-jandal/my-portfolio" target="_blank" class="w-full flex flex-col justify-center items-center text-center align-middle">
      <span class="icon pl-1.5"></span>
      <span>{(getLocale() == 'ar')? 'التعديلات': 'commits'}</span>
      <span class="bold"><strong>{commits}</strong></span>
    </a>
  </div>
  <main 
    class="
      relative m-2 mb-4 sm:m-5 mt-0 p-2 sm:p-5 rounded-xl sm:rounded-2xl shadow-sm shadow-gruvbox-aqua overflow-hidden
      after:content-[''] after:absolute after:w-full after:h-full after:top-0 after:left-0 after:right-0 after:z-[-1] 
      after:backdrop-blur-xs
    " 
  >
    {@render children()}
    <footer>
      <p class="comment">&af; {m['footer.quote_1']()}</p>
      <p class="comment">&af; {m['footer.quote_2']()}</p>
    </footer>
    <script data-goatcounter="https://ex-jandal.goatcounter.com/count"
            async src="//gc.zgo.at/count.js"></script>
    <!-- <script src="https://keepandroidopen.org/banner.js"></script> -->
    <!-- <script src="{PUBLIC_URL}/scripts/keepandroidopen_banner.js"></script> -->
  </main>
  <!-- <div style="display:none"> -->
  <!--   {#each locales as locale} -->
  <!--     <a href={localizeHref(page.url.pathname, { locale })}> -->
  <!--       {locale} -->
  <!--     </a> -->
  <!--   {/each} -->
  <!-- </div> -->
  <!---->
</div>

<style>
a:hover {
  text-decoration: none;
}
a:playing {
  color: black;
}
</style>

