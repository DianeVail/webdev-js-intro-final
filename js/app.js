"use strict";
const submitBtn = document.getElementById("submit-btn");  //Submit-btn enable and then disable
const userInput = document.getElementById("guess-input");//input
const number = document.getElementById("current-guess");  //output
const computerNumber = document.getElementById("computer-guess"); //randome number
const myGuesses = document.getElementById("guess-history");  //array of 3 inputs
const guessMessage = document.getElementById("guess-message"); //message
const resetBtn = document.getElementById('resetBtn');  //reset buttom enable and disable

let computerGuess = "";  //computer guess
let guessHistory = [];   //array to store three guesses  
let guess = " " ;        // user input   
let result = " ";        //message


// Step 1)  Computer picks number
function getRandomNumber(min,max) {  
    return Math.floor(Math.random() * (max - min + 1)) + min; 
  }
  computerGuess = getRandomNumber(1,10);    //This works
    
  
     //Starts the game at guess 0
   var i = 0;                        
        
        function playGame () { //Loop to play the game
            while (i < 3) {            
                guess = parseInt(userInput.value);  //User enters numbers                  
                guessHistory[i] = guess;  // puts guesses in the array 
                number.innerText = guess;                                  
       
        if (guess > computerGuess){
             result = "Your guess is too high!!";
             guessMessage.innerText = result;
          }
        if (guess < computerGuess){
              result = "Your guess is too low!!";
              guessMessage.innerText = result;
          }
        if (guess = computerGuess){
           result = "You won!!";
           guessMessage.innerText = result;
           computerNumber.innerText = computerGuess;
           i == 3;
        }
        myGuesses.innerText = guessHistory[i];
        i++;
  }
}
if (i == 3){
    result = "You did not win, play again?";
    computerNumber.innerText = computerGuess;
    
}
function render() {  
    getRandomNumber();
    playGame();
}

submitBtn.addEventListener("click", function () {   
    render();
});
resetBtn.addEventListener('click', () => {  // I do not know how to do this part!!!
  
});

//I don't know if I neede this or not
function validateInput(event) {
      const invalidCharacters = ["e", "E", "-", "+"];
      if (invalidCharacters.includes(event.key)) {
          event.preventDefault();
      }
  }
  userInput.addEventListener("keydown", validateInput);
  