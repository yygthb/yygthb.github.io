(function() {
  const header = document.querySelector('.section-header')

  // color header background
  window.addEventListener('scroll', (e) => {
    if (pageYOffset > 0) {
      header.classList.add('scroll')
    }
    if (pageYOffset === 0) {
      header.classList.remove('scroll')
    }
  })

  // slow scroll to id
  const navLinks = document.querySelectorAll('a[href*="#"]')
  navLinks.forEach(navLink => {
    navLink.addEventListener('click', (e) => {
      e.preventDefault()

      const blockId = navLink.getAttribute('href').substr(1)
      
      let scrollToLink = '';
      blockId === '' ? scrollToLink = "id-intro" : scrollToLink = blockId

      // const yOffSet = -6071
      const yOffSet = -header.offsetHeight -20
      const element = document.querySelector(`#${scrollToLink}`)
      console.log('element: ', element)
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffSet

      window.scrollTo({
        top: y,
        behavior: 'smooth'
      })
    })
  })

  // burger
  const burger = document.querySelector('.section-header-burger')
  const modal = document.querySelector('.section-modal')
  const close = document.querySelector('.modal-header-close')

  burger.addEventListener('click', e => {
    e.preventDefault()
    header.style.visibility="hidden"
    modal.classList.add('open')
  })

  close.addEventListener('click', e => {
    e.preventDefault()
    modal.classList.remove('open')
    header.style.visibility="visible"
  })

  modal.addEventListener('click', e => {
    e.preventDefault() 
    if (e.target.getAttribute('data-close') === "true") {
      modal.classList.remove('open')
      header.style.visibility="visible"
    }
  })

})()