const dares = [
  "Sing a song in a public place.",
  "Dance like nobody's watching for 1 minute.",
  "Do your best impression of a celebrity.",
  "Speak in an accent for the next 5 minutes.",
  "Wear a silly hat for the rest of the game.",
  "Make up a short rap about the person to your right.",
  "Recite the alphabet backward.",
  "Do a handstand or attempt one for 10 seconds.",
  "Call a random contact from your phone and sing 'Happy Birthday' to them.",
  "Wear socks on your hands for the next two rounds.",
  "Tell a joke or funny story.",
  "Trade an item of clothing with the person on your left.",
  "Eat a spoonful of a condiment (e.g., ketchup, mustard, mayonnaise).",
  "Do 10 push-ups or as many as you can.",
  "Speak only in rhymes for the next three turns.",
  "Walk backward for the next minute.",
  "Act out a scene from your favorite movie.",
  "Go outside and shout 'I love [insert a random object]' three times.",
  "Wear a sign that says 'Hug Me' for the next 5 minutes.",
  "Make a funny face and take a picture.",
  "Put an ice cube down your shirt and leave it there until it melts.",
  "Speak like a robot for 2 minutes.",
  "Tell a secret you've never shared before.",
  "Do your best impression of a cartoon character.",
  "Create a short, funny commercial for a random product.",
  "Balance a spoon on your nose for 1 minute.",
  "Call a pizza place and order a 'unicorn pizza' with the craziest toppings you can think of.",
  "Draw a mustache on your face with a marker.",
  "Sing the 'ABCs' backward.",
  "Recite a tongue twister without making any mistakes.",
  "Speak with a high-pitched voice for the next 3 minutes.",
  "Play a song on an instrument (if available).",
  "Pretend you're a news reporter and report on an imaginary breaking news story.",
  "Put on a blindfold and identify three objects by touch alone.",
  "Speak gibberish for 2 minutes and try to make everyone laugh.",
  "Create a short, funny skit with another player.",
  "Walk around with a fake tail (use a scarf or cloth) for 5 minutes.",
  "Act out a scene from your favorite TV show.",
  "Pretend you're a tour guide and give a tour of your living room.",
  "Call a friend or family member and sing 'I Will Always Love You' by Whitney Houston to them.",
  "Make up a 30-second jingle for a fake product.",
  "Do your best impression of a famous politician.",
  "Speak only in questions for the next 3 minutes.",
  "Put on sunglasses and act like a secret agent for 5 minutes.",
  "Wear a 'kick me' sign for the next 5 minutes.",
  "Recite a famous speech (e.g., 'I Have a Dream' by Martin Luther King Jr.).",
  "Attempt to juggle three random objects.",
  "Speak in slow motion for 2 minutes.",
  "Recreate a famous movie scene with a random object as a prop.",
  "Call a local business and ask for a reservation for 10 imaginary people with ridiculous names."
];
const truths = [
  "Have you ever skipped school or work without a legitimate reason?",
  "Have you ever lied about your age?",
  "Have you ever eaten food that you found on the floor?",
  "Have you ever pretended to know something you didn't?",
  "Have you ever cheated on a test or exam?",
  "Have you ever told someone you love them when you didn't mean it?",
  "Have you ever snooped through someone else's phone or computer?",
  "Have you ever pretended to be sick to get out of something?",
  "Have you ever stolen something, even if it was small?",
  "Have you ever had a crush on a teacher or boss?",
  "Have you ever had a one-night stand?",
  "Have you ever been in love with someone who didn't love you back?",
  "Have you ever had a secret crush on a friend?",
  "Have you ever broken something and not told anyone?",
  "Have you ever lied to your parents about your whereabouts?",
  "Have you ever had a crush on someone in this room?",
  "Have you ever kept a diary or journal?",
  "Have you ever cried during a movie?",
  "Have you ever danced in front of a mirror when no one was around?",
  "Have you ever been on a blind date?",
  "Have you ever been in a physical fight?",
  "Have you ever kissed someone of the same gender?",
  "Have you ever gone skinny-dipping?",
  "Have you ever had a paranormal experience?",
  "Have you ever been caught telling a significant lie?",
  "Have you ever re-gifted something you received?",
  "Have you ever broken up with someone via text or email?",
  "Have you ever had a crush on a fictional character?",
  "Have you ever talked to yourself out loud in public?",
  "Have you ever shoplifted?",
  "Have you ever had a crush on a coworker?",
  "Have you ever lied on your resume or job application?",
  "Have you ever cheated in a board game?",
  "Have you ever pretended to be someone else online?",
  "Have you ever had a crush on someone significantly older or younger than you?",
  "Have you ever peed in a pool?",
  "Have you ever eavesdropped on a conversation you weren't supposed to hear?",
  "Have you ever gone out in public with mismatched socks?",
  "Have you ever used a fake ID?",
  "Have you ever had a romantic dream about someone in this room?",
  "Have you ever forgotten someone's name right after being introduced?",
  "Have you ever received a traffic ticket?",
  "Have you ever lied about being busy to avoid a social event?",
  "Have you ever pretended to be interested in a hobby or activity just to impress someone?",
  "Have you ever regretted breaking up with someone?",
  "Have you ever had a crush on a friend's sibling?",
  "Have you ever faked being sick to stay home from school or work?",
  "Have you ever sent a text message to the wrong person, and it was embarrassing?",
  "Have you ever forgotten your partner's birthday or anniversary and tried to cover it up?",
  "Have you ever pretended to like a gift you received but actually didn't?"
];
let max = 50
document.getElementById('dare').addEventListener('click', () => {
  let methodRunning = setInterval(() => {
    let index = Math.round(Math.random() * max)
    let dare = dares[index]
    document.querySelector('#task').innerHTML = `<h3>Your dare is:</h3>
                                                <span>${dare}</span>`
  }, 80)

  setTimeout(() => {
    clearInterval(methodRunning)
  }, 1600)
})

document.getElementById('truth').addEventListener('click', () => {
  let methodRunning = setInterval(() => {
    let index = Math.round(Math.random() * max)
    let truth = truths[index]
    document.querySelector('#task').innerHTML = `<h3>Your truth is:</h3>
                                                 <span>${truth}</span>`
  }, 80)

  setTimeout(() => {
    clearInterval(methodRunning)
  }, 1600)
})