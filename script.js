// Assignment code here
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialChars ="!@#$%^&*()";
var numbers = "1234567890";
var min=12;
var max= 128;
var password = "";

var password = prompt("To generate a password, would you like to add characters:", "yes or no");

var password = confirm("Would you like to add another character?");


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


