'use strict';

/* ─── DATA SANTRI (38 lengkap) ─── */
const santriData = [
    { name: "Ahmad Samsudin",            address: "Ds. Lalan, Musi Banyuasin, Sumatera Selatan",            img: "A. Samsudin.JPG" },
    { name: "Angga Riski Ramdani",       address: "Jambi",                                                  img: "Kiki.JPG" },
    { name: "Bagus Fadlilah Say Putra",  address: "Lampung",                                                 img: "B.Fadil.JPG" },
    { name: "Danil Ali Sabila",          address: "Ds. Fajar Indah, Muara Enim, Sumatera Selatan",          img: "Danil.JPG" },
    { name: "Dzikri Nur Fajar",          address: "Jalur Banyuasin, Sumatera Selatan",                      img: "Dzikri.JPG" },
    { name: "Haryadi",                   address: "Ds. Trans Aur, Muara Enim, Sumatera Selatan",            img: "Hariyadi.JPG" },
    { name: "Imam Rofi'i",              address: "Ds. Sumber Rahayu, Muara Enim, Sumatera Selatan",        img: "Imam Rofi.JPG" },
    { name: "Joko Prasetio",             address: "Merangin, Jambi",                                        img: "Joko.JPG" },
    { name: "Hendi Permana",             address: "Ds. Pal 3, Pali, Sumatera Selatan",                     img: "hendi.JPG" },
    { name: "Mu'azd Abdur Ridho",       address: "Ds. Karya Mulya, Prabumulih, Sumatera Selatan",          img: "Muazd abdur ridho .JPG" },
    { name: "Muhammad Andri Habibi",     address: "Ds. Payakabung, Ogan Ilir, Sumatera Selatan",            img: "M. A. Habibi.JPG" },
    { name: "Muhammad Imam Hafas",       address: "Ds. Mekar Jaya",                                         img: "M. Imam Havas.JPG" },
    { name: "Muhammad Majid",            address: "Ds. Gaung Telang, Muara Enim, Sumatera Selatan",         img: "M.Majid.JPG" },
    { name: "Muhammad Syauqi Khotibul Umam", address: "Ds. Segayam, Muara Enim, Sumatera Selatan",         img: "M. Syauqi.JPG" },
    { name: "Nanda Bagus Setiawan",      address: "Ds. Jaya Mulya, OKU Timur, Sumatera Selatan",           img: "Nanda B.JPG" },
    { name: "Rabil Afraja",              address: "Ds. Paya Angus, Muara Enim, Sumatera Selatan",          img: "RABIL.JPG" },
    { name: "Riski Dwi Saputra",         address: "Ds. Fajar Indah, Muara Enim, Sumatera Selatan",         img: "Riski Dwi.JPG" },
    { name: "Robbul Insan",              address: "Ds. Penandingan, Muara Enim, Sumatera Selatan",          img: "Robbul insan.jpg" },
    { name: "Saef Fikran Al-Adzkia",    address: "Ds. Air Limau, Muara Enim, Sumatera Selatan",           img: "Saef.JPG" },
    { name: "Zam Zam Ramadhan",          address: "Kota Prabumulih",                                        img: "Zam zam.JPG" },
    { name: "Ahmad Nasrin",              address: "Ds. Tanjung Muning, Muara Enim, Sumatera Selatan",       img: "A.Nasirin.JPG" },
    { name: "Ario",                      address: "Ds. Rejo Sari, Musi Banyuasin, Sumatera Selatan",       img: "Ario.JPG" },
    { name: "Bayu Pamungkas",            address: "Ds. Kerta Mukti, OKI, Sumatera Selatan",                img: "Bayu Pamungkas.JPG" },
    { name: "Fachri Jamil",              address: "Ds. Kerta Mukti, OKI, Sumatera Selatan",                img: "Fachri jamil.JPG" },
    { name: "Miko Andi Saputra",         address: "Ds. Bangun Sari, Muara Enim, Sumatera Selatan",         img: "Miko Andi Saputra.JPG" },
    { name: "Muhammad Bayu Kusumo Aji",  address: "Ds. Bangun Sari, Muara Enim, Sumatera Selatan",         img: "M.Bayu K.JPG" },
    { name: "Riyadi Dibiya",             address: "Kota Palembang",                                         img: "Riyadi.JPG" },
    { name: "Azwil Yoga Pratama",        address: "Gunung Megang, Muara Enim, Sumatera Selatan",            img: "Azwil.JPG" },
    { name: "Abdul Muzakir",             address: "Ds. Air Talas, Muara Enim, Sumatera Selatan",            img: "A. Muzakir.JPG" },
    { name: "Ahmad Fikri",               address: "Ds. Karang Endah, Muara Enim, Sumatera Selatan",         img: "A.Fikri.JPG" },
    { name: "Anggi Franitar",            address: "Ds. Rejo Sari, Musi Banyuasin, Sumatera Selatan",       img: "Anggi franitar.jpg" },
    { name: "M. Vikarullah",             address: "Ds. Sumber Mulyo, OKU Timur, Sumatera Selatan",         img: "M. Vikar.JPG" },
    { name: "Miftahul Khoir",            address: "Ds. Panca Mukti, Banyuasin, Sumatera Selatan",          img: "Khoir.JPG" },
    { name: "M. Abdul Wahab",            address: "Ds. Suka Jaya Blok B, Muara Enim, Sumatera Selatan",    img: "M. Abdul Wahab.JPG" },
    { name: "Leo Saputra",               address: "Ds. Air Keruh, Muara Enim, Sumatera Selatan",            img: "Leo.JPG" },
    { name: "Wahyudi Rahman",            address: "Ds. Gaung Asam, Muara Enim, Sumatera Selatan",           img: "Wahyudi Rahman.JPG" },
    { name: "Muhammad Sidik Maulana",    address: "Ds. Bangun Sari, Muara Enim, Sumatera Selatan",         img: "M. Sidiq.JPG" },
    { name: "Muhammad Buyung",           address: "Ds. Rejo Sari, Musi Banyuasin, Sumatera Selatan",       img: "M.Buyung.JPG" },
];

