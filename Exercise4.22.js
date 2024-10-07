
console.log(
	'N'.padStart(10)+
	'N2'.padStart(10)+
	'N3'.padStart(10)+
	'N4'.padStart(10)
);

		let result;
		let row;

		for(let count = 1; count <= 5; count++){		
			row = count.toString().padStart(10);

			for(let power = 1; power <= 4; power++){		
				result = Math.pow(count, power);
													row += result.toString().padStart(10);


			}
			console.table(row);


		}

	