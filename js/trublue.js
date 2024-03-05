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
const cardsSlider3 = new Swiper(".item-model__slider-3", {
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
    el: ".swiper-pagination-bottom-23",
    clickable: true,
  },
});

const cardsSlider4Container = document.querySelector(".item-model__slider-4");

if (cardsSlider4Container) {
  const cardsSlider4 = new Swiper(".item-model__slider-4", {
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
      el: ".swiper-pagination-bottom-4",
      clickable: true,
    },
  });
}

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
