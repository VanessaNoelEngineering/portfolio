/* ═══════════════════════════════════════════════════════════════
   _shell.js — Vanessa Noel Portfolio
   Shared runtime for all project pages.

   Expects window.PROJECT_CONFIG to be set by the inline <script>
   at the top of each page's <body> BEFORE this file loads.

   PROJECT_CONFIG shape:
   {
     type:   'hw' | 'sw' | 'both',
     blocks: ['cad','components','code','gallery','video']  // any subset
   }
═══════════════════════════════════════════════════════════════ */
(function () {

/* ── BLOCK TEMPLATES ─────────────────────────────────────────────
   Each returns an HTML string.
   Fill in YOUR_* placeholders in the generated HTML.
──────────────────────────────────────────────────────────────── */
const BLOCKS = {

  /* Fusion 360 interactive model embed */
  cad: () => `
<section class="section reveal">
  <div class="section-label">CAD Model</div>
  <h2 class="section-title">The <em>model.</em></h2>
  <div class="cad-embed-wrap">
    <iframe
      src="YOUR_FUSION_360_EMBED_URL"
      allowfullscreen
      loading="lazy"
      title="3D CAD Model">
    </iframe>
  </div>
</section>`,

  /* Visual bill of materials — image + name + description rows.
     Duplicate .comp-row blocks to add more components.         */
  components: () => `
<section class="section reveal">
  <div class="section-label">Components</div>
  <h2 class="section-title">What's <em>inside.</em></h2>
  <div class="comp-list">
    <div class="comp-row">
      <div class="comp-img-placeholder">🔩</div>
      <div class="comp-info">
        <strong class="comp-name">Component Name</strong>
        <span class="comp-desc">Description — what it does and why it was chosen.</span>
      </div>
    </div>
    <!-- Copy the .comp-row block above for each additional component.
         Replace the placeholder emoji with:
         <img src="images/component.jpg" class="comp-img" alt="Component name"/>  -->
  </div>
</section>`,

  /* Code snippet with GitHub link */
  code: () => `
<section class="section reveal">
  <div class="section-label">Code</div>
  <h2 class="section-title">The <em>firmware.</em></h2>
  <div class="code-wrap">
    <div class="code-wrap-bar">snippet — YOUR_FILENAME</div>
    <pre><code>// Paste a representative code snippet here.</code></pre>
  </div>
  <a href="YOUR_GITHUB_URL" class="btn-outline" target="_blank" rel="noopener">
    View on GitHub →
  </a>
</section>`,

  /* 3-column photo gallery */
  gallery: () => `
<section class="section reveal">
  <div class="section-label">Gallery</div>
  <h2 class="section-title">The <em>photos.</em></h2>
  <div class="gallery-grid">
    <div class="img-placeholder"><span class="ph-icon">🖼</span>Photo</div>
    <div class="img-placeholder"><span class="ph-icon">🖼</span>Photo</div>
    <div class="img-placeholder"><span class="ph-icon">🖼</span>Photo</div>
    <!-- Replace .img-placeholder divs with:
         <img src="images/photo.jpg" alt="Description" loading="lazy"/>  -->
  </div>
</section>`,

  /* YouTube / Vimeo demo video */
  video: () => `
<section class="section reveal">
  <div class="section-label">Demo</div>
  <h2 class="section-title">See it <em>run.</em></h2>
  <div class="video-wrap">
    <iframe
      src="YOUR_YOUTUBE_OR_VIMEO_EMBED_URL"
      title="Project demo"
      allowfullscreen
      loading="lazy">
    </iframe>
  </div>
</section>`,

};

/* ── INJECT BLOCKS ───────────────────────────────────────────────
   Runs synchronously. Must happen BEFORE setupReveal() so the
   injected .reveal elements are seen by the IntersectionObserver.
──────────────────────────────────────────────────────────────── */
function injectBlocks() {
  const el = document.getElementById('optional-blocks');
  if (!el || !window.PROJECT_CONFIG) return;
  el.innerHTML = (PROJECT_CONFIG.blocks || [])
    .filter(k => BLOCKS[k])
    .map(k => BLOCKS[k]())
    .join('\n');
}

/* ── REVEAL ANIMATION ────────────────────────────────────────────
   Staggered fade-up on scroll into view.
   Must run AFTER injectBlocks().
──────────────────────────────────────────────────────────────── */
function setupReveal() {
  const ro = new IntersectionObserver(entries => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('in'), i * 60);
        ro.unobserve(e.target);
      }
    });
  }, { threshold: .1 });
  document.querySelectorAll('.reveal').forEach(el => ro.observe(el));
}

