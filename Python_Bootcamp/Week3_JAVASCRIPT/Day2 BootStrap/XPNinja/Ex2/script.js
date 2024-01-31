let myNums=[3,6,9,10,43,23,54,55,27,81,21,41,3];

// use reduce() method to find the sum
// var sum = myNums.reduce((accumulator, currentValue) => {return accumulator + currentValue},0);

// console.log(sum)  //376
 
// calculate sum using forEach() method
// let sum=0;

// myNums.forEach( num => {sum += num});
  
//   console.log(sum) //376

  // iterate over each item in the array
  let sum=0;
for (let i = 0; i < myNums.length; i++ ) { sum += myNums[i] };
  
  console.log(sum) //376