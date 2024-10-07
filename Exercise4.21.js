const ps = require("prompt-sync")
const prompt = ps();
		
	let number = 0;
	let largest = number;
	let count = 1;

	while(count <= 10){
		let number = Number(prompt("Enter a number: "));
		
		if (number > largest) largest = number;		
		count++;

	}
		
	console.log("Largest: ", largest;

	









