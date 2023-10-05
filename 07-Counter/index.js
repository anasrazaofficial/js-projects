let span = document.querySelector('span')
let number = 0

document.getElementById('increase').addEventListener('click', () => {
  number = Number(span.textContent)
  number += 1
  span.innerText = `${number}`
})

document.getElementById('decrease').addEventListener('click', () => {
  number = Number(span.textContent)
  number -= 1
  span.innerText = `${number}`
})
document.getElementById('reset').addEventListener('click', () => {
  number = Number(span.textContent)
  number = 0
  span.innerText = `${number}`
})