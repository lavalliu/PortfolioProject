// Step 1: npm init
// Step 2: npm install prompt-sync

const prompt = require("prompt-sync")();

var inputObject= {};
    
// Get the input elements
// const input1 = document.getElementById("inputTitle");
// const input2 = document.getElementById("inputFirstname");
// const input3 = document.getElementById("inputLastname");

// Get the values of the input elements
let inputTitle=prompt("Title");
let inputFirstname=prompt("First Name :");
let inputLastname=prompt("Last Name: ");

// Add the values to the object
var inputObject={
    Title: document.getElementById("inputTitle").value,
    Firstname: document.getElementById("inputFirstname").value,
    Lastname: document.getElementById("inputLastname").value
};
// Print the array to the console
console.log(inputObject);