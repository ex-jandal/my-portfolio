<script lang="ts">
	import { slide } from 'svelte/transition';
  import * as m from "$lib/paraglide/messages";
	import ProjectCard from '../../compunentes/project-card.svelte';
  import PG_showcase from '$lib/assets/project_showcase/PG_chatting_app.webp'
  import qd_showcase from '$lib/assets/project_showcase/qd_knowledge_manager.webp'
  import psg_showcase from '$lib/assets/project_showcase/proxy_security_gaurid.webp'
  import radium_showcase from '$lib/assets/project_showcase/radium_shell.webp'
  import karkadeh_showcase from '$lib/assets/project_showcase/karka_deh.webp'
  import file_veiwer_showcase from '$lib/assets/project_showcase/file_viewer.webp'
  import whatsdown_showcase from '$lib/assets/project_showcase/whatsdown.webp'
  import android_emu_showcase from '$lib/assets/project_showcase/android_emu_selector.webp'
  import omc_showcase from '$lib/assets/project_showcase/oh_my_crypto.webp';
  import ara_filter_showcase from '$lib/assets/project_showcase/ara_filter.webp';
  import docgen_showcase from '$lib/assets/project_showcase/docgen.webp';
	import { getLocale } from '$lib/paraglide/runtime';

  interface Projects {
    title: string,
    icon?: string,
    description: string,
    license: string,
    showcase?: string,
    linkCodeberg?: string,
    linkGithub?: string,
    mainLanguages: string[],
    os: string[]
  }

  let projects: Projects[] = [
    {
      title: "Pretty-Good Chatting App",
      icon: "󱅰",
      description: 'The real-time chat experience you\'ve been waiting for. Fast, secure, and built with the modern stack for people who value speed.',
      license: "MIT license",
      showcase: PG_showcase,
      linkCodeberg: "https://codeberg.org/ex-jandal/pg-chatting-app",
      linkGithub: "https://github.com/ex-jandal/PG-chatting-app",
      mainLanguages: ['Laravel', 'Svelte', 'PHP', 'TypeScript', 'MariaDB'],
      os: ['Web', 'Any OS']
    },
    {
      title: "Karka-Deh",
      icon: "󰆪",
      description: 'It is a simple, modern blog for sharing thoughts, tutorials, and technical writings.',
      license: "GPL-3.0 license",
      showcase: karkadeh_showcase,
      linkCodeberg: "https://codeberg.org/ex-jandal/karka-deh",
      linkGithub: "https://github.com/ex-jandal/karka-deh",
      mainLanguages: ['Spring Boot', 'Vue', 'Java', 'TypeScript', 'Postgres', 'Docker'],
      os: ['Web', 'Any OS'],
    },
    {
      title: "QD Knowledge Manager",
      icon: "",
      description: 'It is a Markdown editor and knowledge management tool that helps users capture ideas, manage notes, and generate concise summaries from YouTube videos using AI.',
      license: "MIT license",
      showcase: qd_showcase,
      linkCodeberg: "https://codeberg.org/ex-jandal/qd-knowledge-manager",
      linkGithub: "https://github.com/ex-jandal/qd-knowledge-manager",
      mainLanguages: ['Blazor', 'CSharp','JavaScript'],
      os: ['Linux', '.Net v10', 'Web'],
    },
    {
      title: "Proxy-Security-Guard",
      icon: "󰒄",
      description: 'A high-performance, security-focused proxy server built in Rust.',
      license: "MIT license",
      showcase: psg_showcase,
      linkCodeberg: "https://codeberg.org/ex-jandal/proxy-security-guard",
      linkGithub: "https://github.com/ex-jandal/proxy-security-guard",
      mainLanguages: ['Axum', 'Tokio', 'Rust', 'Ed25519', 'Sha2', 'Clap', 'Tracing'],
      os: ['Linux', 'MacOS', 'Windows'],
    },
    {
      title: "Radium-Shell-rs",
      icon: "",
      description: 'Specialized terminal-based command manager and execution environment built in Rust.',
      license: "GPL-3.0 license",
      showcase: radium_showcase,
      linkCodeberg: "https://codeberg.org/ex-jandal/radium-shell-rs",
      linkGithub: "https://github.com/ex-jandal/radium-shell-rs",
      mainLanguages: ['Rust', 'Ratatui'],
      os: ['Linux', 'MacOS'],
    },
    {
      title: "Arabic Filter",
      icon: "",
      description: 'It is a Rust-based tool designed to normalize and clean Arabic text.',
      license: "MIT license",
      showcase: ara_filter_showcase,
      linkCodeberg: "https://codeberg.org/ex-jandal/ara_filter",
      linkGithub: "https://github.com/ex-jandal/ara_filter",
      mainLanguages: ['Rust'],
      os: ['Any OS'],
    },
    {
      title: "Oh My Crypto",
      icon: "󰌾",
      description: 'A desktop GUI crypto utility written in Zig 0.16.0 with Qt 6 bindings via libqt6zig. Encrypt and decrypt text with seven classical ciphers',
      license: "MIT license",
      showcase: omc_showcase,
      linkCodeberg: "https://codeberg.org/ex-jandal/oh-my-crypto",
      linkGithub: "https://github.com/ex-jandal/oh-my-crypto",
      mainLanguages: ['Zig', 'Qt6'],
      os: ['Linux', 'MacOS', 'Windows'],
    },
    {
      title: "Android Emulator Selector",
      icon: "󱜧",
      description: 'A lightweight Python script to quickly select and launch Android Virtual Devices (AVDs) from your terminal with a beautiful interactive UI.',
      license: "MIT license",
      showcase: android_emu_showcase,
      linkCodeberg: "https://codeberg.org/ex-jandal/android-emu-selector",
      linkGithub: "https://github.com/ex-jandal/android-emu-selector",
      mainLanguages: ['Python', 'Rich'],
      os: ['Linux'],
    },
    {
      title: "Document Generator",
      icon: "󰷈",
      description: 'a vibe-coded util that convert md, latex, html to pdf, odt, docx. that support list of famous themes and also light and dark mode with modern-ish looks and feels.',
      license: "MIT license",
      showcase: docgen_showcase,
      linkCodeberg: "https://codeberg.org/ex-jandal/doc-gen",
      linkGithub: "https://github.com/ex-jandal/doc-gen",
      mainLanguages: ['Python', 'Pandoc'],
      os: ['Linux'],
    },
    {
      title: "File Viewer",
      icon: "",
      description: 'Simple file viewer implemented in x86-64 assembly language, designed specifically for Linux. It demonstrates the use of Linux system calls for basic file I/O operations.',
      license: "MIT license",
      showcase: file_veiwer_showcase,
      linkCodeberg: "https://codeberg.org/ex-jandal/file-viewer-asm",
      linkGithub: "https://github.com/ex-jandal/file-viewer-asm",
      mainLanguages: ['Assembly'],
      os: ['Linux'],
    },
    {
      title: "Whatsdown",
      icon: "󰴽",
      description: 'It is a pretty powerful, lightweight, LAN-based CLI messaging app built with Python.',
      license: "MIT license",
      showcase: whatsdown_showcase,
      linkCodeberg: "https://codeberg.org/ex-jandal/whatsdown",
      linkGithub: "https://github.com/ex-jandal/whatsdown",
      mainLanguages: ['Python'],
      os: ['Any OS'],
    },
    {
      title: "pvault",
      icon: "",
      description: 'A terminal-based password manager built in Zig with encrypted storage. Features master password authentication, AES-256-GCM encryption, clipboard auto-clear, and a TUI interface.',
      license: "GPL-3 license",
      linkCodeberg: "https://codeberg.org/ex-jandal/pvault",
      linkGithub: "https://github.com/ex-jandal/pvault",
      mainLanguages: ['Zig'],
      os: ['Linux'],
    },
  ]

  let uniqueLangs = $derived([...new Set(projects.flatMap(p => p.mainLanguages))].length);
  let mitCount = $derived(projects.filter(p => p.license.includes('MIT')).length);
  let gplCount = $derived(projects.filter(p => p.license.includes('GPL')).length);

