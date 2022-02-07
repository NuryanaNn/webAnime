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

const swiper = new Swiper(".banneranime", {
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 2000,
        disabledonINteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        280:{
            slidesPerView: 1,
        },
        450:{
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 3,
        },
        900: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 5,
        },
    },
});