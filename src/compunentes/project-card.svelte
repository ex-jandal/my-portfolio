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

function colorize(thing: string) {
  return thing === 'JavaScript'
          ? 'bg-linear-150 from-yellow-300 to-yellow-500'

          : thing === 'TypeScript'
          ? 'bg-linear-150 from-blue-400 to-blue-600'

          : thing === 'Java'
          ? 'bg-linear-150 from-orange-100 to-orange-300'

          : thing === 'Spring Boot'
          ? 'bg-linear-150 from-green-300 to-green-500'

          : thing === 'Vue'
          ? 'bg-linear-150 from-green-400 to-green-600'

          : thing === 'Postgres'
          ? 'bg-linear-150 from-blue-200 to-blue-400'

          : thing === 'MariaDB'
          ? 'bg-linear-150 from-amber-300 to-amber-500'

          : thing === 'Python'
          ? 'bg-linear-150 from-blue-400 to-yellow-400/80'

          : thing === 'Svelte'
          ? 'bg-linear-150 from-orange-300 to-orange-600'

          : thing === 'Laravel'
          ? 'bg-linear-150 from-orange-300 to-orange-500'

          : thing === 'php'
          ? 'bg-linear-150 from-purple-300 to-purple-500'

          : thing === 'CSharp'
          ? 'bg-linear-150 from-purple-400 to-purple-600'

          : thing === 'Blazor'
          ? 'bg-linear-150 from-purple-400 to-purple-600'

          : '';
}

function iconize(thing: string) {
  return thing === 'JavaScript'
          ?''

          : thing === 'TypeScript'
          ? '󰛦'

          : thing === 'Java'
          ? ''

          : thing === 'Spring Boot'
          ? ''

          : thing === 'Vue'
          ? ''

          : thing === 'Postgres'
          ? ''

          : thing === 'MariaDB'
          ? ''

          : thing === 'Python'
          ? ''

          : thing === 'Svelte'
          ? ''

          : thing === 'Laravel'
          ? '󰫐'

          : thing === 'php'
          ? '󰌟'

          : thing === 'CSharp'
          ? ''

          : thing === 'Blazor'
          ? ''

          : thing === 'Linux'
          ? ''

          : thing === 'Web'
          ? '󰖟'

          : thing === 'Windows'
          ? ''

          : thing === '.Net'
          ? ''

          : thing === 'Any'
          ? ''

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

    <div class="text-[12px] pt-1 flex flex-row gap-2">
      {#each os as i}
        <span class="bg-gruvbox-dark2 px-1 rounded-xl">{iconize(i.split(' ')[0])} {i}</span>
      {/each}
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
    height: 230px;
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
