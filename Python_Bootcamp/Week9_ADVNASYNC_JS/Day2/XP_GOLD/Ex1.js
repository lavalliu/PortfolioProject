// Exercise 1 : Print Full Name
// Instructions
// Create a function called printFullName.
// The function should return a string like the example below
// printFullName({first: 'Elie', last:'Schoppik'}) 
// 'Your full name is Elie Schoppik`

function printFullName(obj) {
}
console.log("Structured");

printFullName({first: 'Elie', last:'Schoppik'});
// Destructure this object directly from the parameters (ie. Look at the Advanced Object lesson - Part II : Object destructuring used as an assignment to a function)
// The output of the printFullName function should be the exact same as the displayStudentInfo function. (Exercise XP)
function printFullName(obj) {
    let {first, last} = obj
    console.log(`Your full name is ${obj.first} ${obj.last}`);
}
console.log("Destructured");
printFullName({first: 'Elie', last:'Schoppik'});


