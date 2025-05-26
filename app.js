//Assignment 9-11 chapter
// USER INPUT & CONDITIONALSTATEMENT

//1.

// var city = prompt("Enter your city name:");

// if (city == "karachi") {
//     alert("Welcome to city of lights");
// }

//2.

// var gender = prompt("Enter your gender:");
// if (gender === "male") {
//     alert("Good Morning Sir.");
// } else if (gender === "female") {
//     alert("Good Morning Mam.");
// }

//3.

// var color = prompt("Enter traffic signal color:");

// if (color === "Red") {
//     alert("Must Stop");
// } else if (color === "Yellow") {
//     alert("Ready to move");
// } else if (color === "Green") {
//     alert("Move now");
// }

//4.

// var fuel = prompt("Enter remaining fuel in liters:");

// if (fuel < 0.25) {
//     alert("Please refill the fuel in your car");
// }

//5.

//a.
// var a = 4;
// if (++a === 5) {
//     alert("given condition for variable a is true");
// }
// Output: Alert shows and say given condition for variable a is true

//b.

// var b = 82;
// if (b++ === 83) {
//     alert("given condition for variable b is true");
// }
//Output: Not shown 


//c.

// var c = 12;
// if (c++ === 13) {
//     alert("condition 1 is true");
// }
// // //Output: Not shown 

// if (c === 13) {
//     alert("condition 2 is true");
// }
//Output: shown (condition 2 is true)

// if (++c < 14) {
//     alert("condition 3 is true");
// }
//Output: Not shown 

// if (c === 14) {
//     alert("condition 4 is true");
// }
//Output: shown (condition 4 is true)

//d.

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;

// if (totalCost === laborCost + materialCost) {
//     alert("The cost equals");
// }
//Output: shown (The cost equals)

//e.

// if (true) {
//     alert("True");
// }
// Output: shown (True)

// if (false) {
//     alert("False");
// }
//Output: Not shown 

//f.

// if ("car" < "cat") {
//     alert("car is smaller than cat");
// }
// Output: shown (car is smaller than cat)


//6.

// var subject1 = +prompt("Enter marks for subject 1:");
// var subject2 = +prompt("Enter marks for subject 2:");
// var subject3 = +prompt("Enter marks for subject 3:");
// var totalMarks = 300;

// var obtainedMarks = subject1 + subject2 + subject3;
// var percentage = (obtainedMarks / totalMarks) * 100;

// if (percentage >= 80) {
//     var grade = "A-one";
//     var remarks = "Excellent";
// } else if (percentage >= 70) {
//     var grade = "A";
//     var remarks = "Good";
// } else if (percentage >= 60) {
//     var grade = "B";
//     var remarks = "You need to improve";
// } else {
//     var grade = "Fail";
//     var remarks = "Sorry";
// }

// document.write("Marks Sheet<br>");
// document.write("Total marks: " + totalMarks + "<br>");
// document.write("Marks obtained: " + obtainedMarks + "<br>");
// document.write("Percentage: " + percentage + "%<br>");
// document.write("Grade: " + grade + "<br>");
// document.write("Remarks: " + remarks);

//7.

// var secretNumber = 9;
// var guess = +prompt("Guess the secret number (1 to 10):");

// if (guess === secretNumber) {
//     alert("Bingo! Correct answer");
// } else if (guess + 1 === secretNumber || guess - 1 === secretNumber) {
//     alert("Close enough to the correct answer");
// } else {
//     alert("Try again!");
// }

//8.

// var num = +prompt("Enter a number to check divisibility by 3:");

// if (num / 3 === 0) {
//     alert(num + " is divisible by 3.");
// } else {
//     alert(num + " is not divisible by 3.");
// }

//9.

// var number = +prompt("Enter a number to check if it is even or odd:");

// if (number / 2 === 0) {
//     alert(number + " is an even number.");
// } else {
//     alert(number + " is an odd number.");
// }

//10.

// var temp = +prompt("Enter the temperature:");

// if (temp > 40) {
//     alert("It is too hot outside.");
// } else if (temp > 30) {
//     alert("The Weather today is Normal.");
// } else if (temp > 20) {
//     alert("Today's Weather is cool.");
// } else if (temp > 10) {
//     alert("OMG! Today's weather is so Cool.");
// } else {
//     alert("It's very cold outside.");
// }


//Assignment 12-13 chapter
// IF…ELSE & ELSE IF STATEMENT,TESTING SET OF CONDITIONS 

//1.

// var input = prompt("Enter a single character:");

// if (input >= "0" && input <= "9") {
//     alert("You entered a number.");
// } else if (input >= "A" && input <= "Z") {
//     alert("You entered an uppercase letter.");
// } else if (input >= "a" && input <= "z") {
//     alert("You entered a lowercase letter.");
// } else {
//     alert("You entered something else.");
// }


//2.

// var num1 = +prompt("Enter the first number:");
// var num2 = +prompt("Enter the second number:");

// if (num1 > num2) {
//     alert(num1 + " is larger.");
// } else if (num2 > num1) {
//     alert(num2 + " is larger.");
// } else {
//     alert("Both numbers are equal.");
// }

//3.

// var num = +prompt("Enter a number:");

// if (num > 0) {
//     alert("The number is positive.");
// } else if (num < 0) {
//     alert("The number is negative.");
// } else {
//     alert("The number is zero.");
// }

//4.

// var letter = prompt("Enter a single letter:");

// if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u"
//    ) {
//     alert("True – it is a vowel.");
// } else {
//     alert("False – it is not a vowel.");
// }

//5.

// var correctPassword = "hahaha123";
// var userPassword = prompt("Enter your password:");

// if (userPassword === null) {
//     alert("Please enter your password.");
// } else if (userPassword === correctPassword) {
//     alert("Correct! The password you entered matches the original password.");
// } else {
//    alert("Incorrect password.");
// }

//6.

// var greeting;
// var hour = 13;

// if (hour < 18) {
//     greeting = "Good day";
// } else {
//     greeting = "Good evening";
// }

//7.

var time = prompt("Enter the current time in 24-hour format (e.g., 1900 for 7pm):");

if (time >= 0 && time < 1200) {
    alert("Good morning!");
} else if (time >= 1200 && time < 1700) {
    alert("Good afternoon!");
} else if (time >= 1700 && time < 2100) {
    alert("Good evening!");
} else if (time >= 2100 && time <= 2359) {
    alert("Good night!");
} else {
    alert("Invalid time entered! Please use 24-hour format (0000-2359).");
}



