(function header(){
  const header = document.querySelector('.section-header')
  const headerMobile = document.querySelector('.section-header-mobile')
  const lineIntro = document.querySelector('.line-intro')

  // color header onscroll down
  window.addEventListener('scroll', (e) => {
    if (pageYOffset > 0) {
      header.classList.add('scroll')
      headerMobile.classList.add('scroll')
      lineIntro.classList.add('scroll')
    }
    if (pageYOffset === 0) {
      header.classList.remove('scroll')
      headerMobile.classList.remove('scroll')
      lineIntro.classList.remove('scroll')
    }
  })

})()