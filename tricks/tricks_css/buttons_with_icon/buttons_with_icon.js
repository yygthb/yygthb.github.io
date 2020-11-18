(function() {
  const icons = document.querySelectorAll('.button-icon')

  icons.forEach(icon => {
    icon.addEventListener('click', (e) => {
      e.preventDefault()
    })
  })
})()