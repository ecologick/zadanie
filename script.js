document.addEventListener('DOMContentLoaded', () => {

/* SLIDER */
document.querySelectorAll('.slider').forEach(slider => {
    const slides = slider.querySelectorAll('.slide');
    const next = slider.querySelector('.next');
    const prev = slider.querySelector('.prev');

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

/* THEME */
document.getElementById('themeToggle').onclick = () => {
    document.body.classList.toggle('light');
};

/* LIKES */
document.querySelectorAll('.like-btn').forEach(btn => {
    btn.onclick = () => {
        btn.classList.toggle('fa-regular');
        btn.classList.toggle('fa-solid');
        btn.classList.toggle('liked');
    };
});

/* MUSIC (mobile-safe) */
const audios = [];

document.querySelectorAll('.post-music').forEach(m => {
    const audio = new Audio(m.dataset.audio);
    audio.loop = true;

    const icon = m.querySelector('.music-icon');
    audios.push({ audio, icon });

    icon.onclick = () => {
        audios.forEach(a => {
            a.audio.pause();
            a.icon.classList.remove('active');
        });

        audio.play();
        icon.classList.add('active');
    };
});

});










