<script lang="ts">
	import { blur, slide } from 'svelte/transition';
</script>

<style>
  code, .badge {
    background: #161b22;
    padding: 0.2rem 0.5rem;
    border-radius: 6px;
    font-size: 0.9rem;
  }
  .frist-h2 {
    margin-top: 0;
  }
  .pro-card {
    background: var(--color-gruvbox-dark0);
    border: 1px solid var(--color-gruvbox-orange);
    padding: 1em;
    height: 200px;
  }
  .pro-card_title {
    font-size: 18px;
    font-weight: bolder;
  }
  a:hover {
    text-decoration: none;
    box-shadow: 0px 0px 20px var(--color-gruvbox-bright-red);
    scale: 101%;
    translate: 0px -3px;
  }
</style>

<div in:slide={{ duration: 400 }}>
  <h2 class="frist-h2"><span class="icon"></span> Projects</h2>
  <div class="grid sm:grid-cols-2 grid-cols-1 mt-10 gap-4">
    <a href="https://github.com/ex-jandal/whatsdown" class="pro-card">
      <span class="icon"></span> 
      <span class="pro-card_title">ex-jandal/whatsdown</span>
    </a>
    <a href="https://github.com/ex-jandal/whatsdown" class="pro-card">
      <span class="icon"></span> 
      <span class="pro-card_title">ex-jandal/whatsdown</span>
    </a>
    <a href="https://github.com/ex-jandal/whatsdown" class="pro-card">
      <span class="icon"></span> 
      <span class="pro-card_title">ex-jandal/whatsdown</span>
    </a>
    <a href="https://github.com/ex-jandal/whatsdown" class="pro-card">
      <span class="icon"></span> 
      <span class="pro-card_title">ex-jandal/whatsdown</span>
    </a>
  </div>
</div>
