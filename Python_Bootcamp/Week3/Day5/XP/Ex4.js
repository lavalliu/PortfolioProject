// Step 1: npm init
// Step 2: npm install prompt-sync

const prompt = require("prompt-sync")();

//building management

const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}

console.log(building.numberOfFloors);

console.log(building.numberOfAptByFloor.firstFloor);
console.log(building.numberOfAptByFloor.thirdFloor);

console.log(building.nameOfTenants[1]);

console.log(building.numberOfRoomsAndRent.dan[0]);
let total=(building.numberOfRoomsAndRent.sarah[1])+(building.numberOfRoomsAndRent.david[1]);
console.log(total);
if (total < (building.numberOfRoomsAndRent.dan[1])) {
    let (building.numberOfRoomsAndRent.dan[1])=1200;
}