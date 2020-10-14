(function () {
  const header = document.querySelector('.header')
  const headerMenu = document.querySelector('.header__menu')

  window.onscroll = () => {
    if (window.pageYOffset > 30) {
      header.classList.add('header__active')
    }
    if (window.pageYOffset === 0) {
      header.classList.remove('header__active')
    }
  }
}())