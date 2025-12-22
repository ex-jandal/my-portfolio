<script lang="ts">
import { slide, blur } from "svelte/transition";
import tmux_nvim_showcase from "$lib/assets/tmux-nvim-showcase.png";
import rofi_showcase from "$lib/assets/rofi-showcase.png";
</script>
  <style>
    :root {
      --bg: #1d2021;
      --bg-alt: #282828;
      --fg: #ebdbb2;
      --fg-dim: #a89984;
      --accent: #b8bb26;
      --accent2: #83a598;
      --border: #3c3836;
    }
    .features li {
      margin-bottom: 0.75rem;
      padding: 0.75rem 1rem;
      list-style: none;
    }

    .lastly strong {
      color: var(--color-gruvbox-yellow);
    }
  </style>

<div out:slide={{ duration: 400 }} in:slide={{ duration: 400, delay: 400 }}>
  <section class="hero">
    <h2 class="frist-h2"><span class="icon">󰟃</span> Dotfiles</h2>
    <p class="comment">// Minimal, productive, and aesthetic Arch Linux workflow</p>

    <video class="mt-4 rounded-sm border border-gruvbox-aqua" autoplay loop>
      <source src="https://github.com/user-attachments/assets/0ce09895-6bb8-44ed-a365-dd4656c52949">
    </video>
    <img class="mt-4 rounded-sm border border-gruvbox-aqua" src="{tmux_nvim_showcase}" alt="tmux + nvim showcase"/>
    <img class="mt-4 rounded-sm border border-gruvbox-aqua" src="{rofi_showcase}" alt="tmux + nvim showcase"/>
  </section>

  <section>
    <h2><span class="icon"></span> Stack</h2>
    <div class="grid">
      <div class="card">  Arch Linux</div>
      <div class="card">󱘆  Niri (Wayland)</div>
      <div class="card">  Fish Shell</div>
      <div class="card">  Neovim</div>
      <div class="card">  Waybar</div>
      <div class="card">󰎟  Mako</div>
      <div class="card">󱓞  Rofi</div>
      <div class="card">  Tmux</div>
      <div class="card">  Gruvbox Hard</div>
    </div>
  </section>

  <section class="features">
    <h2><span class="icon">󰛓</span> Features</h2>
    <ul>
      <li class="card">󰧑  Keyboard-driven workflow (minimal mouse usage)</li>
      <li class="card">  Consistent Gruvbox theming across the system</li>
      <li class="card">󱐋  Fast startup & low resource usage</li>
      <li class="card">  Modular and clean configuration structure</li>
      <li class="card">󱠧  Integrated CLI prayer-time utilities (<a href="https://github.com/0xzer0x/go-pray">go-pray</a>)</li>
    </ul>
  </section>

  <section>
    <h2><span class="icon"></span> Repository Structure</h2>
    <pre class="ascii-art bg-gruvbox-dark0 p-4 rounded-sm">
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
    <h2><span class="icon">󰧑</span> Dots Philosophy</h2>
    <div class="quote">
      // "Simplicity is not the absence of complexity, but mastery over it."
    </div>
  </section>

  <div class="lastly text-center text-gruvbox-gray border-t mt-5 pt-5 border-gruvbox-dark4">
    <strong>Sultan Al-Salahi</strong><br>
    Cybersecurity & Networking student<br>
    Arch Linux • Niri • Neovim<br><br>
    <a href="https://github.com/ex-jandal/my-dots" target="_blank">GitHub</a>
  </div>
</div>
