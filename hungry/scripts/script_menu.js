(function header(){
  const menuHeaderItems = document.querySelectorAll('.section-menu-header-item')
  const dishes = document.querySelectorAll('.menu-content-wrap')

  function dishesHide() {
    dishes.forEach(dish => {
      dish.style.display = 'none'
    })
  }

  function removeUnderline() {
    menuHeaderItems.forEach(item => {
      item.classList.remove('active')
    })
  }

  menuHeaderItems.forEach(section => {
    section.addEventListener('click', (e) => {
      e.preventDefault()
      const menuWrap = document.querySelector(`.${section.id}`)

      removeUnderline()
      dishesHide()
      section.classList.add('active')
      menuWrap.style.display = 'flex'
    })
  })

})()