/* ─── APP STATE ─── */
const state = {
    filtered: [...santriData],
    page: 1,
    perPage: 12,
    searchTerm: '',
};

/* ─── DOM REFS ─── */
const $  = id => document.getElementById(id);
const el = {
    grid:         $('galleryGrid'),
    pagination:   $('pagination'),
    paginationWrap: $('paginationWrap'),
    noResults:    $('noResults'),
    search:       $('searchInput'),
    clearBtn:     $('clearBtn'),
    resultBadge:  $('resultBadge'),
    totalCount:   $('totalCount'),
    lightbox:     $('lightbox'),
    lbBackdrop:   $('lightboxBackdrop'),
    lbCard:       $('lightboxCard'),
    lbClose:      $('lightboxClose'),
    lbImg:        $('lightboxImg'),
    lbName:       $('lightboxName'),
    lbAddress:    $('lightboxAddress'),
    imgShimmer:   $('imgShimmer'),
    searchSticky: $('searchSticky'),
};

/* ─── ICON SVG ─── */
const PIN_ICON = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M20 10c0 6-8 13-8 13s-8-7-8-13a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`;
const EYE_ICON = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>`;

/* ─── RENDER GALLERY ─── */
function renderGallery() {
    const start = (state.page - 1) * state.perPage;
    const pageItems = state.filtered.slice(start, start + state.perPage);

    el.grid.innerHTML = '';

    if (pageItems.length === 0) {
        el.noResults.classList.remove('hidden');
        el.paginationWrap.classList.add('hidden');
        return;
    }

    el.noResults.classList.add('hidden');

    const frag = document.createDocumentFragment();

    pageItems.forEach((s, i) => {
        const card = document.createElement('div');
        card.className = 'santri-card';
        card.style.animationDelay = `${i * 40}ms`;
        card.dataset.idx = santriData.indexOf(s);

        card.innerHTML = `
            <div class="card-img-wrap">
                <div class="card-shimmer"></div>
                <img class="card-img" src="${s.img}" alt="Foto ${s.name}" loading="lazy">
                <div class="card-overlay">
                    <span class="card-overlay-text">${EYE_ICON} Lihat Detail</span>
                </div>
            </div>
            <div class="card-body">
                <p class="card-name">${s.name}</p>
                <p class="card-addr">${PIN_ICON}<span>${s.address}</span></p>
            </div>
        `;

        /* Lazy-load image — remove shimmer on load */
        const img = card.querySelector('.card-img');
        const shimmer = card.querySelector('.card-shimmer');

        if (img.complete && img.naturalWidth > 0) {
            img.classList.add('loaded');
            shimmer.remove();
        } else {
            img.addEventListener('load', () => {
                img.classList.add('loaded');
                shimmer.style.opacity = '0';
                setTimeout(() => shimmer.remove(), 300);
            }, { once: true });
            img.addEventListener('error', () => {
                shimmer.remove();
                img.style.display = 'none';
            }, { once: true });
        }

        frag.appendChild(card);
    });

    el.grid.appendChild(frag);
    renderPagination();
}

