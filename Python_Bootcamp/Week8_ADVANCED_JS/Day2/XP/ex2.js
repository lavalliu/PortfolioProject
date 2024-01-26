
const prompt=require('prompt-sync')();

//KG & GRMS

let a = parseInt(prompt("Enter weight in Kilograms : "));


function conversion(a) {
    console.log(a*1000 + " grams");
}
conversion(a);

// let conversion = function (a) {
//     console.log(a*1000 + " grams");
// }

// let conversion = (a) => {
//     console.log(a*1000 + " grams");
// }


