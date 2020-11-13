(function scroll(){
  const header = document.querySelector('.section-header')
  const navLinks = document.querySelectorAll('a[href*="#"]')
  
  // slow scroll to id
  navLinks.forEach(navLink => {
    navLink.addEventListener('click', (e) => {
      e.preventDefault()

      const blockId = navLink.getAttribute('href').substr(1)
      
      let scrollToLink = '';
      blockId === '' ? scrollToLink = "home" : scrollToLink = blockId

      const yOffSet = -header.offsetHeight 
      const element = document.querySelector(`#${scrollToLink}`)
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffSet

      window.scrollTo({
        top: y,
        behavior: 'smooth'
      })
    })
  })

})()