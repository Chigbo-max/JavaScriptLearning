const ps = require("prompt-sync")
const prompt = ps();

let grossSales = 0;
let salesPersonEarnings = 0;

while(true){

	let value = Number(prompt("Enter value of items sold in a week or -1 to quit"));
	grossSales += value;
	if(value == -1) break;
};
	salesPersonEarnings = 200 + 0.9 * grossSales;
	console.log("Salesperson's earnings is " + "$" + salesPersonEarnings);



