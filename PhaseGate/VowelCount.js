let vowels = ['a', 'e', 'i', 'o', 'u'];

let sentence = "hello world";

let characters = sentence.split("")
let counter = 1;
for(let index = 0; index < vowels.length - 1; index++){
	for(let checker = index + 1; checker < characters.length; checker++){
		if (vowels[index] == characters[checker])counter++;
}
}
console.log(counter);