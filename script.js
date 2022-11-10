// data needed to generate password 
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialChars ="!@#$%^&*()";
var numbers = "1234567890";
var password = "";

var charactersAmount = prompt ("To generate a password, how many characters would you like to add?", "NOTE: must between 8 - 128 characters");

var numbers = ("Would you like to add numbers?");

var lowerChars = ("Would you like to add lower case characters?");

var upperChars = ("Would you like to add upper case characters?");

var specialChars = ("Would you like to add special characters?");


let generatePassword = function() {
  // passInfo holds all of the password info
  var passInfo = "";
  // passChars holds characters that are chosen for the password
  var passChars = [];
  // first prompt. lets the user decide on how many characters they want for their password 
  var charactersAmount = prompt ("To generate a password, how many characters would you like to add?", "NOTE: must between 8 - 128 characters");
  // min number of characters is 8 and max number is 128 for the password
  if (charactersAmount > 8 && charactersAmount < 128 ) {
    // adding the confirm so you have the option to add numbes 
   let numbers = confirm ("Would you like to add numbers?");
    if (numbers){
      passInfo = passInfo + makePassword.numbers;
      passChars.push(getRandomChar(passwordOptions.num))

    };

  }
}
 
const specialChars = confirm("Would you like to add special characters");
if (specialChars) {
  passInfo = passwordOptions.specialChars;
  passChars.push(getRandomChar(passwordOptions.specialChars));
};








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

