<script lang="ts">
interface Props {
  title: string,
  description: string,
  license: string,
  link: string,
  isLocal: boolean,
  mainLanguages: string[],
  os: string[],
}

let {title, description, license, link, isLocal, mainLanguages, os}: Props = $props() ;

export const COLORS: Record<string, string> = {
  /* ───── Languages ───── */
  JavaScript: 'from-yellow-500 via-yellow-600 to-yellow-700',
  TypeScript: 'from-blue-500 via-blue-600 to-indigo-600',
  Java: 'from-orange-400 via-orange-500 to-blue-800',
  Python: 'from-blue-500 via-sky-500 to-yellow-400',
  Rust: 'from-orange-600 via-orange-700 to-red-800',
  Zig: 'from-yellow-500 via-amber-600 to-orange-600',
  C: 'from-blue-600 to-blue-800',
  Cpp: 'from-blue-500 to-indigo-700',
  CSharp: 'from-purple-500 via-purple-600 to-indigo-600',
  Go: 'from-cyan-500 via-sky-500 to-blue-600',
  PHP: 'from-indigo-400 via-purple-500 to-purple-600',
  Swift: 'from-rose-500 via-rose-600 to-red-700',
  Assembly: 'from-[#8a6a1f] via-[#6e4c13] to-[#4b330c]',

  /* ───── Frameworks ───── */
  Svelte: 'from-orange-400 via-orange-500 to-red-600',
  Vue: 'from-green-400 via-green-500 to-emerald-600',
  React: 'from-cyan-400 via-sky-500 to-blue-500',
  Angular: 'from-red-500 via-red-600 to-rose-700',
  Laravel: 'from-red-400 via-orange-500 to-red-600',
  'Spring Boot': 'from-green-500 via-emerald-600 to-teal-600',
  Django: 'from-green-700 via-green-800 to-zinc-900',
  Flask: 'from-gray-500 to-gray-700',
  NodeJS: 'from-green-500 via-lime-500 to-emerald-600',
  Blazor: 'from-purple-500 via-indigo-600 to-blue-700',
  '.NET': 'from-purple-500 via-purple-600 to-indigo-700',
  Ratatui: 'from-zinc-400 via-zinc-500 to-gray-200',

  /* ───── Databases ───── */
  Postgres: 'from-blue-400 via-blue-500 to-indigo-600',
  MySQL: 'from-sky-500 via-blue-500 to-orange-500',
  MariaDB: 'from-amber-400 via-orange-500 to-red-600',
  MongoDB: 'from-green-500 via-green-600 to-emerald-700',
  Redis: 'from-red-500 via-red-600 to-rose-700',

  /* ───── Cybersecurity Tools ───── */
  Nmap: 'from-indigo-500 via-blue-600 to-cyan-600',
  Metasploit: 'from-red-600 via-rose-700 to-zinc-900',
  Burp: 'from-orange-500 via-amber-500 to-yellow-500',
  Wireshark: 'from-sky-500 via-blue-600 to-indigo-700',
  Hydra: 'from-red-700 via-red-800 to-black',
  John: 'from-zinc-600 via-zinc-700 to-black',

  /* ───── DevOps / OS ───── */
  Linux: 'from-zinc-700 via-zinc-800 to-black',
  Docker: 'from-sky-400 via-sky-500 to-blue-600',
  Kubernetes: 'from-blue-500 via-indigo-600 to-purple-700',
  Git: 'from-orange-500 via-orange-600 to-red-600',
  GitHub: 'from-zinc-700 via-zinc-800 to-black',
};

export function colorize(thing: string) {
  return COLORS[thing]
    ? `bg-gradient-to-tr ${COLORS[thing]}`
    : '';
}

export const ICONS: Record<string, string> = {
  JavaScript: '',
  TypeScript: '󰛦',
  Java: '',
  Python: '',
  Rust: '',
  Zig: '',
  C: '',
  Cpp: '',
  CSharp: '',
  Go: '',
  PHP: '󰌟',
  Assembly: '',

  Svelte: '',
  Vue: '',
  React: '',
  Angular: '',
  Laravel: '󰫐',
  'Spring Boot': '',
  Django: '',
  Flask: '󰬠',
  NodeJS: '',
  Swift: '󰛥',
  Blazor: '',
  '.NET': '',
  Ratatui: '',

  Postgres: '',
  MySQL: '',
  MariaDB: '',
  MongoDB: '',
  Redis: '',
  SQLlite: '',

  /* Cybersecurity */
  Nmap: '󰺮',
  Metasploit: '󰯄',
  Burp: '󰖟',
  Wireshark: '󰁪',
  Hydra: '',
  John: '󰯂',

  Linux: '',
  MacOS: '',
  Web: '󰖟',
  ".Net": '',
  Docker: '󰡨',
  Kubernetes: '󱃾',
  Git: '',
  GitHub: '',

  Any: '',
};

export function iconize(thing: string) {
  return ICONS[thing] ?? '';
}
</script>

<a href="{link}" target="_blank" class="pro-card group rounded-sm flex flex-col gap-4 justify-between">
  <div>
    <div class="pro-card_title">
      {#if isLocal}
        <span class="icon">
          
        </span> 
      {:else}
        <span class="icon">
          
        </span> 
      {/if}
      <span>{title}</span>
    </div>

    <div class="pro-card_info">
      <span>󰗑</span>
      <span>{license}</span>
    </div>

    <div class="text-[12px] pt-1 flex flex-row gap-2">
      {#each os as i}
        <span class="bg-gruvbox-dark2 px-2 rounded-xl">{iconize(i.split(' ')[0])} {i}</span>
      {/each}
    </div>

    <div class="pro-card_description pt-2 text-transparent bg-clip-text bg-linear-60 from-gruvbox-light2 to-gruvbox-light4 italic">
      {description}
    </div>
  </div>

  <div class="flex flex-row flex-wrap gap-2 text-sm">
    {#each mainLanguages as lang}
      <div class="
        inline-flex items-center gap-2 px-2 rounded-xl
        text-sm text-gruvbox-light1
        {colorize(lang)}
        bg-size-[150%_150%]
        bg-left
        group-hover:bg-right
        transition-all duration-700 ease-out
        "
      >
        {iconize(lang)}
        {lang}
      </div>
    {/each}
  </div>
</a>

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
  }
  .pro-card_title {
    font-size: 20px;
    font-weight: bolder;
  }
  .pro-card_info {
    font-size: 12px;
    padding-left: 12px;
  }
  .pro-card_description {
    /* margin-top: 5px; */
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
