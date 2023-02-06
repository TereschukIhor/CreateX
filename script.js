let date = new Date('Jan 1 2023 00:00:00')

function counts() {
    let now = new Date();
    gap = date - now;

    let days = Math.floor(gap / 1000 / 60 / 60 / 24);
    let hours = Math.floor(gap / 1000 / 60 / 60) % 24;
    let minutes = Math.floor(gap / 1000 / 60) % 60;
    let seconds = Math.floor(gap / 1000) % 60;

    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;
}

counts()

setInterval(counts, 1000)

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    speed: 1000,

    autoplay: {
      delay: 5000,
    },

    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: 'true',
    },

    navigation: {
      nextEl: '.main-btn-next',
      prevEl: '.main-btn-prev',
    },
});

const swiper2 = new Swiper('.swiper2', {
    direction: 'horizontal',
    speed: 1000,
    slideToClickedSlide: false,

    breakpoints: {
        320: {
            slidesPerView: 1.15,
            spaceBetween: 10,
        },
        480: {
            slidesPerView: 1.5,
            spaceBetween: 10,
        },
        580: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        820: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
    navigation: {
      nextEl: '.sale-top__btn-right',
      prevEl: '.sale-top__btn-left',
    },
});

const menuBtn = document.querySelector('.menu__btn');
menuBtn.onclick = menuDrop;
function menuDrop() {
    document.querySelector('.header-menu').classList.add('active');
    document.querySelector('body').classList.add('lock');
    document.querySelector('.menu-ul').classList.add('scrollMenu');
}

const closeBtn = document.querySelector('.menu-li');
closeBtn.onclick = closeMenu;
function closeMenu() {
    document.querySelector('.header-menu').classList.remove('active');
    document.querySelector('body').classList.remove('lock');
    document.querySelector('.menu-ul').classList.remove('scrollMenu');
}

const menuLink = document.querySelectorAll('.menu-link');
for (let i = 0; i < menuLink.length; i++ ) {
    menuLink[i].onclick = closeMenuLink;
}
function closeMenuLink() {
    document.querySelector('.header-menu').classList.remove('active');
    document.querySelector('body').classList.remove('lock');
    document.querySelector('.menu-ul').classList.remove('scrollMenu');
}