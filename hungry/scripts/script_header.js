(function header(){
  const header = document.querySelector('.section-header')
  const lineIntro = document.querySelector('.line-intro')

  // color header onscroll down
  window.addEventListener('scroll', (e) => {
    if (pageYOffset > 0) {
      header.classList.add('scroll')
      lineIntro.classList.add('scroll')
    }
    if (pageYOffset === 0) {
      header.classList.remove('scroll')
      lineIntro.classList.remove('scroll')
    }
  })

})()