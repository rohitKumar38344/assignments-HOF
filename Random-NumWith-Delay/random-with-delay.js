const buttonEl = document.querySelector("button");
const h1El = document.querySelector("h1");
const h2El = document.querySelector("h2");
/*
The goal of this program is to generate a random number after a delay of 3 seconds, and store the delay in a 
variable so can be modified. The program displays a message every second indicating the time remaining 
until the random number is generated and then outputs the generated number. 


*/
let delay = 8000; // milliseconds
let stopTime = 0;
let intervalID;
const generateRandomNumber = function () {
  return Math.floor(Math.random() * 20 + 1);
};
const display = function () {
  h2El.textContent = `Random number is: ${generateRandomNumber()}`;
};

buttonEl.addEventListener("click", function () {
  setTimeout(display, delay + 1000);
  stopTime = delay / 1000;
  displayRemainingTime();
});

const displayRemainingTime = function () {
  intervalID = setInterval(() => {
    h1El.textContent = `Time remaining: ${stopTime--}s`;
    if (stopTime < 0) {
      clearInterval(intervalID);
    }
  }, 1000);
};
