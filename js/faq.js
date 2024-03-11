const faqItem1 = document.querySelectorAll(".faq__plus");
if (faqItem1.length) {
  faqItem1.forEach((e) => {
    e.addEventListener("click", feqHandler);
  });

  function feqHandler(e) {
    const isActive = e.target.classList.contains("active");

    faqItem1.forEach((e) => {
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

const modelHidden = document.querySelectorAll(".item-model-hidden");

if (modelHidden.length) {
  modelHidden.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.currentTarget.style.display = "none";
      e.currentTarget.nextElementSibling.classList.remove("none");
    });
  });
}
