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
        delay: 2000,
        disabledonINteraction: false,
    },
    breakpoints: {
        398:{
            slidesPerView: 2,
        },
        450:{
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        900: {
            slidesPerView: 4,
        },
        1024: {
            slidesPerView: 5,
        },
    },
});