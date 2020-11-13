(function() {
  const navLinks = document.querySelectorAll('a[href*="#"]')

  navLinks.forEach(navLink => {
    navLink.addEventListener('click', (e) => {
      e.preventDefault()

      const blockId = navLink.getAttribute('href').substr(1)
      
      let scrollToLink = '';
      blockId === '' ? scrollToLink = "id-intro" : scrollToLink = blockId

      // document.getElementById(scrollToLink).scrollIntoView({
      //   behavior: 'smooth',
      //   block: 'start'
      // })

      const header = document.querySelector('.header')

      // const yOffSet = -71
      const yOffSet = -header.offsetHeight -5
      const element = document.querySelector(`#${scrollToLink}`)
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffSet

      window.scrollTo({
        top: y,
        behavior: 'smooth'
      })
    })
  })

})()