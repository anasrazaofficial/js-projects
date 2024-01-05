setInterval(() => {
  let date = new Date()
  document.getElementById('clock').innerHTML = date.toLocaleTimeString()
}, 1000)