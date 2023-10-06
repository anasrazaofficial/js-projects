let num1 = document.getElementById('num1')
let num2 = document.getElementById('num2')
let num = document.getElementById('num')

num1.addEventListener('keypress', () => {
  num.value = ''
})
num2.addEventListener('keypress', () => {
  num.value = ''
})

document.getElementById('sum').addEventListener('click', () => {
  let values = convert(num1.value, num2.value)
  let sum = values[0] + values[1]
  num.value = sum
  removeValues(num1, num2)
})

document.getElementById('sub').addEventListener('click', () => {
  let values = convert(num1.value, num2.value)
  let sub = values[0] - values[1]
  num.value = sub
  removeValues(num1, num2)
})

document.getElementById('mul').addEventListener('click', () => {
  let values = convert(num1.value, num2.value)
  let sub = values[0] * values[1]
  num.value = sub
  removeValues(num1, num2)
})

document.getElementById('div').addEventListener('click', () => {
  let values = convert(num1.value, num2.value)
  let sub = values[0] / values[1]
  num.value = sub
  removeValues(num1, num2)
})

document.getElementById('clear').addEventListener('click', () => {
  removeValues(num1, num2)
  num.value = ''
})

function convert(num1, num2) {
  let arr = []
  arr.push(parseInt(num1))
  arr.push(parseInt(num2))
  return arr
}
function removeValues(num1, num2) {
  num1.value = ''
  num2.value = ''
}