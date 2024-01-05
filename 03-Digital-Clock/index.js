let clock = document.getElementById('clock')

function getDate() {
  let date = new Date()
  clock.innerHTML = date.toLocaleTimeString()
}

getDate()
setInterval(() => getDate(), 1000)