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
  }
</style>

<div in:slide={{ duration: 400 }}>
  <h2 class="frist-h2"><span class="icon"></span> Projects</h2>
  <div class="grid sm:grid-cols-2 grid-cols-1 mt-10 gap-4">
    <div class="pro-card"><span class="icon"></span> Rust</div>
    <div class="pro-card"><span class="icon"></span> Zig (0.15)</div>
    <div class="pro-card"><span class="icon"></span> JavaScript</div>
    <div class="pro-card"><span class="icon"></span> Lua</div>
    <div class="pro-card"><span class="icon"></span> Python</div>
    <div class="pro-card"><span class="icon"></span> PHP</div>
    <div class="pro-card"><span class="icon"></span> Java</div>
    <div class="pro-card"><span class="icon"></span> C#</div>
  </div>
</div>
