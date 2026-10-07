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

    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });
}

// 3. SCROLL REVEAL ANIMATION
window.addEventListener('scroll', revealElements);

function revealElements() {
    const reveals = document.querySelectorAll('.scroll-reveal');
    const windowHeight = window.innerHeight;
    const revealPoint = 100;

    reveals.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowHeight - revealPoint) {
            element.classList.add('active');
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const reveals = document.querySelectorAll('.scroll-reveal');
    reveals.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
    });
    revealElements();
});

// --- DATA STATISTIK HERO & COMMANDER ---
const mlHeroesAll = [
    { name: "Chang'e", power: "1921", match: "94", wr: "64.9%", img: "img/change.jpg" },
    { name: "Nana", power: "1994", match: "61", wr: "67.2%", img: "img/nana.jpeg" },
    { name: "Lesley", power: "1647", match: "57", wr: "71.9%", img: "img/lesley.jpeg" },
    { name: "Estes", power: "1926", match: "53", wr: "60.4%", img: "img/estes.jpeg" }
];

const mlHeroesCur = [
    { name: "Rafaela", power: "1583", match: "13", wr: "69.2%", img: "img/rafaela.jpeg" },
    { name: "Nana", power: "1716", match: "12", wr: "75.0%", img: "img/nana.jpeg" },
    { name: "Cici", power: "1262", match: "9", wr: "66.7%", img: "img/cici.jpeg" }
];

const mcggCommanders = [
    { name: "Vexana", power: "2466", match: "37", avg: "3.05", img: "img/vexana.jpeg" },
    { name: "Layla", power: "2150", match: "29", avg: "2.80", img: "img/layla.jpeg" }
];

// Data Senjata Free Fire Lengkap dengan Title Kota Banjarbaru & Foto (TIDAK DIUBAH)
const ffBrWeapons = [
    { name: "M1887", score: "3748", kills: "1076", bar: "95%", img: "img/M1887.jpeg" },
    { name: "XM8", score: "3895", kills: "814", bar: "90%", img: "img/XM8.jpeg" },
    { name: "AK47", score: "3057", kills: "554", title: "Kota Banjarbaru #96", bar: "75%", img: "img/AK47.jpeg" },
    { name: "M1014", score: "2800", kills: "420", bar: "68%", img: "img/M1014.jpeg" },
    { name: "Winchester", score: "2400", kills: "310", bar: "60%", img: "img/Winchester.jpeg" },
    { name: "SCAR", score: "2250", kills: "290", bar: "55%", img: "img/SCAR.jpeg" }
];

const ffCsWeapons = [
    { name: "AK47", score: "2507", kills: "739", title: "Kota Banjarbaru #44", bar: "88%", img: "img/AK47.jpeg" },
    { name: "G18", score: "1422", kills: "434", title: "Kota Banjarbaru #32", bar: "65%", img: "img/G18.jpeg" },
    { name: "SVD", score: "1140", kills: "11", title: "Kota Banjarbaru #12", bar: "45%", img: "img/SVD.jpeg" },
    { name: "PARAFAL", score: "1050", kills: "95", title: "Kota Banjarbaru #60", bar: "40%", img: "img/Parafal.jpeg" },
    { name: "MAC10", score: "980", kills: "82", title: "Kota Banjarbaru #88", bar: "35%", img: "img/MAC10.jpeg" },
    { name: "Mini Uzi", score: "900", kills: "70", title: "Kota Banjarbaru #98", bar: "30%", img: "img/Mini Uzi.jpeg" }
];

