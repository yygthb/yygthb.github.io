(function() {
  const wrapper = document.querySelector('.wrapper');

  wrapper.addEventListener('mousemove', e => {
    let x = (e.screenX * -1/50)
    let y = (e.screenY * -1/50)
    
    wrapper.style.left = `${x}px`
    wrapper.style.top = `${y}px`
  })
})()