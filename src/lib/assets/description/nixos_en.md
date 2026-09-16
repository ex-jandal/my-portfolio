### TL;DR
**NixOS** is a Linux distribution built on the **Nix package manager**. The entire system — every package, service, and config file — is **declared** in configuration written in the **Nix language**, and built from a fully reproducible definition.

## The "Declare and Rebuild" Philosophy
Unlike distros where you manage a machine's state by hand, NixOS treats your OS as a **function of your configuration**. Change a line in `flake.nix`, run `sudo nixos-rebuild switch --flake .#nixos`, and the system is rebuilt **atomically** — with the ability to **roll back** to any previous state instantly.

### Key Pillars
* **Nixpkgs:** One of the largest software repositories there is (over 100,000 packages), with exact, byte-for-byte reproducible versions.
* **Declarative config:** The OS, Home-Manager dotfiles, and dev shells are all described in code and versioned in git.
* **Atomic upgrades & rollbacks:** Every rebuild is a new system "generation"; if something breaks, you switch back to the last good one.
* **Flakes & Home-Manager:** Flakes pin *all* inputs for reproducibility; Home-Manager manages `~` (dotfiles, shell, editors) the same declarative way.
* **DevShells:** `nix develop` opens an ephemeral, reproducible development environment (`.#cc`, `.#py`) with no global installs.

> Other operating systems are like a **die-cast model car** — assembled at the factory, ready to go, but you can't easily swap the engine. Arch is a **box of LEGOs** — you build the car yourself. **NixOS is a factory blueprint** — the entire car is specified as code, and the factory can rebuild it perfectly (or roll it back) every single time.

---

### Image Explains

![](/desc_images/niri_image.webp)