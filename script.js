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

dodać auto-pause przy scrollu (mobile-safe)










