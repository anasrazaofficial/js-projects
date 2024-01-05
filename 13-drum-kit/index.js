let btns = document.querySelectorAll('button')

window.addEventListener('keyup', (e) => {
  let btnId = document.getElementById(e.key)
  if (btnId) {
    btnId.classList.add('btn')
    setTimeout(() => btnId.classList.remove('btn'), 100)
    let sound = document.getElementById(`${e.key}Sound`)
    sound.play()
  }
})