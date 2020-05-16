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

// This starts the alerts for user inputs for password contents

function generatePassword () {
  alert("Please choose options to include in your password. The password length should be between 8 and 128 characters long. Thank you!'");

  var isChoiceLower = confirm('Do you want Lower Case letters?');
  
  var isChoiceUpper = confirm('Do you want Upper Case letters?');
  
  var isChoiceNumber = confirm('Do you want Numbers?');
  
  var isChoiceSymbol = confirm('Do you want Symbols?');
  
    // This confirms the user has inputs
  
    if ((isChoiceLower === false) && (isChoiceUpper === false) && (isChoiceNumber === false) && (isChoiceSymbol === false)) {
      alert('You must choose at least 1 item to include. For better security, choose minimum of 3 items!');
      location.reload();
    }

    var userInput = prompt('How long would you like your password to be? (8-128 characters please)');
    var passwordLength = parseInt(userInput);
    if (passwordLength < 8) {
      alert('Password must have at least 8 characters!');
      location.reload();
    } else if (passwordLength > 128) {
      alert('Password must have at less than 128 characters!');
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



// Choices to include
var funcArr = [getRandomLower, getRandomUpper, getRandomNumber, getRandomSymbol];

  const lowerTrue = (isChoiceLower === true)
  const upperTrue = (isChoiceUpper === true)
  const numberTrue = (isChoiceNumber === true)
  const symbolTrue = (isChoiceSymbol === true)

let password = "";

   const areTrue = lowerTrue + upperTrue + numberTrue + symbolTrue;

   console.log("are true: ", areTrue);

   const areTrueArr = [{lowerTrue}, {upperTrue}, {numberTrue}, {symbolTrue}].filter
   (
     item => Object.values(item)[0]
   );

   console.log("areTrueArr: ", areTrueArr);


     // empty string variable for the for loop below
  var randomPasswordGenerated = "";
  // loop getting random characters
  for (let i = 0; i < passwordLength; i++) {
    var randomNumberPicked = Math.floor(Math.random() * 4);
    functionArray=[
      getRandomLower, getRandomUpper, getRandomNumber, getRandomSymbol
    ]
    randomPasswordGenerated += functionArray[randomNumberPicked]();
    console.log(randomPasswordGenerated)
  }

      // randomPasswordGenerated += areTruelowerTrue;
      // randomPasswordGenerated += areTrueupperTrue;
      // randomPasswordGenerated += areTruenumberTrue;
      // randomPasswordGenerated += areTruesymbolTrue;
      
      
      return randomPasswordGenerated;


}



      // for (var i = 0; i < passwordLength; i++) {
        // areTrueArr.forEach(type => {
        //   const funcName = Object.keys(type)[0];
          
        //   return String.password(gerneratePassword() += randomFunc[funcName]);


//  // console.log(lowerTrue, upperTrue, numberTrue, symbolTrue)

//   // const randomFunc = {
//   //   lowerTrue: getRandomLower,
//   //   upperTrue: getRandomUpper,
//   //   numberTrue: getRandomNumber,
//   //   symbolTrue: getRandomSymbol,  
//   // };


  
  // var userInput = prompt('How long would you like your password to be? (8-128 characters please)');
  // var passwordLength = parseInt(userInput);
  // if (passwordLength < 8) {
  //   alert('Password must have at least 8 characters!');
  //   location.reload();
  // } else if (passwordLength > 128) {
  //   alert('Password must have at less than 128 characters!');
  //   location.reload();
  // } else 

//   // empty string variable for the for loop below
//   var randomPasswordGenerated = "";
//   // loop getting random characters
//   for (let i = 0; i < passwordLength - areTrue; i++) {
//     var randomNumberPicked = Math.floor(Math.random() * 4);
//     functionArray=[
//       getRandomLower, getRandomUpper, getRandomNumber, getRandomSymbol
//     ]
//     // randomPasswordGenerated += functionArray[randomNumberPicked]();
//     // console.log(randomPasswordGenerated)
//   }
//       // for (var i = 0; i < passwordLength; i++) {
      //   areTrueArr.forEach(type => {
      //     const funcName = Object.keys(type)[0];
          
          // return String.password(gerneratePassword() += randomFunc[funcName]);

      
        
      // randomPasswordGenerated += areTruegetRandomLower;
      // randomPasswordGenerated += areTruegetRandomUpper;
      // randomPasswordGenerated += areTruegetRandomNumber;
      // randomPasswordGenerated += areTruegetRandomSymbol;
      
      
      // return randomPasswordGenerated;
//}
        

    // function generatePassword () {
  //   function getRandomFunc() {
  //     return funcName[Math.floor(Math.random()*funcName.length)];
  //  }
        //  gerneratePassword += randomFunc[funcName]();
        // console.log("Loop " + i);
        // passwordGen = funcArr[Math.floor(Math.random() * funcArr.passwordLength) + i];}





// console.log(isChoiceLower);
// console.log(isChoiceUpper);
// console.log(isChoiceNumber);
// console.log(isChoiceSymbol);
// console.log(passwordLength);
// console.log(getRandomLower());
// console.log(getRandomUpper());
// console.log(getRandomNumber());
// console.log(getRandomSymbol());
