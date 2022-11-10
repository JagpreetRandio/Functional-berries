// Assignment Code Here



var numbers = ("Would you like to add numbers?");

var lowerChars = ("Would you like to add lower case characters?");

var upperChars = ("Would you like to add upper case characters?");

var specialChars = ("Would you like to add special characters?");


function generatePassword(){
  var lowerCase =  ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var upperCase =  ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var specialChars = ['!', '@', '#', '$', '%', '^', '&', '*' , '(', ')', '"' ];
  var numbers =  ['1', '2', '3', '4', '5' , '6', '7' , '8', '9', '0' ];
  
  charsAmount = (prompt("To generate a password, how many characters would you like to add?", "NOTE: must between 8 - 128 characters"));
  if (charsAmount <= 8 || confirmLength >= 128 ) {
    alert("Password length must be between 8-128 characters Try again");
    var charsAmount = (prompt("How many characters would you like your password to contain?"));
    } 

  
}








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

