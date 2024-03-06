// Optional JS Exercises

// Question 1:
// Clean the room function:

// Given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], make a function that organizes these, 
// into individual array that is ordered.
// For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591].
// Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] 
// should return [[1,2], ["2", "3"]]

const ArrayFromAbove = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];
ArrayFromAbove.sort(function(a, b){return a - b});
let newArray = [];
let tempArray = [];

function answer() {
    for (let i=0; i < ArrayFromAbove.length; i++) {
        if (ArrayFromAbove[i] !== ArrayFromAbove[i + 1]) {
            tempArray.push(ArrayFromAbove[i]);
            newArray.push(tempArray);
            tempArray = [];
            continue
        }
        tempArray.push(ArrayFromAbove[i]);
    }
    console.log("New Array : ", newArray);
}

answer(ArrayFromAbove);
