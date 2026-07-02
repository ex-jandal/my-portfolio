<script lang="ts">
  import { slide } from "svelte/transition";
  import tmux_nvim_showcase from "$lib/assets/tmux-nvim-showcase.webp";
  import rofi_showcase from "$lib/assets/rofi-showcase.webp";
  import * as m from "$lib/paraglide/messages";
	import { PUBLIC_URL } from '$env/static/public';
	import { getLocale } from "$lib/paraglide/runtime";

  let stack = m["my-dots.stack.list"]()
    .split(' ')
    .map((i) => i.replaceAll("_", " "));
</script>

<div out:slide={{ duration: 400 }} in:slide={{ duration: 1500, delay: 400 }}>
  <section class="hero">
    <h2 class="{(getLocale() == 'ar') ? 'pr-4': 'pl-4'}"><span class="icon">󰟃</span> {m["my-dots.title"]()}</h2>
    <p class="italic text-gruvbox-light4">&af; {m["my-dots.quote"]()}</p>

    <div class="relative flex justify-center items-center overflow-hidden mt-4 rounded-sm border border-gruvbox-aqua">
      <div class="absolute text-4xl text-gruvbox-bright-aqua"></div>
      <video class="w-full z-10" autoplay loop>
        <source src="{PUBLIC_URL}/videos/my-dots_showcase.mp4">
      </video>
    </div>

    <img class="mt-4 rounded-sm border border-gruvbox-aqua" src="{tmux_nvim_showcase}" alt="tmux + nvim showcase"/>
    <img class="mt-4 rounded-sm border border-gruvbox-aqua" src="{rofi_showcase}" alt="tmux + nvim showcase"/>
  </section>

  <section>
    <h2 class="mt-6 {(getLocale() == 'ar') ? 'pr-4': 'pl-4'}"><span class="icon"></span> {m["my-dots.stack.title"]()}</h2>
    <ul class="my-grid">
      <li class="border border-gruvbox-orange p-4 rounded list-none bg-gruvbox-dark0/30 hover:bg-gruvbox-dark1/60 transition-all duration-300"><span class="icon"></span> {stack[0]}</li>
      <li class="border border-gruvbox-orange p-4 rounded list-none bg-gruvbox-dark0/30 hover:bg-gruvbox-dark1/60 transition-all duration-300"><span class="icon">󱘆</span> {stack[1]}</li>
      <li class="border border-gruvbox-orange p-4 rounded list-none bg-gruvbox-dark0/30 hover:bg-gruvbox-dark1/60 transition-all duration-300"><span class="icon"></span> {stack[2]}</li>
      <li class="border border-gruvbox-orange p-4 rounded list-none bg-gruvbox-dark0/30 hover:bg-gruvbox-dark1/60 transition-all duration-300"><span class="icon"></span> {stack[3]}</li>
      <li class="border border-gruvbox-orange p-4 rounded list-none bg-gruvbox-dark0/30 hover:bg-gruvbox-dark1/60 transition-all duration-300"><span class="icon"></span> {stack[4]}</li>
      <li class="border border-gruvbox-orange p-4 rounded list-none bg-gruvbox-dark0/30 hover:bg-gruvbox-dark1/60 transition-all duration-300"><span class="icon">󰎟</span> {stack[5]}</li>
      <li class="border border-gruvbox-orange p-4 rounded list-none bg-gruvbox-dark0/30 hover:bg-gruvbox-dark1/60 transition-all duration-300"><span class="icon">󱓞</span> {stack[6]}</li>
      <li class="border border-gruvbox-orange p-4 rounded list-none bg-gruvbox-dark0/30 hover:bg-gruvbox-dark1/60 transition-all duration-300"><span class="icon"></span> {stack[7]}</li>
      <li class="border border-gruvbox-orange p-4 rounded list-none bg-gruvbox-dark0/30 hover:bg-gruvbox-dark1/60 transition-all duration-300"><span class="icon"></span> {stack[8]}</li>
      <li class="border border-gruvbox-orange p-4 rounded list-none bg-gruvbox-dark0/30 hover:bg-gruvbox-dark1/60 transition-all duration-300"><span class="icon"></span> {stack[9]}</li>
    </ul>
  </section>

  <section>
    <h2 class="mt-6 {(getLocale() == 'ar') ? 'pr-4': 'pl-4'}"><span class="icon">󰛓</span> {m["my-dots.features.title"]()}</h2>
    <ul class="flex flex-col gap-3 {(getLocale() == 'ar') ? 'pr-0' : 'pl-0'}">
      <li class="border border-gruvbox-orange p-3 rounded list-none bg-gruvbox-dark0/30"><span class="icon">󰧑</span> {m["my-dots.features.item_1"]()}</li>
      <li class="border border-gruvbox-orange p-3 rounded list-none bg-gruvbox-dark0/30"><span class="icon"></span> {m["my-dots.features.item_2"]()}</li>
      <li class="border border-gruvbox-orange p-3 rounded list-none bg-gruvbox-dark0/30"><span class="icon">󱐋</span> {m["my-dots.features.item_3"]()}</li>
      <li class="border border-gruvbox-orange p-3 rounded list-none bg-gruvbox-dark0/30"><span class="icon"></span> {m["my-dots.features.item_4"]()}</li>
      <li class="border border-gruvbox-orange p-3 rounded list-none bg-gruvbox-dark0/30"><span class="icon">󱠧</span> {m["my-dots.features.item_5.text"]()} (<a class="text-gruvbox-bright-blue hover:text-gruvbox-blue" href="https://github.com/0xzer0x/go-pray">{m["my-dots.features.item_5.app_name"]()}</a>)</li>
    </ul>
  </section>

  <section>
    <h2 class="mt-6 {(getLocale() == 'ar') ? 'pr-4': 'pl-4'}"><span class="icon"></span> {m["my-dots.repository_structure"]()}</h2>
    <pre class="font-code whitespace-pre bg-gruvbox-dark0/50 p-4 rounded-sm" dir="ltr">
