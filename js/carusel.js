const mySwiper = new Swiper('.carusel-intro__block', {
  spaceBetween: 20,
  slidesPerView: 4,
  direction: 'horizontal',
  loop: true,
  breakpoints: {
    320: {
      slidesPerView: 1.2,
    },
    500: {
      slidesPerView: 2.2,
    },
    993: {
      slidesPerView: 3.1,
    },
    1361: {
      slidesPerView: 4,
    },
  },
  autoplay: {
    delay: 2000, // задержка между сменой слайдов
    disableOnInteraction: false, // не останавливать автопрокрутку при взаимодействии пользователя
  },
  //   on: {
  //     mouseenter: function () {
  //       mySwiper.autoplay.stop();
  //     },
  //     mouseleave: function () {
  //       mySwiper.autoplay.start();
  //     },
  //   },
  speed: 800,
});
const caruselIntro = document.querySelector('.carusel-intro__block');

caruselIntro.addEventListener('mouseenter', function () {
  mySwiper.autoplay.stop();
});

caruselIntro.addEventListener('mouseleave', function () {
  mySwiper.autoplay.start();
});
