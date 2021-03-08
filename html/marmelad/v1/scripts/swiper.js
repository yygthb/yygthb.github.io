const cardOne = document.querySelector(".card_one");
const cardTwo = document.querySelector(".card_two");
const portFolioCard = document.querySelectorAll(".portfolio_card");
const modal = document.querySelector(".modal");
const buttonModalClose = document.querySelector(".modal_button-close");
const sliderDescription = document.querySelector(".slider_description-content");

// const timeout = 800;
// const lockPaddingValue = window.innerWidth - wrapper.offsetWidth + "px";

const swiper = new Swiper(".swiper-container", {
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

    // navigation
    // hashNavigation: {
    //     watchState: true,
    // },

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

    effect: "fade",
    fadeEffect: {
        crossFade: true,
    },
});

const closeModalHandler = () => {
    popup.classList.remove("open");
    modal.classList.remove("open");
    swiper.slideTo(0);
    document.removeEventListener("keydown", escListener);
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

portFolioCard.forEach((item) => {
    item.onclick = (e) => {
        const sliderNum = e.target.getAttribute("data-slider");
        bodyLock();
        modal.classList.add("open");
        swiper.slideTo(sliderNum);
        swiper.update();
        document.addEventListener("keydown", escListener);
    };
});

buttonModalClose.onclick = () => {
    closeModalHandler();
};
