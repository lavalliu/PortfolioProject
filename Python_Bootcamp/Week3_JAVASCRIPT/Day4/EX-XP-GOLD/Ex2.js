// Step 1: npm init
// Step 2: npm install prompt-sync


// the Grade Assigner
const prompt = require("prompt-sync")();

var grade = Number(prompt("Please enter your marks:"));


switch (true)
{
  case grade > 90:     
    console.log("A");
    break;
  case  grade > 80 && grade <= 90:
      console.log("B");
      break;
  case   grade >= 70 && grade <= 80:
    console.log("C");
    break;
  case grade < 70:      
    console.log("D");
    break;
  default:
    console.log("Invalid entry");
    break;
}