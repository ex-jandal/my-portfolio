### TL;DR
**Niri** is a scrollable-tiling **Wayland compositor** that breaks away from the traditional "grid-based" tiling model. Instead of forcing windows into fixed boxes that shrink as you add more, Niri arranges windows in a **continuous horizontal ribbon**, allowing you to pan across your workspace like a film strip.

## The Ribbon Workflow
If you find traditional tilers (like i3 or Hyprland) too rigid, Niri offers a more "organic" feel. It is built in **Rust**, ensuring high performance and modern safety standards.

### Key Features
* **Infinite Horizontal Scrolling:** Windows don't squash each other. If you open a new window, it slides in next to the others, and you simply scroll the view to focus on it.
* **Dynamic Window Sizing:** You can set windows to their ideal width, and they will retain that size regardless of how many other windows are open on the "ribbon."
* **Touchpad & Gesture Support:** Because it’s a scrolling-based system, it feels incredibly natural with 1:1 touchpad gestures (similar to macOS but with the power of a tiling WM).
* **Modern Wayland Native:** It supports modern protocols like `xdg-shell` and `layer-shell`, making it compatible with bars like **Waybar** and launchers like **Wofi** or **Rofi-lbon**.

> Think of a traditional tiling WM like a **Sudoku puzzle**—every number (window) must fit into a pre-defined box, and if you add more, everyone has to get smaller to fit the square. **Niri is an Art Gallery**. All the paintings (windows) are hung on one long wall. You walk down the hallway to see different pieces. You can have a tiny sketch next to a massive canvas, and neither one forces the other to change size.

---

### Image Explains

![](/desc_images/niri_image.png)