// Data ID Game Lengkap dengan Status Dipisah & Tombol Salin per Baris
const gameDataDetails = {
    "Magic Chess (MCGG)": { 
        statusText: "Aktif",
        htmlRows: `
            <div class="mabar-row-box bg-pink-950/40 p-2.5 rounded-xl border border-pink-500/30 flex justify-between items-center text-xs text-white">
                <div><span class="text-pink-300 font-bold">ID:</span> <span class="font-mono font-bold select-all ml-1">108014920</span></div>
                <button onclick="copyToClipboard('108014920', 'ID MCGG')" class="bg-pink-600 hover:bg-pink-500 text-white px-2.5 py-1 rounded-lg text-[10px] font-bold transition shadow flex items-center gap-1">📋 Salin</button>
            </div>
        `,
        desc: "Magic Chess Dominance • Tier Legend X" 
    },
    "Mobile Legends: Bang Bang": { 
        statusText: "Aktif",
        htmlRows: `
            <div class="mabar-row-box bg-pink-950/40 p-2.5 rounded-xl border border-pink-500/30 flex justify-between items-center text-xs text-white">
                <div><span class="text-pink-300 font-bold">ID:</span> <span class="font-mono font-bold select-all ml-1">1446735575</span></div>
                <button onclick="copyToClipboard('1446735575', 'ID MLBB')" class="bg-pink-600 hover:bg-pink-500 text-white px-2.5 py-1 rounded-lg text-[10px] font-bold transition shadow flex items-center gap-1">📋 Salin</button>
            </div>
        `,
        desc: "MLBB Performance • Mage / Roam Specialist" 
    },
    "Free Fire": { 
        statusText: "Semi Aktif",
        htmlRows: `
            <div class="mabar-row-box bg-pink-950/40 p-2.5 rounded-xl border border-pink-500/30 flex justify-between items-center text-xs text-white">
                <div><span class="text-pink-300 font-bold">ID:</span> <span class="font-mono font-bold select-all ml-1">617307813</span></div>
                <button onclick="copyToClipboard('617307813', 'ID Free Fire')" class="bg-pink-600 hover:bg-pink-500 text-white px-2.5 py-1 rounded-lg text-[10px] font-bold transition shadow flex items-center gap-1">📋 Salin</button>
            </div>
        `,
        desc: "Free Fire Veteran • Level 73" 
    },
    "Roblox": { 
        statusText: "Aktif",
        htmlRows: `
            <div class="mabar-row-box bg-pink-950/40 p-2.5 rounded-xl border border-pink-500/30 flex justify-between items-center text-xs text-white">
                <div><span class="text-pink-300 font-bold">User:</span> <span class="font-mono font-bold select-all ml-1">@dewioxt</span></div>
                <button onclick="copyToClipboard('@dewioxt', 'Roblox User')" class="bg-pink-600 hover:bg-pink-500 text-white px-2.5 py-1 rounded-lg text-[10px] font-bold transition shadow flex items-center gap-1">📋 Salin</button>
            </div>
        `,
        desc: "Roblox Avatar & Hangout World" 
    },
    "Growtopia": { 
        statusText: "Semi Aktif",
        htmlRows: `
            <div class="space-y-2 text-xs">
                <div class="mabar-row-box bg-pink-950/40 p-2.5 rounded-xl border border-pink-500/30 flex justify-between items-center text-white">
                    <div><span class="text-pink-300 font-bold">GrowID:</span> <span class="font-mono font-bold select-all ml-1">Morticiam</span></div>
                    <button onclick="copyToClipboard('Morticiam', 'GrowID')" class="bg-pink-600 hover:bg-pink-500 text-white px-2.5 py-1 rounded-lg text-[10px] font-bold transition shadow flex items-center gap-1">📋 Salin</button>
                </div>
                <div class="mabar-row-box bg-pink-950/40 p-2.5 rounded-xl border border-pink-500/30 flex justify-between items-center text-xs text-white">
                    <div><span class="text-pink-300 font-bold">World:</span> <span class="font-mono font-bold select-all ml-1">10YEN</span></div>
                    <button onclick="copyToClipboard('10YEN', 'World Growtopia')" class="bg-pink-600 hover:bg-pink-500 text-white px-2.5 py-1 rounded-lg text-[10px] font-bold transition shadow flex items-center gap-1">📋 Salin</button>
                </div>
            </div>
        `,
        desc: "Growtopia Builder" 
    },
    "Call of Duty Mobile": { 
        statusText: "Non Aktif",
        htmlRows: `
            <div class="mabar-row-box bg-pink-950/40 p-2.5 rounded-xl border border-pink-500/30 flex justify-between items-center text-xs text-white">
                <div><span class="text-pink-300 font-bold">CODM ID:</span> <span class="font-mono font-bold select-all ml-1">DewiosC0504</span></div>
                <button onclick="copyToClipboard('DewiosC0504', 'CODM ID')" class="bg-pink-600 hover:bg-pink-500 text-white px-2.5 py-1 rounded-lg text-[10px] font-bold transition shadow flex items-center gap-1">📋 Salin</button>
            </div>
        `,
        desc: "Tactical Shooter Action" 
    }
};

