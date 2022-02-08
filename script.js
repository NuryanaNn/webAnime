let burger = document.querySelector('.burger');
let bars1 = document.querySelector('.bars1');
let bars2 = document.querySelector('.bars2');
let bars3 = document.querySelector('.bars3');
let sidenav = document.querySelector('.sidenav');
let searchMobile = document.querySelector('.searchMobile');
let hiddenSearch = document.querySelector('.hiddenSearch');


burger.addEventListener('click', function(){
	bars1.classList.toggle('change')
	bars2.classList.toggle('change')
	bars3.classList.toggle('change')
})

burger.addEventListener('click', function(){
	sidenav.classList.toggle('active')
})

searchMobile.addEventListener('click', function(){
    hiddenSearch.classList.toggle('change')
})

const swiper = new Swiper(".bannerAnime", {
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 3500,
        disabledonINteraction: false,
    },
    breakpoints: {
        340:{
            slidesPerView: 2,
        },
        550:{
            slidesPerView: 3,
        },
        700:{
            slidesPerView: 4,
        },
        900: {
            slidesPerView: 5,
        },
    },
});

const secondSwiper = new Swiper(".box", {
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 3000,
        disabledonINteraction: false,
    },
    breakpoints: {
        700: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 2,
        },
    },
});