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
const headerNav = document.querySelector(".header_nav");
if (burger) {
  burger.onclick = (e) => {
    burger.classList.toggle("active");
    navMenu.classList.toggle("active");
    headerWrapper.classList.toggle("active");
    lockPadding.forEach((item) => (item.style.paddingRight = 0));
    body.classList.toggle("lock");
    if (body.classList.contains("lock")) {
      wrapper.style.marginRight = lockPaddingValue;
      headerNav.style.marginRight = lockPaddingValue;
    } else {
      wrapper.style.marginRight = 0;
      headerNav.style.marginRight = 0;
    }
  };
}
navMenu.onclick = (e) => {
  e.stopImmediatePropagation();
  burger.classList.remove("active");
  navMenu.classList.remove("active");
  headerWrapper.classList.remove("active");
  wrapper.style.marginRight = 0;
  setTimeout(() => {
    lockPadding.forEach((item) => (item.style.paddingRight = 0));
    body.classList.remove("lock");
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

// scroll-to-top
const minScroll = 50;
const scrollToTop = document.querySelector(".scroll-to-top");
const scrollToTopSvgPath = document.querySelector(".scroll-to-top_svg-path");
const pathLength = scrollToTopSvgPath.getTotalLength();

scrollToTopSvgPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
scrollToTopSvgPath.style.transition = "stroke-dashoffset 20ms";

const getScrollLength = () =>
  window.pageYOffset || document.documentElement.scrollTop;

const updateDashOffset = () => {
  const height = document.documentElement.scrollHeight - window.innerHeight;
  const dashOffset = pathLength - (getScrollLength() * pathLength) / height;

  scrollToTopSvgPath.style.strokeDashoffset = dashOffset;
};

window.addEventListener("scroll", (e) => {
  updateDashOffset();

  if (getScrollLength() > minScroll) {
    scrollToTop.classList.add("active");
  } else {
    scrollToTop.classList.remove("active");
  }
});

// slow scroll
const navLinks = document.querySelectorAll('a[href*="#"]');
navLinks.forEach((navLink) => {
  navLink.addEventListener("click", (e) => {
    e.preventDefault();

    const blockId = navLink.getAttribute("href").substr(1);

    let scrollToLink = "";
    blockId === "" ? (scrollToLink = "home") : (scrollToLink = blockId);

    const header = document.querySelector(".header");

    // const yOffSet = -71
    const yOffSet = -header.offsetHeight - 5;
    const element = document.querySelector(`#${scrollToLink}`);
    const y =
      element.getBoundingClientRect().top + window.pageYOffset + yOffSet;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  });
});
