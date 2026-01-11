// UI only – brak logiki aplikacji
console.log("Instagram UI layout loaded");
/* =========================
   THEME TOGGLE
========================= */

const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", () => {
    document.body.classList.toggle("light");

    // zmiana ikony
    if (document.body.classList.contains("light")) {
        toggle.classList.remove("fa-moon");
        toggle.classList.add("fa-sun");
    } else {
        toggle.classList.remove("fa-sun");
        toggle.classList.add("fa-moon");
    }
});

/* =========================
   LIKE BUTTON
========================= */

document.querySelectorAll(".like-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        btn.classList.toggle("liked");

        // zmiana ikonki regular -> solid
        if (btn.classList.contains("liked")) {
            btn.classList.remove("fa-regular");
            btn.classList.add("fa-solid");
        } else {
            btn.classList.remove("fa-solid");
            btn.classList.add("fa-regular");
        }
    });
});

console.log("UI interactions loaded");