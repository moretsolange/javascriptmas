// import JSConfetti from "js-confetti";
const word = "santa";
const wordArr = word.split("");
let guessArr = [];
let currentState = [];
const wordDisplay = document.getElementById("word-display");
document.addEventListener("submit", handleGuess);

function renderSpaces() {
  const wordHtml = wordArr.map(() => {
    return `<span class="letter">-</span>`;
  });
  wordDisplay.innerHTML = wordHtml.join("");
}
renderSpaces();

function renderGuess(arr) {
  const wordHtml = arr.map((letter) => {
    return `<span class="letter">${letter}</span>`;
  });
  wordDisplay.innerHTML = wordHtml.join("");
}

function handleGuess(e) {
  e.preventDefault();
  /**
   * Debug Challenge:
   * 1. There are loads of problems with the
   *    code below. Find them and fix them!
   **/

  /* bugs begin 🦠*/

  let input = document.getElementById("user-input");
  let guess = input.value;
  guess = guess.toLowerCase();
  currentState = [];
  guessArr = guess.split("");

  // for (let i = 0; i < wordArr.length; i++) {
  //   const wordLetter = wordArr[i];
  //   const guessLetter = guessArr[i];
  //   if (wordLetter === guessLetter) {
  //     currentState.push(letter);
  //   } else {
  //     currentState.push("-");
  //   }
  // }

  wordArr.forEach(function (letter, index) {
    if (letter === guessArr[index]) {
      currentState.push(letter);
      console.log(currentState);
    } else {
      currentState.push("-");
    }
  });
  /* bugs end 🦠*/
  renderGuess(currentState);
  checkWin(guess);
  input.value = "";
}

function checkWin(guess) {
  if (word === guess) {
    const jsConfetti = new JSConfetti();
    jsConfetti.addConfetti({
      emojis: ["🧑‍🎄", "🎅"],
      emojiSize: 50,
      confettiNumber: 60,
      confettiRadius: 6,
    });
    jsConfetti.addConfetti();
  }
}
