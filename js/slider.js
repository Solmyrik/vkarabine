const cardsSlider1 = new Swiper('.cards__slider-1', {
  spaceBetween: 20,
  slidesPerView: 1,
  loop: true,
  speed: 800,
  autoplay: {
    delay: 2000, // Задержка в миллисекундах между переключениями
    disableOnInteraction: true, // Отключение автопрокрутки при взаимодействии пользователя с галереей
  },
  pagination: {
    el: '.swiper-pagination-1',
    clickable: true,
  },
});
const cardsSlider2 = new Swiper('.cards__slider-2', {
  spaceBetween: 20,
  slidesPerView: 1,
  loop: true,
  speed: 800,
  autoplay: {
    delay: 2000, // Задержка в миллисекундах между переключениями
    disableOnInteraction: true, // Отключение автопрокрутки при взаимодействии пользователя с галереей
  },
  pagination: {
    el: '.swiper-pagination-2',
    clickable: true,
  },
});
const cardsSlider3 = new Swiper('.cards__slider-3', {
  spaceBetween: 20,
  slidesPerView: 1,
  loop: true,
  speed: 800,
  autoplay: {
    delay: 2000, // Задержка в миллисекундах между переключениями
    disableOnInteraction: true, // Отключение автопрокрутки при взаимодействии пользователя с галереей
  },
  pagination: {
    el: '.swiper-pagination-3',
    clickable: true,
  },
});
