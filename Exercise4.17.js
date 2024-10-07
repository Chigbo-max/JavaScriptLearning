
let numberOfTrips = 3;
let milesDriven = 200;
let gallonsUsed = 6;
let totalGallonsUsed  = 0;
let totalMilesDriven = 0;
let combinedMilesPerGallon = 0;
let milesPerGallon = 0;
let count = 1;


while(count <= numberOfTrips){
totalGallonsUsed += gallonsUsed;
totalMilesDriven += milesDriven;
milesPerGallon = milesDriven / gallonsUsed;
count++;

};
combinedMilesPerGallon = totalMilesDriven / totalGallonsUsed;
console.log("Combined miles per gallon = " + " " + combinedMilesPerGallon);
