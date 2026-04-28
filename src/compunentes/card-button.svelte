<script lang="ts">
	import { slide, fade } from 'svelte/transition';
  import SvelteMarkdown from 'svelte-markdown';

  import hljs from 'highlight.js';
  import 'highlight.js/styles/base16/gruvbox-dark-hard.css';

  import hljsZig from "highlightjs-zig";
  
	import { tick } from 'svelte';
	import { getLocale } from '$lib/paraglide/runtime';

  let container: HTMLDivElement | undefined = $state(undefined);

  // re-run highlight.js when DOM changes
  $effect(() => {
    if (!container) return;

    hljs.registerLanguage("zig", hljsZig);
    hljs.highlightAll();

    const observer = new MutationObserver(async (mutations) => {
      await tick();
      
      container?.querySelectorAll('pre code').forEach((block: any) => {
        // Only highlight if not already processed
        if (!block.dataset.highlighted) {
          hljs.highlightElement(block);
        }
      });
    });

    observer.observe(container, {
      childList: true,
      subtree: true
    });

    return () => observer.disconnect();
  });

  let show_window = $state(false);
  function window_toggle() {
    show_window = show_window ? false : true
  }

  let { icon, iconColor, text, description } = $props();
</script>

<div class="">
  <button onclick={window_toggle} 
    class="
      flex flex-row items-center justify-between
      w-full h-full text-start 
      cursor-pointer p-4 border group border-gruvbox-orange rounded-lg 
      hover:bg-gruvbox-orange hover:text-gruvbox-black 
      hover:font-bold transition-all duration-300
    "
  >
    <div class="flex flex-row gap-2 items-center">
      <span class="mr-2 text-lg text-gruvbox-bright-aqua group-hover:text-gruvbox-black transition-all duration-300">{icon}</span> 
      <p>{text}</p>
    </div>
    <div class="text-gruvbox-gray text-xs group-hover:text-gruvbox-black transition-all duration-300">
      {getLocale() == 'ar'? '': ''}
    </div>
  </button>
</div>

{#if show_window}
  <div 
    class="
      fixed top-0 left-0 right-0 bottom-0
      flex flex-col justify-center items-center
      px-2 pb-25 pt-25
      z-50
    "
  >
    <div class="
        bg-gruvbox-dark0 rounded-lg
        text-gruvbox-light1
        flex flex-col overflow-hidden
        max-w-257 w-full h-[calc(100vh-50px)] sm:h-[calc(100vh-100px)] lg:max-h-300
      "
      in:slide={{ duration: 200, delay: 200 }} 
      out:slide={{ duration: 200 }} 
    >
      <div class="min-h-10 flex flex-row justify-between items-center px-4 w-full bg-gruvbox-dark1">
        <div>{(getLocale() == 'ar'? 'نافذة':'Window')} - {text}</div>
        <div class="leading-5 text-[12px] text-gruvbox-black flex flex-row justify-between items-center gap-2">
          <button 
            onclick={window_toggle} 
            class="w-6 h-6 cursor-pointer text-center bg-gruvbox-yellow rounded-full"></button>
          <button 
            onclick={window_toggle} 
            class="w-6 h-6 cursor-pointer text-center bg-gruvbox-red rounded-full">󰅖</button>
        </div>
      </div>
      <div class="p-3 sm:p-5 overflow-y-scroll">
        <div class="pt-8 flex flex-col gap-4 justify-center items-center">
          <div class="h-20 text-9xl text-center {iconColor}">{icon}</div>
          <div bind:this={container} class="mt-20 pb-50 w-full text-lg prose prose-gruvbox prose-pre:p-0 prose-pre:font-code prose-pre:text-lg prose-pre:text-left prose-pre:text-wrap">
            <SvelteMarkdown source={description}/>
          </div>
        </div>
      </div>
    </div>
    <button 
      in:fade={{ duration: 400 }}
      out:fade={{ duration: 400 }}
      onclick={window_toggle} 
      class="
        <!-- bg-gruvbox-black/50  -->
        fixed top-0 left-0 right-0 bottom-0
        after:content-[''] after:absolute after:w-full after:h-full after:top-0 after:left-0 after:right-0 after:z-[-1] 
        after:backdrop-blur-lg
        z-[-1]
      "
    >&it;
    </button>
  </div>
{/if}
