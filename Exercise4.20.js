const ps = require("prompt-sync")
const prompt = ps();


	let name = "";
	let earnings = 0.0;
	let numberOfCitizens = 3;
	let tax = 0;
	let totalTax = 0;
	let count = 0;


	while(count < numberOfCitizens){
	name = prompt("Enter name ");

	earnings = Number(prompt("Enter earnings "));

	if(earnings <= 30000){
		tax = earnings * 0.15;
		}
	else{
		let taxDifference = earnings - 30000;
		tax = (30000 * 0.15) + (0.2 * taxDifference);
		}

		totalTax += tax;

		count++;
	}
	

	console.log("Total tax is " + "$" +Math.round(totalTax));





