<script lang="ts">
	import { blur, slide } from 'svelte/transition';
  import emailjs from '@emailjs/browser';
	import { SpenerConfig, SpenerKey } from './types';
  import * as m from "$lib/paraglide/messages";
  import { getLocale } from "$lib/paraglide/runtime.js";
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

  let contact_list = m["contact.media.list"]()
    .split(' ')
    .map((i) => i.replaceAll("_", " "));

  let message_feild = m["contact.send_message.feilds"]()
    .split(' ')
    .map((i) => i.replaceAll("_", " "));
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
  <h2 class="mt-0 {(getLocale() == 'ar') ? 'pr-4': 'pl-4'}"><span class="icon"></span> {m['contact.media.title']()}</h2>

  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    <a class="flex flex-row justify-between items-center gap-3 bg-gruvbox-dark0/30 border border-gruvbox-orange rounded-lg p-4
            hover:bg-gruvbox-dark1/60 hover:border-gruvbox-bright-orange hover:shadow-md
            transition-all duration-300" 
      href="https://codeberg.org/ex-jandal" target="_blank">
      <div>
        <span class="text-xl text-[#4794CC]"></span>
        <span class="font-bold">{contact_list[0]}</span>
      </div>
      <span class="text-gruvbox-gray text-xs">{(getLocale() == 'ar') ? '' : ''}</span>
    </a>

    <a class="flex flex-row justify-between items-center gap-3 bg-gruvbox-dark0/30 border border-gruvbox-orange rounded-lg p-4
            hover:bg-gruvbox-dark1/60 hover:border-gruvbox-bright-orange hover:shadow-md
            transition-all duration-300" 
      href="https://discord.com/users/884869855042490528" target="_blank">
      <div>
        <span class="text-xl text-purple-400"></span>
        <span class="font-bold">{contact_list[1]}</span>
      </div>
      <span class="text-gruvbox-gray text-xs">{(getLocale() == 'ar') ? '' : ''}</span>
    </a>

    <a class="flex flex-row justify-between items-center gap-3 bg-gruvbox-dark0/30 border border-gruvbox-orange rounded-lg p-4
            hover:bg-gruvbox-dark1/60 hover:border-gruvbox-bright-orange hover:shadow-md
            transition-all duration-300" 
      href="https://t.me/ab0_jandal" target="_blank">
      <div>
        <span class="text-xl text-blue-400"></span>
        <span class="font-bold">{contact_list[2]}</span>
      </div>
      <span class="text-gruvbox-gray text-xs">{(getLocale() == 'ar') ? '' : ''}</span>
    </a>

    <a class="flex flex-row justify-between items-center gap-3 bg-gruvbox-dark0/30 border border-gruvbox-orange rounded-lg p-4
            hover:bg-gruvbox-dark1/60 hover:border-gruvbox-bright-orange hover:shadow-md
            transition-all duration-300" 
      href="https://github.com/ex-jandal" target="_blank">
      <div>
        <span class="text-xl text-gruvbox-light4"></span>
        <span class="font-bold">{contact_list[3]}</span>
      </div>
      <span class="text-gruvbox-gray text-xs">{(getLocale() == 'ar') ? '' : ''}</span>
    </a>

    <a class="flex flex-row justify-between items-center gap-3 bg-gruvbox-dark0/30 border border-gruvbox-orange rounded-lg p-4
            hover:bg-gruvbox-dark1/60 hover:border-gruvbox-bright-orange hover:shadow-md
            transition-all duration-300" 
      href="mailto:sultan.majed@proton.me" target="_blank">
      <div>
        <span class="text-xl text-purple-500">󰰙</span>
        <span class="font-bold">{contact_list[4]}</span>
      </div>
      <span class="text-gruvbox-gray text-xs">{(getLocale() == 'ar') ? '' : ''}</span>
    </a>

    <a class="flex flex-row justify-between items-center gap-3 bg-gruvbox-dark0/30 border border-gruvbox-orange rounded-lg p-4
            hover:bg-gruvbox-dark1/60 hover:border-gruvbox-bright-orange hover:shadow-md
            transition-all duration-300" 
      href="mailto:sultan.m.alsalahi@gmail.com" target="_blank">
      <div>
        <span class="text-xl text-gruvbox-red">󰊫</span>
        <span class="font-bold">{contact_list[5]}</span>
      </div>
      <span class="text-gruvbox-gray text-xs">{(getLocale() == 'ar') ? '' : ''}</span>
    </a>
  </div>
  
  <h2 class="mt-6 {(getLocale() == 'ar') ? 'pr-4': 'pl-4'}"><span class="icon">󰍡</span> {m['contact.send_message.title']()}</h2>
  {#if status == 200}
    <p class="p-4 my-4 text-center text-gruvbox-dark0 bg-gruvbox-bright-green border-2 border-gruvbox-dark0 rounded-lg">
      {m['contact.send_message.message_status']()}
    </p>
  {/if}
  <div class="bg-gruvbox-dark0/30 border border-gruvbox-orange rounded-lg p-4">
    <form class="flex flex-col gap-4" onsubmit={sendEmail}>
      <div class="relative">
        <span class="absolute top-2 {(getLocale() == 'ar') ? 'right-4': 'left-4'}"></span>
        <input bind:value={name} class="block {(getLocale() == 'ar') ? 'pr-10' : 'pl-10'} w-full bg-gruvbox-dark1/40 border border-gruvbox-dark2 rounded-md focus:border-gruvbox-aqua focus:ring-1 focus:ring-gruvbox-aqua" type="text" placeholder="{message_feild[0]}" required />
      </div>
      <div class="relative">
        <span class="absolute top-2 {(getLocale() == 'ar') ? 'right-4': 'left-4'}"></span>
        <input bind:value={email} class="block {(getLocale() == 'ar') ? 'pr-10' : 'pl-10'} w-full bg-gruvbox-dark1/40 border border-gruvbox-dark2 rounded-md focus:border-gruvbox-aqua focus:ring-1 focus:ring-gruvbox-aqua" type="email" placeholder="{message_feild[1]}" required />
      </div>
      <div class="relative">
        <span class="absolute top-2 {(getLocale() == 'ar') ? 'right-4': 'left-4'}">󰇮</span>
        <input bind:value={title} class="block {(getLocale() == 'ar') ? 'pr-10' : 'pl-10'} w-full bg-gruvbox-dark1/40 border border-gruvbox-dark2 rounded-md focus:border-gruvbox-aqua focus:ring-1 focus:ring-gruvbox-aqua" type="text" placeholder="{message_feild[2]}" required />
      </div>
      <div class="relative">
        <span class="absolute top-3 {(getLocale() == 'ar') ? 'right-4': 'left-4'}">󰍩</span>
        <textarea bind:value={message} class="block {(getLocale() == 'ar') ? 'pr-10' : 'pl-10'} pt-3 w-full h-40 bg-gruvbox-dark1/40 border border-gruvbox-dark2 rounded-md focus:border-gruvbox-aqua focus:ring-1 focus:ring-gruvbox-aqua" placeholder="{message_feild[3]}"></textarea>
      </div>
      <button class="bg-gruvbox-orange hover:bg-gruvbox-bright-orange p-2 rounded-md transition-all duration-300" type="submit">{m['contact.send_message.button']()}</button>
    </form>
  </div>
</div>


