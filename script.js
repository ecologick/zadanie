document.addEventListener('DOMContentLoaded', () => {

/* ===== SLIDER ===== */
document.querySelectorAll('.slider').forEach(slider => {
    const slides = slider.querySelectorAll('.slide');
    let index = 0;

    slider.querySelector('.next').onclick = () => {
        slides[index].classList.remove('active');
        index = (index + 1) % slides.length;
        slides[index].classList.add('active');
    };

    slider.querySelector('.prev').onclick = () => {
        slides[index].classList.remove('active');
        index = (index - 1 + slides.length) % slides.length;
        slides[index].classList.add('active');
    };
});

/* ===== THEME ===== */
document.getElementById('themeToggle').onclick =
document.getElementById('mobileThemeToggle').onclick = () => {
    document.body.classList.toggle('light');
};

/* ===== LIKES ===== */
document.querySelectorAll('.like-btn').forEach(btn => {
    btn.onclick = () => {
        btn.classList.toggle('fa-regular');
        btn.classList.toggle('fa-solid');
        btn.classList.toggle('liked');
    };
});

/* ===== MUSIC ===== */
let active = null;

document.querySelectorAll('.post-music').forEach(music => {
    const icon = music.querySelector('.music-icon');
    const audio = new Audio(music.dataset.audio);
    const post = music.closest('.ig-post');

    audio.loop = true;
    audio.playsInline = true;

    icon.onclick = () => {

        if (active && active !== music) {
            active.audio.pause();
            active.querySelector('.music-icon').classList.remove('active');
        }

        if (!audio.paused) {
            audio.pause();
            icon.classList.remove('active');
            active = null;
        } else {
            audio.play().catch(()=>{});
            icon.classList.add('active');
            active = { audio, post, icon };
        }
    };
});

/* ===== AUTO PAUSE ON SCROLL ===== */
window.addEventListener('scroll', () => {
    if (!active) return;

    const rect = active.post.getBoundingClientRect();
    const h = window.innerHeight;

    if (rect.bottom < h * 0.3 || rect.top > h * 0.7) {
        active.audio.pause();
        active.icon.classList.remove('active');
        active = null;
    }
});

});













