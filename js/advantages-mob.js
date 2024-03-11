const faqItem2 = document.querySelectorAll(".advantages-mob__plus");
if (faqItem2.length) {
  faqItem2.forEach((e) => {
    e.addEventListener("click", feqHandler);
  });
  function feqHandler(e) {
    const isActive = e.target.classList.contains("active");

    faqItem2.forEach((e) => {
      currentContent = e.parentNode.nextElementSibling;
      currentContent.classList.remove("active");
      currentContent.style.maxHeight = 0;
      e.classList.remove("active");
    });

    e.preventDefault();
    currentContent = e.currentTarget.parentNode.nextElementSibling;

    if (!isActive) {
      currentContent.style.maxHeight = currentContent.scrollHeight + "px";
      e.target.classList.add("active");
      currentContent.classList.add("active");
    } else {
      currentContent.style.maxHeight = 0;
      e.target.classList.remove("active");
      currentContent.classList.remove("active");
    }
  }
}
