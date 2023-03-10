// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
var passwordLength = parseInt(prompt('How long do you want your password?'));

//if they pick less than 10 characters or more than 64 characters evaluate it falsy
if (passwordLength < 10 || passwordLength > 64 || !passwordLength) {
alert('Your password must be within 10 to 64 characters. Please try again.')
generatePassword();
return
}

var upperCase = confirm('Do you want uppercase characters?')
var lowerCase = confirm('Do you want lowercase characters?')
var numbers = confirm('Do you want numeric characters?')
var special = confirm('Do you want special characters?')
var options = {
  passwordLength,
  upperCase,
  lowerCase,
  numbers,
  special
}
return options
}
// Function for getting a random element from an array
function getRandom(arr) {
return arr[Math.floor(Math.random () * arr.length)]
console.log(arr)
}

// Function to generate password with user input
function generatePassword() {
  var userOptions = getPasswordOptions()
  console.log(userOptions)
  var chosenCharacters = []
  if (userOptions.upperCase) {
    chosenCharacters = chosenCharacters.concat(upperCasedCharacters)
  }
  if (userOptions.lowerCase) {
    chosenCharacters = chosenCharacters.concat(lowerCasedCharacters)
  }
  if (userOptions.special) {
    chosenCharacters = chosenCharacters.concat(specialCharacters)
  }
  if (userOptions.numbers) {
    chosenCharacters = chosenCharacters.concat(numericCharacters)
  }
  var generatedPassword = ''
   for (var i = 0; i < userOptions.passwordLength; i++) {
    generatedPassword += getRandom(chosenCharacters)
   }
   return generatedPassword
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);