// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {

// 1. Prompt the user for the password criteria
var userInput = prompt("Hello user, how long would you like your password to be? Choose between 8 to 128 characters.");
//    a. Password length between 8 and 128 characters
var passwordLength = parseInt(userInput);

if (isNaN(passwordLength)) {
  alert("Input was not a number. Try again!"); 
  return null
 } 

 if (passwordLength < 8 || passwordLength > 128) {
  alert("Input not valid. Try again!");
  return null
 }

//    b. Confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
var userNumbers = confirm("Would you like to include numbers?");
var userLowercase = confirm("Would you like to include lowercase letters?");
var userUppercase = confirm("Would you like to include uppercase letters?");
var userSpecialC = confirm("Would you like to include special characters?");

var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", " \ ", "^", "_", "`", "{", "}", "|", "~"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = [];

var allOptions = []; 

for (var i = 0; i < lowercase.length; i++) {
  uppercase.push(lowercase[i].toUpperCase())
}

// 2. Validate the user's input
if(!userSpecialC && !userLowercase && !userUppercase && !userNumbers){
  alert("You must choose at least one character type. Try again!");
  return null
}

if (userNumbers === true) {
  allOptions = allOptions.concat(number)
}

if (userLowercase === true) {
  allOptions = allOptions.concat(lowercase)
}

if (userUppercase === true) {
  allOptions = allOptions.concat(uppercase)
}

if (userSpecialC === true) {
  allOptions = allOptions.concat(character)
}


// 3. Generate password based on criteria
//    a. Run random function
var generatedPassword = []

for (var i = 0; i < passwordLength; i++) {
  generatedPassword.push(random(allOptions))
}

// 4. Diplay generated password
  return generatedPassword.join('');
}

// 5. create Random function to return 1 random number
function random(array){
  return array[Math.floor(Math.random() * array.length)]
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
