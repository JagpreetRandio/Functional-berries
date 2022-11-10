// Assignment code here
function generatePassword() {

//  Options for the random password 

  var numberCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var uppercaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var lowercaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
  var possibleCharacters = [];

  // get input and validate the number of characters for password 

  charactersForRandomPassword = prompt("How many characters would you like for your password? NOTE: Must be between 8-128 characters");
  if (charactersForRandomPassword < 8 || charactersForRandomPassword > 128) {
    return "Please choose a valid number of characters. Try Again!";
  } else if (isNaN(charactersForRandomPassword)) {
    // if user doesn't chose a number between 8-128, a prompt will show up to let user enter a vaild number 
    charactersForRandomPassword = prompt("Please enter a valid number to generate a password.");
  }
  else {
    // lets user know how many characters will be used for thier random password 
    alert("Your password will be " + charactersForRandomPassword + " characters long!");
    
  }

// confirming lowercase characters 
  lowerCase = confirm("Would you like to add lowercase characters?");
  if (lowerCase) {
    alert("Your password will have lowercase characters!");
  }
  else {
    alert("Your password will NOT have lowercase characters!");
  }

// confirming uppercase characters 
  upperCase = confirm("Would you like to add uppercase characters?");
  if (upperCase) {
    alert("Your password will have uppercase characters!");
  }
  else {
    alert("Your password will NOT have uppercase characters!");
  }

  // confirming numbers 
  numbers = confirm("Would you like to add numbers?");
  if (numbers) {
    alert("Your password will have numbers!");
  }
  else {
    alert("Your password will NOT have numbers!");
  }
// confirming special characters
  specialChars= confirm("Would you like to add special characters?");
  if (specialChars) {
    alert("Your password will have special characters!");
  }
  else {
    alert("Your password will NOT have special characters!");
  }

  // if no options is chosen, a message will tell user to select one character type 
  if (lowerCase === false && upperCase === false && numbers === false && specialChars === false) {
    return "Please select at least one character type. Try Again!";
  };

  // group selected characters and concat is used to group all options together 
  if (lowerCase) {
    possibleCharacters = possibleCharacters.concat(lowercaseCharacters);
  }
  if (upperCase) {
    possibleCharacters = possibleCharacters.concat(uppercaseCharacters);
  }
  if (numbers) {
    possibleCharacters = possibleCharacters.concat(numberCharacters);
  }
  if (specialChars) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
  }

  // picks random characters out for the random password 
  let randomPassword = ""
  for (let i = 0; i <  charactersForRandomPassword; i++) {
    let rng =[Math.floor(Math.random() * possibleCharacters.length)];
    randomPassword = randomPassword + possibleCharacters[rng];
  }
  return randomPassword;

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