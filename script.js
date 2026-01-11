document.addEventListener('DOMContentLoaded', () => {

    let userInteracted = false;
    const audios = new Map();

    /* ================= SLIDERS ================= */
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

    /* ================= THEME (DAY / NIGHT) ================= */
    const themeToggle = document.getElementById('themeToggle');

    themeToggle.addEventListener('click', () => {
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
    document.querySelectorAll('.ig-post').forEach(post => {
        const music = post.querySelector('.post-music');
        if (!music) return;

        const audio = new Audio(music.dataset.audio);
        audio.loop = true;
        audio.volume = 0.8;

        const icon = music.querySelector('.music-icon');
        audios.set(post, audio);

        icon.addEventListener('click', () => {
            userInteracted = true;

            audios.forEach(a => a.pause());
            document.querySelectorAll('.music-icon')
                .forEach(i => i.classList.remove('active'));

            audio.play();
            icon.classList.add('active');
        });
    });

});










