// Step 1: npm init
// Step 2: npm install prompt-sync

const prompt = require("prompt-sync")();


//family

var family = {
    name: "Laval",
    members: 5,
    pets: "dog",
    address: "127 Balaclava"
    };
    
 
    for (var key in family) {
    console.log(key); 
    }
    

    for (var key in family) {
    console.log(family[key]); 
    }