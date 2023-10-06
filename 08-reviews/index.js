let users = [
  {
    name: 'Elizabeth',
    job: 'Architecture',
    review: 'I recently installed the Smart Home Thermostat in my house, and it has been a game-changer. The ease of controlling the temperature from my phone is fantastic. The energy-saving features have noticeably reduced my monthly bills. The only reason I am not giving it five stars is because the initial setup was a bit tricky.',
    imgSrc: 'http://127.0.0.1:5500/08-reviews/assets/user-1.jpg'
  },
  {
    name: 'Tony',
    job: 'Software Engineer',
    review: 'I had an incredible dining experience at The Gourmet Delight. The ambiance was charming, and the staff was attentive. The food was a culinary masterpiece; each dish was a burst of flavor. I highly recommend the chef is tasting menu if you want to indulge in a gastronomic journey.',
    imgSrc: 'http://127.0.0.1:5500/08-reviews/assets/user-2.jpg'
  },
  {
    name: 'Chris',
    job: 'Doctor',
    review: '"Infinite Adventure" had an interesting concept, but it fell short in execution. The visuals were stunning, and the action scenes were thrilling, but the plot lacked depth and left me with unanswered questions. It is an entertaining watch if you are into sci-fi, but do not expect a masterpiece.',
    imgSrc: 'http://127.0.0.1:5500/08-reviews/assets/user-3.jpg'
  },
  {
    name: 'Mike',
    job: 'Manager',
    review: '"The Enigmatic Echo" is a literary gem. The author is writing style is captivating, and the characters are so well-developed that I felt a deep connection with them. The plot had unexpected twists, keeping me hooked from start to finish. I could not put it down and highly recommend it to fellow bookworms.',
    imgSrc: 'http://127.0.0.1:5500/08-reviews/assets/user-4.jpg'
  },
  {
    name: 'Steve',
    job: 'Salesman',
    review: 'FitLife Pro is a comprehensive fitness app that has helped me stay on track with my health goals. The workout routines are diverse and customizable, and the nutrition tracking is a great bonus. The only drawback is the occasional glitch, but overall, it is a valuable tool for anyone looking to improve their fitness.',
    imgSrc: 'assets/user-5.jpg'
  },
]


let i = 0
let name = document.querySelector('h4')
let job = document.querySelector('#job')
let review = document.querySelector('#review')
let imgSrc = document.querySelector('img') 

assignValues()

document.getElementById('right').addEventListener('click', () => {
  users.length - 1 != i ? i++ : i = 0
  assignValues()
})

document.getElementById('left').addEventListener('click', () => {
  i == 0 ? i = users.length - 1 : i--
  assignValues()
})

function assignValues() {
  name.innerText = users[i].name
  job.innerText = users[i].job
  review.innerText = users[i].review
  imgSrc.src = users[i].imgSrc
}