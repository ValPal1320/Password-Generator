// Assignment code here
var enter;
var confirmCharacter;
var confirmNumber;
var confirmLowercase;
var confirmUppercase;



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {

// 1. Prompt the user for the password criteria
var userInput = prompt("Hello user, how long would you like your password to be? Choose between 8 to 128 characters.");
//    a. Password length between 8 and 128 characters
var passwordLength = parseInt(userInput);

if (isNaN(passwordLength)) {
  alert("Input was not a number. Try again!"); 
  return
 } 

 if (passwordLength < 8 || passwordLength > 128) {
  alert("Input not valid. Try again!");
  return
 }

//    b. Confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
var userNumbers = confirm("Would you like to include numbers?");
var userLowercase = confirm("Would you like to include lowercase letters?");
var userUppercase = confirm("Would you like to include uppercase letters?");
var userSpecialC = confirm("Would you like to include special characters?");

var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var character = [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", " \ ", "^", "_", "`", "{", "}", "|", "~"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = [];

var allOptions = []; 

for (var i = 0; i < lowercase.length; i++) {
  uppercase[i] = lowercase[i].toUpperCase()
}
// 2. Validate the user's input
if (userNumbers === true) {
  allOptions.push(number)
}

if (userLowercase === true) {
  allOptions.push(lowercase)
}

if (userUppercase === true) {
  allOptions.push(uppercase)
}

if (userSpecialC === true) {
  allOptions.push(character)
}
// 3. Generate password based on criteria
var generatedPassword = ""

for (var i = 0; i < passwordLength; i++) {

}

// 4. Diplay generated password
  return "Generated password will go here!";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
