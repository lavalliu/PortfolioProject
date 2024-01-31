// Exercise 1 : Dog Age To Human Years
// Instructions
// Using the following data

const data = [
  {
    name: 'Butters',
    age: 3,
    type: 'dog'
  },
   {
    name: 'Cuty',
    age: 5,
    type: 'rabbit'
  },
  {
    name: 'Lizzy',
    age: 6,
    type: 'dog'
  },
  {
    name: 'Red',
    age: 1,
    type: 'cat'
  },
  {
    name: 'Joey',
    age: 3,
    type: 'dog'
  },
  {
    name: 'Rex',
    age: 10,
    type: 'dog'
  },
];
// Use a loop to find the sum of the dogs’ ages in human years.
// Hint: 1 dog year equals 7 human years
// Using the reduce() method, find the sum of the dogs’ ages in human years.

let result = data.filter((user) => user.type == 'dog')
console.log(result);

let age = result.reduce((acc, val) => {
    acc = acc + val.age;
    return acc;
},0);
console.log(`Sum of age of dogs is ${age}. Its equivalent in human years is ${age}*7`);


