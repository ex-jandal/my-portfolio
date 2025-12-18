<script>
	import Page from "./demo/+page.svelte";

</script>
<style>
  code, .badge {
    background: #161b22;
    padding: 0.2rem 0.5rem;
    border-radius: 6px;
    font-size: 0.9rem;
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 1rem;
    margin-top: 1rem;
  }
  footer {
    margin-top: 3rem;
    font-size: 0.9rem;
  }
</style>

<h1>It's me. Abu_jandal </h1>

<p class="mt-4">
  <span class="icon"></span> Cybersecurity & Networking student<br />
  <span class="icon"></span> Arch Linux • Hyprland • Neovim
</p>

<h2><span class="icon">󰞋</span> About Me</h2>
<p>
  I'm a computer science student focused on <strong>cybersecurity</strong> and <strong>networking</strong>,
  with a strong interest in low-level systems, Linux, and open‑source software.
  I enjoy learning how things work under the hood — from memory management
  to network protocols — and applying that knowledge in practical projects.
</p>

<h2><span class="icon">󰈙</span> Programming Languages</h2>
<div class="grid">
  <div class="card"><span class="icon"></span> Rust</div>
  <div class="card"><span class="icon"></span> Zig</div>
  <div class="card"><span class="icon"></span> JavaScript</div>
  <div class="card"><span class="icon"></span> Lua (basic)</div>
  <div class="card"><span class="icon"></span> Python (basic)</div>
</div>

<h2><span class="icon">󰏓</span> Frontend & Frameworks</h2>
<div class="grid">
  <div class="card"><span class="icon"></span> Vue.js</div>
  <div class="card"><span class="icon"></span> Svelte</div>
</div>

<h2>󰊢 Featured Projects</h2>
<ul>
  <li><b>Whatsdown</b> – CLI Messaging app built Python</li>
  <li><b>Rust CLI Tool</b> – Systems-level utility</li>
  <li><b>Zig Playground</b> – Low-level experiments</li>
</ul>

<h2><span class="icon">󰌢</span> Cybersecurity & Networking</h2>
<ul>
  <li>Foundations of networking (IP, subnetting, routing)</li>
  <li>Security principles and threat models</li>
  <li>Interest in web penetration testing</li>
  <li>Privacy & digital security research</li>
</ul>

<h2><span class="icon">󰆍</span> Environment</h2>
<div class="grid">
  <div class="card"><span class="icon"></span> Arch Linux (Maniual)</div>
  <div class="card"><span class="icon"></span> Hyprland (Wayland)</div>
  <div class="card"><span class="icon"></span> Neovim (NvChad)</div>
  <div class="card"><span class="icon">󰙀</span> Tmux (kitty)</div>
  <div class="card"><span class="icon"></span> CaskaydiaCove (Nerd Font)</div>
</div>

<h2><span class="icon">󰋜</span> Philosophy</h2>
<p>
  I believe in continuous learning, simplicity, and building strong foundations.
  I prefer tools that respect user freedom, transparency, and performance.
</p>

<h2>󰍡 Connect</h2>
  <p> GitHub: <a href="https://github.com/ex-jandal" target="_blank">@ex-jandal</a></p>
  <p>󰇮 Email: <a href="mailto:sultan.majed@proton.me">Sultan Majed</a></p>

<footer>
  <p class="comment">// "Talk is cheap. Show me the code." — Linus Torvalds</p>
</footer>
