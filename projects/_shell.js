/* ═══════════════════════════════════════════════════════════════
   _shell.js — Vanessa Noel Portfolio
   Shared runtime for all project pages.

   Expects window.PROJECT_CONFIG and window.PROJECTS_DATA to be
   set before this file loads (data.js in <head>, inline script
   sets PROJECT_CONFIG.type and PROJECT_CONFIG.id).

   PROJECT_CONFIG shape:
   {
     type: 'hw' | 'sw' | 'both',
     id:   'baymax'  // matches PROJECTS_DATA id
   }
═══════════════════════════════════════════════════════════════ */
(function () {

/* ── IMAGE ZONE HELPER ───────────────────────────────────────────
   If images array is null/empty → placeholders.
   If images has URLs → actual <img> tags.
   layout: 'single' | 'grid'
──────────────────────────────────────────────────────────────── */
function imageZone(images, layout, size) {
  layout = layout || 'single';
  size   = size   || 'full';
  const wrapClass = 'img-wrap-' + size;
  // Only render if images were explicitly provided
  if (!images) return '';
  if (images.length) {
    if (layout === 'grid') {
      return `<div class="img-grid reveal">${images.map(src =>
        `<img src="${src}" loading="lazy" alt=""/>`).join('')}</div>`;
    }
    return `<div class="${wrapClass} reveal"><img src="${images[0]}" loading="lazy" alt=""/></div>`;
  }
  // images was set but empty — show placeholder
  if (layout === 'grid') {
    return `<div class="img-grid reveal">` +
      `<div class="img-placeholder"><span class="ph-icon">🖼</span>Photo</div>` +
      `<div class="img-placeholder"><span class="ph-icon">🖼</span>Photo</div>` +
    `</div>`;
  }
  return `<div class="img-placeholder reveal"><span class="ph-icon">🖼</span>Add your image here</div>`;
}

/* ── BLOCK RENDERERS ─────────────────────────────────────────────
   Each receives the block data object and returns an HTML string.
──────────────────────────────────────────────────────────────── */
/* ── VIDEO URL HELPER ────────────────────────────────────────────
   Appends autoplay/mute params and returns the allow attribute.
──────────────────────────────────────────────────────────────── */
function videoSrc(v) {
  let url = v.url || '';
  const params = [];
  if (v.autoplay)          params.push('autoplay=1');
  if (v.mute)              params.push('mute=1');
  if (v.controls === false) params.push('controls=0');
  if (params.length) url += (url.includes('?') ? '&' : '?') + params.join('&');
  const allow = ['fullscreen', v.autoplay ? 'autoplay' : ''].filter(Boolean).join('; ');
  return { url, allow };
}

const BLOCK_RENDERERS = {

  video: b => {
    const label   = b.label   ? `<div class="section-label">${b.label}</div>` : '';
    const heading = b.heading ? `<h2 class="section-title reveal">${b.heading}</h2>` : '';
    const { url, allow } = videoSrc(b);
    return `${label}${heading}<div class="video-wrap reveal"><iframe src="${url}" title="Project demo" allow="${allow}" allowfullscreen loading="lazy"></iframe></div>`;
  },

  gallery: b => {
    const label   = b.label   ? `<div class="section-label">${b.label}</div>` : '';
    const heading = b.heading ? `<h2 class="section-title reveal">${b.heading}</h2>` : '';
    const imgs = (b.images || []).map(src => `<img src="${src}" loading="lazy" alt=""/>`).join('');
    return `${label}${heading}<div class="gallery-grid reveal">${imgs}</div>`;
  },

  code: b => {
    const label   = b.label   ? `<div class="section-label">${b.label}</div>` : '';
    const heading = b.heading ? `<h2 class="section-title reveal">${b.heading}</h2>` : '';
    const ghLink  = b.github  ? `<a href="${b.github}" class="btn-outline" target="_blank" rel="noopener">View on GitHub →</a>` : '';
    return `${label}${heading}<div class="code-wrap reveal"><div class="code-wrap-bar">snippet — ${b.file || ''}</div><pre><code>${b.snippet || ''}</code></pre></div>${ghLink}`;
  },

  cad: b => {
    const label   = b.label   ? `<div class="section-label">${b.label}</div>` : '';
    const heading = b.heading ? `<h2 class="section-title reveal">${b.heading}</h2>` : '';
    return `${label}${heading}<div class="cad-embed-wrap reveal"><iframe src="${b.url}" allowfullscreen webkitallowfullscreen mozallowfullscreen loading="lazy" title="3D CAD Model"></iframe></div>`;
  },

  image: b => {
    const wrapClass = 'img-wrap-' + (b.size || 'full');
    return `<figure class="${wrapClass} reveal">` +
      `<img src="${b.url}" loading="lazy" alt="${b.caption || ''}"/>` +
      (b.caption ? `<figcaption>${b.caption}</figcaption>` : '') +
    `</figure>`;
  },

  split: b => {
    function sideAlign(s) {
      if (!s || !s.align || s.align === 'top') return '';
      return s.align === 'bottom' ? ' split-side-bottom' : ' split-side-center';
    }
    function renderSide(s) {
      if (!s) return '<div></div>';
      const nudgeStyle = s.nudge ? ` style="margin-top:${s.nudge}"` : '';
      if (s.type === 'text') {
        const bodyHtml = (s.body || []).map(t => `<p>${t}</p>`).join('');
        return `<div class="split-text${sideAlign(s)}"${nudgeStyle}>` +
          (s.heading ? `<h3>${s.heading}</h3>` : '') +
          bodyHtml +
        `</div>`;
      }
      if (s.type === 'image') {
        return `<div class="split-media${sideAlign(s)}"${nudgeStyle}>` +
          `<img src="${s.url}" loading="lazy" alt="${s.caption || ''}"/>` +
          (s.caption ? `<p class="split-caption">${s.caption}</p>` : '') +
        `</div>`;
      }
      if (s.type === 'video') {
        const { url, allow } = videoSrc(s);
        return `<div class="split-media${sideAlign(s)}"${nudgeStyle}>` +
          `<div class="split-video-wrap">` +
            `<iframe src="${url}" allow="${allow}" allowfullscreen loading="lazy" title="Video"></iframe>` +
          `</div>` +
          (s.caption ? `<p class="split-caption">${s.caption}</p>` : '') +
        `</div>`;
      }
      if (s.type === 'cad') {
        return `<div class="split-media${sideAlign(s)}"${nudgeStyle}>` +
          `<div class="split-video-wrap">` +
            `<iframe src="${s.url}" allowfullscreen webkitallowfullscreen mozallowfullscreen loading="lazy" title="CAD Model"></iframe>` +
          `</div>` +
          (s.caption ? `<p class="split-caption">${s.caption}</p>` : '') +
        `</div>`;
      }
      return '<div></div>';
    }
    const label    = b.label   ? `<div class="section-label">${b.label}</div>` : '';
    const heading  = b.heading ? `<h2 class="section-title reveal">${b.heading}</h2>` : '';
    const flipClass = b.mobileFlip ? ' mobile-flip' : '';
    return `${label}${heading}<div class="split-block${flipClass} reveal">${renderSide(b.left)}${renderSide(b.right)}</div>`;
  },

};

/* ── RENDER PAGE ─────────────────────────────────────────────────
   Reads PROJECTS_DATA + PROJECT_CONFIG.id, populates all section
   content divs.  Must run BEFORE setupReveal().
──────────────────────────────────────────────────────────────── */
function renderPage() {
  if (!window.PROJECTS_DATA || !window.PROJECT_CONFIG) return;

  const p = PROJECTS_DATA.find(x => x.id === PROJECT_CONFIG.id);
  if (!p) return;

  /* — Hero — */
  const heroEl = document.getElementById('hero-content');
  if (heroEl) {
    heroEl.innerHTML =
      `<h1 class="hero-title">${p.heroTitle}</h1>` +
      `<p class="hero-desc">${p.desc}</p>` +
      `<div class="hero-tags">${(p.tags || []).map(t =>
        `<span class="htag">${t}</span>`).join('')}</div>`;
  }

  /* — Helper: render an array of blocks in order — */
  function renderBlocks(blocks) {
    return (blocks || []).map(b => {
      const renderer = BLOCK_RENDERERS[b.type];
      return renderer ? renderer(b) : '';
    }).join('\n');
  }

  /* — Purpose — */
  const purposeEl = document.getElementById('purpose-content');
  if (purposeEl && p.purpose) {
    const d = p.purpose;
    const bodyPs = (d.body || []).map(t => `<p>${t}</p>`).join('');
    purposeEl.innerHTML =
      `<h2 class="section-title reveal">${d.heading}</h2>` +
      (bodyPs ? `<div class="section-body reveal">${bodyPs}</div>` : '') +
      imageZone(d.images, 'single', d.imageSize) +
      renderBlocks(d.blocks);
  }

  /* — Process — */
  const processEl = document.getElementById('process-content');
  if (processEl && p.process) {
    const d = p.process;
    // Build steps, splitting into groups when a blockAfter is encountered
    let stepsContent = '';
    let group = [];
    (d.steps || []).forEach((s, i) => {
      const num = String(i + 1).padStart(2, '0');
      group.push(
        `<div class="step">` +
          `<div class="step-num">${num}</div>` +
          `<div class="step-content"><h3>${s.title}</h3><p>${s.body}</p></div>` +
        `</div>`
      );
      if (s.blockAfter) {
        stepsContent += `<div class="steps reveal">${group.join('')}</div>`;
        stepsContent += renderBlocks([s.blockAfter]);
        group = [];
      }
    });
    if (group.length) stepsContent += `<div class="steps reveal">${group.join('')}</div>`;

    processEl.innerHTML =
      `<h2 class="section-title reveal">${d.heading}</h2>` +
      (d.summary ? `<div class="section-body reveal">${d.summary}</div>` : '') +
      stepsContent +
      imageZone(d.images, 'grid', d.imageSize) +
      renderBlocks(d.blocks);
  }

  /* — Result — */
  const resultEl = document.getElementById('result-content');
  if (resultEl && p.result) {
    const d = p.result;
    const bodyPs = (d.body || []).map(t => `<p>${t}</p>`).join('');
    const statsHtml = (d.stats || []).map(s =>
      `<div class="impact-stat">` +
        `<span class="impact-val">${s.val}</span>` +
        `<span class="impact-label">${s.label}</span>` +
      `</div>`
    ).join('');
    resultEl.innerHTML =
      `<h2 class="section-title reveal">${d.heading}</h2>` +
      (bodyPs ? `<div class="section-body reveal">${bodyPs}</div>` : '') +
      (statsHtml ? `<div class="impact-grid reveal">${statsHtml}</div>` : '') +
      imageZone(d.images, 'grid', d.imageSize) +
      renderBlocks(d.blocks);
  }
}

/* ── REVEAL ANIMATION ────────────────────────────────────────────
   Staggered fade-up on scroll into view.
   Must run AFTER renderPage().
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
   renderPage first so .reveal elements exist before observer.
──────────────────────────────────────────────────────────────── */
renderPage();
setupReveal();
setupCursor();
setupTabs();
setupProjNav();

})();
