// Step 1: npm init
// Step 2: npm install prompt-sync

const prompt = require("prompt-sync")();

// Biggest Number

const array = [-1,0,3,100, 99, 2, 99] ;// should return 100 
const array2 = ['a', 3, 4, 2]; // should return 4 
const array3 = []; // should return 0

function biggestNumberInArray(thearray) {

let num=0;
for (let i=0; i<thearray.length; i++)  {
    if (thearray[i]>num) {
        num=thearray[i];
    }
}
console.log(num);
}

biggestNumberInArray(array3);