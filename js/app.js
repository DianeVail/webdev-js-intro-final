"use strict";
const submitBtn = document.getElementById("submit-btn");  //Submit-btn enable and then disable
const guessInput = document.getElementById("current-guess"); 
const computerNumber = document.getElementById("computer-guess"); 
const myGuesses = document.getElementById("guess-history");  
const guessMessage = document.getElementById("guess-message");

// Computer picks number
let computerGuess = "";
  function getRandomNumber(min,max) {  //This is not working at all
    return Math.floor(Math.random() * (max - min + 1)) + min;
    computerGuess = getRandomNumber(1, 10); // Generates a random number between 1 and 10 (inclusive)
    computerNumber.innerText = computerGuess;
  }
  let myNumbers = [];     // User picks Number
  let guess = "";
for (let i = 0; i < 3 && guess != computerGuess; i++) {

  function getInput () {              //User enters numbers
    
    guess = parseInt(guessInput.value);
    guessInput.innerText = guess;
    
  }
  function compareAndStore() {    //Compare and store user guess
  
    myNumbers[i] = guess;
    myGuesses.innerText = myNumbers[i]; //Stores and outputs guess history

    if (guess < computerGuess) {
      guessMessage.innerText = "Your answer is too small";
    }  else if (guess > computerGuess) {
      guessMessage.innerText = "Your Guess is too high";  
    }  
    if (guess = computerGuess) {
      guessMessage.innerText = "Your Guess is correct!  You Win!";
    }
    if (i = 3) {
      guessMessage.innerText = "You did not guess the correct answer.  Try Again?";
    }
  }
}

function render() {  
  getRandomNumber();
  getInput(); 
  compareAndStore();


}
submitBtn.addEventListener("click", function () {   
    render();
  
});