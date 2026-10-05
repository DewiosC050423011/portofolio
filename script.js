// JavaScript Terpisah: Logika Loading, Menu HP, & Modal Interaktif

// 1. Loading Screen Logic
window.addEventListener('load', () => {
    const bar = document.getElementById('loading-bar');
    const screen = document.getElementById('loading-screen');
    
    if (bar && screen) {
        bar.style.width = '100%';
        
        setTimeout(() => {
            screen.style.opacity = '0';
            setTimeout(() => {
                screen.style.display = 'none';
            }, 700);
        }, 600);
    }
});

// 2. Mobile Menu Toggle
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    document.querySelectorAll('#mobile-menu a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });
}

// 3. Modal Gaming Hub Interaktif
const modal = document.getElementById('gameModal');
const modalImg = document.getElementById('modalImg');
const modalEmojiContainer = document.getElementById('modalEmojiContainer');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const modalBadge = document.getElementById('modalBadge');
const closeBtn = document.querySelector('.close-btn');
const actionGameBtn = document.getElementById('actionGameBtn');

document.querySelectorAll('.game-card').forEach(card => {
    card.addEventListener('click', () => {
        const gameName = card.getAttribute('data-game');
        const gameDesc = card.getAttribute('data-desc');
        const gameImg = card.getAttribute('data-img');
        const gameTag = card.getAttribute('data-tag');

        if (modalTitle) modalTitle.textContent = gameName;
        if (modalDesc) modalDesc.textContent = gameDesc;
        
        if (modalBadge) {
            if(gameTag === 'Aktif') {
                modalBadge.className = 'status-badge active mb-4 inline-block';
                modalBadge.textContent = '🟢 Aktif';
            } else if(gameTag === 'Semi Aktif') {
                modalBadge.className = 'status-badge semi mb-4 inline-block';
                modalBadge.textContent = '🟡 Semi Aktif';
            } else {
                modalBadge.className = 'status-badge inactive mb-4 inline-block';
                modalBadge.textContent = '🔴 Non Aktif';
            }
        }

        if (gameImg) {
            if (modalImg) {
                modalImg.style.display = 'block';
                modalImg.src = gameImg;
            }
            if (modalEmojiContainer) modalEmojiContainer.classList.add('hidden');
        } else {
            if (modalImg) modalImg.style.display = 'none';
            if (modalEmojiContainer) modalEmojiContainer.classList.remove('hidden');
        }

        if (modal) modal.style.display = 'flex';
    });
});

if (actionGameBtn) {
    actionGameBtn.addEventListener('click', () => {
        alert(`Mantap! Gas terus main ${modalTitle ? modalTitle.textContent : 'game'}-nya, jangan lupa istirahat ya! 😉✨`);
        if (modal) modal.style.display = 'none';
    });
}

if (closeBtn) {
    closeBtn.addEventListener('click', () => {
        if (modal) modal.style.display = 'none';
    });
}

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// 4. Intersection Observer untuk Efek Scroll Reveal
document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            } else {
                entry.target.classList.remove('is-visible');
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.scroll-reveal');
    revealElements.forEach(el => observer.observe(el));
});