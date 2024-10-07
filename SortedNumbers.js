const userInput = require("prompt-sync");
const prompt = userInput();


let number_of_elements = Number(prompt("Enter number of elements: "))

array = []

for(let count = 0; count < number_of_elements; count++){
	let number = Number(prompt("Enter an integer: "));
	array.push(number);
	}

for(let index = 0; index < array.length; index++){
	for(let checker = 1; checker < array.length; checker++){
		if(array[checker-1] > array[checker]){
			let temp = array[checker - 1];
			array[checker - 1] = array[checker];
			array[checker] = temp;

			}

		}

	}

console.log(array);






