// ═══════════════════════════════════════════════════════
//  BELLE MAISON – produits.js
//  Logique : catalogue, filtres, panier, paiement, recherche
// ═══════════════════════════════════════════════════════

/* ── 1. DONNÉES PRODUITS ──────────────────────────────── */
const PRODUCTS = [
  { id:1,  name:'Lampe Shoji',            category:'Luminaires', price:75000,   badge:'Nouveau',   badgeClass:'badge-new',  garantie:false,
    img:'sources/Lampe Shoji.webp',
    alt:'Lampe Shoji en bambou tressé lumière chaude',
    desc:'Conçue en bambou tressé à la main, cette lampe diffuse une lumière dorée et apaisante. Son abat-jour crée des ombres poétiques — idéale pour un salon ou une chambre Japandi.' },
  { id:2,  name:'Lustre Rotin Naturel',   category:'Luminaires', price:185000,  badge:null,        badgeClass:'',           garantie:false,
    img:'sources/Le Lustre En Rotin Naturel.webp',
    alt:'Lustre en rotin naturel style Japandi',
    desc:'Lustre artisanal en rotin naturel tressé à la main, structure en métal noir mat. Chaleur, texture et caractère pour tout espace de vie. Livré avec câblage de 1,5 m.' },
  { id:3,  name:'Lampe de Table Washi',   category:'Luminaires', price:58000,   badge:'Coup de ♡', badgeClass:'badge-gold', garantie:false,
    img:'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600&q=80&auto=format&fit=crop',
    alt:'Lampe de table en papier washi japonais',
    desc:'Lampe en papier washi japonais sur pied en bambou. Ses transparences créent un jeu de lumière subtil. Idéale comme lampe de chevet ou d\'appoint dans un bureau zen.' },
  { id:4,  name:'Applique Murale Zen',    category:'Luminaires', price:95000,   badge:null,        badgeClass:'',           garantie:false,
    img:'sources/Applique murale zen.jpg',
    alt:'Applique murale minimaliste style zen',
    desc:'Applique épurée en métal brossé avec diffuseur en coton. Éclairage latéral doux pour chambres, couloirs ou entrées. Câblage mural inclus.' },

  { id:5,  name:'Coussin Lin Naturel',    category:'Textiles',   price:32000,   badge:'Nouveau',   badgeClass:'badge-new',  garantie:false,
    img:'sources/Coussin en lin naturel.jpeg',
    alt:'Coussin en lin naturel beige sur canapé',
    desc:'Coussin en lin 100 % naturel, référence du confort sobre. Housse amovible lavable, rembourrage en coton bio. Disponible en beige et blanc cassé.' },
  { id:6,  name:'Plaid Coton Doux',       category:'Textiles',   price:47000,   badge:null,        badgeClass:'',           garantie:false,
    img:'sources/Plaid coton doux.webp',
    alt:'Plaid en coton doux texture naturelle',
    desc:'Plaid moelleux en coton à tissage côtelé. Légèreté et douceur pour les soirées fraîches. Format 130 × 170 cm, lavable en machine à 30 °C.' },
  { id:7,  name:'Tapis Berbère Sable',    category:'Textiles',   price:320000,  badge:null,        badgeClass:'',           garantie:false,
    img:'sources/tapis berbere sable.jpg',
    alt:'Tapis style berbère tissé main en laine sable',
    desc:'Tapis en laine tissée main à motifs berbères authentiques. Apporte chaleur et profondeur à tout parquet ou carrelage. Dimensions : 160 × 230 cm.' },
  { id:8,  name:'Rideau Lin Épuré',       category:'Textiles',   price:85000,   badge:null,        badgeClass:'',           garantie:false,
    img:'sources/Rideau lin epuré.avif',
    alt:'Rideau en lin épuré fenêtre lumière naturelle',
    desc:'Panneau en lin semi-transparent filtrant la lumière naturellement. Tête à œillets en métal brossé. Hauteur 240 cm, largeur 140 cm. Vendu à l\'unité.' },

  { id:9,  name:'Tableau Botanique',      category:'Art Mural',  price:65000,   badge:'Nouveau',   badgeClass:'badge-new',  garantie:false,
    img:'sources/Tableau botanique.webp',
    alt:'Tableau botanique encadré style japonais',
    desc:'Impression botanique finement détaillée sur papier texturé épais, encadrée en frêne naturel. Une touche de nature minimaliste pour salon ou bureau.' },
  { id:10, name:'Miroir Arche Bois',      category:'Art Mural',  price:148000,  badge:'Coup de ♡', badgeClass:'badge-gold', garantie:false,
    img:'sources/miroir arche bois.webp',
    alt:'Miroir en arche en bois naturel',
    desc:'Miroir en forme d\'arche, cadre en bois massif naturel. Agrandit visuellement l\'espace et joue le rôle d\'élément décoratif structurant. Dimensions : 60 × 140 cm.' },
  { id:11, name:'Horloge Murale Zen',     category:'Art Mural',  price:78000,   badge:null,        badgeClass:'',           garantie:true,
    img:'sources/Horloge murale zen.webp',
    alt:'Horloge murale minimaliste zen garantie 1 mois',
    desc:'Horloge épurée à cadran sans chiffre, mécanisme silencieux sweep sans tic-tac. Convient à toutes les pièces. Garantie 1 mois sur le mécanisme.' },

  { id:12, name:'Vase Kintsugi',          category:'Accessoires',price:48000,   badge:null,        badgeClass:'',           garantie:false,
    img:'sources/Vase kintsugi.webp',
    alt:'Vase céramique Kintsugi dorures or naturelles',
    desc:'Vase céramique inspiré de l\'art Kintsugi, lignes dorées célébrant les imperfections. Pièce unique façonnée et peinte à la main. Hauteur : 25 cm.' },
  { id:13, name:'Bougie Cèdre & Santal',  category:'Accessoires',price:22000,   badge:'Nouveau',   badgeClass:'badge-new',  garantie:false,
    img:'sources/Bougie cèdre et santal.webp',
    alt:'Bougie parfumée cèdre et santal',
    desc:'Bougie artisanale à la cire de soja, parfumée aux huiles essentielles de cèdre et santal. Durée de combustion : environ 40 h. Contenant en verre réutilisable.' },
  { id:14, name:'Cadre Laiton',           category:'Accessoires',price:35000,   badge:null,        badgeClass:'',           garantie:false,
    img:'sources/cadre laiton.jpg',
    alt:'Cadre photo en laiton doré minimaliste',
    desc:'Cadre photo en laiton brossé finition mate dorée. Disponible en 13 × 18 cm et 20 × 25 cm. S\'intègre harmonieusement dans tout intérieur sobre.' },
  { id:15, name:'Plateau Teck',           category:'Accessoires',price:42000,   badge:null,        badgeClass:'',           garantie:false,
    img:'sources/plateau teck.webp',
    alt:'Plateau déco en bois de teck naturel',
    desc:'Plateau décoratif en teck massif huilé naturellement, anses en corde de coton. Pour bougies, livres, ou comme dessous-de-plat résistant à la chaleur.' },

  { id:16, name:'Pot Wabi-Sabi',          category:'Plantes',    price:28000,   badge:'Nouveau',   badgeClass:'badge-new',  garantie:false,
    img:'sources/pot wabi sabi.jpg',
    alt:'Pot céramique style Wabi-Sabi',
    desc:'Pot en céramique émaillée style Wabi-Sabi, chaque pièce est unique. Idéal pour plantes grasses, herbes aromatiques ou simplement comme objet déco.' },
  { id:17, name:'Cache-Pot Rotin',        category:'Plantes',    price:18000,   badge:null,        badgeClass:'',           garantie:false,
    img:'sources/Cache pot rotin.webp',
    alt:'Cache-pot en rotin tressé naturel',
    desc:'Cache-pot en rotin naturel tressé à la main. S\'adapte aux pots de diamètre 12 à 16 cm. Intérieur imperméabilisé pour protéger vos meubles.' },
  { id:18, name:'Jardinière Bois',        category:'Plantes',    price:54000,   badge:null,        badgeClass:'',           garantie:false,
    img:'https://images.unsplash.com/photo-1463936575829-25148e1db1b8?w=600&q=80&auto=format&fit=crop',
    alt:'Jardinière en bois massif naturel',
    desc:'Jardinière en bois massif traité aux huiles naturelles, pieds en métal noir mat. Pour plantes d\'intérieur ou herbes aromatiques sur balcon. Longueur 60 cm.' },

  { id:19, name:'Canapé Wabi-Sabi',       category:'Mobilier',   price:1850000, badge:'Nouveau',   badgeClass:'badge-new',  garantie:true,
    img:'sources/canapé wabi sabi.jpg',
    alt:'Canapé Wabi-Sabi lin beige coussins naturels',
    desc:'Canapé 3 places en lin beige naturel sur structure en bois massif. Coussins amovibles déhoussables. Livraison et montage inclus à Antananarivo. Garantie structure 1 mois.' },
  { id:20, name:'Étagère Zen',            category:'Mobilier',   price:120000,  badge:'Nouveau',   badgeClass:'badge-new',  garantie:true,
    img:'sources/Etagère Zen.jpg',
    alt:'Étagère murale Zen frêne blanc style Japandi',
    desc:'Étagère murale en frêne blanc, livrée avec fixations invisibles. 3 niveaux de rangement ouverts pour livres, plantes et objets déco. Garantie fixations 1 mois.' },
];

