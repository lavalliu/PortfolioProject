// Exercise 1
// Analyse the code before executing it. What will be the output

// let c = { greeting: 'Hey!' }; / c here is an object and both c.object and d.object refers to the same address
// whereas c='Hey!' is a primitive address and together with d they refer to different address 
let c = 'ok';
let d;

d = c;
c = 'Hello';
console.log(d);