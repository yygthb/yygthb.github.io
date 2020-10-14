// changing header
(function () {
  const header = document.querySelector('.header')

  window.onscroll = () => {
    if (window.pageYOffset > 30) {
      header.classList.add('header__active')
    }
    if (window.pageYOffset === 0) {
      header.classList.remove('header__active')
    }
  }
}());


// burger menu
(function () {
  const burger = document.querySelector('.header__burger')
  const menu = document.querySelector('.header__tablet_menu')
  const menuClose = document.querySelector('.tablet__menu_close')
  const menuItem = document.querySelectorAll('.tablet__menu_item')

  burger.addEventListener('click', () => {
    menu.style.transform = "translateY(0)"
  })

  menuClose.addEventListener('click', () => {
    menu.style.transform = "translateY(-100%)"
  })

  menuItem.forEach(item => {
    item.addEventListener('click', () => {
      menu.style.transform = "translateY(-100%)"
    })})
}());