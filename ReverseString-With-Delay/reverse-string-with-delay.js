const spanEl = document.querySelector(".outputString");
const buttonEl = document.querySelector('input[type="button"]');
let outputString = "";

const reverseString = function (inputStr) {
  const result = [];
  for (j = inputStr.length - 1; j >= 0; j--) {
    result.push(inputStr[j]);
  }
  return result.join("");
};

const displayOutput = function () {
  spanEl.textContent = outputString;
  buttonEl.value = "reverse";
  buttonEl.style.animation = "none";
};

const reverseStringWithDelay = function () {
  const inputString = document.querySelector('input[type="text"]').value;
  outputString = reverseString(inputString);
  buttonEl.value = "loading...";
  buttonEl.style.animationName = "changeBg";
  buttonEl.style.animationDuration = "2s";
  setTimeout(displayOutput, 2000);
};

buttonEl.addEventListener("click", reverseStringWithDelay);
