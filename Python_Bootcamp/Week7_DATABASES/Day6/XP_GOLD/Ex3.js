// Exercise 3 : Remove Certain Values
// Instructions
// Write a JavaScript function to remove: null, 0, "", false, undefined and NaN values from an Arrayay.
// Sample Arrayay : [NaN, 0, 15, false, -22, '',undefined, 47, null]
// Expected result : [15, -22, 47]

let Array = [NaN, 0, 15, false, -22, '',undefined, 47, null];

function removeFalsey(Array) {
    return Array.filter((k) => {
        if (k) {
            return k;
        }
    });
}
console.log(removeFalsey(Array));