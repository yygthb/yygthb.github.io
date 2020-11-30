(function() {
  const card = document.querySelector('.card')
  const cells = document.querySelectorAll('.cards__item')

  const dragStart = function() {
    setTimeout(() => {
      this.classList.add('hide')
    }, 0)
  }

  const dragEnd = function() {
    this.classList.remove('hide')
  }

  const dragOver = function(e) {
    e.preventDefault()
  }

  const dragEnter = function() {
    this.classList.add('hover')
  }

  const dragLeave = function() {
    this.classList.remove('hover')
  }

  const dragDrop = function() {
    this.append(card)
    this.classList.remove('hover')
  }

  card.addEventListener('dragstart', dragStart)
  card.addEventListener('dragend', dragEnd)

  cells.forEach(cell => {
    cell.addEventListener('dragover', dragOver)
    cell.addEventListener('dragenter', dragEnter)
    cell.addEventListener('dragleave', dragLeave)
    cell.addEventListener('drop', dragDrop)
  })

})()