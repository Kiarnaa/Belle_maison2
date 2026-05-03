/* ═══════════════════════════════════════════════════════════
   BELLE MAISON — quickview.js
   Quick-view modal for all product cards (static & dynamic)
═══════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  /* ── Fallback descriptions by product name ─────────────── */
  const DESCS = {
    'Lampe Shoji':           'Conçue en bambou tressé à la main, cette lampe diffuse une lumière dorée et apaisante. Son abat-jour crée des ombres poétiques — idéale pour un salon ou une chambre Japandi.',
    'Lustre Rotin Naturel':  'Lustre artisanal en rotin naturel tressé à la main, structure en métal noir mat. Chaleur, texture et caractère pour tout espace de vie. Livré avec câblage de 1,5 m.',
    'Lampe de Table Washi':  "Lampe en papier washi japonais sur pied en bambou. Ses transparences créent un jeu de lumière subtil. Idéale comme lampe de chevet ou d'appoint dans un bureau zen.",
    'Applique Murale Zen':   'Applique épurée en métal brossé avec diffuseur en coton. Éclairage latéral doux pour chambres, couloirs ou entrées. Câblage mural inclus.',
    'Coussin Lin Naturel':   'Coussin en lin 100 % naturel, référence du confort sobre. Housse amovible lavable, rembourrage en coton bio. Disponible en beige et blanc cassé.',
    'Plaid Coton Doux':      'Plaid moelleux en coton à tissage côtelé. Légèreté et douceur pour les soirées fraîches. Format 130 × 170 cm, lavable en machine à 30 °C.',
    'Tapis Berbère Sable':   'Tapis en laine tissée main à motifs berbères authentiques. Apporte chaleur et profondeur à tout parquet ou carrelage. Dimensions : 160 × 230 cm.',
    'Rideau Lin Épuré':      "Panneau en lin semi-transparent filtrant la lumière naturellement. Tête à œillets en métal brossé. Hauteur 240 cm, largeur 140 cm. Vendu à l'unité.",
    'Tableau Botanique':     'Impression botanique finement détaillée sur papier texturé épais, encadrée en frêne naturel. Une touche de nature minimaliste pour salon ou bureau.',
    'Miroir Arche Bois':     "Miroir en forme d'arche, cadre en bois massif naturel. Agrandit visuellement l'espace et joue le rôle d'élément décoratif structurant. Dimensions : 60 × 140 cm.",
    'Horloge Murale Zen':    'Horloge épurée à cadran sans chiffre, mécanisme silencieux sweep sans tic-tac. Convient à toutes les pièces. Garantie 1 mois sur le mécanisme.',
    'Vase Kintsugi':         "Vase céramique inspiré de l'art Kintsugi, lignes dorées célébrant les imperfections. Pièce unique façonnée et peinte à la main. Hauteur : 25 cm.",
    'Bougie Cèdre & Santal': 'Bougie artisanale à la cire de soja, parfumée aux huiles essentielles de cèdre et santal. Durée de combustion : environ 40 h. Contenant en verre réutilisable.',
    'Cadre Laiton':          "Cadre photo en laiton brossé finition mate dorée. Disponible en 13 × 18 cm et 20 × 25 cm. S'intègre harmonieusement dans tout intérieur sobre.",
    'Plateau Teck':          'Plateau décoratif en teck massif huilé naturellement, anses en corde de coton. Pour bougies, livres, ou comme dessous-de-plat résistant à la chaleur.',
    'Pot Wabi-Sabi':         'Pot en céramique émaillée style Wabi-Sabi, chaque pièce est unique. Idéal pour plantes grasses, herbes aromatiques ou simplement comme objet déco.',
    'Cache-Pot Rotin':       "Cache-pot en rotin naturel tressé à la main. S'adapte aux pots de diamètre 12 à 16 cm. Intérieur imperméabilisé pour protéger vos meubles.",
    'Jardinière Bois':       "Jardinière en bois massif traité aux huiles naturelles, pieds en métal noir mat. Pour plantes d'intérieur ou herbes aromatiques sur balcon. Longueur 60 cm.",
    'Canapé Wabi-Sabi':      'Canapé 3 places en lin beige naturel sur structure en bois massif. Coussins amovibles déhoussables. Livraison et montage inclus à Antananarivo. Garantie structure 1 mois.',
    'Étagère Zen':           'Étagère murale en frêne blanc, livrée avec fixations invisibles. 3 niveaux de rangement ouverts pour livres, plantes et objets déco. Garantie fixations 1 mois.',
  };

  /* ── 1. Inject modal HTML ─────────────────────────────── */
  document.body.insertAdjacentHTML('beforeend', `
    <div class="qv-backdrop" id="qv-backdrop" aria-hidden="true"></div>
    <div class="qv-modal"    id="qv-modal"    role="dialog" aria-modal="true"
         aria-labelledby="qv-name" aria-hidden="true">
      <button class="qv-close" id="qv-close" aria-label="Fermer la vue rapide">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true">
          <line x1="18" y1="6"  x2="6"  y2="18"/>
          <line x1="6"  y1="6"  x2="18" y2="18"/>
        </svg>
      </button>
      <div class="qv-body">
        <div class="qv-img-col">
          <img id="qv-img" src="" alt="" width="500" height="500" loading="eager">
        </div>
        <div class="qv-info-col">
          <span id="qv-cat"    class="qv-cat"></span>
          <h2   id="qv-name"   class="qv-name"></h2>
          <div  id="qv-badges" class="qv-badges"></div>
          <p    id="qv-price"  class="qv-price"></p>
          <p    id="qv-desc"   class="qv-desc"></p>
          <div class="qv-actions">
            <button id="qv-cart" class="qv-cart-btn" data-pid="">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2" stroke-linecap="round"
                   stroke-linejoin="round" aria-hidden="true">
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/>
                <path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>
              </svg>
              Ajouter au panier
            </button>
            <a id="qv-link" href="produits.html" class="qv-link-btn">Voir tous les produits →</a>
          </div>
        </div>
      </div>
    </div>
  `);

  const backdrop = document.getElementById('qv-backdrop');
  const modal    = document.getElementById('qv-modal');
  const closeBtn = document.getElementById('qv-close');
  const cartBtn  = document.getElementById('qv-cart');

  /* ── 2. Open / close ────────────────────────────────────── */
  function openModal() {
    modal.setAttribute('aria-hidden', 'false');
    backdrop.setAttribute('aria-hidden', 'false');
    modal.classList.add('is-open');
    backdrop.classList.add('is-open');
    document.body.classList.add('qv-scroll-lock');
    setTimeout(() => closeBtn.focus(), 60);
  }

  function closeModal() {
    modal.classList.remove('is-open');
    backdrop.classList.remove('is-open');
    document.body.classList.remove('qv-scroll-lock');
    setTimeout(() => {
      modal.setAttribute('aria-hidden', 'true');
      backdrop.setAttribute('aria-hidden', 'true');
    }, 300);
  }

  backdrop.addEventListener('click', closeModal);
  closeBtn.addEventListener('click',  closeModal);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

  /* ── 3. Populate modal from card element ──────────────── */
  function populate(card) {
    const imgEl   = card.querySelector('.product-img-wrap img');
    const name    = card.querySelector('.product-name')?.textContent?.trim()  || '';
    const cat     = card.querySelector('.product-category')?.textContent?.trim() || '';
    const price   = card.querySelector('.product-price')?.textContent?.trim()  || '';
    const badge   = card.querySelector('.product-badge');
    const pid     = card.dataset.id ? parseInt(card.dataset.id) : null;

    let desc     = card.dataset.desc || DESCS[name] || '';
    let garantie = !!card.querySelector('.badge-garantie');

    if (pid && typeof PRODUCTS !== 'undefined') {
      const p = PRODUCTS.find(x => x.id === pid);
      if (p) { desc = p.desc || desc; garantie = p.garantie; }
    }

    document.getElementById('qv-img').src            = imgEl ? imgEl.src : '';
    document.getElementById('qv-img').alt            = imgEl ? imgEl.alt : name;
    document.getElementById('qv-name').textContent   = name;
    document.getElementById('qv-cat').textContent    = cat;
    document.getElementById('qv-price').textContent  = price;
    document.getElementById('qv-desc').textContent   = desc;

    const badgesEl = document.getElementById('qv-badges');
    badgesEl.innerHTML = '';
    if (badge)    badgesEl.appendChild(badge.cloneNode(true));
    if (garantie) badgesEl.insertAdjacentHTML('beforeend',
      '<span class="badge-garantie">Garantie 1 mois</span>');

    cartBtn.dataset.pid = pid || '';
  }

  /* ── 4. Cart button handler ─────────────────────────────── */
  cartBtn.addEventListener('click', () => {
    const pid = parseInt(cartBtn.dataset.pid);
    if (pid && typeof addToCart === 'function') {
      addToCart(pid);
      closeModal();
    } else {
      window.location.href = 'produits.html';
    }
  });

  /* ── 5. Inject "Vue rapide" hint & wire image clicks ────── */
  function initCards() {
    document.querySelectorAll('.product-card').forEach(card => {
      const wrap = card.querySelector('.product-img-wrap');
      if (!wrap || wrap.dataset.qvInit) return;
      wrap.dataset.qvInit = '1';

      const hint = document.createElement('span');
      hint.className = 'qv-hint';
      hint.setAttribute('aria-hidden', 'true');
      hint.innerHTML =
        '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' +
        'stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
        '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg> Vue rapide';
      wrap.appendChild(hint);

      wrap.addEventListener('click', e => {
        e.preventDefault();
        populate(card);
        openModal();
      });
    });
  }

  /* ── 6. Run on load + watch dynamic grid ─────────────────── */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCards);
  } else {
    initCards();
  }

  const grid = document.getElementById('products-grid');
  if (grid) new MutationObserver(initCards).observe(grid, { childList: true });

}());
