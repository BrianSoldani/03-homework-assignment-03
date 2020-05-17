  // Assignment Code
  var generateButton = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.getElementById('password');
  passwordText.innerHTML = password;
}
// // Add event listener to generate button
generateButton.addEventListener('click', writePassword); 

// This starts the alerts asking for user inputs to be included in password

function generatePassword () {

  alert("Please choose options to include in your password. The password length should be between 8 and 128 characters long. Thank you!");

  var isChoiceLower = confirm('Do you want Lower Case letters?');
  
  var isChoiceUpper = confirm('Do you want Upper Case letters?');
  
  var isChoiceNumber = confirm('Do you want Numbers?');
  
  var isChoiceSymbol = confirm('Do you want Symbols?');
  
  
  // This confirms the user has inputs or will reload the page if null
  
    if ((isChoiceLower === false) && (isChoiceUpper === false) && (isChoiceNumber === false) && (isChoiceSymbol === false)) {
      alert('You must choose at least 1 item to include. For better security, choose minimum of 3 items!');
      location.reload();
    }

    // This confirms the user has input correct range for password length

    var userInput = prompt('How long would you like your password to be? (8-128 characters please)');
    var passwordLength = parseInt(userInput);
    if (passwordLength < 8) {
      alert('Password must have at least 8 characters!');
      location.reload();
    } else if (passwordLength > 128) {
      alert('Password must have at less than 128 characters!');
      location.reload();
    } else if (passwordLength === null) {
      alert('Password must have at least 8 characters!');
      location.reload();
    }


// These are the functions to generate the password contents

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getRandomSymbol() {
  const symbols = '!@#$%&*-+';
  return symbols[Math.floor(Math.random() * symbols.length)];
}


  // Get count of items that are true to inclue in for loop

  const areTrue = (isChoiceLower === true) + (isChoiceUpper === true) + (isChoiceNumber === true) + (isChoiceSymbol === true);


  // Empty string variable for the for loop below

  var randomPasswordGenerated = "";


  // Loop getting random characters based on user selection, input, and length

  for (let i = 0; i < passwordLength; i++) {
    var randomNumberPicked = Math.floor(Math.random() * areTrue);
    var functionArray = []; 

    if (isChoiceLower === true) {
      functionArray.push(getRandomLower)
    } 
    if (isChoiceUpper === true) {
        functionArray.push(getRandomUpper)
    } 
    if (isChoiceNumber === true) {
        functionArray.push(getRandomNumber)
    } 
    if (isChoiceSymbol === true) {
        functionArray.push(getRandomSymbol)
    } 
    randomPasswordGenerated += functionArray[randomNumberPicked]();
  }
  return randomPasswordGenerated;
}