/* ── 2. STATE ─────────────────────────────────────────── */
const state = {
  activeCategory: 'all',
  priceMax: 2000000,
  filterGarantie: false,
  filterNouveau: false,
  sort: 'default',
  cart: [],
};

/* ── 3. UTILS ─────────────────────────────────────────── */
function formatPrice(n) {
  return n.toLocaleString('fr-MG') + '\u202fAr';
}

/* ── 4. RENDU PRODUITS ────────────────────────────────── */
function getFiltered() {
  let list = PRODUCTS.filter(p => {
    if (state.activeCategory !== 'all' && p.category !== state.activeCategory) return false;
    if (p.price > state.priceMax) return false;
    if (state.filterGarantie && !p.garantie) return false;
    if (state.filterNouveau && p.badge !== 'Nouveau') return false;
    return true;
  });
  if (state.sort === 'price-asc')  list.sort((a, b) => a.price - b.price);
  if (state.sort === 'price-desc') list.sort((a, b) => b.price - a.price);
  if (state.sort === 'name-asc')   list.sort((a, b) => a.name.localeCompare(b.name, 'fr'));
  return list;
}

function renderProducts() {
  const grid  = document.getElementById('products-grid');
  const empty = document.getElementById('empty-state');
  const count = document.getElementById('visible-count');
  const list  = getFiltered();

  count.textContent = list.length;

  if (!list.length) {
    grid.innerHTML = '';
    empty.hidden = false;
    return;
  }
  empty.hidden = true;

  grid.innerHTML = list.map(p => `
    <article class="product-card" role="listitem" data-id="${p.id}">
      <a href="#" class="product-img-wrap" tabindex="-1" aria-label="Voir ${p.name}">
        <img src="${p.img}" alt="${p.alt}" width="600" height="600" loading="lazy" decoding="async">
        ${p.badge    ? `<span class="product-badge ${p.badgeClass}">${p.badge}</span>` : ''}
        ${p.garantie ? `<span class="badge-garantie">Garantie 1 mois</span>` : ''}
      </a>
      <div class="product-info">
        <span class="product-category">${p.category}</span>
        <h3 class="product-name">${p.name}</h3>
        <div class="product-footer">
          <span class="product-price">${formatPrice(p.price)}</span>
          <button class="btn-add-cart" data-id="${p.id}" aria-label="Ajouter ${p.name} au panier">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"
                 stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/>
              <path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>
            </svg>
            Ajouter
          </button>
        </div>
      </div>
    </article>
  `).join('');

  // Staggered entrance animation
  grid.querySelectorAll('.product-card').forEach((card, i) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(18px)';
    setTimeout(() => {
      card.style.transition = `opacity .4s ease ${i * 50}ms, transform .4s ease ${i * 50}ms`;
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, 20);
  });

  // Wire add-to-cart buttons
  grid.querySelectorAll('.btn-add-cart').forEach(btn => {
    btn.addEventListener('click', () => addToCart(parseInt(btn.dataset.id)));
  });
}

