// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["`", "~", "!", "#", "$", "%", "^", "&", "*", "(", ")", "+", ",", "-", "/", ":", ";", "?", ">", "@", "[", "]", "{", "}", "|"];
var passwordOptions = []
var password = []


function generatePassword() {
  password = "";

  //Prompt the user to choose number of characters
  var numofChar = prompt("How many characters do you want in your password (must be between 8 and 128)?");

  //Will revert back to original setup if password is too short
  if (numofChar < 8) {
    alert("Password must be at least 8 characters long");
  }
  //If password length meets criteria, then we can confirm what kinds of characters the user wants to use
  else if (numofChar > 128) {

  } else {
    var askUpper = confirm("Would you like uppercase letters in your password?");
    if (askUpper) { passwordOptions.push(upperCase) }

    var askLower = confirm("Would you like lowercase letters in your password?");
    if (askLower) { passwordOptions.push(lowerCase) }

    var askNumbers = confirm("Would you like numbers in your password?");
    if (askNumbers) { passwordOptions.push(askNumbers) }

    var askSpecialChar = confirm("Would you like special characters in you password?");
    if (askSpecialChar) { passwordOptions.push(specialChar) }
  }


  var condenseArray = passwordOptions.flat();

  console.log(condenseArray)

  //For Loop

  for (let index = 0; index < numofChar; index++) {
    var randomNumber = condenseArray[Math.floor(Math.random) * numofChar.length];

    password.push(randomNumber);
  }






  
}

return password;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

