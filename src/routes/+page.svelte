<script lang="ts">
	import { slide } from 'svelte/transition';
  import * as m from '$lib/paraglide/messages';
	import { getLocale } from '$lib/paraglide/runtime';

  import Markdown from 'svelte-markdown'
  import ShineImage from '../compunentes/shine-image.svelte';
  import aj_logo from '$lib/assets/AJ_brand.svg';
  import CardButton from '../compunentes/card-button.svelte';

  import rust_desc_en from'$lib/assets/description/rust_en.md?raw';
  import rust_desc_ar from'$lib/assets/description/rust_ar.md?raw';

  import zig_desc_en from'$lib/assets/description/zig_en.md?raw';
  import zig_desc_ar from'$lib/assets/description/zig_ar.md?raw';

  import js_desc_en from'$lib/assets/description/js_en.md?raw';
  import js_desc_ar from'$lib/assets/description/js_ar.md?raw';

  import ts_desc_en from'$lib/assets/description/ts_en.md?raw';
  import ts_desc_ar from'$lib/assets/description/ts_ar.md?raw';

  import lua_desc_en from'$lib/assets/description/lua_en.md?raw';
  import lua_desc_ar from'$lib/assets/description/lua_ar.md?raw';

  import py_desc_en from'$lib/assets/description/py_en.md?raw';
  import py_desc_ar from'$lib/assets/description/py_ar.md?raw';

  import php_desc_en from'$lib/assets/description/php_en.md?raw';
  import php_desc_ar from'$lib/assets/description/php_ar.md?raw';

  import java_desc_en from'$lib/assets/description/java_en.md?raw';
  import java_desc_ar from'$lib/assets/description/java_ar.md?raw';

  import csharp_desc_en from'$lib/assets/description/c-sharp_en.md?raw';
  import csharp_desc_ar from'$lib/assets/description/c-sharp_ar.md?raw';

  import html_css_desc_en from'$lib/assets/description/html-css_en.md?raw';
  import html_css_desc_ar from'$lib/assets/description/html-css_ar.md?raw';

  import md_desc_en from'$lib/assets/description/md_en.md?raw';
  import md_desc_ar from'$lib/assets/description/md_ar.md?raw';

  import tex_desc_en from'$lib/assets/description/tex_en.md?raw';
  import tex_desc_ar from'$lib/assets/description/tex_ar.md?raw';

  import bun_desc_en from'$lib/assets/description/bun_en.md?raw';
  import bun_desc_ar from'$lib/assets/description/bun_ar.md?raw';

  import sv_desc_en from'$lib/assets/description/sv_en.md?raw';
  import sv_desc_ar from'$lib/assets/description/sv_ar.md?raw';

  import vue_desc_en from'$lib/assets/description/vue_en.md?raw';
  import vue_desc_ar from'$lib/assets/description/vue_ar.md?raw';

  import la_desc_en from'$lib/assets/description/la_en.md?raw';
  import la_desc_ar from'$lib/assets/description/la_ar.md?raw';

  import blazoer_desc_en from'$lib/assets/description/blazor_en.md?raw';
  import blazoer_desc_ar from'$lib/assets/description/blazor_ar.md?raw';

  import git_desc_en from'$lib/assets/description/git_en.md?raw';
  import git_desc_ar from'$lib/assets/description/git_ar.md?raw';

  import docker_desc_en from'$lib/assets/description/docker_en.md?raw';
  import docker_desc_ar from'$lib/assets/description/docker_ar.md?raw';

  import tailcss_desc_en from'$lib/assets/description/tailcss_en.md?raw';
  import tailcss_desc_ar from'$lib/assets/description/tailcss_ar.md?raw';

  import sql_desc_en from'$lib/assets/description/sql_en.md?raw';
  import sql_desc_ar from'$lib/assets/description/sql_ar.md?raw';

  import surreal_desc_en from'$lib/assets/description/surreal_en.md?raw';
  import surreal_desc_ar from'$lib/assets/description/surreal_ar.md?raw';

  import arch_desc_en from'$lib/assets/description/arch_en.md?raw';
  import arch_desc_ar from'$lib/assets/description/arch_ar.md?raw';

  import niri_desc_en from'$lib/assets/description/niri_en.md?raw';
  import niri_desc_ar from'$lib/assets/description/niri_ar.md?raw';

  import nvim_desc_en from'$lib/assets/description/nvim_en.md?raw';
  import nvim_desc_ar from'$lib/assets/description/nvim_ar.md?raw';

  import tmux_desc_en from'$lib/assets/description/tmux_en.md?raw';
  import tmux_desc_ar from'$lib/assets/description/tmux_ar.md?raw';

  import nerdfont_desc_en from'$lib/assets/description/nerdfont_en.md?raw';
  import nerdfont_desc_ar from'$lib/assets/description/nerdfont_ar.md?raw';

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

  let langs = [
    ['', 'text-gruvbox-bright-red', pro_langs[0], (getLocale() == 'ar'? rust_desc_ar: rust_desc_en)], 
    ['', 'text-gruvbox-yellow', pro_langs[1], (getLocale() == 'ar'? zig_desc_ar: zig_desc_en)], 
    ['', 'text-gruvbox-yellow', pro_langs[2], (getLocale() == 'ar'? js_desc_ar: js_desc_en)], 
    ['', 'text-gruvbox-blue', pro_langs[3], (getLocale() == 'ar'? ts_desc_ar: ts_desc_en)], 
    ['', 'text-gruvbox-blue', pro_langs[4], (getLocale() == 'ar'? lua_desc_ar: lua_desc_en)], 
    ['', 'text-gruvbox-blue', pro_langs[5], (getLocale() == 'ar'? py_desc_ar: py_desc_en)], 
    ['', 'text-gruvbox-bright-purple', pro_langs[6], (getLocale() == 'ar'? php_desc_ar: php_desc_en)], 
    ['', 'text-gruvbox-orange', pro_langs[7], (getLocale() == 'ar'? java_desc_ar: java_desc_en)], 
    ['', 'text-gruvbox-purple', pro_langs[8], (getLocale() == 'ar'? csharp_desc_ar: csharp_desc_en)], 
  ];

  let mark_langs = m["root.markup_langs.langs"]()
    .split(' ')
    .map((i) => i.replaceAll("_", " "));

  let marks = [
    ['', 'text-gruvbox-orange', mark_langs[0], (getLocale() == 'ar'? html_css_desc_ar: html_css_desc_en)], 
    ['', 'text-gruvbox-light0', mark_langs[1], (getLocale() == 'ar'? md_desc_ar: md_desc_en)], 
    ['', 'text-gruvbox-green', mark_langs[2], (getLocale() == 'ar'? tex_desc_ar: tex_desc_en)], 
  ];

  let frames_front = m["root.frontend_frameworks.objects"]()
    .split(' ')
    .map((i) => i.replaceAll("_", " "));

  let frames = [
    ['', 'text-gruvbox-light2', frames_front[0], (getLocale() == 'ar'? bun_desc_ar: bun_desc_en)], 
    ['', 'text-gruvbox-orange', frames_front[1], (getLocale() == 'ar'? sv_desc_ar: sv_desc_en)], 
    ['', 'text-gruvbox-green', frames_front[2], (getLocale() == 'ar'? vue_desc_ar: vue_desc_en)], 
    ['', 'text-gruvbox-red', frames_front[3], (getLocale() == 'ar'? la_desc_ar: la_desc_en)], 
    ['', 'text-gruvbox-purple', frames_front[4], (getLocale() == 'ar'? blazoer_desc_ar: blazoer_desc_en)], 
  ];

  let skills_list = m["root.skills.list"]()
    .split(' ')
    .map((i) => i.replaceAll("_", " "));

  let skills = [
    ['', 'text-gruvbox-red', skills_list[0], (getLocale() == 'ar'? git_desc_ar: git_desc_en)], 
    ['', 'text-gruvbox-blue', skills_list[1], (getLocale() == 'ar'? docker_desc_ar: docker_desc_en)], 
    ['', 'text-gruvbox-bright-blue', skills_list[2], (getLocale() == 'ar'? tailcss_desc_ar: tailcss_desc_en)], 
    ['', 'text-gruvbox-bright-blue', skills_list[3], (getLocale() == 'ar'? sql_desc_ar: sql_desc_en)], 
    ['', 'text-gruvbox-purple', skills_list[4], (getLocale() == 'ar'? surreal_desc_ar: surreal_desc_en)], 
  ];

  let environment_list = m["root.environment.list"]()
    .split(' ')
    .map((i) => i.replaceAll("_", " "));

  let environment = [
    ['', 'text-gruvbox-blue', environment_list[0], (getLocale() == 'ar'? arch_desc_ar: arch_desc_en)], 
    ['󱘆', 'text-gruvbox-orange', environment_list[1], (getLocale() == 'ar'? niri_desc_ar: niri_desc_en)], 
    ['', 'text-gruvbox-green', environment_list[2], (getLocale() == 'ar'? nvim_desc_ar: nvim_desc_en)], 
    ['', 'text-gruvbox-bright-green', environment_list[3], (getLocale() == 'ar'? tmux_desc_ar: tmux_desc_en)], 
    ['', 'text-gruvbox-light1', environment_list[4], (getLocale() == 'ar'? nerdfont_desc_ar: nerdfont_desc_en)], 
  ];
