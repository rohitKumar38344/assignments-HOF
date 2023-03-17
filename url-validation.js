/*
Write a program using a regex that matches valid URLs. Valid URLs should start with either http:// or https://, 
followed by one or more letters, digits, or special characters, followed by a dot, followed by one or more letters. 
Print a message indicating if the input matches the conditions or not
*/

const validateURL = function (url) {
  const regEx = /(http:\/\/|https:\/\/).+\.\w+/gm;
  const hasMatch = regEx.test(url);
  return hasMatch;
};

console.log(validateURL("https://developer.mozilla.org"));
console.log(validateURL("https://css-tricks.com"));
console.log(validateURL("https//developer.mozilla.org"));
