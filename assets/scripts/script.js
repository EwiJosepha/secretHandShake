const submit = document.getElementById('submit')
const displayer = document.getElementById('showme')

let ans = ''
let rem

const messagesToDisplay = [
  { message: 'Wink', number: 1 },

  { message: 'Double Blink', number: 10 },

  { message: 'Close Your Eyes', number: 100 },

  { message: 'Jump', number: 1000 }
]

let eachMessage = []

// converting to binary

function convertdeci () {
  let number = document.getElementById('number').value
  while (number !== 0) {
    rem = number % 2
    number = parseInt(number / 2)
    ans += rem
  }

// return ans
}

// function view () {
//   displayer.innerHTML= ans.split('').reverse().join('')

// }

// reversing convertdeci.

function reversingConvert () {
  for (let i = 0; i < ans.length; i++) {
    if (i < messagesToDisplay.length && ans[i] === '1') {
      eachMessage.push(messagesToDisplay[i].message)
   } 
    else if (i > messagesToDisplay.length && ans[i] === 1) {
      eachMessage.reverse()
    }
  }
}

function viewmessages () {
  displayer.innerHTML = eachMessage.join(',')
}

function viewreverses () {
  displayer.innerHTML = eachMessage.reverse().join(',')
}

function resett () {
  ans = ''
}

function resetTwo () {
  eachMessage = []
}

submit.addEventListener('click', () => {
  convertdeci()
  reversingConvert()
  viewmessages()
  viewreverses()
  resett()
  resetTwo()
})
