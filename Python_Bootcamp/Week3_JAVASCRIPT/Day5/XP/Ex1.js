// Step 1: npm init
// Step 2: npm install prompt-sync

const prompt = require("prompt-sync")();


//list of people
const people = ["Greg", "Mary", "Devon", "James"];

people.shift(0); //remove element 0

console.log(people);


people.splice(2,1,"Jason"); //replaces element 2 by 1
console.log(people);

people.push("Laval"); //add a new at the end of array
console.log(people);


console.log(people.indexOf("Mary")); //get the index of Mary in the array


console.log(people.slice(1,3));  //new array removing first and rd element

console.log(people.indexOf("Foo")); //result = -1 because Foo does not exit in the array

console.log(people.length);

last=people[people.length-1];
console.log(last);



console.log(people);
for (let i=0; i<people.length; i++) {
    console.log(people[i]);
}

console.log(people);


for (let i=0; i<people.length; i++) {
 
    if (people[i]=="Devon") {
        break;
    }
    console.log(people[i]);
}