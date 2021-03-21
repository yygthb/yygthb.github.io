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
const lockPaddingValue = window.innerWidth - wrapper.offsetWidth + "px";

// hide modal until document load
window.addEventListener("load", function () {
  document.querySelector(".modal").classList.remove("hidden");
});

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
buttonModalOpen.forEach((item) => {
  item.onclick = () => {
    bodyLock();
    modal.classList.add("open");
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

  // centeredSlides: true,
  watchOverflow: true,
  slidesPerView: 4,
  spaceBetween: 20,
  speed: 1000,
});

// email-form
const buttonEmail = document.querySelector(".form_button_email");
buttonEmail.onclick = (e) => e.preventDefault();
