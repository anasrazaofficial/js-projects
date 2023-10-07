let turn = true
let winLine = document.getElementById('winLine')
let gameOver = true
let tds = document.querySelectorAll('td');
let restart = document.querySelector('#restart')
let win = document.querySelector('#win')
let playAgain = document.querySelector('#playAgain')
let count = 0

tds.forEach((td) => {
  td.addEventListener('click', () => {
    if (gameOver) {
      if (td.innerHTML == '') {
        if (turn) {
          td.innerHTML = ` <div class="circle"></div>`
          td.id = 'circle'
          turn = false
          count++
        } else {
          td.innerHTML = `<div style="width: 30px;">
                        <div class="line-1"></div>
                        <div class="line-2"></div>
                      </div>`
          turn = true
          count++
          td.id = 'cross'
        }
        check()
      }
    } else {
      alert('Please restart the game!')
    }
    if (count === 9 && gameOver) {
      win.innerHTML = `Tied!`
      playAgain.className = 'd-block'
    }
  })
})

restart.addEventListener('click', () => {
  empty()
})

playAgain.addEventListener('click', () => {
  empty()
})



function check() {
  if ((tds[0].id == 'circle' && tds[1].id == 'circle' && tds[2].id == 'circle')
    || (tds[3].id == 'circle' && tds[4].id == 'circle' && tds[5].id == 'circle')
    || (tds[6].id == 'circle' && tds[7].id == 'circle' && tds[8].id == 'circle')
    || (tds[0].id == 'circle' && tds[3].id == 'circle' && tds[6].id == 'circle')
    || (tds[1].id == 'circle' && tds[4].id == 'circle' && tds[7].id == 'circle')
    || (tds[2].id == 'circle' && tds[5].id == 'circle' && tds[8].id == 'circle')
    || (tds[0].id == 'circle' && tds[4].id == 'circle' && tds[8].id == 'circle')
    || (tds[2].id == 'circle' && tds[4].id == 'circle' && tds[6].id == 'circle')) {
    win.innerHTML = `Player 1 wins`
    restart.className = 'd-inline'
    gameOver = false
  }
  else if ((tds[0].id == 'cross' && tds[1].id == 'cross' && tds[2].id == 'cross')
    || (tds[3].id == 'cross' && tds[4].id == 'cross' && tds[5].id == 'cross')
    || (tds[6].id == 'cross' && tds[7].id == 'cross' && tds[8].id == 'cross')
    || (tds[0].id == 'cross' && tds[3].id == 'cross' && tds[6].id == 'cross')
    || (tds[1].id == 'cross' && tds[4].id == 'cross' && tds[7].id == 'cross')
    || (tds[2].id == 'cross' && tds[5].id == 'cross' && tds[8].id == 'cross')
    || (tds[0].id == 'cross' && tds[4].id == 'cross' && tds[8].id == 'cross')
    || (tds[2].id == 'cross' && tds[4].id == 'cross' && tds[6].id == 'cross')) {
    win.innerHTML = `Player 2 wins`
    restart.className = 'd-inline'
    gameOver = false
  }
}

function empty() {
  tds.forEach((td) => {
    td.innerHTML = ''
    td.id = ''
  })
  gameOver = true
  win.innerHTML = ''
  restart.className = 'd-none'
  playAgain.className = 'd-none'
  count = 0
  turn = true
}