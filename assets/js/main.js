const swiper = new Swiper('.special__swiper, .blog__swiper', {
    slidesPerView: 'auto',
    spaceBetween: 30,
    grabCursor: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        540: {
            centeredSlides: true,
            slidesPerView: 1,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 4
        },
    }
});

const homeSwiper = new Swiper('.home__swiper', {
    slidesPerView: 1,
    grabCursor: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    }
});

const menu = document.querySelector(".menu"),
    closeBtn = document.querySelector(".close-menu"),
    openBtn = document.querySelector(".open-menu");

[openBtn, closeBtn].forEach(btn => {
    btn.addEventListener("click", () => {
        menu.classList.toggle("active");
        document.body.classList.toggle("active");
        menu.style.transition = "transform 0.5s ease";
    });
});

menu.addEventListener("transitionend", function () {
    this.removeAttribute("style");
});

menu.querySelectorAll(".dropdown > i").forEach((arrow) => {
    arrow.addEventListener("click", function () {
        this.closest(".dropdown").classList.toggle("active");
    });
});