/* ── CURSOR ──────────────────────────────────────────────────────
   Small dot (instant) + lagging ring (rAF lerp).
──────────────────────────────────────────────────────────────── */
function setupCursor() {
  const cur = document.getElementById('cur');
  const cur2 = document.getElementById('cur2');
  if (!cur || !cur2) return;
  let mx = 0, my = 0, rx = 0, ry = 0;
  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    cur.style.left = mx + 'px';
    cur.style.top  = my + 'px';
  });
  (function loop() {
    rx += (mx - rx) * .1;
    ry += (my - ry) * .1;
    cur2.style.left = rx + 'px';
    cur2.style.top  = ry + 'px';
    requestAnimationFrame(loop);
  })();
}

/* ── ACTIVE TAB ON SCROLL ────────────────────────────────────────
   Highlights the tab whose section is at/above 120px from top.
──────────────────────────────────────────────────────────────── */
function setupTabs() {
  const SECTION_IDS = ['purpose', 'process', 'result'];
  const tabs = document.querySelectorAll('.tab-link');
  if (!tabs.length) return;
  window.addEventListener('scroll', () => {
    let active = 'purpose';
    SECTION_IDS.forEach(id => {
      const el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top <= 120) active = id;
    });
    tabs.forEach(t => t.classList.toggle('active', t.dataset.section === active));
  }, { passive: true });
  tabs[0].classList.add('active');
}

/* ── DYNAMIC PREV / NEXT NAV ─────────────────────────────────────
   Reads PROJECTS_DATA (loaded via data.js) to build the prev/next
   links based on the published array order — no hardcoding needed.
──────────────────────────────────────────────────────────────── */
function setupProjNav() {
  if (!window.PROJECTS_DATA) return;
  const navEl = document.querySelector('.proj-nav');
  if (!navEl) return;

  // Only published projects that have a local page file
  const pub = PROJECTS_DATA.filter(p => p.published && (p.page || p.url.startsWith('projects/')));

  // Resolve the local filename for a project entry
  const pageFile = p => (p.page || p.url).split('/').pop();

  const current = location.pathname.split('/').pop();
  const idx = pub.findIndex(p => pageFile(p) === current);
  if (idx === -1) return;

  const prev = pub[(idx - 1 + pub.length) % pub.length];
  const next = pub[(idx + 1) % pub.length];

  navEl.innerHTML =
    `<a href="${pageFile(prev)}" class="proj-nav-link prev">` +
      `<span class="proj-nav-dir">← Previous</span>` +
      `<span class="proj-nav-name">${prev.title}</span>` +
    `</a>` +
    `<a href="${pageFile(next)}" class="proj-nav-link next">` +
      `<span class="proj-nav-dir">Next →</span>` +
      `<span class="proj-nav-name">${next.title}</span>` +
    `</a>`;
}

/* ── BOOT ────────────────────────────────────────────────────────
   Order matters: inject → observe → cursor → tabs → nav
──────────────────────────────────────────────────────────────── */
injectBlocks();   // adds DOM first
setupReveal();    // then observe all .reveal (incl. injected)
setupCursor();
setupTabs();
setupProjNav();   // dynamic prev/next from data.js order

})();
