const userInput = require("prompt-sync");
const prompt = userInput();


let passes = 0;
let failures = 0;
let studentCounter = 1;


while (studentCounter <= 10) {
let result = prompt("Enter result (1 = pass, 2 = fail): ");
if(result != 2 && result != 1) continue;

if (result == 1) {
passes = passes + 1;
}
else {
failures = failures + 1;
}

studentCounter = studentCounter + 1;

}

console.log("Passes = " + passes, "failures = " + failures);

if (passes > 8) {
console.log("Bonus to instructor!");

};