/* ── 5. FILTRES & TRI ─────────────────────────────────── */
function initFilters() {
  document.querySelectorAll('[data-filter]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-filter]').forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');
      state.activeCategory = btn.dataset.filter;
      renderProducts();
    });
  });

  const range   = document.getElementById('price-max');
  const display = document.getElementById('price-display');
  range.addEventListener('input', () => {
    state.priceMax = parseInt(range.value);
    display.textContent = formatPrice(state.priceMax);
    renderProducts();
  });

  document.getElementById('filter-garantie').addEventListener('change', e => {
    state.filterGarantie = e.target.checked;
    renderProducts();
  });

  document.getElementById('filter-nouveau').addEventListener('change', e => {
    state.filterNouveau = e.target.checked;
    renderProducts();
  });

  document.getElementById('sort-select').addEventListener('change', e => {
    state.sort = e.target.value;
    renderProducts();
  });

  document.getElementById('reset-filters')?.addEventListener('click', resetFilters);

  const filterToggle  = document.getElementById('filter-toggle');
  const filterSidebar = document.getElementById('filter-sidebar');
  const filterClose   = document.getElementById('filter-close');
  const filterOverlay = document.getElementById('filter-overlay');

  filterToggle?.addEventListener('click', () => {
    const open = filterSidebar.classList.toggle('is-open');
    filterToggle.setAttribute('aria-expanded', open);
    filterOverlay.classList.toggle('is-visible', open);
    document.body.classList.toggle('menu-open', open);
  });

  filterClose?.addEventListener('click', closeFilterSidebar);
  filterOverlay?.addEventListener('click', closeFilterSidebar);
}

