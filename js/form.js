const formButton = document.querySelector(".popup__button-form");
const formBody1 = document.querySelector(".popup__body_one");
const formBody2 = document.querySelector(".popup__body_two");

formButton.addEventListener("click", (e) => {
  e.preventDefault();
  formBody1.classList.toggle("active");
  formBody2.classList.toggle("active");
});
