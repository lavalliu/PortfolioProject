//is it a string?
let isString = (argmnt) => (typeof argmnt === "string" ? true : false);

console.log(isString('hello')); 
//true
console.log(isString([1, 2, 4, 0]));
//false