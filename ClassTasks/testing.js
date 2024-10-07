/*let number = 20;
console.log(number);
number = 0;
console.log(number);
let name = "chigbo";
console.log(name);

for(let num = 0; num <=10; num++){
number += num;
}
console.log(number);

for(let num = 0; num <=10; num++){
console.log(name);
} 
*/

let var1 = 2;

let var2= 3;

let var3= 5;

temp = var3;
var3 = var1;
var1 = var2

var2 = temp


console.log("var1 = " + var1);
console.log("var2 = " + var2);
console.log("var3 = " + var3);

sum = ""
sum1 = ""
sum2 = ""
sum3 = ""
sum4 = ""


for(let i = 1; i <= 6; i++){
	for(let j = 1; j <= i; j++){
	sum+= "="
	}
	sum+= "\n"
	}
	console.log(sum)
	

for(let i = 6; i >= 1; i--){
	for(let j = i; j >= 1; j--){
	sum1 +=  ">"
		}

	sum1 += "\n"
	}

	console.log(sum1)	
	



for(let i = 6; i >= 1; i--){
	for(let j = i; j >= 1; j--){
	sum2 +=  " "
		}

	for(let k = 6; k >= i; k--){
	sum2 +=  "^"
		}
	sum2 += "\n"

	}

	console.log(sum2)

for(let i = 1; i <= 6; i++){
	for(let j = 1; j <= i; j++){
	sum3+= " "
	}
	for(let k = i; k <= 6; k++){
	sum3+= "="
	}
	sum3+= "\n"
	}
	console.log(sum3)



for(let i = 6; i >= 1; i--){
	for(let j = i; j >= 1; j--){
	sum4 +=  " "
		}

	for(let k = 6; k >= i; k--){
	sum4 +=  "^ "
		}

	for(let l = 1; l <= i; l++){
	sum4+= " ="
	}

	sum4 += "\n"

	}

	console.log(sum4)
	

