<script lang="ts">
interface Props {
  title: string,
  description: string,
  license: string,
  link: string,
  isLocal: boolean,
  mainLanguages: string[]
}

let {title, description, license, link, isLocal, mainLanguages}: Props = $props() ;

function colorize(lang: string) {
  return lang === 'JavaScript'
          ? 'bg-linear-150 from-yellow-300 to-yellow-500'

          : lang === 'TypeScript'
          ? 'bg-linear-150 from-blue-400 to-blue-600'

          : lang === 'Java'
          ? 'bg-linear-150 from-orange-100 to-orange-300'

          : lang === 'Spring Boot'
          ? 'bg-linear-150 from-green-300 to-green-500'

          : lang === 'Vue'
          ? 'bg-linear-150 from-green-400 to-green-600'

          : lang === 'Postgres'
          ? 'bg-linear-150 from-blue-200 to-blue-400'

          : lang === 'MariaDB'
          ? 'bg-linear-150 from-amber-300 to-amber-500'

          : lang === 'Python'
          ? 'bg-linear-150 from-blue-400 to-yellow-400/80'

          : lang === 'Svelte'
          ? 'bg-linear-150 from-orange-300 to-orange-600'

          : lang === 'Laravel'
          ? 'bg-linear-150 from-orange-300 to-orange-500'

          : lang === 'php'
          ? 'bg-linear-150 from-purple-300 to-purple-500'

          : lang === 'CSharp'
          ? 'bg-linear-150 from-purple-400 to-purple-600'

          : lang === 'Blazor'
          ? 'bg-linear-150 from-purple-400 to-purple-600'

          : '';
}

function iconize(lang: string) {
  return lang === 'JavaScript'
          ?''

          : lang === 'TypeScript'
          ? '󰛦'

          : lang === 'Java'
          ? ''

          : lang === 'Spring Boot'
          ? ''

          : lang === 'Vue'
          ? ''

          : lang === 'Postgres'
          ? ''

          : lang === 'MariaDB'
          ? ''

          : lang === 'Python'
          ? ''

          : lang === 'Svelte'
          ? ''

          : lang === 'Laravel'
          ? '󰫐'

          : lang === 'php'
          ? '󰌟'

          : lang === 'CSharp'
          ? ''

          : lang === 'Blazor'
          ? ''

          : '';
}
</script>

<a href="{link}" target="_blank" class="pro-card rounded-sm flex flex-col justify-between">
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

    <div class="pro-card_description pt-2 text-transparent bg-clip-text bg-linear-60 from-gruvbox-light2 to-gruvbox-light4 italic">
      {description}
    </div>
  </div>

  <div class="flex flex-row flex-wrap gap-2 text-sm">
    {#each mainLanguages as lang}
      <div class="rounded-2xl text-gruvbox-dark0 px-2 {colorize(lang)}">
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
    height: 200px;
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
