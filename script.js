// Assignment Code Here


function generatePassword(){
  var lowerCase =  ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var upperCase =  ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var specialChars = ['!', '@', '#', '$', '%', '^', '&', '*' , '(', ')', '"' ];
  var numbers =  ['1', '2', '3', '4', '5' , '6', '7' , '8', '9', '0' ];
  var charactersForPassword = [];
  
  charsAmount = (prompt("To generate a password, how many characters would you like to add?", "NOTE: must between 8 - 128 characters"));
  if (charsAmount <= 8 || confirmLength >= 128 ) {
    alert("Password length must be between 8-128 characters Try again");
    var charsAmount = (prompt("How many characters would you like your password to contain?")); 
  }

    else if (isNan (charsAmount)) {
      charsAmount = prompt("please enter a vaild number")

    }

    numbers = (confirm("Would you like to add numbers"))
    if (numbers) {
      numbers = alert("Your password will have numbers")

    }

    lowerCase = (confirm ("Would you like to add lower case characters?"));
    if (Lowercase) {
       lowerCase = alert("Your password will have lowercase characters.");

    } 

    upperCase = (confirm ("Would you like to add upper case characters?"));
    if (upperCase) {
      upperCase = alert("Your password will have upper case characters")

    }

    specialChars = (confirm("Would you like to add special characters?"))
    if (specialChars){
      specialChars = alert("Your password will have special characters")
    }

    if (numbers === false && lowerCase === false && upperCase === false && specialChars === false) {
      return "Please select at least one character type.";

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

