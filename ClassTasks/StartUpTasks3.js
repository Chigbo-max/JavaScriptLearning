let number = 10
let count = 0

while (count < number){ count++;
console.log(count);
}

/*do{
	console.log(count);
	count++;
	}
while(count < number)
*/

let arr = [1,2,3, "boy"];

let user = {
	age : 12,
	sex: "male",

};

//user is an object

for(let key in user){
	console.log(user[key]);

};

for(let index in arr){
	//console.log(index);
	console.log(arr[index]);
}

let word = "chinedu";

for (let char of word){
	console.log(char);

	}

let array = [1,2,"dog","hamster"];
for(let element of array){
	console.log([element]);
}