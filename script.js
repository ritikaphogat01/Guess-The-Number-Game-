"use strict";



const GuessNumber = document.querySelector(".number");
const usernumber = document.querySelector(".guess");
const checkbutn = document.querySelector(".check");
const outputmessage = document.querySelector(".message");
const scoreelement = document.querySelector(".score");
const highscoreelemtent = document.querySelector(".highscore");
const againbtn = document.querySelector(".again");

let randomnumber = Math.trunc(Math.random() * 20 + 1);

let numberfound = false;

let isPlaying = true;

let score = 20;
scoreelement.textContent = score;
let highscore = 0;
highscoreelemtent.textContent = highscore;

checkbutn.addEventListener("click", function () {
  let userguessnumber = Number(usernumber.value);
  console.log(userguessnumber);

  if (!(score === 0)) {
    if (isPlaying) {
      if (userguessnumber > randomnumber) {
        outputmessage.textContent = "Number is Too Larger";
        usernumber.value = "";
        score--;
        scoreelement.textContent = score;
      } else if (userguessnumber < randomnumber) {
        outputmessage.textContent = "Number is Too Small";
        usernumber.value = "";
        score--;
        scoreelement.textContent = score;
      } else if (userguessnumber === randomnumber) {
        outputmessage.textContent = "🥳🎉 Correct";
        document.querySelector("body").style.backgroundColor = "green";
        GuessNumber.textContent = randomnumber

        if (score > highscore) {
          highscore = score;
          highscoreelemtent.textContent = highscore;
        }
        isPlaying = false;
      } else if (isNaN(userguessnumber)) {
        outputmessage.textContent = "Invalid Input";
        usernumber.value = "";
        score--;
        scoreelement.textContent = score;
      }
    } else {
      console.log();
    }
  } else {
    outputmessage.textContent = "You loose.";
  }
});

console.log(randomnumber);

// afteragain:

againbtn.addEventListener("click", function () {
  document.querySelector("body").style.backgroundColor = "#222";
  usernumber.value = "";
  randomnumber = Math.trunc(Math.random() * 20 + 1);

  score = 20;
  scoreelement.textContent = score;
  isPlaying = true;
  // outputmessage.textContent=message;
  outputmessage.textContent = "Start guessing...";
});
