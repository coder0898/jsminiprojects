//DOM Element
const inputGuess = document.getElementById("inputGuess");
const submitGuess = document.getElementById("submitGuess");

const attemptCount = document.getElementById("attemptCount");
const resultMsg = document.getElementById("resultMsg");
const guessList = document.getElementById("guessList");

let min = 1,
  max = 100;

let count = 0;
const totalAttempt = 5;

let guessNumbers = [];

let guessNum = null;

function RandomNumber(min, max) {
  const randNum = Math.floor(Math.random() * (max - min) + min);
  //   console.log(randNum);
  return randNum;
}

function GuessCheck() {
  let inputNum = parseInt(inputGuess.value);
  if (typeof inputNum !== "number") {
    resultMsg.style.color = "#FF3800";
    resultMsg.innerText = `Please enter valid data..`;
    return;
  }

  if (inputNum > guessNum) {
    resultMsg.style.color = "#FF3800";
    resultMsg.innerText = `Too High`;
    count++;
    attemptCount.innerText = `${count}/${totalAttempt}`;
    inputGuess.value = "";
    guessNumbers.push(inputNum);
    guessList.innerText = `${guessNumbers}`;
  } else if (inputNum < guessNum) {
    resultMsg.style.color = "#0070FF";
    resultMsg.innerText = `Too Low`;
    count++;
    attemptCount.innerText = `${count}/${totalAttempt}`;
    inputGuess.value = "";
    guessNumbers.push(inputNum);
    guessList.innerText = `${guessNumbers}`;
  } else {
    resultMsg.style.color = "#32CD32";
    resultMsg.innerText = `You guess correct, the number is ${guessNum}`;
    count++;
    attemptCount.innerText = `${count}/${totalAttempt}`;
    inputGuess.value = "";
    guessNumbers.push(inputNum);
    guessList.innerText = `${guessNumbers}`;
  }

  if (count === totalAttempt) {
    resultMsg.style.color = "#F4C430";
    resultMsg.innerText = `Sorry! all attempt used, the number was ${guessNum}`;
    inputGuess.value = "";
  }
}

submitGuess.addEventListener("click", (e) => {
  e.preventDefault();
  GuessCheck();
});

window.addEventListener("DOMContentLoaded", () => {
  guessNum = RandomNumber(min, max);
  attemptCount.innerText = `${count}/${totalAttempt}`;
  guessList.innerText = `[ ]`;
});
