let creditLimit = 50;
let accountNumber = 222;
let beginningBalance = 150;
let totalCharges = 5;
let totalCredits = 10;
let newBalance = 0;



while(true){

newBalance = beginningBalance + totalCharges - totalCredits;

if (newBalance > creditLimit) console.log("credit limit exceeded");break;

};

console.log("The new balance is " + "" + newBalance);



