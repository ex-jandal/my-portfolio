<script lang="ts">
	import { slide } from 'svelte/transition';
  import { page } from '$app/state';
  import * as m from '$lib/paraglide/messages';
	import { getLocale } from '$lib/paraglide/runtime';
  import Markdown from 'svelte-markdown'
  import ShineImage from '../compunentes/shine-image.svelte';
  import aj_logo from '$lib/assets/AJ_brand.svg';

  let age: number | null = null;

  let currentDate = new Date();
  let DoB = new Date("Aug 14 2005");

  age = currentDate.getFullYear() - DoB.getFullYear();

  if (currentDate.getMonth() < DoB.getMonth()) {
    age--;
  }

  let pro_langs = m["root.programming_langs.langs"]()
    .split(' ')
    .map((i) => i.replaceAll("_", " "));

  let mark_langs = m["root.markup_langs.langs"]()
    .split(' ')
    .map((i) => i.replaceAll("_", " "));

  let frames_front = m["root.frontend_frameworks.objects"]()
    .split(' ')
    .map((i) => i.replaceAll("_", " "));

  let skills = m["root.skills.list"]()
    .split(' ')
    .map((i) => i.replaceAll("_", " "));

  let environment = m["root.environment.list"]()
    .split(' ')
    .map((i) => i.replaceAll("_", " "));
</script>

