document.addEventListener('DOMContentLoaded', () => {

    let userInteracted = false;

    /* ================= SLIDERS – ALL POSTS ================= */
    document.querySelectorAll('.slider').forEach(slider => {
        const slides = slider.querySelectorAll('.slide');
        const nextBtn = slider.querySelector('.next');
        const prevBtn = slider.querySelector('.prev');
        let current = 0;

        const showSlide = i => {
            slides.forEach(s => s.classList.remove('active'));
            slides[i].classList.add('active');
        };

        nextBtn.addEventListener('click', e => {
            e.stopPropagation();
            current = (current + 1) % slides.length;
            showSlide(current);
        });

        prevBtn.addEventListener('click', e => {
            e.stopPropagation();
            current = (current - 1 + slides.length) % slides.length;
            showSlide(current);
        });
    });

    /* ================= THEME ================= */
    document.getElementById('themeToggle').addEventListener('click', () => {
        document.body.classList.toggle('light');
        themeToggle.classList.toggle('fa-moon');
        themeToggle.classList.toggle('fa-sun');
    });

    /* ================= LIKES ================= */
    document.querySelectorAll('.like-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            btn.classList.toggle('fa-regular');
            btn.classList.toggle('fa-solid');
            btn.classList.toggle('liked');
        });
    });

    /* ================= MUSIC ================= */
    const posts = document.querySelectorAll('.ig-post');
    const audios = new Map();

    posts.forEach(post => {
        const music = post.querySelector('.post-music');
        if (!music) return;

        const src = music.dataset.audio;
        const audio = new Audio(src);
        audio.loop = true;
        audio.volume = 0.8;

        const icon = music.querySelector('.music-icon');
        audios.set(post, audio);

        icon.addEventListener('click', () => {
            userInteracted = true;

            if (audio.paused) {
                stopAll();
                audio.play();
                icon.classList.add('active');
            } else {
                audio.pause();
                icon.classList.remove('active');
            }
        });
    });

    function stopAll() {
        audios.forEach((audio, post) => {
            audio.pause();
            const icon = post.querySelector('.music-icon');
            if (icon) icon.classList.remove('active');
        });
    }

    /* ================= AUTOPLAY ON SCROLL ================= */
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const post = entry.target;
            const audio = audios.get(post);
            const icon = post.querySelector('.music-icon');
            if (!audio || !userInteracted) return;

            if (entry.isIntersecting && entry.intersectionRatio > 0.6) {
                stopAll();
                audio.play().catch(() => {});
                icon?.classList.add('active');
            } else {
                audio.pause();
                icon?.classList.remove('active');
            }
        });
    }, { threshold: 0.6 });

    audios.forEach((_, post) => observer.observe(post));
});






