document.addEventListener('DOMContentLoaded', () => {

/* ================= SLIDER ================= */
document.querySelectorAll('.slider').forEach(slider => {
    const slides = slider.querySelectorAll('.slide');
    const next = slider.querySelector('.next');
    const prev = slider.querySelector('.prev');

    if (!slides.length || !next || !prev) return;

    let index = 0;

    next.addEventListener('click', () => {
        slides[index].classList.remove('active');
        index = (index + 1) % slides.length;
        slides[index].classList.add('active');
    });

    prev.addEventListener('click', () => {
        slides[index].classList.remove('active');
        index = (index - 1 + slides.length) % slides.length;
        slides[index].classList.add('active');
    });
});

/* ================= THEME ================= */
document.getElementById('themeToggle').onclick = () => {
    document.body.classList.toggle('light');
};

/* ================= LIKES ================= */
document.querySelectorAll('.like-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.classList.toggle('fa-regular');
        btn.classList.toggle('fa-solid');
        btn.classList.toggle('liked');
    });
});

/* ================= MUSIC (MOBILE SAFE) ================= */

let activeAudio = null;
let activeIcon = null;
let activePost = null;

document.querySelectorAll('.post-music').forEach(music => {
    const icon = music.querySelector('.music-icon');
    const src = music.dataset.audio;
    const post = music.closest('.ig-post');

    icon.addEventListener('click', () => {

        /* stop poprzedniego */
        if (activeAudio) {
            activeAudio.pause();
            activeAudio.currentTime = 0;
            activeIcon.classList.remove('active');
        }

        /* klik w ten sam post */
        if (activePost === post) {
            activeAudio = null;
            activeIcon = null;
            activePost = null;
            return;
        }

        /* mobile-safe audio */
        const audio = new Audio(src);
        audio.loop = true;
        audio.muted = false;
        audio.playsInline = true;

        audio.play().catch(() => {});

        icon.classList.add('active');
        activeAudio = audio;
        activeIcon = icon;
        activePost = post;
    });
});

/* ================= AUTO PAUSE ON SCROLL (MOBILE SAFE) ================= */

window.addEventListener('scroll', () => {
    if (!activeAudio || !activePost) return;

    const rect = activePost.getBoundingClientRect();
    const viewHeight = window.innerHeight;

    /* jeśli post wyszedł z ekranu */
    if (rect.bottom < viewHeight * 0.3 || rect.top > viewHeight * 0.7) {
        activeAudio.pause();
        activeAudio.currentTime = 0;
        activeIcon.classList.remove('active');

        activeAudio = null;
        activeIcon = null;
        activePost = null;
    }
});

});
/* ================= MOBILE THEME TOGGLE ================= */
const mobileToggle = document.getElementById('mobileThemeToggle');

if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
        document.body.classList.toggle('light');
    });
}












