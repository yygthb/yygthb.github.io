const body = document.querySelector("body");
const wrapper = document.querySelector(".wrapper");
const lockPadding = document.querySelectorAll(".lock-padding");

const modal = document.querySelector(".modal");
const modalContent = document.querySelector(".modal_content");
const buttonModalOpen = document.querySelectorAll(".modal-open");
const modalClose = document.querySelectorAll(".modal-close");
const buttonModalSend = document.querySelector(".modal_button-send");
const header = document.querySelector(".header");

const timeout = 800;

// hide modal until document load
window.addEventListener("load", function () {
  document.querySelector(".modal").classList.remove("hidden");
});

// get scrollBar width
var scrollDiv = document.createElement("div");
scrollDiv.className = "scrollbar-measure";
document.body.appendChild(scrollDiv);
var lockPaddingValue = scrollDiv.offsetWidth - scrollDiv.clientWidth + "px";
document.body.removeChild(scrollDiv);

// header height and background-color
(function () {
  window.onscroll = () => {
    if (window.pageYOffset > 50) {
      header.classList.add("header_active");
    }
    if (window.pageYOffset === 0) {
      header.classList.remove("header_active");
    }
  };
})();

// modal
const bodyLock = () => {
  lockPadding.forEach((item) => (item.style.paddingRight = lockPaddingValue));
  body.classList.add("lock");
  wrapper.style.marginRight = lockPaddingValue;
  modal.style.paddingRight = lockPaddingValue;
};
const closeModalHandler = () => {
  modal.classList.remove("open");
  if (modal) {
    modal.classList.remove("open");
  }
  setTimeout(() => {
    lockPadding.forEach((item) => (item.style.paddingRight = 0));
    body.classList.remove("lock");
    wrapper.style.marginRight = 0;
  }, timeout);
};
const escListener = (e) => {
  if (e.key === "Escape") {
    closeModalHandler();
  }
};
buttonModalOpen.forEach((item) => {
  item.onclick = () => {
    bodyLock();
    modal.classList.add("open");
    document.addEventListener("keydown", escListener);
  };
});
modalClose.forEach((item) => {
  item.onclick = () => closeModalHandler();
});
modalContent.onclick = (e) => {
  e.stopImmediatePropagation();
};

// modal form
const buttonSubmit = document.querySelector(".modal_button_submit");
buttonSubmit.onclick = (e) => {
  e.preventDefault();
};

// nav burger
const burger = document.querySelector(".nav_burger");
const navMenu = document.querySelector(".nav_menu");
const headerWrapper = document.querySelector(".header_wrapper");
if (burger) {
  burger.onclick = (e) => {
    burger.classList.toggle("active");
    navMenu.classList.toggle("active");
    headerWrapper.classList.toggle("active");
    lockPadding.forEach((item) => (item.style.paddingRight = 0));
    body.classList.toggle("lock");
  };
}
navMenu.onclick = (e) => {
  e.stopImmediatePropagation();
  burger.classList.remove("active");
  navMenu.classList.remove("active");
  headerWrapper.classList.remove("active");
  setTimeout(() => {
    lockPadding.forEach((item) => (item.style.paddingRight = 0));
    body.classList.remove("lock");
    wrapper.style.marginRight = 0;
  }, 400);
};

// intro swiper
const swiperIntro = new Swiper(".swiper_intro", {
  centeredSlides: true,
  slidesPerView: "auto",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 5000,
    stopOnLastSlide: false,
    disableOnInteraction: false,
  },
  speed: 2000,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
});

// projects swiper
const swiperProjects = new Swiper(".swiper_projects", {
  navigation: {
    nextEl: ".slider_button_next",
    prevEl: ".slider_button_prev",
  },
  allowTouchMove: false,
  watchOverflow: true,
  speed: 1000,
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 2,
      allowTouchMove: true,
    },
    850: {
      slidesPerView: 2,
      spaceBetween: 15,
      allowTouchMove: true,
    },
    1100: {
      slidesPerView: 3,
      spaceBetween: 15,
      allowTouchMove: false,
    },
    1500: {
      slidesPerView: 4,
      spaceBetween: 20,
      allowTouchMove: false,
    },
  },
});

// email-form
const buttonEmail = document.querySelector(".form_button_email");
buttonEmail.onclick = (e) => e.preventDefault();