// Fungsi Global untuk Menyalin Teks & Memunculkan Notifikasi Estetik
window.copyToClipboard = function(textToCopy, labelName) {
    navigator.clipboard.writeText(textToCopy).then(() => {
        showEstheticToast(`Berhasil menyalin ${labelName}: ${textToCopy}! 🎉`);
    });
};

// Fungsi Toast Notifikasi Estetik Melayang
function showEstheticToast(message) {
    const existingToast = document.getElementById('esthetic-toast');
    if (existingToast) existingToast.remove();

    const toast = document.createElement('div');
    toast.id = 'esthetic-toast';
    toast.className = "fixed bottom-6 right-6 z-[9999] bg-slate-900 border-2 border-pink-400 text-white px-4 py-3 rounded-2xl shadow-2xl flex items-center gap-3 transform translate-y-10 opacity-0 transition-all duration-300";
    toast.innerHTML = `
        <div class="w-8 h-8 rounded-xl bg-pink-500/20 border border-pink-400 flex items-center justify-center text-pink-300 text-sm font-bold">✨</div>
        <div>
            <p class="font-pixel text-[9px] text-pink-300 uppercase tracking-wider">SKUY MABAR NOTIF</p>
            <p class="text-xs text-white font-medium mt-0.5">${message}</p>
        </div>
    `;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.classList.remove('translate-y-10', 'opacity-0');
    }, 50);

    setTimeout(() => {
        toast.classList.add('translate-y-10', 'opacity-0');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// 4. GAMING UNIVERSE MODAL INTERACTIVE
const gameCards = document.querySelectorAll('.game-card');
const gameModal = document.getElementById('gameModal');
const modalImg = document.getElementById('modalImg');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const modalBadge = document.getElementById('modalBadge');
const modalEmojiContainer = document.getElementById('modalEmojiContainer');
const modalImgWrapper = modalImg ? modalImg.parentElement : null;
const closeBtn = document.querySelector('.close-btn');
const skuyMabarBtn = gameModal ? gameModal.querySelector('button') : null;

let currentGameName = "";

gameCards.forEach(card => {
    card.addEventListener('click', () => {
        const title = card.getAttribute('data-game');
        currentGameName = title;
        const desc = card.getAttribute('data-desc');
        const imgSrc = card.getAttribute('data-img');
        const tag = card.getAttribute('data-tag');
        const gameType = card.getAttribute('data-type');

        modalTitle.textContent = title;
        modalBadge.textContent = tag;

        if (modalImgWrapper) {
            modalImgWrapper.className = "game-img-container mb-3 shadow-md";
            if (gameType === 'ff' || gameType === 'ml' || gameType === 'mcgg') {
                modalImgWrapper.classList.add('landscape');
            } else {
                modalImgWrapper.classList.add('portrait');
            }
        }

        if (imgSrc && imgSrc !== "") {
            modalImg.src = imgSrc;
            modalImg.classList.remove('hidden');
            if (modalEmojiContainer) modalEmojiContainer.classList.add('hidden');
        } else {
            modalImg.classList.add('hidden');
            if (modalEmojiContainer) modalEmojiContainer.classList.remove('hidden');
        }

        // Render Free Fire
        if (gameType === 'ff') {
            const ach = card.getAttribute('data-ach');
            const emblem = card.getAttribute('data-emblem');

            let brWeaponsHtml = ffBrWeapons.map(w => `
                <div class="weapon-card-box">
                    <div class="weapon-img-box"><img src="${w.img}" alt="${w.name}"></div>
                    <div class="flex-1 space-y-1 text-[11px]">
                        <div class="flex justify-between font-bold items-center">
                            <span class="text-pink-300 text-xs">${w.name} ${w.title ? `<span class="text-[9px] text-amber-300 font-normal">(${w.title})</span>` : ''}</span>
                            <span class="text-[10px] opacity-90">Score: ${w.score} | Kills: ${w.kills}</span>
                        </div>
                        <div class="w-full bg-black/40 h-1.5 rounded-full overflow-hidden border border-pink-500/30">
                            <div class="bg-gradient-to-r from-pink-500 to-rose-400 h-full rounded-full" style="width: ${w.bar};"></div>
                        </div>
                    </div>
                </div>
            `).join('');

            let csWeaponsHtml = ffCsWeapons.map(w => `
                <div class="weapon-card-box">
                    <div class="weapon-img-box"><img src="${w.img}" alt="${w.name}"></div>
                    <div class="flex-1 space-y-1 text-[11px]">
                        <div class="flex justify-between font-bold items-center">
                            <span class="text-pink-300 text-xs">${w.name} ${w.title ? `<span class="text-[9px] text-amber-300 font-normal">(${w.title})</span>` : ''}</span>
                            <span class="text-[10px] opacity-90">Score: ${w.score} | Kills: ${w.kills}</span>
                        </div>
                        <div class="w-full bg-black/40 h-1.5 rounded-full overflow-hidden border border-pink-500/30">
                            <div class="bg-gradient-to-r from-pink-500 to-rose-400 h-full rounded-full" style="width: ${w.bar};"></div>
                        </div>
                    </div>
                </div>
            `).join('');

            modalDesc.innerHTML = `
                <div class="text-left text-xs space-y-3 mt-3 max-h-[400px] overflow-y-auto pr-2 pb-4 custom-scrollbar">
                    <div class="stat-card-box p-3 rounded-2xl border flex items-center justify-around">
                        <div class="relative w-16 h-16 flex items-center justify-center">
                            <svg class="w-full h-full transform -rotate-90" viewBox="0 0 36 36"><path class="text-pink-950/40" stroke-width="4" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/><path class="text-rose-400" stroke-dasharray="75, 100" stroke-width="4" stroke-linecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/></svg>
                            <div class="absolute font-pixel text-[7px]">LVL 73</div>
                        </div>
                        <div><p class="font-bold">Free Fire Veteran Stats</p><p class="text-[10px] opacity-80 mt-0.5">${ach} • <span class="game-status-badge">Semi Aktif</span></p></div>
                    </div>

                    <!-- BATTLE ROYALE STATS -->
                    <div class="space-y-2">
                        <p class="font-bold text-[10px]">🔥 BATTLE ROYALE STATS</p>
                        
                        <div class="stat-card-box p-2.5 rounded-xl border space-y-1.5 text-[11px]">
                            <div class="flex justify-between font-bold"><span>Squad Mode</span><span class="text-pink-300">K/D 4.00</span></div>
                            <div class="flex flex-col space-y-0.5 text-[10px] opacity-80">
                                <span>Match: 7,558</span>
                                <span>Wins: 1,400</span>
                                <span>Kill: 24,641</span>
                            </div>
                            <div class="w-full bg-black/30 h-1.5 rounded-full overflow-hidden border"><div class="bg-gradient-to-r from-pink-500 to-rose-400 h-full rounded-full" style="width: 85%;"></div></div>
                        </div>

                        <div class="stat-card-box p-2.5 rounded-xl border space-y-1.5 text-[11px]">
                            <div class="flex justify-between font-bold"><span>Solo Mode</span><span class="text-pink-300">K/D 3.50</span></div>
                            <div class="flex flex-col space-y-0.5 text-[10px] opacity-80">
                                <span>Match: 1,200</span>
                                <span>Wins: 210</span>
                                <span>Kill: 3,450</span>
                            </div>
                            <div class="w-full bg-black/30 h-1.5 rounded-full overflow-hidden border"><div class="bg-gradient-to-r from-pink-500 to-rose-400 h-full rounded-full" style="width: 75%;"></div></div>
                        </div>
                    </div>

                    <!-- CLASH SQUAD STATS -->
                    <div class="space-y-2">
                        <p class="font-bold text-[10px]">⚡ CLASH SQUAD STATS</p>
                        <div class="stat-card-box p-2.5 rounded-xl border space-y-1.5 text-[11px]">
                            <div class="flex justify-between font-bold"><span>Ranked Mode</span><span class="text-pink-300">Win Rate 68.5%</span></div>
                            <div class="flex flex-col space-y-0.5 text-[10px] opacity-80">
                                <span>Match: 3,420</span>
                                <span>Wins: 2,342</span>
                                <span>MVP: 1,105</span>
                            </div>
                            <div class="w-full bg-black/30 h-1.5 rounded-full overflow-hidden border"><div class="bg-gradient-to-r from-pink-500 to-rose-400 h-full rounded-full" style="width: 88%;"></div></div>
                        </div>
                    </div>

                    <!-- BATTLE ROYALE (BR) ROLE -->
                    <div class="space-y-2 pt-2 border-t border-pink-500/30">
                        <p class="font-bold text-[10px]">🎯 BATTLE ROYALE (BR) ROLE</p>
                        <div class="stat-card-box p-3 rounded-2xl border flex items-center justify-around">
                            <div class="relative w-16 h-16 flex items-center justify-center">
                                <svg class="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                                    <path class="text-pink-950/40" stroke-width="4" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                                    <path class="text-pink-400" stroke-dasharray="56, 100" stroke-width="4" stroke-linecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                                    <path class="text-rose-400" stroke-dasharray="26, 100" stroke-dashoffset="-56" stroke-width="4" stroke-linecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                                    <path class="text-purple-400" stroke-dasharray="14, 100" stroke-dashoffset="-82" stroke-width="4" stroke-linecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                                </svg>
                                <div class="absolute font-pixel text-[6px] text-current">BR</div>
                            </div>
                            <div class="text-[10px] space-y-1">
                                <p><span class="w-2 h-2 rounded-full inline-block bg-pink-400 mr-1"></span> Rusher: 56% (Lv14)</p>
                                <p><span class="w-2 h-2 rounded-full inline-block bg-rose-400 mr-1"></span> Rifler: 26% (Lv15)</p>
                                <p><span class="w-2 h-2 rounded-full inline-block bg-purple-400 mr-1"></span> Support: 14% (Lv2)</p>
                            </div>
                        </div>
                    </div>

                    <!-- CLASH SQUAD (CS) ROLE -->
                    <div class="space-y-2 pt-1">
                        <p class="font-bold text-[10px]">🎯 CLASH SQUAD (CS) ROLE</p>
                        <div class="stat-card-box p-3 rounded-2xl border flex items-center justify-around">
                            <div class="relative w-16 h-16 flex items-center justify-center">
                                <svg class="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                                    <path class="text-pink-950/40" stroke-width="4" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                                    <path class="text-pink-400" stroke-dasharray="61, 100" stroke-width="4" stroke-linecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                                    <path class="text-rose-400" stroke-dasharray="30, 100" stroke-dashoffset="-61" stroke-width="4" stroke-linecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                                    <path class="text-purple-400" stroke-dasharray="5, 100" stroke-dashoffset="-91" stroke-width="4" stroke-linecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                                </svg>
                                <div class="absolute font-pixel text-[6px] text-current">CS</div>
                            </div>
                            <div class="text-[10px] space-y-1">
                                <p><span class="w-2 h-2 rounded-full inline-block bg-pink-400 mr-1"></span> Rusher: 61% (Lv11)</p>
                                <p><span class="w-2 h-2 rounded-full inline-block bg-rose-400 mr-1"></span> Rifler: 30% (Lv13)</p>
                                <p><span class="w-2 h-2 rounded-full inline-block bg-purple-400 mr-1"></span> Support: 5% (Lv3)</p>
                            </div>
                        </div>
                    </div>

                    <div class="space-y-1.5 pt-2"><p class="font-bold text-[10px]">🏆 FAV BATTLE ROYALE WEAPONS</p><div class="grid grid-cols-1 gap-2">${brWeaponsHtml}</div></div>
                    <div class="space-y-1.5 pt-1 pb-2"><p class="font-bold text-[10px]">🏆 FAV CLASH SQUAD WEAPONS</p><div class="grid grid-cols-1 gap-2">${csWeaponsHtml}</div></div>
                </div>
            `;
        } 
        // Render Mobile Legends (LENGKAP DENGAN STATS, KDA, POWER, DAN WR TERPISAH PER BARIS)
        else if (gameType === 'ml') {
            let heroesAllHtml = mlHeroesAll.map(h => `
                <div class="stat-card-box border rounded-xl p-2.5 flex flex-col gap-2">
                    <div class="flex items-center gap-2.5">
                        <img src="${h.img}" alt="${h.name}" class="w-10 h-10 rounded-lg object-cover border border-pink-400">
                        <div class="text-[11px] flex-1">
                            <div class="flex justify-between font-bold"><span>${h.name}</span><span class="text-pink-300">WR ${h.wr}</span></div>
                            <div class="flex flex-col space-y-0.5 text-[10px] opacity-75 mt-0.5">
                                <span>Power: ${h.power}</span>
                                <span>Match: ${h.match}</span>
                            </div>
                        </div>
                    </div>
                </div>
            `).join('');

            let heroesCurHtml = mlHeroesCur.map(h => `
                <div class="stat-card-box border rounded-xl p-2.5 flex flex-col gap-2">
                    <div class="flex items-center gap-2.5">
                        <img src="${h.img}" alt="${h.name}" class="w-10 h-10 rounded-lg object-cover border border-pink-400">
                        <div class="text-[11px] flex-1">
                            <div class="flex justify-between font-bold"><span>${h.name}</span><span class="text-pink-300">WR ${h.wr}</span></div>
                            <div class="flex flex-col space-y-0.5 text-[10px] opacity-75 mt-0.5">
                                <span>Power: ${h.power}</span>
                                <span>Match: ${h.match}</span>
                            </div>
                        </div>
                    </div>
                </div>
            `).join('');

            modalDesc.innerHTML = `
                <div class="text-left text-xs space-y-3 mt-3 max-h-[380px] overflow-y-auto pr-2 pb-4 custom-scrollbar">
                    <div class="space-y-1.5">
                        <p class="font-bold text-[10px]">⭐ HERO ALL TIME</p>
                        <div class="grid grid-cols-1 gap-2">${heroesAllHtml}</div>
                    </div>
                    <div class="space-y-1.5 pt-2">
                        <p class="font-bold text-[10px]">🔥 HERO CURRENT SEASON</p>
                        <div class="grid grid-cols-1 gap-2">${heroesCurHtml}</div>
                    </div>
                </div>
            `;
        } 
        // Render Magic Chess (LENGKAP COMMANDER)
        else if (gameType === 'mcgg') {
            let cmdHtml = mcggCommanders.map(c => `
                <div class="stat-card-box border rounded-xl p-2.5 flex flex-col gap-2">
                    <div class="flex items-center gap-3">
                        <img src="${c.img}" alt="${c.name}" class="w-10 h-10 rounded-xl object-cover border border-pink-400">
                        <div class="text-[11px] flex-1">
                            <div class="flex justify-between font-bold"><span>${c.name}</span><span class="text-pink-300">Avg ${c.avg}</span></div>
                            <div class="flex flex-col space-y-0.5 text-[10px] opacity-75 mt-0.5">
                                <span>Power: ${c.power}</span>
                                <span>Match: ${c.match}</span>
                            </div>
                        </div>
                    </div>
                </div>
            `).join('');

            modalDesc.innerHTML = `
                <div class="text-left text-xs space-y-3 mt-3">
                    <div class="space-y-1.5">
                        <p class="font-bold text-[10px]">♟️ COMMANDER ANDALAN</p>
                        <div class="grid grid-cols-1 gap-2">${cmdHtml}</div>
                    </div>
                </div>
            `;
        } else {
            modalDesc.textContent = desc;
        }

        gameModal.classList.remove('hidden');
        gameModal.classList.add('flex');
    });
});

// POP-UP MABAR INTERAKTIF DENGAN STATUS BADGE TERPISAH & SUPPORT LIGHT MODE
if (skuyMabarBtn) {
    skuyMabarBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const gameInfo = gameDataDetails[currentGameName] || { htmlRows: "<p>ID: Menyusul</p>", statusText: "Aktif", desc: "Ayo mabar bareng!" };

        let mabarBox = document.createElement('div');
        mabarBox.className = "fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fade-in";
        mabarBox.innerHTML = `
            <div class="mabar-modal-box stat-card-box bg-slate-900/95 border-2 border-pink-500 p-6 rounded-2xl max-w-sm w-full text-center space-y-4 shadow-2xl relative">
                <div class="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-pink-500 text-white font-pixel text-[10px] px-3 py-1 rounded-full uppercase tracking-wider shadow">
                    🎮 SKUY MABAR AREA
                </div>
                <h3 class="font-pixel text-pink-300 text-sm pt-2">${currentGameName}</h3>
                
                <div>
                    <p class="text-xs text-pink-200/80 mb-1">${gameInfo.desc}</p>
                    <span class="game-status-badge">${gameInfo.statusText}</span>
                </div>
                
                <div class="mabar-content-box bg-black/60 p-3.5 rounded-xl border border-pink-500/40 space-y-2 text-left">
                    <p class="text-[10px] uppercase text-pink-400 font-bold tracking-wider text-center pb-1">Pilih Info untuk Disalin:</p>
                    
                    <!-- Baris ID / GrowID / World -->
                    ${gameInfo.htmlRows}

                    <!-- Baris Discord (dooxv4) -->
                    <div class="mabar-row-box bg-pink-950/40 p-2.5 rounded-xl border border-pink-500/30 flex justify-between items-center text-xs text-white">
                        <div><span class="text-pink-300 font-bold">Discord:</span> <span class="font-mono font-bold select-all ml-1">dooxv4</span></div>
                        <button onclick="copyToClipboard('dooxv4', 'Discord ID')" class="bg-pink-600 hover:bg-pink-500 text-white px-2.5 py-1 rounded-lg text-[10px] font-bold transition shadow flex items-center gap-1">📋 Salin</button>
                    </div>
                </div>

                <div class="pt-1">
                    <button id="closeMabarBox" class="w-full py-2.5 px-4 rounded-xl font-bold text-xs bg-slate-800 hover:bg-slate-700 text-pink-300 border border-pink-500/50 transition shadow">
                        Tutup
                    </button>
                </div>
            </div>
        `;
        document.body.appendChild(mabarBox);

        document.getElementById('closeMabarBox').addEventListener('click', () => {
            mabarBox.remove();
        });

        mabarBox.addEventListener('click', (ev) => {
            if (ev.target === mabarBox) {
                mabarBox.remove();
            }
        });
    });
}

if (closeBtn) {
    closeBtn.addEventListener('click', () => {
        gameModal.classList.add('hidden');
        gameModal.classList.remove('flex');
    });
}

window.addEventListener('click', (e) => {
    if (e.target === gameModal) {
        gameModal.classList.add('hidden');
        gameModal.classList.remove('flex');
    }
});

// 5. LIGHT MODE & DARK MODE SWITCHER (DENGAN LOGO IKON 🌙 / ☀️)
const themeToggleBtn = document.getElementById('theme-toggle');
const bodyElement = document.body;

if (themeToggleBtn) {
    if (bodyElement.classList.contains('light-mode')) {
        themeToggleBtn.innerHTML = '☀️';
    } else {
        themeToggleBtn.innerHTML = '🌙';
    }

    themeToggleBtn.addEventListener('click', () => {
        bodyElement.classList.toggle('light-mode');
        
        if (bodyElement.classList.contains('light-mode')) {
            themeToggleBtn.innerHTML = '☀️';
        } else {
            themeToggleBtn.innerHTML = '🌙';
        }
    });
}