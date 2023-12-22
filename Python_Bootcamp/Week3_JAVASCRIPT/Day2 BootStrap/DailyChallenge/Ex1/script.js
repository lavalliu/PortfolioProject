const fruits = ["Banana", "Apples", "Oranges", "Blueberries"];
fruits.splice(0,1);
console.log(fruits);
fruits.sort();
console.log(fruits);
fruits.push("Kiwi");
console.log(fruits);
let fruits2=fruits.slice(1)
console.log(fruits2);
console.log(fruits2.reverse());