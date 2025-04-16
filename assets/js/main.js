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

/*=============== SEARCH ===============*/
const search = document.getElementById('search-button'),
    searchClose = document.getElementById('search-close'),
    searchContent = document.getElementById('search-content')

if (search) {
    search.addEventListener('click', () => {
        searchContent.classList.add('show-search')
    })
}

if (searchClose) {
    searchClose.addEventListener('click', () => {
        searchContent.classList.remove('show-search')
    })
}

/*=============== LOGIN ===============*/
const login = document.getElementById('login-button'),
    loginClose = document.getElementById('login-close'),
    loginContent = document.getElementById('login-content')

if (login) {
    login.addEventListener('click', () => {
        loginContent.classList.add('show-login')
    })
}

if (loginClose) {
    loginClose.addEventListener('click', () => {
        loginContent.classList.remove('show-login')
    })
}