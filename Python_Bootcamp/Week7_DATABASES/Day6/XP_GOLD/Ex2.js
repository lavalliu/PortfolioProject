// Exercise 2 : Remove Duplicates
// Instructions
// Write a JavaScript program to remove duplicate items in an array.

let array=[12,14,25,34,25,3,34,0,2];
console.log("Input : ", array);
array.forEach((i) => { 
    let j=i+1;
    while (j < array.length-1) {
        if (array[i] == array[j]) {
            array.splice(i,1);
        }
        j++;
    }
});
console.log("Output : ", array);

