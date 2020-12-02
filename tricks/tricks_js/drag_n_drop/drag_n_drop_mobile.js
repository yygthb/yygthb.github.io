(function() {
  const card = document.querySelector('.card')
  const cells = document.querySelectorAll('.cards__item')
  const cardsWrapper = document.querySelector('.cards')
  let previousCell = document.querySelector('.card__item_first')

  let candidateCell

  function touchMove(e) {
    e.preventDefault()

    const touch = e.targetTouches[0]
    // cards-wrapper top&left correction
    const cardsWrapperOffsetTop = cardsWrapper.offsetTop // 157
    const cardsWrapperOffsetLeft = cardsWrapper.offsetLeft // 100
    // card-item top&left correction
    const marginTop = previousCell.offsetTop
    const marginLeft = previousCell.offsetLeft
    // card height&width correction
    const cardOffsetHeight = card.offsetHeight / 2 // 110
    const cardOffsetWidth = card.offsetWidth / 2 // 75
    // correction top&left pix coordinates
    const correctionTop = touch.pageY - cardsWrapperOffsetTop - marginTop - cardOffsetHeight
    const correctionLeft = touch.pageX - cardsWrapperOffsetLeft - marginLeft - cardOffsetWidth
    // const correctionLeft = touch.pageX

    // card move top&left
    card.style.top = `${correctionTop}px`
    card.style.left = `${correctionLeft}px`

    cells.forEach(cell => {
      let cardRect = card.getBoundingClientRect()
      let cellRect = cell.getBoundingClientRect()
      if (
        cardRect.top + cardOffsetHeight < cellRect.bottom &&
        cardRect.right - cardOffsetWidth > cellRect.left &&
        cardRect.bottom - cardOffsetHeight > cellRect.top &&
        cardRect.left + cardOffsetWidth < cellRect.right
      ) {
        cell.classList.add('hover')
        candidateCell = cell
      } else {
        cell.classList.remove('hover')
      }
    })
  }

  function touchEnd(e) {
    e.preventDefault()

    if (candidateCell.classList.contains('hover')) {
      candidateCell.append(this)
      // to sent actual top&left position
      previousCell = candidateCell
      this.style.top = 0
      this.style.left = 0
    } else {
      this.style.top = 0
      this.style.left = 0
    }
  }

  card.addEventListener('touchmove', touchMove)
  card.addEventListener('touchend', touchEnd)

})()