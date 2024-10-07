const person ={
	id : "chinedu",
	name : "Ade",
	age : 17,
	hobbies : ["football", "eating","singing"]
};
console.log(person.hobbies[0], person.hobbies[1])
console.log(person.id)

let balance = 5000
let withdrawal = 10000

let result = (balance < withdrawal)? "Insufficient funds" : "You can withdraw";

console.log(result);


let user = {
	age : 12,
	sex: "male",

};

for(let key in user){
	console.log(user[key]);

};

let arr = [1,2,3,"boy"]

for(let bale in arr){
console.log(arr[bale]);
};












//though "person" is constant and can't be changed, the properties of the "person" can be modified
person.sex = "female";

//to get just "eating" and "singing"

console.log(person.hobbies[1], person.hobbies[2]);


