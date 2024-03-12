const plays = document.querySelectorAll(".device__play");

plays.forEach((play) => {
  play.addEventListener("click", (e) => {
    const current = e.currentTarget;
    current.previousElementSibling.play();
    current.style.display = "none";
  });
});
