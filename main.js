// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let modal = document.querySelector('#modal')

function hideModal() {
  modal.setAttribute('class', 'hidden')
}

const hearts = document.getElementsByClassName("like-glyph")

  for (const heart of hearts){
    heart.addEventListener("click", function(e) {
      mimicServerCall()
      .then(function(response) {
        if (heart.innerHTML == EMPTY_HEART){
          heart.innerHTML = FULL_HEART
          heart.className = "activated-heart"
        } else {
        heart.innerHTML = EMPTY_HEART
        heart.className = "like-glyph"
        }
      })
      .catch(function(error) {
        modal.classList.remove('hidden')
        let message = document.querySelector("modal-message")
        message.innerHTML = error
        setTimeout(() => {
          modal.hidden = true}, 5000)
        }); 
    })
  }

hideModal()

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
