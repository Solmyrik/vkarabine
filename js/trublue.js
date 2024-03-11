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

const cardsSliderBottom3Container = document.querySelector(".cards__bottom-3");
if (cardsSliderBottom3Container) {
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
}

const hooksSliderbottomContainer1 = document.querySelector(".hooks-slider-bottom-1");
if (hooksSliderbottomContainer1) {
  const hooksSliderbottom1 = new Swiper(".hooks-slider-bottom-1", {
    slidesPerView: 5,
    spaceBetween: 20,
    slidesPerGroup: 5,
    pagination: {
      el: ".swiper-pagination-hooks-1",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1.5,
        slidesPerGroup: 1,
        spaceBetween: 15,
      },
      500: {
        slidesPerView: 2.9,
        slidesPerGroup: 3,
      },
      993: {
        slidesPerView: 4,
        slidesPerGroup: 4,
      },
      1361: {
        slidesPerView: 5,
        slidesPerGroup: 5,
      },
    },
  });
}
const hooksSliderbottomContainer2 = document.querySelector(".hooks-slider-bottom-2");
if (hooksSliderbottomContainer2) {
  const hooksSliderbottom2 = new Swiper(".hooks-slider-bottom-2", {
    slidesPerView: 5,
    spaceBetween: 20,
    slidesPerGroup: 5,
    pagination: {
      el: ".swiper-pagination-hooks-2",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1.5,
        slidesPerGroup: 1,
        spaceBetween: 15,
      },
      500: {
        slidesPerView: 2.9,
        slidesPerGroup: 3,
      },
      993: {
        slidesPerView: 4,
        slidesPerGroup: 4,
      },
      1361: {
        slidesPerView: 5,
        slidesPerGroup: 5,
      },
    },
  });
}
const hooksSliderbottomContainer3 = document.querySelector(".hooks-slider-bottom-3");
if (hooksSliderbottomContainer3) {
  const hooksSliderbottom3 = new Swiper(".hooks-slider-bottom-3", {
    slidesPerView: 5,
    spaceBetween: 20,
    slidesPerGroup: 5,
    pagination: {
      el: ".swiper-pagination-hooks-3",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1.5,
        slidesPerGroup: 1,
        spaceBetween: 15,
      },
      500: {
        slidesPerView: 2.9,
        slidesPerGroup: 1,
      },
      993: {
        slidesPerView: 4,
        slidesPerGroup: 1,
      },
      1361: {
        slidesPerView: 5,
        slidesPerGroup: 1,
      },
    },
  });
}
const hooksSliderbottomContainer4 = document.querySelector(".hooks-slider-bottom-4");
if (hooksSliderbottomContainer4) {
  const hooksSliderbottom4 = new Swiper(".hooks-slider-bottom-4", {
    slidesPerView: 5,
    spaceBetween: 20,
    slidesPerGroup: 5,
    pagination: {
      el: ".swiper-pagination-hooks-4",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1.5,
        slidesPerGroup: 1,
        spaceBetween: 15,
      },
      500: {
        slidesPerView: 2.9,
        slidesPerGroup: 3,
      },
      993: {
        slidesPerView: 4,
        slidesPerGroup: 4,
      },
      1361: {
        slidesPerView: 5,
        slidesPerGroup: 5,
      },
    },
  });
}
