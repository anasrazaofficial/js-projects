let cards = document.querySelectorAll('.card')
let images = document.querySelectorAll('img')
let flipCount = 0
let cardArr = []
let time = document.querySelector('input')
let play = true
setInterval(() => {
  if (time.value == '60') {
    play = false
  } else {
    time.value++
    document.querySelector('span').innerText = `${time.value}`
  }
}, 1000)

cards.forEach((card, i) => {
  card.addEventListener('click', (event) => {
    if (play) {
      const el = event.target
      el.style.display = 'none'
      el.nextElementSibling.style.display = 'block'
      flipCount++
      cardArr.push(i)
      if (cardArr.length == 2) {
        if (cards[cardArr[0]].id == cards[cardArr[1]].id) {
          cards[cardArr[0]].id = 'done'
          cards[cardArr[1]].id = 'done'
          cards[cardArr[0]].nextElementSibling.id = 'done'
          cards[cardArr[1]].nextElementSibling.id = 'done'
        }
        cardArr.splice(0, cardArr.length)
      }
      if (flipCount > 1) {
        setTimeout(() => {
          hideEmojis()
        }, 200)
      }
    }else{
      alert("Time's up! Reload to play again")
    }
  })
})

images.forEach((image, i) => {
  image.addEventListener('click', (event) => {
    if (play) {
      const el = event.target
      if (el.id != 'done') {
        el.style.display = 'none'
        el.previousElementSibling.style.display = 'block'
        flipCount--
        cardArr.splice(i, 1)
      }
    }else{
      alert("Time's up! Reload to play again")
    }
  })
})



function hideEmojis() {
  cards.forEach(card => {
    if (card.id != 'done') {
      card.style.display = 'block'
    }
  })
  images.forEach(image => {
    if (image.id != 'done') {
      image.style.display = 'none'
    }
  })
  flipCount = 0
}