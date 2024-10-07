const userInput = require("prompt-sync");
const prompt = userInput();

let number = Number(prompt("Enter a five digit integer: "));

let fifthInteger = 0;
let firstInteger = 0;

if (number >= 10000 && number <= 99999 || number <= -10000 && number >= -99999){
	fifthInteger = number / 10000;
	let fourthInteger = number / 1000;
	let thirdInteger = number / 100;
	let secondInteger = number / 10;
	firstInteger = number % 10;
	}else{
	console.log("Number is not a five-digit integer");
	number = Number(prompt("Enter a five digit integer: "));
	}

if (fifthInteger == firstInteger){
	console.log("Number is a palindrome");
	}else{
console.log("Number is not a palindrome");
}
