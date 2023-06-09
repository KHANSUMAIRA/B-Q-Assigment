// assigment 12 and 13
// 1. Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).
// let input = prompt("Enter a character:");
// let charCode = input.charCodeAt(0);

// if (charCode >= 48 && charCode <= 57) {
//   console.log(input + " is a number.");
// } else if (charCode >= 65 && charCode <= 90) {
//   console.log(input + " is an uppercase letter.");
// } else if (charCode >= 97 && charCode <= 122) {
//   console.log(input + " is a lowercase letter.");
// } else {
//   console.log("Invalid input.");
// }
var userInput = prompt("Enter a character:")

var charCode = userInput.charCodeAt(0)

if (charCode >= 48 && charCode <= 57) {
  alert("The input is a number.")
} else if (charCode >= 65 && charCode <= 90) {
  alert("The input is an uppercase letter.")
} else if (charCode >= 97 && charCode <= 122) {
  alert("The input is a lowercase letter.")
} else {
  alert("The input is not a number nor a letter.")
}
           
// 2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.

var num1 = +prompt("Enter the first number: ");
var num2 = +prompt("Enter the second number: ");

if (num1 > num2) {
  console.log(num1 + " is larger than " + num2);
} else if (num2 > num1) {
  console.log(num2 + " is larger than " + num1);
} else {
  console.log(num1 + " and " + num2 + " are equal.");
}

// 3. Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.
var number = prompt("Enter a number:");

if (number > 0) {
  console.log(number + " is a positive number");
} else if (number < 0) {
  console.log(number + " is a negative number");
} else {
  console.log(number + " is zero");
}

// 4. Write a program that takes a character (i.e. string of
//     length 1) and returns true if it is a vowel, false otherwise //taking input from user
//checking if the entered character is present in vowels string
let char = prompt("Enter a character:"); 
let vowels = "aeiou"; 
if (vowels.indexOf(char) !== -1) {
  
  console.log(`${char} is a vowel.`);
} else {
  console.log(`${char} is not a vowel.`);
}
//     5. Write a program that
//     a. Store correct password in a JS variable.
//     b. Asks user to enter his/her password
//     c. Validate the two passwords:
//     i. Check if user has entered password. If not, then
//     give message “ Please enter your password”
//     ii. Check if both passwords are same. If they are
//     same, show message “Correct! The password you
//     entered matches the original password”. Show
//     “Incorrect password” otherwise
    
   // Step 1: Store correct password in a JS variable
var correctPassword = "12345678";

// Step 2: Asks user to enter his/her password
var userPassword = prompt("Enter your password:");

// Step 3: Validate the two passwords
if (userPassword === "") {

  alert("Please enter your password");
} else if (userPassword === correctPassword) {
  // ii. Check if both passwords are same. If they are same, show message “Correct!
  //  The password you entered matches the original password”.
  //  Show “Incorrect password” otherwise.
  alert("Correct! The password you entered matches the original password");
} else {
  alert("Incorrect password");
} 
//   6-  This if/else statement does not work. Try to fix it:
//     var greeting;
//     var hour = 13;
//     if (hour < 18) {
//     greeting = "Good day";
//     else
//     greeting = "Good evening";
//     }
    

var greeting;
var hour = 13;
if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
//     7. Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements

let time = prompt("Enter time in 24-hour clock format (e.g. 1900 for 7pm):");
if (time >= 1111 && time < 1200) {
  alert(" Morning!");
} else if (time >= 1200 && time < 1700) {
  alert(" Afternoon!");
} else if (time >= 1700 && time < 2100) {
  alert("Evening!");
} else if (time >= 2100 && time <= 2359) {
  alert(" Night!");
} else {
  alert(
    "Invalid input! Please enter time in 24-hour clock format (e.g. 1900 for 7pm)."
  );
}