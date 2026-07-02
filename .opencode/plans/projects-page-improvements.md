# Projects Page Visual & Metadata Improvements

## Files to Edit

### 1. `src/routes/projects/+page.svelte`

**Script — add derived stats:**
```ts
let uniqueLangs = $derived([...new Set(projects.flatMap(p => p.mainLanguages))].length);
let mitCount = $derived(projects.filter(p => p.license.includes('MIT')).length);
let gplCount = $derived(projects.filter(p => p.license.includes('GPL')).length);
```

**Template — replace single-line project count with rich metadata row:**
```svelte
<div class="flex flex-wrap gap-x-4 gap-y-1 {(getLocale() == 'ar') ? 'pr-2' : 'pl-2'} text-sm text-gruvbox-gray mb-4">
  <span> {projects.length} projects</span>
  <span> {uniqueLangs} languages</span>
  <span> {mitCount} MIT · {gplCount} GPL-3.0</span>
</div>
```

### 2. `src/compunentes/project-card.svelte`

**Card container (line ~172-174):**
- Add `bg-gruvbox-dark0/30` background
- Add `hover:bg-gruvbox-dark1/40` hover state
- Upgrade shadow: `shadow-lg hover:shadow-xl hover:shadow-gruvbox-bright-red/30`

**License badge (line ~190-193):**
Wrap the license text in a pill-style badge:
```svelte
<span class="bg-gruvbox-dark2 px-2 py-0.5 rounded-full text-xs">
  󰗑 {license}
</span>
```

**OS tags (line ~197):**
Change `bg-gruvbox-dark2` → `bg-gruvbox-dark0/50` to match home page tag style.

### No new fields, no new CSS, no new data.
