const faqItem2 = document.querySelectorAll(".advantages-mob__plus");
if (faqItem2.length) {
  faqItem2.forEach((e) => {
    e.addEventListener("click", feqHandler);
  });
  function feqHandler(e) {
    console.log(e.currentTarget);
    e.preventDefault();
    currentContent = e.currentTarget.parentNode.nextElementSibling;
    console.log(currentContent);
    e.target.classList.toggle("active");
    currentContent.classList.toggle("active");
    if (e.target.classList.contains("active")) {
      currentContent.style.maxHeight = currentContent.scrollHeight + "px";
    } else {
      currentContent.style.maxHeight = 0;
    }
  }
}
