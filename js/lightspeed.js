const mySwiper = new Swiper(".carusel-intro__block", {
  spaceBetween: 20,
  slidesPerView: 4,
  direction: "horizontal",
  loop: true,
  breakpoints: {
    320: {
      slidesPerView: 1.2,
    },
    500: {
      slidesPerView: 1.7,
    },
    993: {
      slidesPerView: 2.2,
    },
    1361: {
      slidesPerView: 3,
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
const caruselIntro = document.querySelector(".carusel-intro__block");

caruselIntro.addEventListener("mouseenter", function () {
  mySwiper.autoplay.stop();
});

caruselIntro.addEventListener("mouseleave", function () {
  mySwiper.autoplay.start();
});

const cardsSlider1 = new Swiper(".item-model__slider-1", {
  spaceBetween: 20,
  slidesPerView: 1,
  loop: true,
  fadeEffect: {
    crossFade: true,
  },
  mousewheel: false,
  speed: 800,
  autoplay: {
    delay: 6000, // Задержка в миллисекундах между переключениями
    disableOnInteraction: true, // Отключение автопрокрутки при взаимодействии пользователя с галереей
  },
  pagination: {
    el: ".swiper-pagination-bottom-1",
    clickable: true,
  },
});
const cardsSlider2 = new Swiper(".item-model__slider-2", {
  spaceBetween: 20,
  slidesPerView: 1,
  loop: true,
  fadeEffect: {
    crossFade: true,
  },
  mousewheel: false,
  speed: 800,
  autoplay: {
    delay: 6000, // Задержка в миллисекундах между переключениями
    disableOnInteraction: true, // Отключение автопрокрутки при взаимодействии пользователя с галереей
  },
  pagination: {
    el: ".swiper-pagination-bottom-2",
    clickable: true,
  },
});

const cardsSliderBottom3 = new Swiper(".cards__bottom-3", {
  slidesPerView: 5,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination-bottom-3",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1.5,
      spaceBetween: 15,
    },
    500: {
      slidesPerView: 2.9,
    },
    993: {
      slidesPerView: 3.9,
    },
    1361: {
      slidesPerView: 5,
    },
  },
});

const partnerSlider = new Swiper(".partners__slider", {
  slidesPerView: 4,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 4000, // Задержка в миллисекундах между переключениями
    disableOnInteraction: true, // Отключение автопрокрутки при взаимодействии пользователя с галереей
  },
  breakpoints: {
    320: {
      slidesPerView: 1.7,
      spaceBetween: 15,
    },
    500: {
      slidesPerView: 2.2,
    },
    993: {
      slidesPerView: 3,
    },
    1361: {
      slidesPerView: 4,
    },
  },
});
