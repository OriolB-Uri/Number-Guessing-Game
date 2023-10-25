// Good luck!

// Variables de estado iniciales. Puede que falta alguna...

let isPlaying = true;
let correctNumber = Math.floor(Math.random() * 101);
let remainingGuesses = 10;
let userValueInput = document.querySelector("#guessField");
let remainingGuessesText = document.querySelector("#remainingGuesses");
let lowOrHi = document.querySelector("#lowOrHi");
let allGuesses = document.querySelector("#guesses");
let allGuessesArray = [];


// Actualizar el innerHTML del nodo adecuado con el número de intentos iniciales
remainingGuessesText.textContent = remainingGuesses;

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault(); // Impedimos que el formulario haga un petición GET

  // Comprobar si el número que ha puesto el usuario es mayor o menor que el correctNumber. Tomar decisiones

  if(remainingGuesses <= 0){
    return;
  }

  if (userValueInput.value < correctNumber){
    lowOrHi.textContent = "Your number (" + userValueInput.value +") is to LOW";
    allGuessesArray.push(userValueInput.value);
    allGuesses.textContent = allGuessesArray;
    remainingGuesses--;
    remainingGuessesText.textContent = remainingGuesses;
    userValueInput.value = "";
    if (remainingGuesses <= 0){
      userValueInput.disabled = true;
      lowOrHi.textContent = "You have no more guesses";
    }
  } else if (userValueInput.value > correctNumber){
    lowOrHi.textContent = "Your number (" + userValueInput.value +") is to HIGH";
    allGuessesArray.push(userValueInput.value);
    allGuesses.textContent = allGuessesArray;
    remainingGuesses--;
    remainingGuessesText.textContent = remainingGuesses;
    userValueInput.value = "";
    if (remainingGuesses <= 0){
      userValueInput.disabled = true;
      lowOrHi.textContent = "You have no more attempts";
    }
  } else if (userValueInput.value == correctNumber){
    userValueInput.disabled = true;
    lowOrHi.textContent = "Your number (" + userValueInput.value +") is CORRECT";
  }
});
