// Exercise 1: Sum Elements
// Instructions
// Write a JavaScript program to find the sum of all elements in an array.

let array=[12,14,25,34];
var sum=0;
array.forEach((sum, i) => {
    sum=sum+array[i];
});
console.log(sum);

