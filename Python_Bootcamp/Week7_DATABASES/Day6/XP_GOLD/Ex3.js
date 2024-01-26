// Exercise 3 : Remove Certain Values
// Instructions
// Write a JavaScript function to remove: null, 0, "", false, undefined and NaN values from an array.
// Sample array : [NaN, 0, 15, false, -22, '',undefined, 47, null]
// Expected result : [15, -22, 47]

let Array = [NaN, 0, 15, false, -22, '',undefined, 47, null];

function toRemove(Array) {
    let newArray = [];
    for (let i = 0; i < Array.length; i++) {
        let value = Array[i];
        if (value) {
            newArray.push(value);
        }
    }
    return(newArray);
}
toRemove();