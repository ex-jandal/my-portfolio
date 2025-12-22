<script lang="ts">
import { slide, blur } from "svelte/transition";
import tmux_nvim_showcase from "$lib/assets/tmux-nvim-showcase.png";
import rofi_showcase from "$lib/assets/rofi-showcase.png";
</script>
  <style>
    .features li {
      margin-bottom: 0.75rem;
      padding: 0.75rem 1rem;
      list-style: none;
    }

    .lastly strong {
      color: var(--color-gruvbox-yellow);
    }
  </style>

<div out:slide={{ duration: 400 }} in:slide={{ duration: 1500, delay: 400 }}>
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
    <div class="my-grid">
      <div class="card"><span class="icon"></span> Arch Linux</div>
      <div class="card"><span class="icon">󱘆</span> Niri (Wayland)</div>
      <div class="card"><span class="icon"></span> Fish Shell</div>
      <div class="card"><span class="icon"></span> Neovim</div>
      <div class="card"><span class="icon"></span> Waybar</div>
      <div class="card"><span class="icon">󰎟</span> Mako</div>
      <div class="card"><span class="icon">󱓞</span> Rofi</div>
      <div class="card"><span class="icon"></span> Tmux</div>
      <div class="card"><span class="icon"></span> Gruvbox Hard</div>
      <div class="card"><span class="icon"></span> CaskaydiaCove Nerd Font</div>
    </div>
  </section>

  <section class="features">
    <h2><span class="icon">󰛓</span> Features</h2>
    <ul>
      <li class="card"><span class="icon">󰧑</span> Keyboard-driven workflow (minimal mouse usage)</li>
      <li class="card"><span class="icon"></span> Consistent Gruvbox theming across the system</li>
      <li class="card"><span class="icon">󱐋</span> Fast startup & low resource usage</li>
      <li class="card"><span class="icon"></span> Modular and clean configuration structure</li>
      <li class="card"><span class="icon">󱠧</span> Integrated CLI prayer-time utilities (<a href="https://github.com/0xzer0x/go-pray">go-pray</a>)</li>
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
    <a href="https://github.com/ex-jandal/my-dots" target="_blank"><span class="icon"></span>GitHub/my-dots</a>
  </div>
</div>
