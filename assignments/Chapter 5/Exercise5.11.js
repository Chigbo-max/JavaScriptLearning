const userInput = require("prompt-sync");
const prompt = userInput();
				
let integer = Number(prompt("Enter number of values: "));
		

let counter = 1;
let maximum = Number.MIN_VALUE;
let minimum = Number.MAX_VALUE;

do{
	let number = Number(prompt("Enter a number: "));
	if(number > maximum) maximum = number;
	if(number < minimum) minimum = number;
	counter++;

}while(counter <= integer);

let sum = maximum + minimum;
		
console.log("Maximum: " + maximum + " " +"Minimum: " + minimum);
console.log("Sum: " + sum);


