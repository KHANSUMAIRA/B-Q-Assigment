// Assigment 31 to 34
// 1. Write a program that displays current date and time in
// your browser.

 var current = new Date();
 var days = ['sun', 'mon','tues', 'wed']
 document.write(current)
// 2. Write a program that alerts the current month in words.
// For example December.
 var current = new Date();
 document.write(current)
 document.write(current.getMonth)
// 3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.


var weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
var newDates = new Date();
 var dayIndex = newDates.getDay()
if (dayIndex == 0 || dayIndex == 6 ) {
    alert("It's Fun day")
} 
else{
    alert("It's working day")
}

// 4. Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.

var currentDate = new Date();
currentDate.toString;
var b = currentDate.toString();
var c = b.slice(0,3);
if (c === "Sat"){
    document.write("It's Fun Day")
}else if(c === "Sun"){
    document.write("It's Fun Day")
}

// 5. Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”

var message1 = 1-15;
var message2 = 16-30/31;
if('message2'>'message1'){
    alert("First fifteen days of the month")
}

 if('message1'>'message2'){

        alert("First fifteen days of the month")     
}


// 6. Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.

var todayDate = new Date();
var Todaymilli = todayDate.getTime();
var todayMin = todayDate.getMinutes();
var diff = Todaymilli - todayMin;
var diffMin = diff/(1000*60*60);
var accurateMin = Math.floor(diffMin);


document.write("Current Date: " + todayDate);
document.write("<br> Elapsed milliseconds since midnight, Jan 1, 1970: " + Todaymilli);
document.write("<br> Elapsed minutes since midnight, Jan 1, 1970: " + accurateMin)

// 7. Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.

var laterDate = function(y,m){
    return  new Date(y, m +1, 0).getDay();
    }
    console.log("the last day of the last month of 2020 is:" + laterDate(2020,12));

// 8. Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.

var laterDate = new Date(2020, 12, 31)
alert("Later date: " + laterDate )


// 9. Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015

var ramadanDate = new Date("june , 18 ,2015")
var CurrentDate = new Date()
var timeDiff = CurrentDate.getTime() - ramadanDate.getTime()
var daysPassed = Math.floor(timeDiff / (1000 * 60 * 60 * 24))
alert(daysPassed + " since 1st Ramadan, 2015")

// 10. Write a program that displays in your browser the
// seconds that elapsed between the reference date and the
// beginning of 2015.

var refDate = new Date("December 5, 2015 22:50:00")
var begin2015 = new Date("January 1, 2015")
var difference = refDate.getTime() - begin2015.getTime();
var secondsPassed = Math.floor(difference / 1000);
document.write("on reference date "+ refDate + "<br>")
document.write(secondsPassed + " seconds passed since the beginning of 2015")
// 11. Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser.
var mineDate = new Date()
document.write("Current date: " + mineDate)
var currentHours = mineDate.getHours()
mineDate.setHours(currentHours - 1)
document.write("<br>1 hour ago, it was " + mineDate)

// 12. Write a program that creates a date object and show the
// date in an alert box that is reset to 100 years back?

var dated = new Date()
alert("Current date: " + dated);
dated.setFullYear (dated.getFullYear() - 100)
alert("100 years back, it was " + dated);

// 13. Write a program to ask the user about his age. Calculate
// and show his birth year in your browser.

 var userInput = prompt("Your age")
 var DOB = new Date();

 DOB.setFullYear(userInput)
 DOB.getMonth(userInput)
 DOB.setDate(userInput)
 document.write(DOB)
 var myAge = current-DOB
 document.write(myAge/(1000*60*60*24*365.25))

// 14. Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where,

var customerName = prompt("Enter your name")
var currentMonth = prompt("Enter current month")
var NumberOfUnits = prompt("Enter number of units")
var ChargesPerUnit = prompt("Enter charges per unit")
var lateCharges = prompt("Enter late payment surcharge ")

var netAmount =( NumberOfUnits * ChargesPerUnit) .toFixed(2)
var grossAmount = (parseFloat(netAmount) + parseFloat(lateCharges)).toFixed(2)

document.write("<h3> K-Electric bill </h3>")
document.write("<br>Customer Name: " + customerName)
document.write("<br>Current Month: "+ currentMonth)
document.write("<br>Number of units: "+NumberOfUnits)
document.write("<br>Charges per unit: "+ChargesPerUnit)
document.write("<br>Net Amount Payable (within Due Date): "+netAmount)
document.write("<br>Late Payment Surcharge: "+lateCharges)
document.write("<br>Gross Amount Payable (after Due Date): "+grossAmount)