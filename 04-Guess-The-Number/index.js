let lowOrhigh = document.getElementById('lowOrHi')
let inputFiled = document.getElementById('guessField')
let prevGuesses = document.getElementById('guesses')

let remGuesses = document.getElementById('remGuesses')
remGuesses.innerText = 10
let number = Math.ceil(Math.random() * 100)

let guesses = []
document.getElementById('form').addEventListener('submit', (e) => {
  e.preventDefault()
  debugger
  if (Number(remGuesses.innerText) === 0) {
    showMessage('You are out of tries', 'yellow', 'Start over')
  } else {
    if (inputFiled.value > 100 || inputFiled.value <= 0 || inputFiled.value.trim() === '') {
      showMessage('Please enter a valid number', 'yellow')
    } else {
      if (Number(inputFiled.value) === number) {
        showMessage('You guessed the right number', 'lime', 'Play again')
      } else {
        guesses.push(Number(inputFiled.value))
        remGuesses.innerText--
        showMessage('Wrong!', 'red')
        prevGuesses.innerText = `${guesses}`
        inputFiled.value = ''
      }
    }
  }
})

function showMessage(message, color, btnMessage) {
  if (btnMessage) {
    lowOrhigh.innerHTML = `<h4 style="color:${color};">${message}</h4><button onclick="startOver()">${btnMessage}</button>`
  } else {
    lowOrhigh.innerHTML = `<h4 style="color:${color};">${message}</h4>`
  }
}

function startOver() {
  remGuesses.innerText = 10
  lowOrhigh.innerHTML = ''
  inputFiled.value = ''
  prevGuesses.innerText = ''
}