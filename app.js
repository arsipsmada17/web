// ============================================================
//  Begarlist 16 — App Logic
// ============================================================

let currentCategory = 'all';
let currentSearch   = '';

// ── INIT ──────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // Load saved theme
  const saved = localStorage.getItem('sv-theme') || 'dark';
  setTheme(saved);

  renderVideos(VIDEOS);
  updateCount(VIDEOS.length);
});

// ── THEME ─────────────────────────────────────────────────────
function toggleTheme() {
  const html  = document.documentElement;
  const theme = html.dataset.theme === 'dark' ? 'light' : 'dark';
  setTheme(theme);
  localStorage.setItem('sv-theme', theme);
}

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  document.getElementById('themeIcon').textContent = theme === 'dark' ? '☀' : '◑';
}

// ── CATEGORY FILTER ───────────────────────────────────────────
function filterCategory(cat, btn) {
  currentCategory = cat;
  currentSearch   = '';

  // update active button
  document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  // clear search input
  document.getElementById('searchInput').value = '';
  document.getElementById('searchNotice').style.display = 'none';

  const filtered = filterVideos();
  const title    = cat === 'all' ? 'Semua Video' : capitalise(cat);
  document.getElementById('sectionTitle').textContent = title;

  renderVideos(filtered);
  updateCount(filtered.length);
}

// ── SEARCH ────────────────────────────────────────────────────
function handleSearch(val) {
  currentSearch = val.trim().toLowerCase();

  const notice = document.getElementById('searchNotice');
  if (currentSearch) {
    notice.style.display = 'flex';
    document.getElementById('searchTerm').textContent = val.trim();
  } else {
    notice.style.display = 'none';
  }

  const filtered = filterVideos();
  renderVideos(filtered);
  updateCount(filtered.length);
}

function clearSearch() {
  currentSearch = '';
  document.getElementById('searchInput').value = '';
  document.getElementById('searchNotice').style.display = 'none';
  const filtered = filterVideos();
  renderVideos(filtered);
  updateCount(filtered.length);
}

// ── FILTER LOGIC ──────────────────────────────────────────────
function filterVideos() {
  return VIDEOS.filter(v => {
    const matchCat    = currentCategory === 'all' || v.category === currentCategory;
    const matchSearch = !currentSearch ||
      v.title.toLowerCase().includes(currentSearch) ||
      v.channel.toLowerCase().includes(currentSearch) ||
      v.category.toLowerCase().includes(currentSearch) ||
      v.description.toLowerCase().includes(currentSearch);
    return matchCat && matchSearch;
  });
}

// ── RENDER VIDEOS ─────────────────────────────────────────────
function renderVideos(videos) {
  const grid  = document.getElementById('videoGrid');
  const empty = document.getElementById('emptyState');

  grid.innerHTML = '';

  if (videos.length === 0) {
    empty.style.display = 'block';
    return;
  }
  empty.style.display = 'none';

  videos.forEach((v, i) => {
    const thumb = `https://img.youtube.com/vi/${v.youtubeId}/mqdefault.jpg`;
    const card  = document.createElement('div');
    card.className  = 'video-card';
    card.style.animationDelay = `${i * 40}ms`;
    card.onclick    = () => openModal(v);
    card.innerHTML  = `
      <div class="thumb-wrap">
        <img src="${thumb}" alt="${escHtml(v.title)}" loading="lazy" />
        <div class="play-overlay">
          <div class="play-btn">▶</div>
        </div>
        <span class="duration-badge">${v.duration}</span>
      </div>
      <div class="card-body">
        <span class="card-cat">${v.category}</span>
        <p class="card-title">${escHtml(v.title)}</p>
        <p class="card-channel" style="display:none">${escHtml(v.channel)}</p>
      </div>
    `;
    grid.appendChild(card);
  });
}

// ── MODAL ─────────────────────────────────────────────────────
function openModal(video) {
  const overlay = document.getElementById('modalOverlay');
  const iframe  = document.getElementById('modalIframe');

  document.getElementById('modalCat').textContent         = video.category;
  document.getElementById('modalTitle').textContent       = video.title;

  // Autoplay embed
  // Note: origin must NOT be encoded, and file:// origin ("null") must be omitted
  const origin = location.origin !== 'null' ? `&origin=${location.origin}` : '';
  iframe.src = `https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1&rel=0&modestbranding=1${origin}`;

  iframe.onerror = null;
  iframe.onload = null;

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal(e) {
  if (e.target === document.getElementById('modalOverlay')) {
    closeModalDirect();
  }
}

function closeModalDirect() {
  const overlay = document.getElementById('modalOverlay');
  overlay.classList.remove('open');
  document.getElementById('modalIframe').src = '';
  document.body.style.overflow = '';
}

// Close modal on Escape key
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModalDirect();
});

// ── HELPERS ───────────────────────────────────────────────────
function updateCount(n) {
  document.getElementById('sectionCount').textContent = `${n} video`;
}

function capitalise(str) {
  const labels = {
    senitari: 'Seni Tari',
    musik:     'Musik',
    edukasi:   'Edukasi',
    gaming:    'Gaming',
    film:      'Film & Sinema',
    travel:    'Travel',
    kuliner:   'Kuliner'
  };
  return labels[str] || str.charAt(0).toUpperCase() + str.slice(1);
}

function escHtml(str) {
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

function showHome() {
  currentCategory = 'all';
  currentSearch   = '';
  document.getElementById('searchInput').value = '';
  document.getElementById('searchNotice').style.display = 'none';
  document.getElementById('sectionTitle').textContent = 'Semua Video';
  document.querySelectorAll('.cat-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.cat === 'all');
  });
  renderVideos(VIDEOS);
  updateCount(VIDEOS.length);
}

function scrollToVideos() {
  document.getElementById('mainContent').scrollIntoView({ behavior: 'smooth' });
}
