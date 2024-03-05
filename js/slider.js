const cardsSlider1Container = document.querySelector(".cards__slider-1");
if (cardsSlider1Container) {
  const cardsSlider1 = new Swiper(".cards__slider-1", {
    spaceBetween: 20,
    slidesPerView: 1,
    loop: true,
    speed: 800,
    autoplay: {
      delay: 2000, // Задержка в миллисекундах между переключениями
      disableOnInteraction: true, // Отключение автопрокрутки при взаимодействии пользователя с галереей
    },
    pagination: {
      el: ".swiper-pagination-1",
      clickable: true,
    },
  });
}

const cardsSlider2 = new Swiper(".cards__slider-2", {
  spaceBetween: 20,
  slidesPerView: 1,
  loop: true,
  speed: 800,
  autoplay: {
    delay: 2000, // Задержка в миллисекундах между переключениями
    disableOnInteraction: true, // Отключение автопрокрутки при взаимодействии пользователя с галереей
  },
  pagination: {
    el: ".swiper-pagination-2",
    clickable: true,
  },
});
const cardsSlider3 = new Swiper(".cards__slider-3", {
  spaceBetween: 20,
  slidesPerView: 1,
  loop: true,
  speed: 800,
  autoplay: {
    delay: 2000, // Задержка в миллисекундах между переключениями
    disableOnInteraction: true, // Отключение автопрокрутки при взаимодействии пользователя с галереей
  },
  pagination: {
    el: ".swiper-pagination-3",
    clickable: true,
  },
});
const cardsSliderBottom1 = new Swiper(".cards__bottom-1", {
  slidesPerView: 5,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination-bottom-1",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1.5,
      spaceBetween: 15,
    },
    768: {
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
const cardsSliderBottom2 = new Swiper(".cards__bottom-2", {
  slidesPerView: 5,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination-bottom-2",
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
