const nav = document.querySelector(".primary-navigation");
const navBtn = document.querySelector(".mobile-nav-toggle");

navBtn.addEventListener("click", () => {
    const navVisible = nav.getAttribute("data-visible");

    if (navVisible === "false") {
        nav.setAttribute("data-visible", "true");
        navBtn.setAttribute("aria-expanded", "true");
    } else {
        nav.setAttribute("data-visible", "false");
        navBtn.setAttribute("aria-expanded", "false");
    }
});