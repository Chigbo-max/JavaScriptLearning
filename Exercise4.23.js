const ps = require("prompt-sync")
const prompt = ps();
		
	let number = 0;
	let largest = number;
	let secondLargest = number;
	let count = 1;

	while(count <= 10){
		number = Number(prompt("Enter a number: "));
		if (number > largest){ 
		secondLargest = largest;
		largest = number;		
		}else if(number > secondLargest){
		secondLargest = number;
		}
		count++;

	}
		
	console.log("Largest", secondLargest);

	









