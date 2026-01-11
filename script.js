document.addEventListener('DOMContentLoaded', () => {

    /* ========== SLIDERS (ALL POSTS) ========== */
    document.querySelectorAll('.slider').forEach(slider => {
        const slides = slider.querySelectorAll('.slide');
        const nextBtn = slider.querySelector('.next');
        const prevBtn = slider.querySelector('.prev');

        let current = 0;

        function showSlide(index) {
            slides.forEach(slide => slide.classList.remove('active'));
            slides[index].classList.add('active');
        }

        nextBtn.addEventListener('click', () => {
            current = (current + 1) % slides.length;
            showSlide(current);
        });

        prevBtn.addEventListener('click', () => {
            current = (current - 1 + slides.length) % slides.length;
            showSlide(current);
        });
    });

    /* ========== THEME TOGGLE ========== */
    const themeToggle = document.getElementById('themeToggle');
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light');
        themeToggle.classList.toggle('fa-moon');
        themeToggle.classList.toggle('fa-sun');
    });

    /* ========== LIKE BUTTON ========== */
    document.querySelectorAll('.like-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            btn.classList.toggle('fa-regular');
            btn.classList.toggle('fa-solid');
            btn.classList.toggle('liked');
        });
    });

});




