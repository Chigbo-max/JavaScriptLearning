const userInput = require("prompt-sync");
const prompt = userInput();


let sum = "";

let number = Number(prompt("Enter a number: "));
		
for(let counter = 1; counter <= number; counter++){
	for(let count = 1; count <= counter; count++){
		sum += "*";
		}
		sum += "\n";
		}
console.log(sum);