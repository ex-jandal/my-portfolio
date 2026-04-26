<script lang="ts">
  let x: number = $state(0);
  let y: number = $state(0);
  let container: HTMLDivElement | undefined = undefined;

  let { src, alt } = $props();

  function handleMouseMove(e: MouseEvent): void {
    if (!container) return;
    const rect = container.getBoundingClientRect();
    x = e.clientX - rect.left;
    y = e.clientY - rect.top;
  }
</script>

<div 
  bind:this={container}
  onmousemove={handleMouseMove}
  role="presentation"
  class="group relative inline-block overflow-hidden hover:scale-110 transition-all duration-300"
  style="--x: {x}px; --y: {y}px;"
>
  <img 
    {src} 
    {alt} 
    class="block w-64 h-auto" 
  />

  <div 
    class="pointer-events-none absolute inset-0 z-20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
    style="
      background: radial-gradient(circle 120px at var(--x) var(--y), rgba(255, 255, 255, 0.1) 0%, transparent 100%);
      mask-image: url({src});
      -webkit-mask-image: url({src});
      mask-size: 100% 100%;
      -webkit-mask-size: 100% 100%;
      mask-repeat: no-repeat;
      -webkit-mask-repeat: no-repeat;
      mix-blend-mode: plus-lighter;
    "
  ></div>
</div>
