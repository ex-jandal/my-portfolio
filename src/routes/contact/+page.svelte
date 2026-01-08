<script lang="ts">
	import { blur, slide } from 'svelte/transition';
</script>
<style>
  .frist-h2 {
    margin-top: 0;
  }
</style>

<div out:slide={{ duration: 400 }} in:slide={{ duration: 400, delay: 400 }}>
  <h2 class="frist-h2"><span class="icon">󰍡</span> Connect</h2>
  <div class="pl-2">
    <p><span class="icon"></span> GitHub: <a href="https://github.com/ex-jandal" target="_blank">@ex-jandal</a></p>
    <p><span class="icon"></span> Discord <a href="https://discord.com/users/884869855042490528" target="_blank">@ex.jandal</a></p>
    <p><span class="icon"></span> Telegram <a href="https://t.me/ab0_jandal" target="_blank">@ab0_jandal</a></p>
    <p><span class="icon">󰇮</span> Email: <a href="mailto:sultan.majed@proton.me" target="_blank">sultan.majed@proton.me</a></p>
    <!-- <p><span class="icon">󰏲</span> Phone: <a href="tel:+967782424366">+967 78-2424-366</a></p> -->
  </div>
</div>
