const subMenuItems = document.querySelectorAll(".sub-menu__item");

const subMenuObj = {
  1: {
    classImg: ".sub-menu-img-1",
    classText: ".sub-menu-text-1",
    src: "img/menu/1/1.webp",
    text: "Самая безопасная в мире автоматическая страховка для скалодрома",
  },
  2: {
    classImg: ".sub-menu-img-1",
    classText: ".sub-menu-text-1",
    src: "img/menu/1/2.webp",
    text: "Множество вариантов зацепов от 70₽ за шт",
  },
  3: {
    classImg: ".sub-menu-img-1",
    classText: ".sub-menu-text-1",
    src: "img/menu/1/3.webp",
    text: "Страховочные системы, каски, карабины и многое другое от ведущих производителей",
  },
  4: {
    classImg: ".sub-menu-img-1",
    classText: ".sub-menu-text-1",
    src: "img/menu/1/4.webp",
    text: "Получите выгодное предложение после нашей консультации",
  },
  21: {
    classImg: ".sub-menu-img-2",
    classText: ".sub-menu-text-2",
    src: "img/menu/2/1.png",
    text: "Универсальное устройство для торможения на зиплайне",
  },
  22: {
    classImg: ".sub-menu-img-2",
    classText: ".sub-menu-text-2",
    src: "img/menu/2/2.png",
    text: "Легкий и ударопрочный ролик для зиплайна",
  },
  23: {
    classImg: ".sub-menu-img-2",
    classText: ".sub-menu-text-2",
    src: "img/menu/2/3.png",
    text: "Первичный и резервный тормоз для зиплайнов разных скоростей",
  },
  24: {
    classImg: ".sub-menu-img-2",
    classText: ".sub-menu-text-2",
    src: "img/menu/2/4.png",
    text: "Страховочные системы, каски, ролики и многое другое от ведущих производителей",
  },
  25: {
    classImg: ".sub-menu-img-2",
    classText: ".sub-menu-text-2",
    src: "img/menu/2/5.png",
    text: "Получите выгодное предложение после нашей консультации",
  },
  31: {
    classImg: ".sub-menu-img-3",
    classText: ".sub-menu-text-3",
    src: "img/menu/3/1.webp",
    text: "Устройство имитирует свободное падение от 2 до 4 м длиной и обеспечивает плавное приземление",
  },
  32: {
    classImg: ".sub-menu-img-3",
    classText: ".sub-menu-text-3",
    src: "img/menu/3/2.webp",
    text: "Устройство имитирует свободное падение от 6 до 11 м длиной и обеспечивает плавное приземление",
  },
  33: {
    classImg: ".sub-menu-img-3",
    classText: ".sub-menu-text-3",
    src: "img/menu/3/3.webp",
    text: "Страховочные системы, каски, ролики и многое другое от ведущих производителей",
  },
  34: {
    classImg: ".sub-menu-img-3",
    classText: ".sub-menu-text-3",
    src: "img/menu/3/4.webp",
    text: "Получите выгодное предложение после нашей консультации",
  },
  41: {
    classImg: ".sub-menu-img-4",
    classText: ".sub-menu-text-4",
    src: "img/menu/4/1.png",
    text: "Альпинистское снаряжение для скалодромов, зиплайнов и веревочных парков от ведущих производителей",
  },
  42: {
    classImg: ".sub-menu-img-4",
    classText: ".sub-menu-text-4",
    src: "img/menu/4/2.png",
    text: "Средства индивидуальной защиты от падения с высоты для промышленных альпинистов от ведущих производителей",
  },
  43: {
    classImg: ".sub-menu-img-4",
    classText: ".sub-menu-text-4",
    src: "img/menu/4/3.png",
    text: "Устройство для подъема и спуска людей и грузов до 200 кг в промышленном альпинизме",
  },
};
if (subMenuItems) {
  subMenuItems.forEach((element) => {
    element.addEventListener("mouseenter", (e) => {
      const current = e.currentTarget;
      const index = current.dataset.obj1;
      const textBlock = document.querySelector(subMenuObj[index].classText);
      const imgBlock = document.querySelector(subMenuObj[index].classImg);
      textBlock.textContent = subMenuObj[index].text;
      imgBlock.src = subMenuObj[index].src;
    });
  });
}

const headerPhone = document.querySelector(".header__mob-phone");
const headerPhoneMenu = document.querySelector(".header-menu-mob");
if (headerPhone) {
  headerPhone.addEventListener("click", (e) => {
    headerPhoneMenu.classList.toggle("active");
  });
}

window.addEventListener("scroll", function () {
  const position = window.pageYOffset;

  const headerBody = document.querySelector(".body-header");
  const menuBody = document.querySelector(".mob-menu__body");

  if (position > 30) {
    headerBody.classList.add("scroll");
    menuBody.classList.add("scroll");
  } else {
    headerBody.classList.remove("scroll");
    menuBody.classList.remove("scroll");
  }
});

let header = document.querySelector(".body-header");
let toTop = document.querySelector(".to-top");

let lastPosition = window.pageYOffset;
let maxPosition = 0;

window.addEventListener("scroll", function () {
  let currentPosition = window.pageYOffset;

  if (currentPosition > 1500) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }

  if (currentPosition > 700 && currentPosition > lastPosition) {
    header.classList.add("hide");
  }
  if (maxPosition - currentPosition > 400) {
    header.classList.remove("hide");
    maxPosition = currentPosition;
  }

  lastPosition = currentPosition;
  maxPosition = Math.max(maxPosition, lastPosition);
});

toTop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

const iconMenu = document.querySelector(".header__burger");
const menuBody = document.querySelector(".mob-menu__body");
if (iconMenu) {
  iconMenu.addEventListener("click", function (e) {
    document.body.classList.toggle("_lock");
    iconMenu.classList.toggle("active");
    menuBody.classList.toggle("active");
  });
}

const faqItem = document.querySelectorAll(".accordion__item");
faqItem.forEach((e) => {
  e.addEventListener("click", feqHandler);
});
function feqHandler(e) {
  console.log(e);
  e.preventDefault();
  currentContent = e.currentTarget.nextElementSibling;
  e.currentTarget.classList.toggle("active");
  console.log(currentContent);
  if (e.currentTarget.classList.contains("active")) {
    currentContent.style.maxHeight = currentContent.scrollHeight + "px";
  } else {
    currentContent.style.maxHeight = 0;
  }
}
