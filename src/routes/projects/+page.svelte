<script lang="ts">
	import { blur, slide } from 'svelte/transition';
	import ProjectCard from '../../compunentes/project-card.svelte';

  interface Projects {
    title: string,
    description: string,
    license: string,
    link: string,
    isLocal: boolean,
    mainLanguages: string[],
    os: string[]
  }

  let projects: Projects[] = [
    {
      title: "Pretty-Good Chatting App",
      description: 'The real-time chat experience you\'ve been waiting for. Fast, secure, and built with the modern stack for people who value speed.',
      license: "MIT license",
      link: "https://github.com/ex-jandal/PG-chatting-app",
      isLocal: false,
      mainLanguages: ['Laravel', 'Svelte', 'PHP', 'TypeScript', 'MariaDB'],
      os: ['Web', 'Any OS']
    },
    {
      title: "Karka-Deh",
      description: 'It is a simple, modern blog for sharing thoughts, tutorials, and technical writings.',
      license: "GPL-3.0 license",
      link: "https://github.com/ex-jandal/karka-deh",
      isLocal: false,
      mainLanguages: ['Spring Boot', 'Vue', 'Java', 'TypeScript', 'Postgres', 'Docker'],
      os: ['Web', 'Any OS'],
    },
    {
      title: "QD Knowledge Manager",
      description: 'It is a Markdown editor and knowledge management tool that helps users capture ideas, manage notes, and generate concise summaries from YouTube videos using AI.',
      license: "MIT license",
      link: "https://github.com/ex-jandal/qd-knowledge-manager",
      isLocal: false,
      mainLanguages: ['Blazor', 'CSharp','JavaScript'],
      os: ['Linux', '.Net v10', 'Web'],
    },
    {
      title: "Radium-Shell-rs",
      description: 'Specialized terminal-based command manager and execution environment built in Rust.',
      license: "GPL-3.0 license",
      link: "https://github.com/ex-jandal/radium-shell-rs",
      isLocal: false,
      mainLanguages: ['Rust', 'Ratatui'],
      os: ['Linux', 'MacOS'],
    },
    {
      title: "Whatsdown",
      description: 'Itis a pretty powerful, lightweight, LAN-based CLI messaging app built with Python.',
      license: "MIT license",
      link: "https://github.com/ex-jandal/whatsdown",
      isLocal: false,
      mainLanguages: ['Python'],
      os: ['Any OS'],
    },
  ]
</script>

<style>
</style>

<div out:slide={{ duration: 400 }} in:slide={{ duration: 400, delay: 400 }}>
  <h2 class="frist-h2"><span class="icon"></span> Projects</h2>
  <div class="grid md:grid-cols-2 grid-cols-1 mt-10 gap-4">
    {#each projects as item}
      <ProjectCard {...item}/>
    {/each}
  </div>
</div>
