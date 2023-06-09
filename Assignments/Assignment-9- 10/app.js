// assigment 9 and 10
// 1. Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”

var city = prompt(" city name:");

if (city.toLocaleLowerCase() === "karachi") {
  console.log("Welcome to the city of lights");
}
// 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.

var gender = prompt("Enter  gender (male/female):");

if (gender.toLowerCase() === "male") {
  console.log("Hello Sir");
} else if (gender.toLowerCase() === "female") {
  console.log("Hello Madam");
}
// 3. Write a program to take input color of road traffic signal
// from the user & show the message according to this table:
// Signal color Message
// Red Must Stop
// Yellow Ready to move
// Green Move now

var color = prompt("Enter the color of the traffic signal:");

if (color.toLowerCase() === "red") {
  console.log(" Stopped");
} else if (color.toLowerCase() === "yellow") {
  console.log("Ready");
} else if (color.toLowerCase() === "green") {
  console.log("Move");
} else {
  console.log("Invalid input. Please enter red, yellow, or green.");
}
// 4. Write a program to take input remaining fuel in car (in
//     litres) from user. If the current fuel is less than 0.25litres,
//     show the message “Please refill the fuel in your car”
var fuel = parseFloat(
    prompt("Enter the remaining fuel in your car (in litres):")
  );
  
  if (fuel < 0.25) {
    console.log("Please refill the fuel in your car.");
  }
//     5. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.
// a. var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");}
var a = 4;
if (++a === 5) {
  alert("given condition for variable a is true");
}

// b. var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }

var b = 82;
if (b++ === 83) {
  alert("given condition for variable b is true");
}
// c. var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
//}
var c = 12;
if (c ++ === 13) {
  alert("condition 1 is true");
}
if (c === 13) {
  alert("condition 2 is true");
}
if (++c < 14) {
  alert("condition 3 is true");
}
if (c === 14) {
  alert("condition 4 is true");
}



// d. var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
//     alert("The cost equals");
// }


  
  
// e. if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }
// alert("The cost equals");
// }
// e. if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) 


  var materialCost = 20000;
  var laborCost = 2000;
  var totalCost = materialCost + laborCost;
  if (totalCost === laborCost + materialCost){
  console.log("The cost equals");
  }
if (true){
  console.log("True");
  }
  if (false){
  console.log("False");
  }
  
  if("car" < "cat"){
  console.log("car is smaller than cat");
  }
  

// 6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:
// Show the total marks, marks obtained, percentage, grade &
// remarks like:
let subject1Marks = +prompt("Enter marks obtained in subject English:");
let subject2Marks = +prompt("Enter marks obtained in subject Urdu:");
let subject3Marks = +prompt("Enter marks obtained in subject Math:");
let totalMarks = +prompt("Enter total marks:");

let obtainedMarks = subject1Marks+ subject2Marks + subject3Marks;
let percentage = (obtainedMarks / totalMarks) * 100;
let grade = "";
let remarks = "";

if (percentage >= 80) {
  grade = "A-one";
  remarks = "Excellent";
} else if (percentage >= 70) {
  grade = "A";
  remarks = "Good";
} else if (percentage >= 60) {
  grade = "B";
  remarks = "Need to improve";
} else {
  grade = "Fail";
  remarks = "Keep try";
}

document.write("<h1>Marks Sheet</h1>");
document.write("<br>");
document.write("Total Marks: " + totalMarks);
document.write("<br>");
document.write("Obtained Marks: " + obtainedMarks);
document.write("<br>");
document.write("Percentage: " + percentage.toFixed(2) + "%");
document.write("<br>");
document.write("Grade: " + grade);
document.write("<br>");
document.write("Remarks: " + remarks)


// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”
// Store a secret number (ranging from 1 to 10) in a variable.
var secretNumber = Math.floor(Math.random() * 10) + 1;

// Prompt user to guess the secret number.


// Check if the guessed number is correct or close enough.

// 8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.
// Prompt the user to enter a number.
var number = +prompt("Enter a number:");

// Check if the number is divisible by 3.

if (number % 3 === 0) {
  alert("The number is divisible by 3");
} else {
    alert("The number is not divisible by 3");
}


// 9. Write a program that checks whether the given input is an
// even number or an odd number.
// Prompt the user to enter a number.
var num = +prompt("Enter a number:");

// Check if the number is even or odd.

if (number % 2 === 0) {
  alert("The number is even.");
} else {
  alert("The number is odd.");
}
         


// 10. Write a program that takes temperature as input and
// shows a message based on following criteria
0// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”
// Prompt the user to enter the temperature.
var temperature = +prompt("Enter the temperature:");

// Check the temperature and display a message accordingly.


if (temperature > 40) {
  alert("It is too hot outside.");
} else if (temperature > 30) {
  alert("The Weather today is Normal.");
} else if (temperature > 20) {
  alert("Today’s Weather is cool.");
} else if (temperature > 10) {
  alert("OMG! Today’s weather is so Cool.");
} else {
  alert("The temperature is too low.");
}


// 11. Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user

var numb1 = +prompt("Enter the first number:");
var numb2 = +prompt("Enter the second number:");var operation = prompt("Enter the operation (+, -, *, /, %):");

var result;

if (operation === "+") {
  result = numb1 + numb2;
  alert("The calculated result is: " + result)
} else if (operation === "-") {
  result = numb1 - numb2;
  alert("The calculated result is: " + result)
} else if (operation === "*") {
  result = numb1 * numb2;
  alert("The calculated result is: " + result)
} else if (operation === "/") {
  result = numb1 / numb2;
  alert("The calculated result is: " + result)
} else if (operation === "%") {
  result = numb1 % numb2;
  alert("The calculated result is: " + result)
} else {
  alert("Invalid operation");
  
};