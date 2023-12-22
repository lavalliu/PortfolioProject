// example 1. Creating An Empty Object
// An empty object (“empty cabinet”) can be created using one of two syntaxes:
// let user = new Object(); // "object constructor" syntax
// let user = {};  // "object literal" syntax

// example 2. Accessing the object values
// For example, let’s create an object named myCar and give it properties named make, model, and year as follows:
// let myCar = new Object();
// myCar.make = 'Ford';
// myCar.model = 'Mustang';
// myCar.year = 1969;

// console.log(myCar.color); // undefined since the property color does not exist

// example : Bracket-Notation : ObjectName[“PropertyName”]
// myCar['make'] = 'Ford';
// myCar['model'] = 'Mustang';
// myCar['year'] = 1969;

// Example : 3. Computed Properties
// You can also access properties by using a string value that is stored in a variable:

// let myCar = new Object()

// let propertyName = 'make';
// myCar[propertyName] = 'Ford';

// propertyName = 'model';
// myCar[propertyName] = 'Mustang';

// console.log(myCar)

// Example : 4. Property Value Shorthand
// Used when properties have the same names as variables

// function makeUser(name, age) {
//   return {
//     name: name,
//     age: age,
//     // ...other properties
//   };
// }

// let user = makeUser("John", 30);
// console.log(user.name); // John

// // The same as
// function makeUser(name, age) {
//   return {
//     name, // same as name: name
//     age,  // same as age: age
//     // ...
//   };
// }


// Example 5. Looping Through An Object : For .. In

function showProps(obj, objName) {
  let result = '';
  for (let i in obj) {
    // obj.hasOwnProperty() is used to filter out properties from the object's prototype chain
    if (obj.hasOwnProperty(i)) {
      result += `${objName}.${i} = ${obj[i]}\n`;
    }
  }
  return result;
}

showProps(myCar, "myCar")


// const person = {
//     name: 'Lydia',
//     age: 21,
//   };
  
//   for (const item in person) {
//     console.log(item);
//   }

  //it will display name : Lydia and age : 21