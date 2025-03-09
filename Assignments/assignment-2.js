// let number = prompt("Enter a number:");
// if (number % 3 === 0) {
//     console.log("Number is divisible by 3");
// } else {
//     console.log("Number is not divisible by 3");
// }

// let number = prompt("Enter a number:");
// if (number % 2 === 0) {
//     console.log("The number is even.");
// } else {
//     console.log("The number is odd.");
// }

// let age = prompt("Enter your age:");
// if (age > 18) {
//     console.log("Old enough");
// } else {
//     console.log("Too young");
// }

// let name = prompt("Enter your name:");
// let myName = "YourName";
// if (name === myName) {
//     console.log("Hello, " + myName + "!");
// }

// let number = prompt("Enter a number:");
// switch (number % 3) {
//     case 0:
//         console.log("Number is divisible by 3");
//         break;
//     default:
//         console.log("Number is not divisible by 3");
// }

// let input = prompt("Enter a character:");
// let asciiCode = input.charCodeAt(0);

// if (asciiCode >= 48 && asciiCode <= 57) {
//     console.log("It's a number.");
// } else if (asciiCode >= 65 && asciiCode <= 90) {
//     console.log("It's an uppercase letter.");
// } else if (asciiCode >= 97 && asciiCode <= 122) {
//     console.log("It's a lowercase letter.");
// } else {
//     console.log("It's neither a number nor a letter.");
// }

// let number1 = parseFloat(prompt("Enter the first number:"));
// let number2 = parseFloat(prompt("Enter the second number:"));
// let operator = prompt("Enter an operator (+, -, *, /, %):");
// switch (operator) {
//     case "+":
//         console.log(number1 + number2);
//         break;
//     case "-":
//         console.log(number1 - number2);
//         break;
//     case "*":
//         console.log(number1 * number2);
//         break;
//     case "/":
//         console.log(number1 / number2);
//         break;
//     case "%":
//         console.log(number1 % number2);
//         break;
//     default:
//         console.log("Invalid operator");
// }

// let time = prompt("Enter time in 24-hour format (e.g., 1900 for 7 PM):");

// if (time >= 0000 && time < 1200) {
//     console.log("Good Morning!");
// } else if (time >= 1200 && time < 1700) {
//     console.log("Good Afternoon!");
// } else if (time >= 1700 && time < 2000) {
//     console.log("Good Evening!");
// } else if (time >= 2000 && time <= 2359) {
//     console.log("Good Night!");
// } else {
//     console.log("Invalid time format.");
// }

