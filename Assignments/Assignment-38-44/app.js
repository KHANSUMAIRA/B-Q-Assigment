//  Write a custom function power ( a, b ), to calculate the value of 
//  aised to b.1.


// function power(a, b) {
//   var result = a ** b
//   document.write(`<br> ${a} raised to power ${b} is ${result}`)
//   document.write("<br> " + a + " raised to power " + b + " is " + result);
//   return result
// }
// power(2, 5)
// document.write("<hr>")

// 2. Any year is entered through the keyboard. Write a function to
// determine whether the year is a leap year or not.
// Leap years ..., 2012, 2016, 2020, …

function Checkleapyear()
{
var a ;
a = parseInt(prompt("Enter current year"));
if(a%4==0) {
   alert("This is a leap year" , a);
}
else {
   alert("This is not leap year" ,a)
}
}
Checkleapyear()

// 3. If the lengths of the sides of a triangle are denoted by a, b, and
// c, then area of triangle is given by
// area = S(S − a)(S − b)(S − c)
// where, S = ( a + b + c ) / 2
// Calculate area of triangle using 2 functions


document.write("Calculate Triangle Area")
function calcS(a, b, c) {
  return (a + b + c) / 2
}
function calculateArea(a, b, c) {
  var S = calcS(a, b, c)
  var area = Math.sqrt(S * (S - a) * (S - b) * (S - c))
  document.write(`<br> A = ${a}, B = ${b}, C = ${c} and S = ${S}`)
  document.write(`<br> The Area of the triangle is ${area}`)
  document.write("<br> A = " + a + ", B = " + b + ", C = " + c + " and S = " + S);
  document.write("<br> The Area of the triangle is " + area);

}
var sideA = 6
var sideB = 3
var sideC = 2
calculateArea(sideA, sideB, sideC)
document.write("<hr>")


// 4. Write a function that receives marks received by a student in 3
// subjects and returns the average and percentage of these
// marks. there should be 3 functions one is the mainFunction
// and other are for average and percentage. Call those functions
// from mainFunction and display result in mainFunction.

document.write("Student Marks")
function calculateAvg(subject1, subject2, subject3) {
  var totalMarks = subject1 + subject2 + subject3
  var avg = totalMarks / 3
  return avg.toFixed(2)
}
function calculatePercentage(subject1, subject2, subject3) {
  var totalMarks = subject1 + subject2 + subject3
  var maxMarks = 300
  var percentage = (totalMarks / maxMarks) * 100
  return percentage.toFixed(2)
}
function mainFunction(subject1, subject2, subject3) {
  var average = calculateAvg(subject1, subject2, subject3)
  var percentage = calculatePercentage(subject1, subject2, subject3)

  document.write(`<br> Average: ${average}`)
  document.write(`<br> Percentage: ${percentage}%`)
  document.write("<br> Average: " + average);
  document.write("<br> Percentage: " + percentage + "%");
}
// var sub1 = 97
// var sub2 = 36
// var sub3 = 44
// mainFunction(subject1, subject2, subject3)
// document.write("<hr>")

// 5. You have learned the function indexOf. Code your own custom
// function that will perform the same functionality. You can code
// for single character as of now.

function customIndexOf(str, char) {
  
  for (var index = 0; index < str.length; index++) {
    if (str[index] === char) {
      return index
    }
  }
  return 
}

var sentence = "Hello World"
var index = customIndexOf(sentence, "W")

document.write(`<br> String: ${sentence}`)
document.write("<br> String: " + sentence);
document.write("<br> Char to find 'W'")
document.write("<br>Index of 'W' is " + index)
document.write("<hr>")

// 6. Write a function to delete all vowels from a sentence. Assume
// that the sentence is not more than 25 characters long.

document.write("Remove vowels")
function deleteVowels(sentence) {
  var vowels = ['a', 'e', 'i', 'o', 'u']
  var result = ''

  
  for (var index = 0; index < sentence.length; index++) {
    var char = sentence[index].toLowerCase();
    if (!vowels.includes(char)) {
      result += sentence[index]
    }
  }
  return result
}
var sentence = "This is a test sentence"
var result = deleteVowels(sentence)
document.write("<br> String: " + sentence)
document.write("<br> Vowels removed: " + result)
document.write("<hr>")

