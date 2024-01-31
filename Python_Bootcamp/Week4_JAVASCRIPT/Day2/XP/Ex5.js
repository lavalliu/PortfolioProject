// Step 1: npm init
// Step 2: npm install prompt-sync

const prompt = require("prompt-sync")();

//what's in my wallet

// const itemPrice=14.11;
// const amountOfChange= [2,100,0,0];

const itemPrice=0.75; 
const amountOfChange=[0,0,20,5];
function changeEnough(itemPrice, amountOfChange) {
    const quarters=amountOfChange[0]*0.25;
    const dimes=amountOfChange[1]*0.1;
    const nickel=amountOfChange[2]*0.05;
    const penny=amountOfChange[3]*0.01;
    const total=quarters+dimes+nickel+penny;
    console.log("Money I have : " + total);
    console.log("Total Price : " + itemPrice);
    if (itemPrice>total) {
        console.log("false");
    } else if (itemPrice<=total) {
        console.log("true");
    }
}
changeEnough(itemPrice, amountOfChange);
