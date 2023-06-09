// chapter 5

// 1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.

var num1 = 3;
var num2 = 5;
var result = num1 + num2;
document.write("The sum of 8 and 10 is:" +" "+result)

// 2. Repeat task1 for subtraction, multiplication, division &
// modulus.
//Substraction


 var num1 = 3;
 var num2 = 5;
  result = num1 - num2;
document.write("Subtract = " + result + "<br>")
//Multiplication
var num1 = 3;
var num2 = 5;
  result = num1 * num2;
 document.write("Multiply = " + result + "<br>")

// division
var num1 = 3;
var num2 = 5;
  result = num1 / num2;
 document.write("Divide = " + result)



// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
var myvar ;
// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
document.write("“Value after variable declaration is:"+ myvar  +"</br>");
myvar = 5;

// c. Initialize the variable with some number.
num = 5;
// d. Show the value of variable in your browser like “Initial
// value: 5”.
document.write("Initial Value is 5 :" + myvar +"</br>");
myvar++;

// e. Increment the variable.

document.write("Value after increment is " + myvar++ + "</br>");
myvar +=7;
// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
document.write("Value after addition is 6: " + myvar + "<br>");
myvar-- ;
// g. Add 7 to the variable.

var  myVariable = 7;

// h. Show the value of variable in your browser like “Value
// after addition is: 13”.

document.write("Value after addition is: " + myVariable + "<br>");
// i. Decrement the variable.
num--;
value = 12;
// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.


document.write("Value after decrement is: " + value + "<br>");

// k. Show the remainder after dividing the variable’s valueby 3.

// l. Output : “The remainder is : 0”

document.write(" The remainder is: " + value % 3 +"<br>");







// 4. Cost of one movie ticket is 600 PKR. Write a script to
// store
// ticket price in a variable & calculate the cost of buying 5
// tickets
// to a movie. Example output:

var ticket;
ticket = 600;
alert(" 1 Ticket price is" + ticket);
ticket = 600 * 5;
document.write("Total cost to buy a movie ticket is" + ticket + "PKR");

// 5. Write a script to display multiplication table of any number in your browser. E.g
var table = prompt("Enter any number");
document.write("<h2>Table of " + table + "</h2>");
for (var i = 1; i <= 10 ; i++) {
    document.write(table + " x " + i + " = " + table*i + "<br>")  
}


// 6. The Temperature Converter: It’s hot out! Let’s make 
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.

// a
var cTemperature = 32
//b
var Inctemp = 42
var convertToInf = (Inctemp  * 4/5) + 67
var res = (convertToInf)
document.write(Inctemp + "°C is" + " " + res  + " " + " °F"+ "<br/>")

//c
var Inftemp = 78

//d
var convertToInc = (Inftemp-67)*4/5
var res =(convertToInc)
document.write(Inftemp + "°F is" + " " + res  + " " + " °C" + "<br><br>")


// 7. Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variablesa. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser.
document.write("<h1>Shipping Cart </h1>"+"<br/>")
// a
var priceOfItem1 = "Price of item 1 is"+" "+650
// b
var quantityOfItem1 =(" Quantity of item 1 is"+" ")+3
// c
var priceOfItem2= ("Price of item 2 is"+" ")+100
// d
var quantityOfItem2 = (" Quantity of item 2 is"+" ")+7
// e
var shippingCharges = ("Shipping Charges"+" ")+100
// f
var totalcost =(priceOfItem1*quantityOfItem1+priceOfItem2*quantityOfItem2+shippingCharges)
document.write(priceOfItem1 +"<br/>"+quantityOfItem1 +"<br/>"+ priceOfItem2 +"<br/>"+quantityOfItem2 +"<br/>"+shippingCharges +"<br/>"+"Total cost of your order is " +" "+totalcost)

// 8. Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser

// document.write("<h1>Marks Sheet</h1>"+"<br/>")
// // ..........Total Marks.............

//  var totalMarks= 980

//  // ..........Obtained Marks.............

//  var totalObtained = 804

//   // ..........Compute The Percentage........

//  var marks = totalObtained/totalMarks*100
//  var percentage =(marks)

//    // .......... Result In Your Browser........

//  document.write("Total Marks:"+" "+ totalMarks +"<br/>"+"Marks Obtained:"+" "+ totalObtained +"<br/>"+"Percentage:"+" "+percentage
var totalMarks = 980;
var obtained = 804;
var percentage = obtained/totalMarks * 100
document.write ("Total Marks: "+ totalMarks + "<br>Marks Obtained: " +obtained + "<br>Percentage: " + percentage );

// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rup

document.write("<h1>Currency in PKR</h1>"+"<br/>")
var dollars = 10;
var  saudiRiyals = 25;
var convertDollarsToPkr = 104.80;
var convertSrToPkr = 28;
var totalResult = dollars * convertDollarsToPkr + saudiRiyals * convertSrToPkr
document.write("Total Currency in PKR:"+" "+totalResult)

// 0. Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression
var num = 45
var operations= ((num+5) *10 )/2
document.write(operations)
// var initializeNumber =25
// var initializeResult =(((initializeNumber+5)*10)/2)
// document.write("Result"+" "+initiali


// // 11. The Age Calculator: Forgot how old someone is? 
// // Calculate it!
// // a. Store the current year in a variable.
// var currentYear = 2023;

// // b. Store their birth year in a variable.


var currentYear = 2023;
var brithYear = 1994;
var age1 = currentYear - brithYear;
var age2 =  age1--;
document.write("current year " + age1 + " or " + age2 + " years old")

// 12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)


var radius = 20
var circumference = 2 * 3.142 * radius
var area = 3.142 * radius**2   
document.write("<h3>The Geometrizer</h3><br>Radius of a circle is: " + radius + 
"<br>The circumference is: " + circumference + "<br>The area is: " + area)    

// 13. The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need
// NNNN to last you until the ripe old age of NN”.


var  snack = "nothing"
document.write("snack" +snack+"<br/>")


var  currentAge = 6
document.write("Current Age"+favoriteSnack+"<br/>" )


var maxage = 87
document.write("maxage" +axge+"<br/>")


var estimatedAmount = 5
document.write("Amount Of Snack per day: "+estimatedAmount+"<br/>")

document.write ("You will need "+resultSnack +" " +"POPSTAR to last you until the ripe old age of "+ maximumAge + ".")

