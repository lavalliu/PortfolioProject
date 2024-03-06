// Question 2:
// Write a javascript function that takes an array of numbers and a target number.
// The function should find two different numbers in the array that, when added together, 
// give the target number.
// For example: answer([1,2,3], 4) should return [1,3]


let array = [5,20,7,5,3,6]; 
let target = 23;
let resultArr = [];

function SearchTwoNum() {
    for (let i = 0; i < array.length; i++) {
        let firstNum = array[i];
        for (let y = i + 1; y < array.length; y++) {
            if (firstNum + array[y] == target) {
                resultArr.push(firstNum);
                resultArr.push(array[y]);
            }
        }
    }
    console.log(resultArr);

}

SearchTwoNum();