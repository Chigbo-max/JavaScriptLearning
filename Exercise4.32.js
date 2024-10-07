const userInput = require("prompt-sync");
const prompt = userInput();

let input = Number(prompt("Enter a number: "));

let firstNumber = (input % 10) * 1;
let firstWholeNumber = Math.floor(input / 10);

let secondNumber = (firstWholeNumber % 10) * 2;
let secondWholeNumber =  Math.floor(firstWholeNumber / 10);

let thirdNumber = (secondWholeNumber % 10) * 4;
let thirdWholeNumber = Math.floor(secondWholeNumber / 10);

let fourthNumber = (thirdWholeNumber % 10) * 8;
let fourthWholeNumber = Math.floor(thirdWholeNumber / 10);

let fifthNumber = (fourthWholeNumber % 10) * 16;

console.log(firstNumber + secondNumber + thirdNumber + fourthNumber + fifthNumber);


