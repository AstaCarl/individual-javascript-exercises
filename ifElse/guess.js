const form = document.querySelector("form");

// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;
//console.log(randomNumber);
// Keep track of the number of guesses
let guessCounter = 0;
// Maximum number of guesses allowed
const maxGuesses = 2;

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const userGuess = parseInt(document.getElementById("user-guess").value);
  // Increment the guess counter
  guessCounter++;

  if (!userGuess && userGuess !== 0) {
    alert("Please guess a number between 1 and 100");
    return;
  }

  let newP = document.createElement("p");

  // if user guess is correct, show the correct number and how many guesses it took.
  if (userGuess === randomNumber) {
    newP.textContent = `You guessed correctly in ${guessCounter} guesses!`;
    newP.classList.add("correct");
    document.getElementById("status").appendChild(newP);

    // if guesses is under 2 try again, and also show if its higher or lower.
  } else if (guessCounter < maxGuesses) {
    if (userGuess > randomNumber) {
      newP.textContent = "You guessed too high! Try again.";
    } else {
      newP.textContent = "You guessed too low! Try again.";
    }
    //incorrect class is for css styling
    newP.classList.add("incorrect");
    document.getElementById("status").appendChild(newP);
  }
  // if guesses is over 2, game over and show the correct number.
  else {
    newP.textContent = `Game over! The correct number was ${randomNumber}.`;
    newP.classList.add("incorrect");
    document.getElementById("status").appendChild(newP);
  }
});
