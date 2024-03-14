const plays = document.querySelectorAll(".device__play");
const videos = document.querySelectorAll(".device__vid");

plays.forEach((play) => {
  play.addEventListener("click", (e) => {
    const current = e.currentTarget;
    current.previousElementSibling.play();
    current.previousElementSibling.classList.add("active");
    current.style.display = "none";
  });
});

videos.forEach((video) => {
  video.addEventListener("click", (e) => {
    const current = e.currentTarget;
    if (current.classList.contains("active")) {
      current.pause();
      current.classList.remove("active");
      current.nextElementSibling.style.display = "flex";
    }
  });
});