/* ─── RENDER PAGINATION ─── */
function renderPagination() {
    const totalPages = Math.ceil(state.filtered.length / state.perPage);

    if (totalPages <= 1) {
        el.paginationWrap.classList.add('hidden');
        return;
    }
    el.paginationWrap.classList.remove('hidden');

    const p = state.page;
    const items = [];

    /* Prev */
    items.push(makePageItem(p - 1, `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m15 18-6-6 6-6"/></svg>`, p === 1));

    /* Pages with ellipsis */
    const pages = getPageNumbers(p, totalPages);
    pages.forEach(n => {
        if (n === '…') {
            items.push('<li class="page-item disabled"><span class="page-link" style="border:none;background:none;color:var(--text-3)">…</span></li>');
        } else {
            items.push(makePageItem(n, n, false, n === p));
        }
    });

    /* Next */
    items.push(makePageItem(p + 1, `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m9 18 6-6-6-6"/></svg>`, p === totalPages));

    el.pagination.innerHTML = items.join('');
}

function makePageItem(page, label, disabled, active = false) {
    const cls = `page-item${disabled ? ' disabled' : ''}${active ? ' active' : ''}`;
    return `<li class="${cls}"><a class="page-link" href="#" data-p="${page}" ${disabled ? 'tabindex="-1"' : ''}>${label}</a></li>`;
}

function getPageNumbers(current, total) {
    if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
    const arr = [];
    arr.push(1);
    if (current > 3) arr.push('…');
    for (let i = Math.max(2, current - 1); i <= Math.min(total - 1, current + 1); i++) arr.push(i);
    if (current < total - 2) arr.push('…');
    arr.push(total);
    return arr;
}

/* ─── SEARCH ─── */
let searchTimer;
el.search.addEventListener('input', () => {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => {
        const term = el.search.value.trim().toLowerCase();
        state.searchTerm = term;
        state.filtered = term
            ? santriData.filter(s =>
                s.name.toLowerCase().includes(term) ||
                s.address.toLowerCase().includes(term)
            )
            : [...santriData];
        state.page = 1;

        /* Clear btn visibility */
        el.clearBtn.hidden = !term;

        /* Result badge */
        if (term) {
            el.resultBadge.textContent = `${state.filtered.length} hasil`;
            el.resultBadge.classList.add('show');
        } else {
            el.resultBadge.classList.remove('show');
        }

        renderGallery();
    }, 250);
});

el.clearBtn.addEventListener('click', () => {
    el.search.value = '';
    el.search.dispatchEvent(new Event('input'));
    el.search.focus();
});

/* ─── PAGINATION CLICK ─── */
el.pagination.addEventListener('click', e => {
    const link = e.target.closest('.page-link');
    if (!link) return;
    e.preventDefault();
    const p = parseInt(link.dataset.p, 10);
    if (!p || p === state.page) return;
    const total = Math.ceil(state.filtered.length / state.perPage);
    if (p < 1 || p > total) return;
    state.page = p;
    renderGallery();
    window.scrollTo({ top: el.searchSticky.offsetTop - 8, behavior: 'smooth' });
});

/* ─── CARD CLICK → LIGHTBOX ─── */
el.grid.addEventListener('click', e => {
    const card = e.target.closest('.santri-card');
    if (!card) return;
    const s = santriData[parseInt(card.dataset.idx, 10)];
    if (s) openLightbox(s);
});

/* ─── LIGHTBOX ─── */
function openLightbox(s) {
    el.lbName.textContent = s.name;
    el.lbAddress.textContent = s.address;

    /* Reset image */
    el.lbImg.classList.remove('loaded');
    el.imgShimmer.style.display = '';
    el.lbImg.src = '';

    el.lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
    el.lbClose.focus();

    /* Load image */
    el.lbImg.src = s.img;
    if (el.lbImg.complete && el.lbImg.naturalWidth > 0) {
        el.lbImg.classList.add('loaded');
        el.imgShimmer.style.display = 'none';
    } else {
        el.lbImg.onload = () => {
            el.lbImg.classList.add('loaded');
            el.imgShimmer.style.display = 'none';
        };
        el.lbImg.onerror = () => {
            el.imgShimmer.style.display = 'none';
        };
    }
}

function closeLightbox() {
    el.lightbox.classList.remove('open');
    document.body.style.overflow = '';
    setTimeout(() => { el.lbImg.src = ''; }, 350);
}

el.lbClose.addEventListener('click', closeLightbox);
el.lbBackdrop.addEventListener('click', closeLightbox);

document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && el.lightbox.classList.contains('open')) closeLightbox();
});

/* ─── SCROLL: sticky shadow ─── */
const stickyObserver = new IntersectionObserver(
    ([entry]) => el.searchSticky.classList.toggle('scrolled', !entry.isIntersecting),
    { threshold: 0, rootMargin: '-1px 0px 0px 0px' }
);
stickyObserver.observe(document.querySelector('.site-header'));

/* ─── INIT ─── */
(function init() {
    el.totalCount.textContent = santriData.length;
    renderGallery();
})();
