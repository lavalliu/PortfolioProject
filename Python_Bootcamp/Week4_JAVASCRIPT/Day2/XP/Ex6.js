// Step 1: npm init
// Step 2: npm install prompt-sync

const prompt = require("prompt-sync")();

//Vacation costs
 
function hotelCost() {
let nights;
const rateNight = 140;
while (true) {
    nights = prompt("How many nights would you like to stay in the hotel?");
    if (isNaN(nights)) {
        console.log("Please enter a valid number.");
    } else {
        break;
    }
}
roomCost = nights * rateNight;
console.log("Your room Costs : $" + roomCost);
}
function planeRideCost() {
let destination;
let destList = {
    "London": 183,
    "Paris": 220,
    "Others": 300
}
while (true) {
    destination = prompt("What is your destination please?");
    if (destList[destination]>0) {
        flightCost=destList[destination];
        console.log("Your trip costs : $"+flightCost)
        break;
    } else {
        console.log("Please reinput destination (London, Paris or Others) :");
    }
}
}
function rentalCarCost() {
let dayCar;
let rateCar = 40;
while (true) {
    dayCar = prompt("How many days do you wish to rent the car? ");
    if (isNaN(dayCar) || dayCar==0) {
        console.log("Please enter a valid number: ");
    } else if (dayCar>10) {
            rateCar=38;
    } 
    carCost=dayCar*rateCar;
    console.log("Your Car costs :$" + carCost);
    break;
}
}
function totalVacationCost() {
hotelCost();
planeRideCost();
rentalCarCost();
totalCost=carCost+flightCost+roomCost;
console.log("Your total cost is : $" + totalCost);
}

totalVacationCost();