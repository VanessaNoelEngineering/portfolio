# Vanessa Noel Portfolio — Content Editing Guide

All page content lives in one file: **`projects/data.js`**. You never need to touch any HTML file.

---

## How a project entry is structured

```js
{
  // ── Card / modal fields (shown on the homepage) ──────────────────
  id:          'lego-minifig',      // matches the HTML filename
  published:   true,                // false = hidden everywhere
  type:        'hw',                // 'hw' | 'sw' | 'both' (controls accent colour)
  tabs:        ['built'],           // filters: 'built' | 'led' | 'launched'
  title:       'Giant LEGO Minifigure',
  thumbnail:   'https://res.cloudinary.com/...',
  label:       'Hardware · 3D Printing',
  desc:        'One-liner shown on the card.',
  previewDesc: "Longer text shown in the preview modal.",
  tags:        ['CAD', '3D Printing'],
  url:         'projects/lego-minifig.html',

  // ── Project page fields ───────────────────────────────────────────
  heroTitle: 'Giant LEGO <em>Minifigure.</em>',  // <em> = italic accent word

  purpose: { ... },   // "Why I built this" section
  process: { ... },   // "How I built it" section
  result:  { ... },   // "What I made" section
}
```

---

## The three sections

### Purpose
```js
purpose: {
  heading: 'Why I <em>built this.</em>',
  body: [
    'First paragraph.',
    'Second paragraph.',
  ],
  images:    ['https://...'],   // optional — single image below the text
  imageSize: 'md',              // 'sm' | 'md' | 'lg' | 'full' (default: full)
  blocks: [ ... ],              // optional — extra content, in listed order
},
```

### Process
```js
process: {
  heading: 'How I <em>built it.</em>',
  summary: 'One sentence intro above the steps.',
  steps: [
    {
      title: 'Step title',
      body:  'Step description.',
      blockAfter: { ... },  // optional — inserts a block right after THIS step
    },
    { title: 'Next step', body: '...' },
  ],
  images: ['https://...', 'https://...'],  // optional — 2-up grid below steps
  blocks: [ ... ],                          // optional — after everything above
},
```

### Result
```js
result: {
  heading: 'What I <em>made.</em>',
  body: [ 'Paragraph.' ],
  stats: [
    { val: '10×', label: 'Scale' },
    { val: '90+', label: 'Hours of Print Time' },
  ],
  images: ['https://...', 'https://...'],  // optional — 2-up grid
  blocks: [ ... ],                          // optional — after everything above
},
```

---

## Block types

Blocks go in `purpose.blocks`, `process.blocks`, `result.blocks`, or as `blockAfter` on a step. They render in the order listed.

### Image (full-width)
```js
{ type: 'image', url: 'https://...', caption: 'Optional caption' }
```

### Video (YouTube / Vimeo)
```js
{ type: 'video', url: 'https://www.youtube.com/embed/VIDEO_ID' }

// With autoplay + mute:
{ type: 'video', url: 'https://www.youtube.com/embed/VIDEO_ID', autoplay: true, mute: true }
```
⚠️ Must use the **embed** URL format. Convert like this:
- `https://youtu.be/ABC123` → `https://www.youtube.com/embed/ABC123`
- `https://www.youtube.com/watch?v=ABC123` → `https://www.youtube.com/embed/ABC123`

### Gallery (grid of photos)
```js
{ type: 'gallery', images: ['https://...', 'https://...', 'https://...'] }
```

### CAD embed (Fusion 360 / Onshape)
```js
{ type: 'cad', url: 'https://queensu158.autodesk360.com/shares/public/...' }
```
Copy the `src` value from the embed `<iframe>` code.

### Code snippet
```js
{
  type: 'code',
  file: 'main.cpp',
  snippet: 'void loop() {\n  // your code\n}',
  github: 'https://github.com/you/repo',  // optional link
}
```

### Split (two columns)
Two pieces of content side by side. Each side can be independently `text`, `image`, `video`, or `cad`.
```js
{
  type: 'split',
  left:  { type: 'image', url: 'https://...' },
  right: { type: 'text',  body: ['Paragraph one.', 'Paragraph two.'] },
}
```

**All split options:**
```js
{
  type: 'split',

  // Optional block-level:
  label:      'Gallery',                        // small label above
  heading:    'The <em>prototypes.</em>',       // heading above
  mobileFlip: true,                             // reverse stacking order on mobile

  // Each side independently:
  left: {
    type:    'image',           // 'text' | 'image' | 'video' | 'cad'
    url:     'https://...',     // for image / video / cad
    body:    ['paragraph...'],  // for text only
    heading: 'Optional heading', // for text only
    caption: 'Caption text',    // for image / video / cad
    align:   'top',             // 'top' (default) | 'center' | 'bottom'
    nudge:   '-40px',           // shift up (negative) or down (positive)
    autoplay: true,             // video only
    mute:     true,             // video only
  },
  right: { ... },               // same options as left
}
```

---

## Adding a block between two steps

Use `blockAfter` on the step you want it to appear after:

```js
steps: [
  {
    title: 'Step one',
    body:  'Description.',
    blockAfter: {
      type: 'split',
      left:  { type: 'video', url: 'https://www.youtube.com/embed/ABC' },
      right: { type: 'video', url: 'https://www.youtube.com/embed/XYZ' },
    },
  },
  {
    title: 'Step two',   // this appears AFTER the blockAfter above
    body:  'Description.',
  },
]
```

---

## Adding optional labels and headings to blocks

Any block type (video, gallery, cad, code, split) can have an optional label and heading above it:
```js
{ type: 'cad', url: '...', label: 'CAD Model', heading: 'The <em>design.</em>' }
```

---

## Image sizing (for section images, not blocks)

```js
purpose: {
  images:    ['https://...'],
  imageSize: 'md',   // 'sm' = 360px | 'md' = 580px | 'lg' = 800px | 'full' = edge-to-edge
}
```

---

## Common mistakes

### Apostrophes in single-quoted strings
```js
// ❌ BREAKS — apostrophe closes the string early
body: ['I've always loved LEGO.']

// ✅ CORRECT — escape with backslash
body: ['I\'ve always loved LEGO.']
```

### Duplicate keys on the same object
```js
// ❌ BREAKS — JS silently ignores the first blockAfter
{
  title: 'Step',
  blockAfter: { type: 'split', ... },
  blockAfter: { type: 'gallery', ... },  // only this one runs
}

// ✅ CORRECT — one blockAfter per step; put the second block on the next step
```

### Missing closing brackets
Every `{` needs a `}`, every `[` needs a `]`. If nothing loads on a page, this is almost always the cause. Check that each section (purpose, process, result) is properly closed with `},` before the next one.

### Wrong YouTube URL format
```js
// ❌ Won't embed
url: 'https://youtu.be/ABC123'
url: 'https://www.youtube.com/watch?v=ABC123'

// ✅ Correct
url: 'https://www.youtube.com/embed/ABC123'
```

---

## Workflow

1. Edit `projects/data.js`
2. Commit and push to GitHub — changes go live on GitHub Pages automatically
3. For local preview without committing: run `python dev-server.py` from the portfolio folder, open `http://localhost:3333`, and hard-refresh (`Ctrl+Shift+R`) after each save
