let sum = "";
let sum1 = "";
let sum2 = "";
let sum3 = "";


		for(let count = 1; count <= 10; count++){

			for(let counter = 1; counter <= count; counter++){

				sum+="*";
			}
				sum+="\n"
			}

			console.log(sum);


		for(let countee = 10; countee >= 1; countee--){
			for(let counterr = countee; counterr >= 1; counterr--){
		
				sum1+="*";
			}

				sum1+="\n"

		}
			console.log(sum1);




		for(let count = 1; count <= 10; count++){
			for(let counter = 1; counter <= count; counter++){

				sum2+=" ";
			}

		for(let counterr = 10; counterr >= count; counterr--){
				sum2+="*";
			}
				sum2+="\n"

			}
			console.log(sum2);



		for(let countee = 10; countee >= 1; countee--){
			for(let counterr = countee; counterr >= 1; counterr--){
		
					sum3+=" ";

				}
				for(let counterrr = 10; counterrr >= countee; counterrr--){
		
					sum3+="*";

			}
					sum3+="\n";


		}

			console.log(sum3);




