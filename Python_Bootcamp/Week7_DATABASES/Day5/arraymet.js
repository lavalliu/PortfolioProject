const myArray = [2, 3, 4, 5, 6]; 

//1st example with arrow function
myArray.forEach((number, index) => { 
    console.log("number: ", number, "Index: ", index) // logs each element of the array
}); 
console.log("Ex 1");

//2nd example with arrow function
myArray.forEach((number, i, arr) => { 
    arr[i] = arr[i] * 2; 
    console.log("number: ", number, "Index: ", i) // logs each element of the array
}); 
console.log("Ex 2");

const numbers = [10,11,12,15,20];

numbers.forEach((number, i, arr) => { 
    // arr[i] = arr[i] * 2; 
    if (number % 2 == 0) {
    console.log("number: ", number, "Index: ", i) // logs each element of the array
    }
}); 
console.log("Ex 3");


//1st example
const myArr = [1, 2, 3, 4, 5, 6, 7, 8];
myArr.some((value)=> { console.log(value%2 == 0); });
console.log("Example 1");
//output : true 
//because there is at least one even number in the array

//2nd example
myArr.some((value)=> { console.log(value < 0); });
console.log("Example 2");
//output: false 
//because there is no negative number in the array

//If the arrow function is only returning a value you don't need the return keyword
//If the arrow function takes only one parameter you can omit the parentheses
myArr.some(value => value < 0 );

//output: false 
//because there is no negative number in the array

//3rd example
function isEven(x) {
  console.log(x) 
  console.log(x % 2 == 0);
}

myArr.some((value) => isEven(value));
console.log("Example 3");
//output : 1 2 true
//stops iterating as soon as an even number is found 

// Exercise SOME()
console.log("Exercise SOME(START)")
const words = ["wow","hey","bye"];
words.some((value, i) => console.log((words[i].charAt(0)) == 'h'));
console.log("Exercise SOME(END)")

//1st example
const myArr2 = [1, 2, 3, 4, 5, 6, 7, 8];
myArr2.every((value)=> { console.log (value > 0); });
//output : true 
//because all the elements of the array are positive

//2nd example
myArr2.every(value => value == 5 );
//output : false 
//because not all the elements of the array are equal to 5

//3rd example
myArr2.every((value) => { 
    console.log(value); 
    console.log(value != 4); 
});
//output 1 2 3 4 false
//because as soon as an element in the array is equal to 4, the method every() stops iterating 

//Exercise EVERY()
console.log("Exercise EVERY(START)")
const words2 = ["hello","hey","hola"];
words2.every((value, i) => console.log((words2[i].charAt(0)) == 'h'));
console.log("Exercise EVERY(END)")