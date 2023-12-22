// let myObj = {
//     name : "John",
//     lastName : "Doe",
//     age : 25,
//     friends : ["Mark", "Lucie", "Ana"]
// }

// console.log(Object.values(myObj));

// const object1 = {
//     a: 'somestring',
//     b: 42,
//     c: false
//   };
  
//   console.log(Object.entries(object1));
  // expected output: 
  // [ [ 'a', 'somestring' ], [ 'b', 42 ], [ 'c', false ] ]
  
//   for (let [key, value] of Object.entries(object1)) {
//     console.log(`${key}: ${value}`);
//   }
  
  // expected output:
  // a: somestring
  // b: 42
  // c: false

  const shopping = [
    ["apple", "$2"],
    ["pear", "$1"],
    ["banana", "$0.77"],
  ];
  
  const shoppingObject = Object.fromEntries(shopping);
  console.log(shoppingObject); // { apple: '$2', pear: '$1', banana: '$0.77' }