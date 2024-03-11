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

const modelMap = {
  trublue1: `
  <p>Автоматическая страховка TRUBLUE использует запатентованный саморегулируемый магнитный механизм торможения без соприкасающихся деталей.</p>
  <p>Модель выпускалась с 2010 по 2021 годы, после чего ей на смену пришла рестайлинговая версия</p>`,
  trublue2: `
  <p>Модель нового поколения TRUBLUE iQ стала более износостойкой и выпускается в облегченном корпусе. Безопасность спуска обеспечивает запатентованный саморегулируемый магнитный механизм торможения без соприкасающихся деталей.</p>
  <p>Дополнительно TRUBLUE iQ можно модернизировать специальной кнопкой, которая позволяет улавливать пользователя в случае срыва, давая ему возможность восстановить силы перед тем, как продолжить маршрут.</p>`,
  trublue3: `
  <p>Автоматическая страховка TRUBLUE SPEED создана специально для соревнований в дисциплине «СКОРОСТЬ» на эталонных трассах. Ускоренная смотка позволяет втянуть 16 метров стропы в устройство <span>за 3,5 секунды.</span> Данная модель соответствует требованиям федерации IFSC и может быть использована во время международных и региональных соревнований.</p>
  <p>TRUBLUE SPEED выпускается в двух модификациях: с высотой монтажа до 12 и до 16 метров.</p>`,
  trublue4: `
  <p>Модификация TRUBLUE iQ XL выпускается с удлиненной стропой, что позволяет установить устройство на <span>высоту до 20 метров.</span> Безопасность спуска обеспечивает запатентованный саморегулируемый магнитный механизм торможения без соприкасающихся деталей.</p>
  <p>Дополнительно TRUBLUE iQ XL можно модернизировать специальной кнопкой, которая позволяет улавливать пользователя в случае срыва, давая ему возможность восстановить силы перед тем, как продолжить маршрут.</p>`,
};

const modelHidden = document.querySelectorAll(".item-model-hidden");

if (modelHidden.length) {
  modelHidden.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.currentTarget.style.display = "none";
      const index = e.currentTarget.dataset.model;
      const parrent = e.currentTarget.parentNode;
      parrent.innerHTML = modelMap[index];
    });
  });
}