function closeFilterSidebar() {
  document.getElementById('filter-sidebar').classList.remove('is-open');
  document.getElementById('filter-toggle')?.setAttribute('aria-expanded', 'false');
  document.getElementById('filter-overlay').classList.remove('is-visible');
  document.body.classList.remove('menu-open');
}

function resetFilters() {
  state.activeCategory = 'all';
  state.priceMax       = 2000000;
  state.filterGarantie = false;
  state.filterNouveau  = false;
  state.sort           = 'default';

  document.querySelectorAll('[data-filter]').forEach(b => {
    b.classList.toggle('active', b.dataset.filter === 'all');
    b.setAttribute('aria-pressed', b.dataset.filter === 'all' ? 'true' : 'false');
  });
  document.getElementById('price-max').value              = 2000000;
  document.getElementById('price-display').textContent    = formatPrice(2000000);
  document.getElementById('filter-garantie').checked      = false;
  document.getElementById('filter-nouveau').checked       = false;
  document.getElementById('sort-select').value            = 'default';
  renderProducts();
}

/* ── 6. PANIER ────────────────────────────────────────── */
function addToCart(id) {
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) return;
  const existing = state.cart.find(i => i.id === id);
  if (existing) existing.qty++;
  else state.cart.push({ ...product, qty: 1 });
  updateCartUI();
  openCartDrawer();
  showToast(`${product.name} ajouté au panier ✓`);
}

function removeFromCart(id) {
  state.cart = state.cart.filter(i => i.id !== id);
  updateCartUI();
}

function updateQty(id, delta) {
  const item = state.cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) removeFromCart(id);
  else updateCartUI();
}

function getCartTotal() {
  return state.cart.reduce((sum, i) => sum + i.price * i.qty, 0);
}

function updateCartUI() {
  const countEl  = document.getElementById('cart-count');
  const listEl   = document.getElementById('cart-list');
  const emptyEl  = document.getElementById('cart-empty');
  const footerEl = document.getElementById('cart-footer');
  const totalEl  = document.getElementById('cart-total');

  const totalItems = state.cart.reduce((s, i) => s + i.qty, 0);
  countEl.textContent = totalItems;
  countEl.classList.add('bump');
  setTimeout(() => countEl.classList.remove('bump'), 400);

  if (!state.cart.length) {
    listEl.innerHTML = '';
    emptyEl.hidden   = false;
    footerEl.hidden  = true;
    return;
  }

  emptyEl.hidden  = true;
  footerEl.hidden = false;
  totalEl.textContent = formatPrice(getCartTotal());

  listEl.innerHTML = state.cart.map(item => `
    <li class="cart-item">
      <img class="cart-item-img" src="${item.img}" alt="${item.alt}" width="72" height="72">
      <div class="cart-item-info">
        <span class="cart-item-cat">${item.category}</span>
        <strong class="cart-item-name">${item.name}</strong>
        <span class="cart-item-price">${formatPrice(item.price)}</span>
      </div>
      <div class="cart-item-actions">
        <button class="qty-btn" onclick="updateQty(${item.id},-1)" aria-label="Diminuer quantité">−</button>
        <span class="qty-display">${item.qty}</span>
        <button class="qty-btn" onclick="updateQty(${item.id},1)"  aria-label="Augmenter quantité">+</button>
        <button class="remove-btn" onclick="removeFromCart(${item.id})" aria-label="Supprimer ${item.name}">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round">
            <path d="M18 6 6 18M6 6l12 12"/>
          </svg>
        </button>
      </div>
    </li>
  `).join('');
}

