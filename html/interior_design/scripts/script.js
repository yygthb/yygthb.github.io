const body = document.querySelector("body");
const wrapper = document.querySelector(".wrapper");
const lockPadding = document.querySelectorAll(".lock-padding");

const modal = document.querySelector(".modal");
const modalContent = document.querySelector(".modal");
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
(function () {
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
  buttonModalSend.onclick = (e) => {
    e.preventDefault();
  };
})();

// intro swiper

const swiper = new Swiper(".swiper-container", {
  centeredSlides: true,
  slidesPerView: "auto",

  // arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // navigation
  pagination: {
    el: ".swiper-pagination",
    clickable: true,

    // type: bullets
    // type: "bullets",
    // dynamicBullets: true,

    // type: fraction
    type: "fraction",
  },

  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },

  // cursor
  grabCursor: true,

  //
  // slideToClickedSlide: true,

  // keyboard
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },

  // // mouse wheel
  // mousewheel: {
  //     sensitivity: 1,
  // },

  // // infinity slider
  // loop: true,

  speed: 700,

  // effect: "fade",
  // fadeEffect: {
  //     crossFade: true,
  // },
});
