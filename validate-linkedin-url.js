/*
Valid LinkedIn profile URLs should start with https://
www.linkedin.com/in/ followed by a combination of one or more letters, digits, underscores, or hyphens, and 
end with a letter or digit. The length of the profile ID should be between 5 and 30 characters.
*/
const validateURL = function (url) {
  const regEx = /https:\/\/www\.linkedin\.com\/in\/.{4,28}[a-zA-Z$|0-9$]/gm;
  const isValid = regEx.test(url);
  return isValid ? "valid url" : "Invalid url";
};

console.log(validateURL("https://www.linkedin.com/in/test-user-50714521a/"));
console.log(validateURL("https://www.yahoo.com/in/test-user-50714521a/"));
console.log(validateURL("https://www.yahoo.com/in/test-user@50714521a/"));
console.log(validateURL("https://www.yahoo.com/in/test-user50714521#/"));
