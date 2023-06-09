// Assigment 21 to 25

// 1. Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.
var firstName = prompt("Enter your First name")
 var lastName = prompt("Enter your last name")
 var fullName = (firstName + " " + lastName)
 var greet = "Hello"
 alert(fullName + " " + greet)
// 2. Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser

 var userInput = prompt ("Enter your favorite mobile model")
  for(var i=0; i > length.userInput; i++)
  console.log(userInput)
// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .

let myString = "Pakistani"
document.write("String: " + myString)
document.write("<br>Index of 'n': " + myString.indexOf("n"))

// 4. Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.
var word = "Hello World"
document.write("String: " + word)
document.write("<br>Last index of 'l': " + word.lastIndexOf("l"))

// 5. Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.
var string = "Pakistani"
document.write("String: " + string)
document.write("<br>Character at index 3: " + string.charAt(3))
// 6. Repeat Q1 using string concat() method.

 var firstName = prompt("Enter your First name")
 var lastName = prompt("Enter your last name")
 var fullName = firstName.concat(lastName);
 alert(fullName);
// 7. Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.
var city = "Hyderabad"
document.write("City: " + city)
document.write("<br>After replacement: " + city.replace("Hyder" , "Islam"))

// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and
// football together.”;
var message = ("Ali & Sami are best friends.They play cricket & football together.")
document.write(message)
// 9. Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.
// var num = "472";
var numString = "472"
document.write("Value: " + numString + "<br>Type: " + typeof(numString) )
var convert = Number(numString)
document.write("<br>Value: " + convert + "<br>Type: " + typeof(convert))
// 10. Write a program that takes user input. Convert and
// show the input in capital letters.
 var userInput= prompt("Enter Your Name");
 var userName = userInput.toLocaleLowerCase();
 var capitalized = userName.slice(0,1);
 var capital = capitalized.toUpperCase();
 alert (capital+userName.slice(1));
//  11. Write a program that takes user input. Convert and
// show the input in title case.

var userInput= prompt("Enter Your Name");
var userName = userInput.toLocaleLowerCase();
alert (userName);

// 12. Write a program that converts the variable num to
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.
//  var num = "35.36";
//   num.pop(3);
//  document.write(num)
// 13. Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .
// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64
var uName = prompt("Enter your username:");
if (uName.includes(String.fromCharCode(33)) || uName.includes(String.fromCharCode(44)) || uName.includes(String.fromCharCode(46)) || uName.includes(String.fromCharCode(64)) ) {
   alert("Enter a valid username")
}
else{
   alert("welcome")
}
// 14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability. Example:

var bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties"];
var inputOfUser = prompt("Enter an item to search in the bakery:");
var myInput = inputOfUser.toLowerCase()
var found = false
var index= -1

for (var i = 0; i < bakeryItems.length; i++) {
    if (myInput == bakeryItems[i]) {
        found = true 
        index = i
        break
    }  
}
if (found) {
    document.write(myInput + " is available at index " + index + " in our bakery");
} else {
    document.write(" sorry. " + myInput + " is not available in our bakery");
}

// 15. Write a program to take password as an input from
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.
var password = prompt("Enter a password")

if (password.length >= 6 && /[a-zA-Z]/.test(password) && /\d/.test(password) && /^[^0-9]/.test(password)) {
   alert("ok")
}else{
   alert("enter a valid password")
}
       


// 16. Write a program to convert the following string to an
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.
 var university = "University of Karachi";
 var arr = []
 arr = university.split(3)
 for (var i = 0; i< arr.length; i++){  
 console.log(arr[i]);  
 }  
// 17. Write a program to display the last character of a user
// input.
var character = prompt("Enter a word")
var lastCharacter = character.slice(-1);
// document.write("Last character: " + lastCharacter);
// 18. You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string.

var sentence = "The quick brown fox jumps over the lazy dog";
document.write ("Text: " + sentence)

var countWord = "the"
var count = 0;
var words = sentence.split(" ")

for (var i = 0; i < words.length; i++) {
   if (words[i].toLowerCase() === countWord) {
       count++;
   }
}

document.write ("<br>Their are " + count + " occurrences of word “the” ")