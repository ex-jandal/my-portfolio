<script lang="ts">
	import { blur, slide } from 'svelte/transition';
  import emailjs from '@emailjs/browser';
	import { SpenerConfig, SpenerKey } from './types';
	import { 
    PUBLIC_EMAILJS_PUBLIC_KEY, 
    PUBLIC_EMAILJS_SERVICE_ID, 
    PUBLIC_EMAILJS_TEMPLATE_ID 
  } from '$env/static/public';

  let spenerStatus: SpenerKey = $state(SpenerKey.Hide);
  let spenerConfig = $derived(SpenerConfig[spenerStatus]);

  let name: string = $state("");
  let email: string = $state("");
  let title: string = $state("");
  let message: string = $state("");
  let time: string | undefined = $state();

  let messageTemplate = $derived({
    name: name,
    email: email,
    title: title,
    message: message,
    time: time,
  })

  let status: number = $state(0);
  emailjs.init({
    publicKey: PUBLIC_EMAILJS_PUBLIC_KEY,
    // Do not allow headless browsers
    blockHeadless: true,
    blockList: {
      // Block the suspended emails
      list: ['foo@emailjs.com', 'bar@emailjs.com'],
      // The variable contains the email address
      watchVariable: 'userEmail',
    },
    limitRate: {
      // Set the limit rate for the application
      id: 'app',
      // Allow 1 request per 10s
      throttle: 10000,
    },
  });

  const sendEmail = async () => {
    spenerStatus = SpenerKey.Show;
    let date = new Date();
    let formatedDate = `${date.toLocaleString()} - ${date.toTimeString().split(' ').slice(1).join(' ')}`;

    messageTemplate.time = formatedDate;

    let respone = await emailjs.send(PUBLIC_EMAILJS_SERVICE_ID, PUBLIC_EMAILJS_TEMPLATE_ID, messageTemplate)

    console.log(messageTemplate);
    status = respone.status;

    if (status == 200) {
      name = ""
      email = ""
      title = ""
      message = ""
      time = undefined;
    }
    console.log("respone is: ", respone.status, respone.text);
    spenerStatus = SpenerKey.Hide;
  };

</script>

{#key spenerStatus}
  <div out:blur={{ duration: 400 }} in:blur={{ duration: 400, delay: 400 }} class="fixed top-0 left-0 h-full w-full z-40 {spenerConfig.displayProp} flex-col gap-4 justify-center items-center backdrop-brightness-50 backdrop-blur-sm">
    <div class="animate-spin [animation-direction:reverse] flex justify-center items-center duration-200 text-gruvbox-aqua text-5xl">
    <span class="-translate-y-0.5">
     󱍸     
    </span>
    </div>
  </div>
{/key}

<div out:slide={{ duration: 400 }} in:slide={{ duration: 400, delay: 400 }}>
  <h2 class="frist-h2"><span class="icon"></span> Connect</h2>

  <div class="pl-2">
    <p><span class="icon"></span> Codeberg: <a href="https://codeberg.org/ex-jandal" target="_blank">@ex-jandal</a></p>
    <p><span class="icon"></span> Discord <a href="https://discord.com/users/884869855042490528" target="_blank">@ex.jandal</a></p>
    <p><span class="icon"></span> Telegram <a href="https://t.me/ab0_jandal" target="_blank">@ab0_jandal</a></p>
    <p><span class="icon"></span> GitHub: <a href="https://github.com/ex-jandal" target="_blank">@ex-jandal</a></p>
    <p><span class="icon">󰇮</span> Email: <a href="mailto:sultan.majed@proton.me" target="_blank">sultan.majed@proton.me</a></p>
    <!-- <p><span class="icon">󰏲</span> Phone: <a href="tel:+967782424366">+967 78-2424-366</a></p> -->
  </div>
  
  <h2><span class="icon">󰍡</span> Send Me a Message</h2>
  {#if status == 200}
    <p class="p-4 my-4 text-center text-gruvbox-dark0 bg-gruvbox-bright-green border-2 border-gruvbox-dark0 rounded-lg">
      Message sent successfully!
    </p>
  {/if}
  <form class="p-4 flex flex-col gap-4 bg-gruvbox-dark0 rounded-lg" onsubmit={sendEmail}>
    <div class="relative">
      <span class="absolute top-2 left-4"></span>
      <input bind:value={name} class="block pl-10 w-full bg-gruvbox-dark1 rounded-md focus:border-gruvbox-aqua" type="text" placeholder="Name" required />
    </div>
    <div class="relative">
      <span class="absolute top-2 left-4"></span>
      <input bind:value={email} class="block pl-10 w-full bg-gruvbox-dark1 rounded-md focus:border-gruvbox-aqua" type="email" placeholder="Email" required />
    </div>
    <div class="relative">
      <span class="absolute top-2 left-4">󰇮</span>
      <input bind:value={title} class="block pl-10 w-full bg-gruvbox-dark1 rounded-md focus:border-gruvbox-aqua" type="text" placeholder="Title" required />
    </div>
    <div class="relative">
      <span class="absolute top-3 left-4">󰍩</span>
      <textarea bind:value={message} class="block pl-10 pt-3 w-full h-40 bg-gruvbox-dark1 rounded-md focus:border-gruvbox-aqua" placeholder="Message"></textarea>
    </div>
    <button class="bg-gruvbox-orange p-2 rounded-md" type="submit">Send</button>
  </form>
</div>

<style>
  .frist-h2 {
    margin-top: 0;
  }
  a {
    color: var(--color-gruvbox-bright-blue);
  }
</style>

