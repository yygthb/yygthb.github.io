(function book(){
  const buttonBooking = document.querySelector('.btn_booking')
  const buttonContact = document.querySelector('.btn_contact')

  buttonBooking.onclick = function(e) {
    e.preventDefault()
    
    const name = document.getElementById('booking_name')
    const email = document.getElementById('booking_email')
    const phone = document.getElementById('booking_phone')
    const people = document.getElementById('booking_people')
    const date = document.getElementById('booking_date')
    const time = document.getElementById('booking_time')
    const warning = document.querySelector('.booking-warning-message')

    function _warningOpen(element, text) {
      warning.style.display = 'flex'
      element.style.border = "1px solid red"
      warning.innerHTML = `для отправки формы заполните поле&nbsp;<span>${text}</span>`
    }
    function _warningClose() {
      warning.style.display = 'none'
      name.style.border = "0"
      phone.style.border = "0"
      warning.innerHTML = ''
    }

    if (name.value.trim() !== '' && phone.value.trim() !== '') {
      const bookingObj = {
        name: name.value,
        email: email.value,
        phone: phone.value,
        people: people.value,
        date: date.value,
        time: time.value
      }
      name.value = ''
      email.value = ''
      phone.value = ''
      people.value = ''
      date.value = ''
      time.value = ''
    } else 
    if (name.value.trim() === '') {
      _warningOpen(name, 'Name')
      setTimeout(_warningClose, 5000)
    } else 
    if (phone.value.trim() === '') {
      _warningOpen(phone, 'Phone')
      setTimeout(_warningClose, 5000)
    }
  }

  buttonContact.onclick = function(e) {
    e.preventDefault()

    const name = document.getElementById('contact_name')
    const email = document.getElementById('contact_email')
    const phone = document.getElementById('contact_phone')
    const message = document.getElementById('contact_message')

    if (name.value.trim() !== '' && email.value.trim() !== '') {
      const messageObj = {
        name: name.value,
        email: email.value,
        phone: phone.value,
        message: message.value,
      }

      name.value = ''
      email.value = ''
      phone.value = ''
      message.value = ''
    }
  }

})()