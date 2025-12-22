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
  .pro-card {
    background: var(--color-gruvbox-dark0);
    border: 1px solid var(--color-gruvbox-orange);
    padding: 1em;
    height: 200px;
  }
  .pro-card_title {
    font-size: 24px;
    font-weight: bolder;
  }
  .pro-card_info {
    font-size: 12px;
    padding-left: 12px;
  }
  .pro-card_description {
    margin-top: 5px;
    font-size: 12px;
    overflow: hidden;
    font-display: block;
  }
  a {
    color: var(--color-gruvbox-light3);
  }
  a:hover {
    text-decoration: none;
    box-shadow: 0px 0px 20px var(--color-gruvbox-bright-red);
    scale: 101%;
    translate: 0px -3px;
  }
</style>

<div out:slide={{ duration: 400 }} in:slide={{ duration: 400, delay: 400 }}>
  <h2 class="frist-h2"><span class="icon"></span> Projects</h2>
  <div class="grid md:grid-cols-2 grid-cols-1 mt-10 gap-4">
    <a href="https://github.com/ex-jandal/whatsdown" target="_blank" class="pro-card">
      <div class="pro-card_title">
        <span class="icon"></span> 
        <span>whatsdown</span>
      </div>
      <div class="pro-card_info">
        <span>󰗑</span>
        <span>MIT license</span>
      </div>

      <div class="pro-card_description">
      </div>
    </a>

    <a href="https://github.com/ex-jandal/karka-deh" target="_blank" class="pro-card">
      <div class="pro-card_title">
        <span class="icon"></span> 
        <span class="pro-card_title">karka-deh</span>
      </div>
      <div class="pro-card_info">
        <span>󰗑</span>
        <span>GPL-3.0 license</span>
      </div>
    </a>
  </div>
</div>
