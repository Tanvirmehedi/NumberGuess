"use strict";
let pageName = "Guess";
let SecretNumber = Math.floor(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

// document.querySelector(".qusn-mark").textContent = SecretNumber;
// console.log(SecretNumber);
// ------------------------------------
// The Message Function
// -------------------------------------
let showMessage = function (info) {
  return (document.querySelector(".message").textContent = info);
};

document.querySelector(".chack-btn").addEventListener("click", function () {
  const theNumber = Number(document.querySelector(".box").value);
  // ------------------------------------
  // Whean Number Wrong
  // -------------------------------------
  if (!theNumber) {
    document.querySelector(".message").textContent = showMessage(
      "No Number Ditect 🥴"
    );

    // ------------------------------------
    // Whean Number Too Low
    // -------------------------------------
  } else if (theNumber < SecretNumber) {
    if (score > 1) {
      score--;
      document.querySelector(".score-num").textContent = score;
      document.querySelector(".message").textContent = showMessage(
        "Number Too Low"
      );
    } else {
      document.querySelector(".message").textContent = showMessage(
        "Lost The Game"
      );
      document.querySelector(".score-num").textContent = 0;
    }
    // ------------------------------------
    // Whean Number Too Hign
    // -------------------------------------
  } else if (theNumber > SecretNumber) {
    if (score > 1) {
      score--;
      document.querySelector(".score-num").textContent = score;
      document.querySelector(".message").textContent = showMessage(
        "Number Too High"
      );
    } else {
      document.querySelector(".message").textContent = showMessage(
        "Lost The Game"
      );
      document.querySelector(".score-num").textContent = 0;
    }
    // ------------------------------------
    // Whean Correct Match
    // -------------------------------------
  } else if (theNumber === SecretNumber) {
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highNum").textContent = highScore;
    }
    document.querySelector(".qusn-mark").textContent = SecretNumber;
    document.querySelector(".main-heading").textContent = "🎉CONGRATULATION";
    document.querySelector(".container").style.backgroundColor = "#33ff2c";
    document.querySelector(".message").textContent = showMessage(
      "✌️Mached Number"
    );
  }
});

// ------------------------------------
// Whean Play Again (Reset Btn)
// -------------------------------------
document.querySelector(".btn-reset").addEventListener("click", function () {
  SecretNumber = Math.floor(Math.random() * 20 + 1);
  // console.log(SecretNumber);
  score = 20;
  document.querySelector(".box").value = "";
  document.querySelector(".score-num").textContent = score;
  document.querySelector(".qusn-mark").textContent = "?";
  document.querySelector(".main-heading").textContent = "GuesS-NumbeR.";
  document.querySelector(".message").textContent = showMessage(
    "🧏🏼‍♀️ Start Guesing....."
  );
  document.querySelector(".container").style.background = "";
});
