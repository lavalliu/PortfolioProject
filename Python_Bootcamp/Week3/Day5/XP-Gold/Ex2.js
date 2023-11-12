// Step 1: npm init
// Step 2: npm install prompt-sync

const prompt = require("prompt-sync")();


//attendance

let guestList = {
    randy: "Germany",
    karla: "France",
    wendy: "Japan",
    norman: "England",
    sam: "Argentina"
  }
const nom = prompt("Please enter your name : ");

console.log(Object.values(guestList).indexOf(nom));
console.log(nom);
if (Object.values(guestList).indexOf(nom) != -1) {
    
  console.log(`Hi! I'm ${nom} and I'm from ${guestList[nom]}.`);

} else {

console.log("Hi! I'm a guest");
}

//not working