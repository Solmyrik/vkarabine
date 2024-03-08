const faqItem1 = document.querySelectorAll(".faq__plus");
if (faqItem1.length) {
  faqItem1.forEach((e) => {
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

const modelHidden = document.querySelectorAll(".item-model-hidden");

if (modelHidden.length) {
  modelHidden.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.currentTarget.style.display = "none";
      e.currentTarget.nextElementSibling.classList.remove("none");
    });
  });
}
