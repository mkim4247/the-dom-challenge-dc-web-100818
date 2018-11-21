let timer = document.querySelector('#counter')
let plus = document.querySelector('#plus')
let minus = document.querySelector('#minus')
let heart = document.querySelector('#heart')
let pause = document.querySelector('#pause')
let form = document.querySelector('form')
let comments = document.querySelector('#list')
// let submit = document.querySelector('#submit')
let buttons = document.querySelectorAll('.button')

function addOne() {
  return timer.innerText = parseInt(timer.innerText) + 1
}

function minusOne() {
  return timer.innerText = parseInt(timer.innerText) - 1
}

let counterTracker = {}

function addLike () {
  let liElement = document.createElement('li')
  liElement.innerText = timer.innerText
  counterTracker[liElement.innerText] ? counterTracker[liElement.innerText] += 1 : counterTracker[liElement.innerText] = 1

  liElement.innerText += ` liked ${counterTracker[liElement.innerText]} times`

  let likeList = document.querySelector('.likes')
  likeList.appendChild(liElement)
}

function silenceAll(){
  if (pause.innerText === "pause") {
    clearInterval(counter)
    pause.innerText = "resume"
    buttons.forEach(function(button){
      button.disabled = true
    })
  }
  else if (pause.innerText === "resume"){
    counter = setInterval(addOne, 1000)
    pause.innerText = "pause"
    buttons.forEach(function(button){
      button.disabled = false
    })
  }
}

function getFormValues(event){
  event.preventDefault()
  let input = document.querySelector('input').value
  document.querySelector('form').reset()
  addComment(input)
}

function addComment(input) {
  let liComment = document.createElement('li')
  comments.appendChild(liComment)
  liComment.innerText = input
}

counter = setInterval(addOne, 1000)
plus.addEventListener("click", addOne)
minus.addEventListener("click", minusOne)
heart.addEventListener("click", addLike)
pause.addEventListener("click", silenceAll)
form.addEventListener('submit', getFormValues)