.
├── dot-config
│   ├── alacritty
│   ├── btop
│   ├── clipse
│   ├── fastfetch
│   ├── fish
│   ├── fontconfig
│   ├── foot
│   ├── fuzzel
│   ├── go-pray
│   ├── gtk-3.0
│   ├── gtk-4.0
│   ├── hypr
│   ├── kde-material-you-colors
│   ├── kitty
│   ├── Kvantum
│   ├── mako
│   ├── matugen
│   ├── mpv
│   ├── niri
│   ├── nvim
│   ├── qt5ct
│   ├── qt6ct
│   ├── qutebrowser
│   ├── ra-multiplex
│   ├── rofi
│   ├── starship.toml
│   ├── swaylock
│   ├── systemd
│   ├── tmux
│   └── waybar
└── README

31 directories, 2 files
    </pre>
  </section>

  <section>
    <h2 class="mt-6 {(getLocale() == 'ar') ? 'pr-4': 'pl-4'}"><span class="icon">󰧑</span> {m["my-dots.dots_philosophy.title"]()}</h2>
    <div class="border-l-4 border-gruvbox-bright-red bg-gruvbox-dark0/50 p-4 italic text-gruvbox-light4 rounded-sm">&af; {m["my-dots.dots_philosophy.text"]()}</div>
  </section>

  <div class="text-center text-gruvbox-gray border-t mt-5 pt-5 border-gruvbox-dark4">
    <strong class="text-gruvbox-yellow">{m["my-dots.footer.my_name"]()}</strong><br>
    {m["my-dots.footer.feild"]()}<br>
    {m["my-dots.footer.tools"]()}<br><br>
    <a href="https://codeberg.org/ex-jandal/my-dots" target="_blank"><span class="icon"></span>Codeberg/my-dots</a><br/>
    <a href="https://github.com/ex-jandal/my-dots" target="_blank"><span class="icon"></span>Github/my-dots</a>
  </div>
</div>