</script>

<div out:slide={{ duration: 400 }} in:slide={{ duration: 1500, delay: 400 }}>
  <h1 class="{(getLocale() == 'ar') ? 'pr-4': 'pl-4'}"> {m['root.fetch.title']()} <span class="pl-1 text-gruvbox-gray text-[18px]"></span></h1>

  <div class="relative py-10 sm:px-0 px-5 rounded-lg
    after:content-[''] after:absolute after:top-0 after:left-0 after:right-0 after:z-[-1] after:w-full after:h-full after:bg-black/10 after:backdrop-blur-xs after:rounded-4xl
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
    {#each langs as l}
      <CardButton icon={l[0]} iconColor={l[1]} text={l[2]} description={l[3]}/>
    {/each}
  </div>

  <h2 class="{(getLocale() == 'ar') ? 'pr-4': 'pl-4'}"><span class="icon">󱥬</span> {m["root.markup_langs.title"]()}</h2>
  <div class="my-grid">
    {#each marks as m}
      <CardButton icon={m[0]} iconColor={m[1]} text={m[2]} description={m[3]}/>
    {/each}
  </div>

  <h2 class="{(getLocale() == 'ar') ? 'pr-4': 'pl-4'}"><span class="icon">󰏓</span> {m["root.frontend_frameworks.title"]()}</h2>
  <div class="my-grid">
    {#each frames as f}
      <CardButton icon={f[0]} iconColor={f[1]} text={f[2]} description={f[3]}/>
    {/each}
  </div>

  <h2 class="{(getLocale() == 'ar') ? 'pr-4': 'pl-4'}"><span class="icon"></span>{m["root.skills.title"]()}</h2>
  <div class="my-grid">
    {#each skills as s}
      <CardButton icon={s[0]} iconColor={s[1]} text={s[2]} description={s[3]}/>
    {/each}
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
    {#each environment as e}
      <CardButton icon={e[0]} iconColor={e[1]} text={e[2]} description={e[3]}/>
    {/each}
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