<div out:slide={{ duration: 400 }} in:slide={{ duration: 1500, delay: 400 }}>
  <h1 class="{(getLocale() == 'ar') ? 'pr-4': 'pl-4'}"> {m['root.fetch.title']()} <span class="pl-1 text-gruvbox-gray text-[18px]"></span></h1>

  <div class="relative py-10 sm:px-0 px-5 rounded-lg
    after:content-[''] after:absolute after:top-0 after:left-0 after:right-0 after:z-[-1] after:w-full after:h-full after:bg-black/20 after:rounded-2xl
  ">
    <div class="flex sm:flex-row flex-col justify-evenly items-center {(getLocale() == 'ar') ? 'sm:pl-50' : 'sm:pr-50'}">
      <div class="sm:min-w-70 flex justify-center items-center" dir="ltr">
        <pre class="hidden ascii-art text-[10px] tracking-widest">
                           ________
                          | ______o|
         _______________  ||__---_||
        |  ___________  | | ______ |
        | |           | | ||______||
        | | #         | | |--------|
        | |           | | |      O |
        | |           | | |      | |
        | '-----------' | |      | |
        |_____________-_| |      | |
         ___/_______\____ |::::::::|
        / _______________\-.__
        /:::::::::':::'::\ .\\\---.
    jgs/::======::: .:.:::\ \\_)   \
       `""""""""""""""""""`  '-----'
        </pre>
        <!-- <img src="{aj_logo}" class="max-w-70 drop-shadow-md drop-shadow-gruvbox-dark2 block w-full transition-transform duration-500 group-hover:scale-105" alt="logo"/> -->
        
        <ShineImage src="{aj_logo}" alt="logo"/>
      </div>
      <div class="">
        <div class="mb-5 border-gruvbox-blue {(getLocale() == 'ar') ? 'pr-1 border-r-2 rounded-r-sm' : 'pl-1 border-l-2 rounded-l-sm'}">
          <table>
            <tbody>
              <tr>
                <td><span class="icon"></span> {m['root.fetch.feild_1.name']()}:</td>
                <td> {m['root.fetch.feild_1.value']()}</td>
              </tr>
              <tr>
                <td><span class="icon">󰻗</span> {m['root.fetch.feild_2.name']()}:</td>
                <td> {age} {m['root.fetch.feild_2.value']()}</td>
              </tr>
              <tr>
                <td><span class="icon"></span> {m['root.fetch.feild_3.name']()}:</td>
                <td> {m['root.fetch.feild_3.value']()}</td>
              </tr>
              <tr>
                <td><span class="icon"></span> {m['root.fetch.feild_4.name']()}:</td>
                <td>{m['root.fetch.feild_4.value']()}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="border-gruvbox-blue {(getLocale() == 'ar') ? 'pr-1 border-r-2 rounded-r-sm' : 'pl-1 border-l-2 rounded-l-sm'}">
          <table>
            <tbody>
              <tr>
                <td><span class="icon"></span> {m['root.fetch.feild_5.name']()}:</td>
                <td>{m['root.fetch.feild_5.value']()}</td>
              </tr>
              <tr>
                <td><span class="icon"></span> {m['root.fetch.feild_6.name']()}:</td>
                <td>{m['root.fetch.feild_6.value']()}</td>
              </tr>
              <tr>
                <td><span class="icon"></span> {m['root.fetch.feild_7.name']()}:</td>
                <td>{m['root.fetch.feild_7.value']()}</td>
              </tr>
              <tr>
                <td><span class="icon"></span> {m['root.fetch.feild_8.name']()}:</td>
                <td>{m['root.fetch.feild_8.value']()}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="pt-10 sm:px-20 flex flex-col sm:flex-row items-center sm:items-end">
      <a class="px-6 py-2 flex flex-row justify-center items-center gap-2 bg-gruvbox-orange rounded-xl border-2 border-gruvbox-orange group hover:bg-white hover:text-gruvbox-orange" href="/projects">
        {m['root.fetch.buttons.projects']()}
        <span class="px-1.5 py-0.5 text-gruvbox-light2 rounded-full duration-300 {(getLocale() == 'ar') ? 'group-hover:-translate-x-2' : 'group-hover:translate-x-2'} group-hover:text-gruvbox-orange">{(getLocale() == 'ar') ? '󰁎' : '󰁕'}</span>
      </a>
      <a class="px-4 py-2 text-gruvbox-bright-blue underline hover:text-gruvbox-blue" href="/contact">
        {m['root.fetch.buttons.contact']()}</a>
    </div>
  </div>

  <h2 class="{(getLocale() == 'ar') ? 'pr-4': 'pl-4'}"><span class="icon">󰞋</span> {m["root.about_me.title"]()}</h2>
  <p class="pl-2">
    <Markdown isInline source={m["root.about_me.text"]()}/>
  </p>

  <h2 class="{(getLocale() == 'ar') ? 'pr-4': 'pl-4'}"><span class="icon"></span> {m["root.programming_langs.title"]()}</h2>
  <div class="my-grid">
    <div class="card"><span class="icon"></span> {pro_langs[0]}</div>
    <div class="card"><span class="icon"></span> {pro_langs[1]}</div>
    <div class="card"><span class="icon"></span> {pro_langs[2]}</div>
    <div class="card"><span class="icon"></span> {pro_langs[3]}</div>
    <div class="card"><span class="icon"></span> {pro_langs[4]}</div>
    <div class="card"><span class="icon"></span> {pro_langs[5]}</div>
    <div class="card"><span class="icon"></span> {pro_langs[6]}</div>
    <div class="card"><span class="icon"></span> {pro_langs[7]}</div>
    <div class="card"><span class="icon"></span> {pro_langs[8]}</div>
  </div>

  <h2 class="{(getLocale() == 'ar') ? 'pr-4': 'pl-4'}"><span class="icon">󱥬</span> {m["root.markup_langs.title"]()}</h2>
  <div class="my-grid">
    <div class="card"><span class="icon"></span> {mark_langs[0]}</div>
    <div class="card"><span class="icon"></span> {mark_langs[1]}</div>
    <div class="card"><span class="icon"></span> {mark_langs[2]}</div>
  </div>

  <h2 class="{(getLocale() == 'ar') ? 'pr-4': 'pl-4'}"><span class="icon">󰏓</span> {m["root.frontend_frameworks.title"]()}</h2>
  <div class="my-grid">
    <div class="card"><span class="icon"></span> {frames_front[0]}</div>
    <div class="card"><span class="icon"></span> {frames_front[1]}</div>
    <div class="card"><span class="icon"></span> {frames_front[2]}</div>
    <div class="card"><span class="icon"></span> {frames_front[3]}</div>
    <div class="card"><span class="icon"></span> {frames_front[4]}</div>
  </div>

  <h2 class="{(getLocale() == 'ar') ? 'pr-4': 'pl-4'}"><span class="icon"></span>{m["root.skills.title"]()}</h2>
  <div class="my-grid">
    <div class="card"><span class="icon"></span> {skills[0]}</div>
    <div class="card"><span class="icon"></span> {skills[1]}</div>
    <div class="card"><span class="icon"></span> {skills[2]}</div>
    <div class="card"><span class="icon"></span> {skills[3]}</div>
    <div class="card"><span class="icon"></span> {skills[4]}</div>
  </div>

  <h2 class="{(getLocale() == 'ar') ? 'pr-4': 'pl-4'}"><span class="icon">󰌢</span> {m["root.cybersecurity_networking.title"]()}</h2>
  <ul>
    <li>{m["root.cybersecurity_networking.point_1"]()}</li>
    <li>{m["root.cybersecurity_networking.point_2"]()}</li>
    <li>{m["root.cybersecurity_networking.point_3"]()}</li>
    <li>{m["root.cybersecurity_networking.point_4"]()}</li>
  </ul>

  <h2 class="{(getLocale() == 'ar') ? 'pr-4': 'pl-4'}"><span class="icon">󰆍</span> {m["root.environment.title"]()}</h2>
  <div class="my-grid">
    <div class="card"><span class="icon"></span> {environment[0]}</div>
    <div class="card"><span class="icon">󱘆</span> {environment[1]}</div>
    <div class="card"><span class="icon"></span> {environment[2]}</div>
    <div class="card"><span class="icon"></span> {environment[3]}</div>
    <div class="card"><span class="icon"></span> {environment[4]}</div>
  </div>

  <h2 class="{(getLocale() == 'ar') ? 'pr-4': 'pl-4'}"><span class="icon">󰧑</span> {m["root.philosophy.title"]()}</h2>
    <Markdown isInline source={m["root.philosophy.text"]()}/>
  <p class="pl-2">
  </p>
</div>

<style>
  /* code, .badge { */
  /*   background: #161b22; */
  /*   padding: 0.2rem 0.5rem; */
  /*   border-radius: 6px; */
  /*   font-size: 0.9rem; */
  /* } */
  td {
    padding-left: 10px;
    min-width: 100px;
  }
</style>
