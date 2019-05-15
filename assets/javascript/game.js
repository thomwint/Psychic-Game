let wins = 0;
let losses = 0;
let guessesLeft = 9;
let usersLettersSelected = [];
const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const compLetterSelecter = () => {
  const computerChoice = Math.floor(Math.random() * alphabet.length)
  return alphabet[computerChoice];
};

document.onkeyup = (event) => {
  userSelect = event.key.toLowerCase();
  computerLetter = compLetterSelecter();
  usersLettersSelected.push(userSelect);

  for (let element of alphabet) {

    if (userSelect == element) {

      if (userSelect == computerLetter) {
        wins++;
        guessesLeft = 9;
        document.getElementById('wins').innerHTML = wins;
        document.getElementById('guesses').innerHTML = guessesLeft;
        usersLettersSelected = [];
        document.getElementById('letters').innerHTML = usersLettersSelected;
      }
      else {
        guessesLeft--;
        document.getElementById('guesses').innerHTML = guessesLeft;
        document.getElementById('letters').innerHTML = usersLettersSelected.join(', ');
        if (guessesLeft == 0) {
          losses++;
          document.getElementById('losses').innerHTML = losses;
          guessesLeft = 9;
          document.getElementById('guesses').innerHTML = guessesLeft;
          usersLettersSelected = [];
          document.getElementById('letters').innerHTML = usersLettersSelected
        }
      }
    }
  }
}