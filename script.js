let burger = document.querySelector('.burger');
let bars1 = document.querySelector('.bars1');
let bars2 = document.querySelector('.bars2');
let bars3 = document.querySelector('.bars3');
let sidenav = document.querySelector('.sidenav')


burger.addEventListener('click', function(){
	bars1.classList.toggle('change')
	bars2.classList.toggle('change')
	bars3.classList.toggle('change')
})

burger.addEventListener('click', function(){
	sidenav.classList.toggle('active')
})

const swiper = new Swiper(".bannerAnime", {
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 3500,
        disabledonINteraction: false,
    },
    breakpoints: {
        200:{
            slidesPerView: 1,
        },
        300:{
            slidesPerView: 1,
        },
        320:{
            slidesPerView: 1,
        },
        398:{
            slidesPerView: 2,
        },
        450:{
            slidesPerView: 2,
        },
        500:{
            slidesPerView: 2,
        },
        680:{
            slidesPerView: 3,
        },
        730: {
            slidesPerView: 4,
        },
        768: {
            slidesPerView: 4,
        },
        800: {
            slidesPerView: 4,
        },
        900: {
            slidesPerView: 4,
        },
        1024: {
            slidesPerView: 4,
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