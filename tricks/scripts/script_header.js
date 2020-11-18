(function header(){
  const header = document.querySelector('.header')

  // color header onscroll down
  window.addEventListener('scroll', (e) => {
    if (pageYOffset > 0) {
      header.classList.add('background')
    }
    if (pageYOffset === 0) {
      header.classList.remove('background')
    }
  })

})()