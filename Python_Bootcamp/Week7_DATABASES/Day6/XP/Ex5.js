//colors #2
// Write a JavaScript program that displays the colors in the following order : 
// “1st choice is Blue .” “2nd choice is Green.” “3rd choice is Red.” ect…
// Hint : Use the array methods taught in class and ternary operator.

const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th","st","nd","rd"];

colors.forEach((color, i)=> { 
    let ordinalVar=0;
    if ((i<=2) && (i=>0)) {
        ordinalVar=i+1;
    } 
console.log(i+1+ordinal[ordinalVar], "choice is", color);
});
