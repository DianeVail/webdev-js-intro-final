"use strict";
const submitBtn = document.getElementById("submit-btn");  //Submit-btn enable and then disable
const userInput = document.getElementById("guess-input");//input
const number = document.getElementById("current-guess");  //output
const computerNumber = document.getElementById("computer-guess"); //randome number
const myGuesses = document.getElementById("guess-history");  //array of 3 inputs
const guessMessage = document.getElementById("guess-message"); //message
const resetBtn = document.getElementById('restart-btn');  //reset buttom enable and disable



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
                           
        let i = 0;
        
        function playGame () { //Loop to play the game
           i = 0;
           guess = "";
            while (i < 3) {            
                guess = parseInt(userInput.value);  //User enters numbers                  
                guessHistory.push(guess);  // puts guesses in the array 
                number.innerText = guess; 
                myGuesses.innerText = guessHistory; 
                i++;

       
        if (guess > computerGuess){
             result = "Your guess is too high!!";
             guessMessage.innerText = result;
          }
        if (guess < computerGuess){
              result = "Your guess is too low!!";
              guessMessage.innerText = result;
          }
       if (guess == computerGuess){
           result = "You won!!";
           guessMessage.innerText = result;
           computerNumber.innerText = computerGuess;
           resetBtn.disabled = false; // Enables the button - but it doesn't
           i = 10;
        }
        myGuesses.push(i);
        myGuesses.innerText = guessHistory; 
        i++;
        if (i === 2){ //We never get here
            result = "You did not win, play again?";
            computerNumber.innerText = computerGuess;
            resetBtn.disabled = false; // Enable the button
        }
  }
 }
function render() {  
    getRandomNumber();
    playGame();
}
submitBtn.addEventListener("click", function () {   
    render();
});
resetBtn.addEventListener('click', () => {  //My Reset button turns on but it does not restart the game
    buttonToBeClicked.textContent = initialText;
    addListener();
});

//I don't know if I neede this or not
function validateInput(event) {
      const invalidCharacters = ["e", "E", "-", "+"];
      if (invalidCharacters.includes(event.key)) {
          event.preventDefault();
      }
  }
  userInput.addEventListener("keydown", validateInput);
  