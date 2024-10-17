const userInput = require("prompt-sync");
const prompt = userInput();

let number = Number(prompt("Enter a number: "));
let sum = 0;

while (true){
	let integer = Number(prompt("Enter a number or '0' to quit: "));

	if (integer == 0) break;
		sum += integer;
	if (sum >= number) break;
			}
	console.log("The sum is: " + sum);


