let hexCode = '0123456789abcdef'
let arr = []
let givenCode;
let interval;

  document.getElementById('start').addEventListener('click', () => {
    interval = setInterval(() => {
      for (let i = 0; i < 6; i++) {
        let bit = Math.floor(Math.random() * 16)
        arr.push(hexCode[bit])
        givenCode = arr.join().replace(/,/g, '')
      }
      arr = []
      document.querySelector('body').style.backgroundColor = `#${givenCode}`
    }, 1000)
  })
document.getElementById('stop').addEventListener('click', () => {
  clearInterval(interval)
})