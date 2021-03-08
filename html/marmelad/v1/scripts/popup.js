const body = document.querySelector("body");
const wrapper = document.querySelector(".wrapper");
const buttonPopupOpen = document.querySelector(".popup_open");
const popupClose = document.querySelectorAll(".popup-close");
const buttonPopupSend = document.querySelector(".popup_button-send");
const popup = document.querySelector(".popup");
const popupContent = document.querySelector(".popup_content");
const lockPadding = document.querySelectorAll(".lock-padding");

const timeout = 800;
const lockPaddingValue = window.innerWidth - wrapper.offsetWidth + "px";

const bodyLock = () => {
    lockPadding.forEach((item) => (item.style.paddingRight = lockPaddingValue));
    body.classList.add("lock");
    wrapper.style.marginRight = lockPaddingValue;
};

const closePopupHandler = () => {
    popup.classList.remove("open");
    modal.classList.remove("open");
    setTimeout(() => {
        lockPadding.forEach((item) => (item.style.paddingRight = 0));
        body.classList.remove("lock");
        wrapper.style.marginRight = 0;
    }, timeout);
};

buttonPopupOpen.onclick = () => {
    bodyLock();
    popup.classList.add("open");
};

popupClose.forEach((item) => {
    item.onclick = () => closePopupHandler();
});

popupContent.onclick = (e) => {
    e.stopImmediatePropagation();
};

buttonPopupSend.onclick = (e) => {
    e.preventDefault();
};
