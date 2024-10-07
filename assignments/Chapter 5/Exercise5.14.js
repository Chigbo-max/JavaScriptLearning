
let principal = 1000;
		
console.log("Year" + "\t" + "Amount on deposit");
		
for(let year = 1; year <= 10; year++){

	for(let rate = 0.05; rate <= 0.1; rate+=0.01){
			
		let amount = principal * Math.pow(1.0 + rate, year);

		console.log(year +"\t" + amount.toFixed(2));	
			}
				
		console.log();
			}

		