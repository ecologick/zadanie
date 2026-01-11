document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       SLIDER (POST IMAGE)
    ========================== */
    document.querySelectorAll(".slider").forEach(slider => {
        const slides = slider.querySelectorAll(".slide");
        const prevBtn = slider.querySelector(".prev");
        const nextBtn = slider.querySelector(".next");

        let current = 0;

        function showSlide(index) {
            slides.forEach(slide => slide.classList.remove("active"));
            slides[index].classList.add("active");
        }

        nextBtn.addEventListener("click", () => {
            current = (current + 1) % slides.length;
            showSlide(current);
        });

        prevBtn.addEventListener("click", () => {
            current = (current - 1 + slides.length) % slides.length;
            showSlide(current);
        });
    });

    /* =========================
       LIKE BUTTON
    ========================== */
    document.querySelectorAll(".like-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            btn.classList.toggle("fa-regular");
            btn.classList.toggle("fa-solid");
            btn.classList.toggle("liked");
        });
    });

    /* =========================
       DARK MODE (MOON ICON)
    ========================== */
    const themeToggle = document.getElementById("themeToggle");
    if (themeToggle) {
        themeToggle.addEventListener("click", () => {
            document.body.classList.toggle("dark");
        });
    }

});
