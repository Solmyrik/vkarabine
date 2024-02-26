const mySwiper = new Swiper('.carusel-intro__block', {
  spaceBetween: 20,
  slidesPerView: 4,
  loop: true,
  autoplay: {
    delay: 100, // Задержка в миллисекундах между переключениями
    disableOnInteraction: true, // Отключение автопрокрутки при взаимодействии пользователя с галереей
  },
  on: {
    mouseenter: function () {
      mySwiper.autoplay.stop();
    },
    mouseleave: function () {
      mySwiper.autoplay.start();
    },
  },
  speed: 800,
});
const caruselIntro = document.querySelector('.carusel-intro__block');

caruselIntro.addEventListener('mouseenter', function () {
  mySwiper.autoplay.stop();
});

caruselIntro.addEventListener('mouseleave', function () {
  mySwiper.autoplay.start();
});
