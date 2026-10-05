// ==========================================
// DEWI'S 8-BIT PORTFOLIO - MAIN SCRIPT
// ==========================================

// 1. ANIMASI LOADING SCREEN
window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loading-screen');
    const loadingBar = document.getElementById('loading-bar');
    
    if (loadingBar) {
        loadingBar.style.width = '100%';
    }

    setTimeout(() => {
        if (loadingScreen) {
            loadingScreen.style.opacity = '0';
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 700);
        }
    }, 600);
});

// 2. MOBILE MENU TOGGLE
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Tutup menu otomatis kalau salah satu link di dalamnya diklik
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });
}

// 3. SCROLL REVEAL ANIMATION (EFEK MUNCUL SAAT DI-SCROLL)
window.addEventListener('scroll', revealElements);

function revealElements() {
    const reveals = document.querySelectorAll('.scroll-reveal');
    const windowHeight = window.innerHeight;
    const revealPoint = 100;

    reveals.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowHeight - revealPoint) {
            element.classList.add('active');
            // Tambahan kelas style langsung via JS untuk memastikan transisi mulus
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Inisialisasi awal untuk elemen reveal
document.addEventListener('DOMContentLoaded', () => {
    const reveals = document.querySelectorAll('.scroll-reveal');
    reveals.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
    });
    revealElements(); // Cek posisi awal
});

// 4. GAMING UNIVERSE MODAL INTERACTIVE
const gameCards = document.querySelectorAll('.game-card');
const gameModal = document.getElementById('gameModal');
const modalImg = document.getElementById('modalImg');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const modalBadge = document.getElementById('modalBadge');
const modalEmojiContainer = document.getElementById('modalEmojiContainer');
const closeBtn = document.querySelector('.close-btn');

gameCards.forEach(card => {
    card.addEventListener('click', () => {
        const title = card.getAttribute('data-game');
        const desc = card.getAttribute('data-desc');
        const imgSrc = card.getAttribute('data-img');
        const tag = card.getAttribute('data-tag');

        modalTitle.textContent = title;
        modalDesc.textContent = desc;
        modalBadge.textContent = tag;

        // Cek apakah game punya gambar atau pakai emoji cadangan
        if (imgSrc && imgSrc !== "") {
            modalImg.src = imgSrc;
            modalImg.classList.remove('hidden');
            if (modalEmojiContainer) modalEmojiContainer.classList.add('hidden');
        } else {
            modalImg.classList.add('hidden');
            if (modalEmojiContainer) modalEmojiContainer.classList.remove('hidden');
        }

        // Tampilkan modal
        gameModal.classList.remove('hidden');
        gameModal.classList.add('flex');
    });
});

// Tutup modal saat tombol silang (&times;) diklik
if (closeBtn) {
    closeBtn.addEventListener('click', () => {
        gameModal.classList.add('hidden');
        gameModal.classList.remove('flex');
    });
}

// Tutup modal saat area luar kotak modal diklik
window.addEventListener('click', (e) => {
    if (e.target === gameModal) {
        gameModal.classList.add('hidden');
        gameModal.classList.remove('flex');
    }
});

// 5. LIGHT MODE & DARK MODE SWITCHER
const themeToggleBtn = document.getElementById('theme-toggle');
const bodyElement = document.body;

if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
        bodyElement.classList.toggle('light-mode');
        
        if (bodyElement.classList.contains('light-mode')) {
            themeToggleBtn.innerHTML = '🌙 DARK';
        } else {
            themeToggleBtn.innerHTML = '☀️ LIGHT';
        }
    });
}