(function() {
  const lang = navigator.language
  const date = new Date()

  const monthName = date.toLocaleString(lang,{month: 'long'})
  const day = date.getDate()
  const weekday = date.toLocaleString(lang,{weekday: 'long'})
  
  document.querySelector('.month').innerHTML = monthName
  document.querySelector('.day').innerHTML = day
  document.querySelector('.weekday').innerHTML = weekday

})()