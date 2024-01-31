// Daily Challenge: Car Inventory
// Last Updated: September 22nd, 2023

// What You Will Learn :
// Use advanced array methods


// Instructions
// Part I

// Create a function getCarHonda(carInventory) that takes a single parameter. 
// carInventory‘s value is an array which is an inventory of cars (see the array of objects below)
// The function should
// loop through the array of object and return the first car with the name “Honda”.
// then, return a string in the format This is a {car_make} {car_model} from {car_year}.
// Hint : Find an array method that returns the value of the first element in an array that pass a test.
// Hint unclear for me
// Use the cars inventory below:
const inventory = [
  { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
  { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
  { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
  { id: 4, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
  { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
];

// PART 1
function getCarHonda(carInventory) {
    for (let i=0; i < inventory.length; i++)
        if (inventory[i].car_make =='Honda') {
            console.log(`This is a ${inventory[i].car_make} ${inventory[i].car_model} from ${inventory[i].car_year}`);
            break
        }
}

console.log("Part I");
getCarHonda();

// Part II

// Create a function sortCarInventoryByYear(carInventory) that takes a single parameter. 
// carInventory‘s value is an array which is an inventory of cars (see the array of objects below)
// the function should return an inventory that is sorted by car_year, ascending.

function sortCarInventoryByYear(carInv) {
    carInv.sort(function(a, b) {
        return a.car_year - b.car_year;
});
console.log(carInv);
}

console.log("Part II");
sortCarInventoryByYear(inventory);