function openCartDrawer() {
  document.getElementById('cart-drawer').classList.add('is-open');
  document.getElementById('cart-drawer').setAttribute('aria-hidden', 'false');
  document.getElementById('cart-overlay').classList.add('is-visible');
  document.body.classList.add('menu-open');
}

function closeCartDrawer() {
  document.getElementById('cart-drawer').classList.remove('is-open');
  document.getElementById('cart-drawer').setAttribute('aria-hidden', 'true');
  document.getElementById('cart-overlay').classList.remove('is-visible');
  document.body.classList.remove('menu-open');
}

/* ── 7. MODAL PAIEMENT ────────────────────────────────── */
function openModal() {
  document.getElementById('modal-total').textContent = formatPrice(getCartTotal());
  document.getElementById('modal-overlay').classList.add('is-open');
  document.getElementById('modal-overlay').setAttribute('aria-hidden', 'false');
}

function closeModal() {
  document.getElementById('modal-overlay').classList.remove('is-open');
  document.getElementById('modal-overlay').setAttribute('aria-hidden', 'true');
}

function handlePayment() {
  const phone = document.getElementById('phone-number').value.trim();
  const op    = document.querySelector('[name="operator"]:checked')?.value;
  if (phone.replace(/\s/g, '').length < 9) {
    showToast('Veuillez saisir un numéro de téléphone valide.');
    return;
  }
  closeModal();
  state.cart = [];
  updateCartUI();
  closeCartDrawer();
  setTimeout(() => showToast(`✓ Paiement ${op} confirmé ! Votre commande est en cours.`), 300);
}

/* ── 8. TOAST ─────────────────────────────────────────── */
function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toast._t);
  toast._t = setTimeout(() => toast.classList.remove('show'), 3200);
}

/* ── 9. RECHERCHE ─────────────────────────────────────── */
function initSearch() {
  const searchBtn     = document.getElementById('search-btn');
  const overlay       = document.getElementById('search-overlay');
  const input         = document.getElementById('search-input');
  const closeBtn      = document.getElementById('search-close-btn');
  const resultsEl     = document.getElementById('search-results');

  if (!overlay) return;

  searchBtn?.addEventListener('click', () => {
    overlay.classList.add('is-open');
    setTimeout(() => input?.focus(), 100);
  });

  closeBtn?.addEventListener('click', closeSearch);
  overlay?.addEventListener('click', e => { if (e.target === overlay) closeSearch(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeSearch(); });

  input?.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    if (!q) {
      resultsEl.innerHTML = '<p class="search-hint">Tapez pour rechercher un produit…</p>';
      return;
    }
    const found = PRODUCTS.filter(p =>
      p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q)
    ).slice(0, 6);

    if (!found.length) {
      resultsEl.innerHTML = '<p class="search-hint">Aucun produit trouvé.</p>';
      return;
    }
    resultsEl.innerHTML = `<div class="search-results-grid">${
      found.map(p => `
        <a class="search-result-card" href="#" tabindex="0">
          <img src="${p.img}" alt="${p.alt}" width="120" height="120" loading="lazy">
          <div class="search-result-info">
            <span class="search-result-name">${p.name}</span>
            <span class="search-result-price">${formatPrice(p.price)}</span>
          </div>
        </a>
      `).join('')
    }</div>`;
  });
}

function closeSearch() {
  document.getElementById('search-overlay')?.classList.remove('is-open');
}

/* ── 10. INITIALISATION ───────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  initFilters();
  initSearch();

  document.getElementById('cart-toggle-btn')?.addEventListener('click', openCartDrawer);
  document.getElementById('cart-close')?.addEventListener('click', closeCartDrawer);
  document.getElementById('cart-overlay')?.addEventListener('click', closeCartDrawer);

  document.getElementById('checkout-btn')?.addEventListener('click', openModal);
  document.getElementById('modal-close')?.addEventListener('click', closeModal);
  document.getElementById('modal-overlay')?.addEventListener('click', e => {
    if (e.target === document.getElementById('modal-overlay')) closeModal();
  });
  document.getElementById('confirm-btn')?.addEventListener('click', handlePayment);
});