// 7. Write a function with switch statement to count the number of
// occurrences of any two vowels in succession in a line of text.
// For example, in the sentence
// “Pleases read this application and give me gratuity”
// Such occurrences are ea, ea, ui.

document.write("Count occurrences of vowels in succession in a line of text")
function countVowels(text) {
  var vowels = ['a', 'e', 'i', 'o', 'u']
  var count = 0

  text = text.toLowerCase()
  
  for (var index = 0; index < text.length; index++) {
    var currentChar = text[index];
    var nextChar = text[index + 1];

    switch (currentChar) {
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
        if(vowels.includes(nextChar)){
        if (vowels.includes(nextChar)) {
          count++
          console.log(currentChar, nextChar);
        }
        break;
    

      Default;
        break;
      }
    }
  }
  return count
}
var sentence = "Pleases read this application and give me gratuity"
var count = countVowels(sentence)
document.write("<br> Sentence: "+ sentence)
document.write("<br> Number of Occurrences: "+ count)
document.write("<br> Sentence: " + sentence)
document.write("<br> Number of Occurrences: " + count)
document.write("<hr>")

// 8. The distance between two cities (in km.) is input through the
// keyboard. Write four functions to convert and print this
// distance in meters, feet, inches and centimeters.


var userInput = prompt("Enter the distance in KM")
function toMeters(km) {
  return km * 1000
}
function toFeet(km) {
  return km * 3280.84
}
function toInches(km) {
  return km * 39370.1 
  return km * 39370.1
}
function toCentimeters(km) {
  return km * 100000
}
document.write("<br>Distance in Kilo Meters: " + userInput + "km");
document.write("<br>Distance in Meters: " + toMeters(userInput) + "m");
document.write("<br>Distance in Feet: " + toFeet(userInput) + "ft");
document.write("<br>Distance in Inches: " + toInches(userInput) + "In");
document.write("<br>Distance in Centimeters: " + toCentimeters(userInput) + "cm");
document.write("<hr>")


// 9. Write a program to calculate overtime pay of employees.
// Overtime is paid at the rate of Rs. 12.00 per hour for every hour
// worked above 40 hours. Assume that employees do not work
// for fractional part of an hour.

document.write("Overtime Pay calculator")
function calculateOvertimePay(hours) {
  var regularHours = 40
  var overtimeRate = 12.00
  if (hours > regularHours) {
    var overtimeHours = hours - regularHours
    var overtimePay = overtimeHours * overtimeRate
    return overtimePay
  }
  return 0
}
var hoursWorked = 45
document.write("<br>Regular Hours: 40")
document.write("<br>Overtime Rate: 12.00")
document.write("<br>Hours Worked: " + hoursWorked)
document.write("<br>Overtime Pay: " + calculateOvertimePay(hoursWorked))
document.write("<hr>")

// 10. A cashier has currency notes of denominations 10, 50 and
// 100. If the amount to be withdrawn is input through the
// keyboard in hundreds, find the total number of currency notes
// of each denomination the cashier will have to give to the withdrew

document.write("Calculate Curreny Note")
var hundreds = prompt("Enter amount to withdraw")
function calculateCurrencyNotes(amountInHundreds) {
  var note100 = Math.floor(amountInHundreds / 100)
  amountInHundreds %= 100
  var note50 = Math.floor(amountInHundreds / 50)
  amountInHundreds %= 50
  var note10 = Math.floor(amountInHundreds / 10)
  return {
    note100,
    note50,
    note10
  }
}
var notes = calculateCurrencyNotes(hundreds)
document.write("<br>Amount to withdraw: " + hundreds)
document.write("<br>Number of 100 Notes: " + notes.note100)
document.write("<br>Number of 50 Notes: " + notes.note50)
document.write("<br>Number of 10 Notes: " + notes.note10)
