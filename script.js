document.addEventListener('DOMContentLoaded', () => {

const postsContainer = document.getElementById('posts');

/* GENERUJEMY 6 POSTÓW */
for (let i = 1; i <= 6; i++) {
    postsContainer.innerHTML += `
    <article class="ig-post">
        <header class="post-header">
            <div class="avatar"></div>
            <span class="username">kingsteampoland</span>
            <i class="fa-solid fa-ellipsis"></i>
        </header>

        <div class="post-image slider">
            <img src="slide1.png" class="slide active">
            <img src="slide2.png" class="slide">
            <img src="slide3.png" class="slide">

            <button class="slide-btn prev"><i class="fa-solid fa-chevron-left"></i></button>
            <button class="slide-btn next"><i class="fa-solid fa-chevron-right"></i></button>

            <div class="post-music" data-audio="slide1.mp3">
                <i class="fa-solid fa-volume-high music-icon"></i>
            </div>
        </div>

        <div class="post-actions">
            <div class="left">
                <i class="fa-regular fa-heart like-btn"></i>
                <i class="fa-regular fa-comment"></i>
                <i class="fa-regular fa-paper-plane"></i>
            </div>
            <i class="fa-regular fa-bookmark"></i>
        </div>

        <div class="post-text"><strong>Post ${i}</strong> – opis posta</div>
    </article>`;
}

/* SLIDER */
document.querySelectorAll('.slider').forEach(slider => {
    const slides = slider.querySelectorAll('.slide');
    const next = slider.querySelector('.next');
    const prev = slider.querySelector('.prev');
    let index = 0;

    next.onclick = () => {
        slides[index].classList.remove('active');
        index = (index + 1) % slides.length;
        slides[index].classList.add('active');
    };

    prev.onclick = () => {
        slides[index].classList.remove('active');
        index = (index - 1 + slides.length) % slides.length;
        slides[index].classList.add('active');
    };
});

/* THEME */
document.getElementById('themeToggle').onclick = () => {
    document.body.classList.toggle('light');
};

/* LIKE */
document.querySelectorAll('.like-btn').forEach(btn => {
    btn.onclick = () => {
        btn.classList.toggle('fa-regular');
        btn.classList.toggle('fa-solid');
        btn.classList.toggle('liked');
    };
});

/* MUSIC – MOBILE SAFE */
const audios = [];

document.querySelectorAll('.post-music').forEach(music => {
    const audio = new Audio(music.dataset.audio);
    audio.loop = true;
    music.audioRef = audio;

    const icon = music.querySelector('.music-icon');
    audios.push({ audio, icon });

    icon.onclick = () => {
        if (audio.paused) {
            audios.forEach(a => {
                a.audio.pause();
                a.icon.classList.remove('active');
            });
            audio.play();
            icon.classList.add('active');
        } else {
            audio.pause();
            icon.classList.remove('active');
        }
    };
});

/* AUTO PAUSE ON SCROLL */
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            const music = entry.target.querySelector('.post-music');
            if (music && music.audioRef) {
                music.audioRef.pause();
                music.querySelector('.music-icon').classList.remove('active');
            }
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.ig-post').forEach(post => observer.observe(post));

});









