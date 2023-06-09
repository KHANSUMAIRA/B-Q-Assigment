// Assigment 26 to30

// 1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

var userInput = prompt ("Enter a positive integer")
document.write(("Number:" + " " + userInput) + "<br>")
document.write("Round off value:"+ " "+ Math.round(userInput) + " <br>");
document.write("Floor value:"+ " "+ Math.floor(userInput) + " <br>");
document.write("Ceil value:"+ " "+ Math.ceil( userInput))
// 2. Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

var userInput = prompt ("Enter a negative floating point number")
document.write(("Number:" + " " + userInput) + "<br>")
document.write("Round off value:"+ " "+ Math.round(userInput) + " <br>");
document.write("Floor value:"+ " "+ Math.floor(userInput) + " <br>");
document.write("Ceil value:"+ " "+ Math.ceil( userInput));
// 3. Write a program that displays the absolute value of a
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5

var x = -4;
x = Math.abs(x); // x would now be 25 
document.write("The absolute value of -4 is" + " " +x);
// 4. Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your
// browser.:

var dice = Math.floor( Math.random() * 6 ) +1;
document.write("The value of dice is:" + " " + dice);
// 5. Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser

var try1 = Math.floor(Math.random() * 2) +1;

var try2 = Math.floor(Math.random() * 2) +1;
if( try1 === try2){
     document.write('You Got TAIL');
   }else{
     document.write('You Got HEAD');
  }
// 6. Write a program that shows a random number between 1
// and 100 in your browser.

document.write(Math.floor(Math.random() * 100) + 1)
// 7. Write a program that asks the user about his weight. Parse
// the user input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms
var userInput = prompt("Enter your weight in kilograms..")
// 8. Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user.
var userInput = prompt("Enter the number between 1 and 10")
var secretNum = 6;
if(userInput == secretNum){
    alert("Congratulation! Your secret number is correct. ")
}