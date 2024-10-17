const objects = {name: "Alice",
		age: 30,
		city: "Wonderland"
		};
	
let count = 0;

for (let properties in objects){

	count++;
	}
console.log(count);


let year = 1600
function isLeapYear(year){

	if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0){
	return true;
	}else{
	return false;
	}
}
console.log(isLeapYear(year));



const grades = {math: 90,
		english: 85,
		science: 88
		};

for (let studentGrades in grades){
	console.log(studentGrades + " : " + grades[studentGrades]);
	}


let temperatureInCelsius = 60;
function convertToFahrenheit(temperature){
	let temperatureInFahrenheit = temperatureInCelsius * (9/5) + 32;
	console.log("Fahrenheit = " + temperatureInFahrenheit);
	}
convertToFahrenheit(temperatureInCelsius)


const keys = {"groceries" : 100,
		"dining out" : 100,
		"transportation" : 50,
		"entertainment" : 80
		};

	let totalAmount = 0;
	for(let categories in keys){
	totalAmount += keys[categories];
	}
console.log("Total Amount = " + totalAmount);












