</script>

<div out:slide={{ duration: 400 }} in:slide={{ duration: 400, delay: 400 }}>
  <a href="https://github.com/ex-jandal" target="_blank" class="bg-gruvbox-dark1/40 mt-5 px-2 py-4 sm:px-4 sm:py-6 flex flex-col rounded-2xl">
    <span class="block px-6 text-md sm:text-xl">
      <span class="icon px-0.5"></span>
      <strong>{(getLocale() == 'ar')? 'سجل الألتزام على قيتهب': 'Github Commit History'}:</strong>
    </span>
    <!-- this one does not work in Yemen: https://raw.githubusercontent.com/ex-jandal/ex-jandal/output/github-snake.svg -->
    <img class="m-auto" src="https://cdn.jsdelivr.net/gh/ex-jandal/ex-jandal@output/github-snake-dark.svg" alt="Github Snake" />
  </a>

  <a href="https://codeberg.org/ex-jandal" target="_blank" class="bg-gruvbox-dark1/40 mt-5 px-2 py-4 sm:px-4 sm:py-6 flex flex-col rounded-2xl">
    <span class="block px-6 text-md sm:text-xl">
      <span class="icon px-0.5"></span>
      <strong>{(getLocale() == 'ar')? 'سجل الألتزام على كودبريج': 'Codeberg Commit History'}:</strong>
    </span>
    <!-- this one does not work in Yemen: https://raw.githubusercontent.com/ex-jandal/ex-jandal/output/codeberg-snake.svg -->
    <img class="m-auto" src="https://cdn.jsdelivr.net/gh/ex-jandal/ex-jandal@output/codeberg-snake-dark.svg" alt="Codeberg Snake" />
  </a>

  <h2 class="mt-6"><span class="icon"></span> {m['projects.title']()}</h2>
  <div class="flex flex-wrap gap-x-4 gap-y-1 {(getLocale() == 'ar') ? 'pr-2' : 'pl-2'} text-sm text-gruvbox-gray mb-4">
    <span> {projects.length} {(getLocale() == 'ar') ? 'مشروع' : 'projects'}</span>
    <span> {uniqueLangs} {(getLocale() == 'ar') ? 'لغة' : 'languages'}</span>
    <span> {mitCount} MIT · {gplCount} GPL-3.0</span>
  </div>
  <div class="grid md:grid-cols-2 grid-cols-1 mt-10 gap-4" dir="ltr">
    {#each projects as item}
      <ProjectCard {...item}/>
    {/each}
  </div>
</div>
