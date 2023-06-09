    //assigment 17 to 20
//     1. Declare and initialize an empty multidimensional array.
// (Array of arrays)
var myarr= [
[[]],[[]]
];


// 2-Declare and initialize a multidimensional array
// representing the following matrix
var Matrix = [
  [0, 1, 2, 3],
  [0, 1, 2, 1],
  [2, 1, 0, 1]
]
alert(Matrix )



// 3. Write a program to print numeric counting from 1 to 10.
for (var i = 1; i <= 10; i++) {
  document.write(i + "<br>");
}




// 4. Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.
var tableNumber = +prompt("Enter the table number:");
var tableLength = +prompt("Enter the table length:");
document.write("<h3>Table of " + tableNumber + "</h3>" + "<h4>length: " + tableLength + "<br> </h4>");
for (var i = 1; i <= tableLength; i++) {
    document.write(tableNumber + " x " + i + " = " + tableNumber * i + "<br>");
  }

// 5. Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,
// “strawberry”]
var fruits = ["apple", "banana", "mango", "orange", "strawberry"] 

for (var i = 0; i < fruits.length; i++) {
    document.write (fruits[i] + "<br>")
}
for (var i = 0; i < fruits.length; i++) {
document.write ("Element at index "+ i + " is " +fruits[i] + "<br>")
}  

// 6. Generate the following series in your browser. See
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,15
for( var i=1; i<=15; i++)
 console.log(i)
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
for( var i=1; i>=15; i++)
 console.log(i)
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
 var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 var length = numbers.length;
 for (var i = 0; i < length; i++) {
   numbers[i] *= 2;
 }
 document.write(numbers)
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
 var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 var length = numbers.length;
 for (var i = 0; i < length; i++) {
   numbers[i] /= 2;
 }
 document.write(numbers)
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k


// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:
var bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties"];
var userInput = prompt("Enter an item to search in the bakery:");

var found = false
var index= -1

for (var i = 0; i < bakeryItems.length; i++) {
    if (userInput == bakeryItems[i]) {
        found = true 
        index = i
        break
    }  
}
if (found) {
    document.write(userInput + " is available at index " + index + " in our bakery");
} else {
    document.write("We are sorry. " + userInput + " is not available in our bakery");
}

// 8. Write a program to identify the largest number in the
// given array.
// A = [24, 53, 78, 91, 12].

 var numbers = [24, 53, 78, 91, 12];

 var result = numbers[0];
 for (var i=0; i < numbers.length; i++) {
     if (numbers[i] > result) {
         result = numbers[i];
     }
 }

 console.log("Largest number is: " + result);

// 9. Write a program to identify the smallest number in the
// given array.
// A = [24, 53, 78, 91, 12]
var numbers = [24, 53, 78, 91, 12];

 var smallest = numbers[0];

 for (var i = 1; i < numbers.length; i++) {

 if (numbers[i] < smallest) {
     smallest = numbers[i];
   }
   console.log(smallest);
 var result = numbers[0];
 for (var i=0; i < numbers.length; i++) {
     if (numbers[i] < result) {
         result = numbers[i];
     }
 }}

 console.log("Smallest number is: " + result);

// 10. Write a program to print multiples of 5 ranging 1 to
// 100.
for (var i = 1; i <= 100; i++) {
  if (i % 5 === 0) {
  document.write(i + ", ")
}
}
