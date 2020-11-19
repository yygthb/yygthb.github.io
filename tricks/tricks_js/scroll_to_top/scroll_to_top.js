(function() {
  const minScroll = 50
  const scrollToTop = document.querySelector('.scroll-to-top')
  const scrollToTopSvgPath = document.querySelector('.scroll-to-top_svg-path')
  const pathLength = scrollToTopSvgPath.getTotalLength()

  scrollToTopSvgPath.style.strokeDasharray = `${pathLength} ${pathLength}`
  scrollToTopSvgPath.style.transition = "stroke-dashoffset 20ms"

  // scroll length
  const getScrollLength = () => window.pageYOffset || document.documentElement.scrollTop

  // update dash offset
  const updateDashOffset = () => {
    const height = document.documentElement.scrollHeight - window.innerHeight
    const dashOffset = pathLength - (getScrollLength() * pathLength / height )

    scrollToTopSvgPath.style.strokeDashoffset = dashOffset
  }

  // scroll
  window.addEventListener('scroll', (e) => {
    updateDashOffset()

    if (getScrollLength() > minScroll) {
      scrollToTop.classList.add('active')
    } else {
      scrollToTop.classList.remove('active')
    }
  })

  // click to top
  scrollToTop.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  })

})()