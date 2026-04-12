<script lang="ts">
	import { slide } from 'svelte/transition';
  import * as m from "$lib/paraglide/messages";
	import ProjectCard from '../../compunentes/project-card.svelte';
  import PG_showcase from '../../lib/assets/project_showcase/PG_chatting_app.png'
  import qd_showcase from '../../lib/assets/project_showcase/qd_knowledge_manager.png'
  import psg_showcase from '../../lib/assets/project_showcase/proxy_security_gaurid.png'
  import radium_showcase from '../../lib/assets/project_showcase/radium_shell.png'
  import karkadeh_showcase from '../../lib/assets/project_showcase/karka_deh.png'
  import file_veiwer_showcase from '../../lib/assets/project_showcase/file_viewer.png'
  import whatsdown_showcase from '../../lib/assets/project_showcase/whatsdown.png'
  import android_emu_showcase from '../../lib/assets/project_showcase/android_emu_selector.png'

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
  ]
</script>

<style>
</style>

<div out:slide={{ duration: 400 }} in:slide={{ duration: 400, delay: 400 }}>
  <h2 class="frist-h2"><span class="icon"></span> {m['projects.title']()}</h2>
  <div class="grid md:grid-cols-2 grid-cols-1 mt-10 gap-4" dir="ltr">
    {#each projects as item}
      <ProjectCard {...item}/>
    {/each}
  </div>
</div>