/*
let year = prompt("Enter a year in YYYY format:");
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(year + " is a leap year.");
} else {
    console.log(year + " is not a leap year.");
}

let storedPassword = "correctPassword";  // Store the correct password
let enteredPassword = prompt("Enter your password:");

if (enteredPassword === "") {
    console.log("Please enter your password");
} else if (enteredPassword === storedPassword) {
    console.log("Correct! The password you entered matches the original password.");
} else {
    console.log("Incorrect password.");
}

let firstName = "Ali";
if (firstName === "Fahad") {
    console.log("Hello Fahad!");
} else {
    console.log("You are not Fahad.");
}

let greeting;
let hour = 13;
if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}
console.log(greeting);

let num1 = prompt("Enter the first number:");
let num2 = prompt("Enter the second number:");
if (num1 > num2) {
    console.log(num1 + " is larger.");
} else if (num2 > num1) {
    console.log(num2 + " is larger.");
} else {
    console.log("Both numbers are equal.");
}

let number = prompt("Enter a number:");
if (number > 0) {
    console.log("The number is positive.");
} else if (number < 0) {
    console.log("The number is negative.");
} else {
    console.log("The number is zero.");
}

let hour = prompt("What is the current hour (in 24-hour format)?");
if (hour >= 6 && hour <= 9) {
    console.log("Breakfast is served.");
} else if (hour >= 11 && hour <= 13) {
    console.log("Time for lunch.");
} else if (hour >= 17 && hour <= 20) {
    console.log("It's dinner time.");
} else {
    console.log("Sorry, you'll have to wait, or go get a snack.");
}

let variable = prompt("Enter a value:");
if (typeof variable === "number") {
    console.log("The variable is a number.");
} else if (typeof variable === "string") {
    console.log("The variable is a string.");
} else if (typeof variable === "boolean") {
    console.log("The variable is a boolean.");
} else {
    console.log("The variable is of type undefined.");
}

let char = prompt("Enter a character:");
let vowels = ['a', 'e', 'i', 'o', 'u'];
if (vowels.includes(char.toLowerCase())) {
    console.log("True, it is a vowel.");
} else {
    console.log("False, it is not a vowel.");
}

if (10 !== 8) {
    console.log("True");
}
let month = prompt("Enter a month number (1-12):");
switch (month) {
    case "1":
        console.log("January");
        break;
    case "2":
        console.log("February");
        break;
    case "3":
        console.log("March");
        break;
    case "4":
        console.log("April");
        break;
    case "5":
        console.log("May");
        break;
    case "6":
        console.log("June");
        break;
    case "7":
        console.log("July");
        break;
    case "8":
        console.log("August");
        break;
    case "9":
        console.log("September");
        break;
    case "10":
        console.log("October");
        break;
    case "11":
        console.log("November");
        break;
    case "12":
        console.log("December");
        break;
    default:
        console.log("Invalid month number");
}

let age = prompt("Enter your age:");
let voteable = age < 18 ? "Too young" : "Old enough";
console.log(voteable);

let name = prompt("Enter your name:");
alert("Hello, " + name + "!");

let number = prompt("Enter a number:");
let table = number ? number : 5;
for (let i = 1; i <= 10; i++) {
  console.log(table + " x " + i + " = " + (table * i));
}

let city = prompt("Enter your city:");
if (city === "Karachi") {
  console.log("Welcome to the city of lights");
}

let gender = prompt("Enter your gender (male/female):");
if (gender === "male") {
  console.log("Good Morning Sir");
} else if (gender === "female") {
  console.log("Good Morning Ma'am");
}

let signalColor = prompt("Enter the color of traffic signal:");
if (signalColor === "red") {
  console.log("Stop");
} else if (signalColor === "yellow") {
  console.log("Ready");
} else if (signalColor === "green") {
  console.log("Go");
}

let maxAge = prompt("Enter max age:");
let currentAge = prompt("Enter current age:");
if (currentAge <= maxAge) {
  console.log("You are welcome");
}

let fuel = prompt("Enter remaining fuel in liters:");
if (fuel < 0.25) {
  console.log("Please refill the fuel in your car");
}

var a = 4;
if (++a === 5) {
  alert("given condition for variable a is true");
}

var b = 82;
if (b++ === 83) {
  alert("given condition for variable b is true");
}

var c = 12;
if (c++ === 13) {
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

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
  alert("The cost equals");
}

if (true) {
  alert("True");
}
if (false) {
  alert("False");
}

if ("car" < "cat") {
  alert("car is smaller than cat");
}

let subject1 = prompt("Enter marks for subject 1:");
let subject2 = prompt("Enter marks for subject 2:");
let subject3 = prompt("Enter marks for subject 3:");
let totalMarks = 300;
let obtainedMarks = parseInt(subject1) + parseInt(subject2) + parseInt(subject3);
let percentage = (obtainedMarks / totalMarks) * 100;

let grade;
if (percentage >= 80) {
  grade = "A+";
} else if (percentage >= 70) {
  grade = "A";
} else if (percentage >= 60) {
  grade = "B";
} else if (percentage >= 50) {
  grade = "C";
} else if (percentage >= 40) {
  grade = "D";
} else {
  grade = "F";
}

console.log("Total Marks: " + totalMarks);
console.log("Marks Obtained: " + obtainedMarks);
console.log("Percentage: " + percentage + "%");
console.log("Grade: " + grade);

let item1 = prompt("Enter name of item 1:");
let item2 = prompt("Enter name of item 2:");
let price1 = parseFloat(prompt("Enter price of item 1:"));
let price2 = parseFloat(prompt("Enter price of item 2:"));
let qty1 = parseInt(prompt("Enter quantity of item 1:"));
let qty2 = parseInt(prompt("Enter quantity of item 2:"));
let shippingCharges = parseFloat(prompt("Enter shipping charges:"));

let totalCost = (price1 * qty1) + (price2 * qty2) + shippingCharges;

if (totalCost > 2000) {
  totalCost = totalCost - (totalCost * 0.10);
}

console.log("Item 1: " + item1 + " | Price: " + price1 + " | Quantity: " + qty1);
console.log("Item 2: " + item2 + " | Price: " + price2 + " | Quantity: " + qty2);
console.log("Shipping Charges: " + shippingCharges);
console.log("Total Cost: " + totalCost);

let secretNumber = 7;
let guess = prompt("Guess the secret number (1-10):");

if (parseInt(guess) === secretNumber) {
  console.log("Bingo! Correct answer");
} else if (parseInt(guess) + 1 === secretNumber) {
  console.log("Close enough to the correct answer");
}

let number = prompt("Enter a number:");
if (number % 3 === 0) {
  console.log("The number is divisible by 3");
}

let teamA = prompt("Enter team A name:");
let teamB = prompt("Enter team B name:");
let scoreA = parseInt(prompt("Enter score of team A:"));
let scoreB = parseInt(prompt("Enter score of team B:"));

if (scoreA > scoreB) {
  console.log(teamA + " wins");
} else if (scoreB > scoreA) {
  console.log(teamB + " wins");
} else {
  console.log("It's a tie");
}

let inputString = prompt("Enter a string:");
let inputNumber = prompt("Enter a number:");
let inputBoolean = prompt("Enter a boolean value:");

console.log("Type of string: " + typeof inputString);
console.log("Type of number: " + typeof inputNumber);
console.log("Type of boolean: " + typeof inputBoolean);

let number = prompt("Enter a number:");
if (number % 2 === 0) {
  console.log("The number is even");
} else {
  console.log("The number is odd");
}

let temp = prompt("Enter the temperature:");
if (temp > 40) {
  console.log("It is too hot outside.");
} else if (temp > 30) {
  console.log("The Weather today is Normal.");
} else if (temp > 20) {
  console.log("Today’s Weather is cool.");
} else if (temp > 10) {
  console.log("OMG! Today’s weather is so Cool.");
}

let num1 = prompt("Enter the first number:");
let num2 = prompt("Enter the second number:");
let operation = prompt("Enter the operation (+, -, *, /, %):");

let result;
if (operation === "+") {
  result = parseFloat(num1) + parseFloat(num2);
} else if (operation === "-") {
  result = parseFloat(num1) - parseFloat(num2);
} else if (operation === "*") {
  result = parseFloat(num1) * parseFloat(num2);
} else if (operation === "/") {
  result = parseFloat(num1) / parseFloat(num2);
} else if (operation === "%") {
  result = parseFloat(num1) % parseFloat(num2);
}

console.log("Result: " + result);

let day = prompt("Enter a day:");
if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday") {
  console.log("It's a week day");
} else if (day === "Saturday") {
  console.log("It's weekend");
} else if (day === "Sunday") {
  console.log("Yay! It's a holiday");
}

let score = prompt("Enter your score:");
if (score > 50) {
  console.log("You are passed");
} else {
  console.log("Try again!");
}

let num1 = prompt("Enter the first number:");
let num2 = prompt("Enter the second number:");

if (num1 > num2) {
  console.log("The greater number is " + num1);
} else if (num2 > num1) {
  console.log("The greater number is " + num2);
} else {
  console.log("The numbers are equal");
}

let langCode = prompt("Enter a language code (es, de, en):");
if (langCode === "es") {
  console.log("¡Hola, Mundo!");
} else if (langCode === "de") {
  console.log("Hallo, Welt!");
} else {
  console.log("Hello, World!");
}

let number = prompt("Enter a number:");
if (number > 0) {
  console.log("The number is positive");
} else {
  console.log("The number is negative");
}

let noun = prompt("Enter a noun:");
let number = prompt("Enter a number:");
if (number === "1") {
  console.log(number + " " + noun);
} else {
  console.log(number + " " + noun + "s");
}
*/
