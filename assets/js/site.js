const navToggle = document.querySelector(".nav__toggle"),
    nav = document.querySelector(".nav");

navToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});