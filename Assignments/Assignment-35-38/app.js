// Assigment 35 to 38
// 1. Write a function that displays current date & time in your
// browser.

var date = new Date();
document.write(date);

// 2. Write a function that takes first & last name and then it
// greets the user using his full name.

function welcometheuser()
{
var firstName = "Sumera"
var lastName = "Fareed"
var greet = "Welcome" 

var result = (firstName+ " " + lastName+ " "+greet)
document.write(result)
}

// 3. Write a function that adds two numbers (input by user)
// and returns the sum of two numbers.

var num1 = 8;
var num2 = 2;

// add two numbers
var sum = num1 + num2;

// display the sum
document.write('The sum of ' + num1 + ' and ' + num2 + ' is: ' + sum);

// 4. Calculator:
// Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser.

function operation(num1, num2, operator) {
  var res ;

  if (operator === "+" ) {
      res = num1 + num2
  }
else if (operator === "-" ) {
  res = num1 - num2
}
else if (operator === "*" ) {
  res = num1 * num2
}
else if (operator === "/" ) {
  res = num1 / num2
}
else{
}
alert(res)
}
operation(3 , 4 , "+")

// 5. Write a function that squares its argument.
function square(number) {
  var result = number ** 2
  alert(result)
}
square(6)

// 6. Write a function that computes factorial of a number.
function factorial(num) {
  if (num > 1) {
      return num*factorial(num - 1)
  }
  return 1
}
alert(factorial(6))
// 7. Write a function that take start and end number as inputs
function counting() {
  var start = +prompt("Enter starting number")
  var end = +prompt("Enter ending number")

  for (let i = start; i <= end; i++) {
      document.write(i + "<br>");
    }
}
counting()
// & display counting in your browser.
// 8. Write a nested function that computes hypotenuse of a
// right angle triangle.
// Hypotenuse2 = Base2 + Perpendicular2
// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()

var base = 6;
var perpendicular = 2;
var findHypotenuse = (base, perpendicular) => {
   var bSquare = base ** 2;
   var pSquare = perpendicular ** 2;
   var sum = bSquare + pSquare;
   var hypotenuse = Math.sqrt(sum);
   return hypotenuse;
};
document.write(findHypotenuse(base, perpendicular));
document.write(findHypotenuse(45, 34));


// 9. Write a function that calculates the area of a rectangle.
//  A = width * height
//  Pass width and height in following manner:
// i. Arguments as value
function calculateArea(width, height) {
  var area = width * height;
  return area;
}
alert(calculateArea(4, 5))  



// ii. Arguments as variables
var rectangleWidth = 8;
var rectangleHeight = 10;
alert(calculateArea(rectangleWidth, rectangleHeight))
// 10. Write a JavaScript function that checks whether a passed
// string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as
// forward, e.g., madam.
function isPalindrome(str) {
     var len = str.length;
     for (var i = 0; i < len / 2; i++) {
       if (str[i] !== str[len - 1 - i]) {
         return false;
       }
     }
     return true;
   }
   var str1 = 'madam';
  
   document.write(isPalindrome(str1));
  
// 11. Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word of the
// string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'

function capitalize_First_Letter(text) {
   var words = text.split(" ");
   for (var i = 0; i < words.length; i++) {
     words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
   }
   return words.join(" ");
 }
 var text = 'the quick brown fox';
 var result = capitalize_First_Letter(text);
 document.write(result); 




// 12. Write a JavaScript function that accepts a string as a
// parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'

function find_longest_word(str)
{
  var array1 = str.match(/\w[a-z]{0,}/gi);
  var result = array1[0];

  for(var i = 1 ; i < array1.length ; i++)
  {
    if(result.length < array1[i].length)
    {
    result = array1[i];
    } 
  }
  return result;
}
document.write(find_longest_word('Web Development Tutorial'));

// 13. Write a JavaScript function that accepts two arguments, a
// string and a letter and the function will count the number of 
// occurrences of the specified letter within the string.
// Sample arguments : 'JSResourceS.com', 'o'

function char_count(str, letter) 
{
 var letter_Count = 0;
 for (var i = 0; i < str.length; i++) 
 {
    if (str.charAt(i) == letter) 
      {
      letter_Count += 1;
      }
  }
  return letter_Count;
}

document.write(char_count('JSResourceS.com', 'o'));

// 14. The Geometrizer
// Create 2 functions that calculate properties of a circle, using
// the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area
// is NN".
// Circumference of circle = 2πr
// Area of circle = πr2

function calcCircumfrence(radius) {
   var y = (Math.PI * radius) * 2;
 document.write("The circumfrence is " + y + "." + "<br>");
 }
 function calcArea(radius) {
   var x = (Math.PI * radius) * radius;
 document.write("The area is " + x + ".");
 }

 calcCircumfrence(30);
 calcArea(10);

