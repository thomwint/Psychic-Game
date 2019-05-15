let wins = 0;
let losses = 0;
let guessesLeft = 9;
let computerChoice = null;
let usersLettersSelected = [];
const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const compLetterSelecter = () => {
  computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
};

const updateGuessesLeft = () => {
  document.getElementById('guesses').innerHTML = guessesLeft;
};

const guessesSoFar = () => {
  document.getElementById('letters').innerHTML = usersLettersSelected.join(', ');
};

const reset = () => {
  guessesLeft = 9;
  usersLettersSelected = [];
  compLetterSelecter();
  updateGuessesLeft();
  guessesSoFar();
};

compLetterSelecter();
updateGuessesLeft();

document.onkeydown = (event) => {
  if (event.which <= 90 && event.which >= 65) {
    guessesLeft--;
    let letter = String.fromCharCode(event.which).toLowerCase();

    usersLettersSelected.push(letter);

    updateGuessesLeft();
    guessesSoFar();

    if (letter === computerChoice) {
      wins++;
      document.getElementById('wins').innerHTML = wins;
      reset();
    }
    if (guessesLeft === 0) {
      losses++;
      document.getElementById('losses').innerHTML = losses;
      reset();
    }
  }
}