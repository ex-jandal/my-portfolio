<script lang="ts">
	import Page from "./demo/+page.svelte";

  let age: number = null;

  let currentDate = new Date();
  let DoB = new Date("Aug 14 2005");

  age = currentDate.getFullYear() - DoB.getFullYear();

  if (currentDate.getMonth() < DoB.getMonth()) {
    age--;
  }

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
  td {
    padding-left: 10px;
    min-width: 120px;
  }
</style>

<h1> It's me. Abu_jandal</h1>

<div class="bg-gruvbox-dark0 py-10 sm:px-0 px-5 flex sm:flex-row flex-col items-center">
  <div class="sm:min-w-70 flex justify-center items-center">
    <pre class="ascii-art">
  ////^\\\\
  | ^   ^ |
 @:(o) (o):@
  |   &gt;   |
  |  ___  |
   \_____/
 ____|  |____
/    \__/    \
    </pre>
  </div>
  <div class="">
    <div class="pl-1 mb-5 border-l-2 border-gruvbox-blue rounded-l-sm">
      <table>
        <tbody>
          <tr>
            <td><span class="icon"></span> Name:</td>
            <td> Sultan Majed</td>
          </tr>
          <tr>
            <td><span class="icon">󰻗</span> Age:</td>
            <td> {age} years old</td>
          </tr>
          <tr>
            <td><span class="icon"></span> Major:</td>
            <td> Cybersecurity</td>
          </tr>
          <tr>
            <td><span class="icon"></span> Langs:</td>
            <td>en, ara</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="pl-1 border-l-2 border-gruvbox-blue rounded-l-sm">
      <table>
        <tbody>
          <tr>
            <td><span class="icon"></span> Distro:</td>
            <td>Arch Linux</td>
          </tr>
          <tr>
            <td><span class="icon"></span> WM:</td>
            <td>Hyprland</td>
          </tr>
          <tr>
            <td><span class="icon"></span> Shell:</td>
            <td>Fish</td>
          </tr>
          <tr>
            <td><span class="icon"></span> Term:</td>
            <td>Kitty</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>

<h2><span class="icon">󰞋</span> About Me</h2>
<p class="pl-2">
  I'm a computer science student focused on <strong>cybersecurity</strong> and <strong>networking</strong>,
  with a strong interest in low-level systems, Linux, and open‑source software.
  I enjoy learning how things work under the hood — from memory management
  to network protocols — and applying that knowledge in practical projects.
</p>

<h2><span class="icon">󰘳</span> Programming Languages</h2>
<div class="grid">
  <div class="card"><span class="icon"></span> Rust</div>
  <div class="card"><span class="icon"></span> Zig (0.15)</div>
  <div class="card"><span class="icon"></span> JavaScript</div>
  <div class="card"><span class="icon"></span> Lua</div>
  <div class="card"><span class="icon"></span> Python</div>
  <div class="card"><span class="icon"></span> PHP</div>
  <div class="card"><span class="icon"></span> Java</div>
  <div class="card"><span class="icon"></span> C#</div>
</div>

<h2><span class="icon"></span> Markup Languages</h2>
<div class="grid">
  <div class="card"><span class="icon"></span> HTML & CSS</div>
  <div class="card"><span class="icon"></span> Markdown</div>
  <div class="card"><span class="icon"></span> LaTeX</div>
</div>

<h2><span class="icon">󰏓</span> Frontend & Frameworks</h2>
<div class="grid">
  <div class="card"><span class="icon"></span> Vue.js</div>
  <div class="card"><span class="icon"></span> Svelte</div>
</div>

<h2><span class="icon">󰊢</span> Featured Projects</h2>
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
  <div class="card"><span class="icon"></span> Arch Linux</div>
  <div class="card"><span class="icon"></span> Hyprland</div>
  <div class="card"><span class="icon"></span> Neovim (NvChad)</div>
  <div class="card"><span class="icon">󰙀</span> Tmux</div>
  <div class="card"><span class="icon"></span> CaskaydiaCove (Nerd Font)</div>
</div>

<h2><span class="icon">󰧑</span> Philosophy</h2>
<p class="pl-2">
  I believe in continuous learning (not thorw Youtube courses obviously ), simplicity, and building strong foundations.
  I prefer tools that respect user freedom, transparency, and <strong>*performance</strong>.
</p>

<h2><span class="icon">󰍡</span> Connect</h2>
<div class="pl-2">
  <p><span class="icon"></span> GitHub: <a href="https://github.com/ex-jandal" target="_blank">@ex-jandal</a></p>
  <p><span class="icon">󰇮</span> Email: <a href="mailto:sultan.majed@proton.me">Sultan Majed</a></p>
</div>

<footer>
  <p class="comment">// "Talk is cheap. Show me the code." — Linus Torvalds</p>
</footer>
