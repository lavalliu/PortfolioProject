// Exercise 5 : Turtle & Rabbit
// For this exercise, look at the lesson More JS methods.

// Using this code :

// const startLine = '     ||<- Start line';
// let turtle = '🐢';
// let rabbit = '🐇';
// Line up the Turtle and the Rabbit at the start line.
// Expected Output:

//     When you write:

//     console.log(startLine);
//     console.log(turtle);
//     console.log(rabbit);

//     It should look like this:

//     '     ||<- Start line'
//     '       🐢'
//     '       🐇'

const startLine = '     ||<- Start line';
let turtle = '🐢';
let rabbit = '🐇';

turtle = turtle.padStart(9, " ");
rabbit = rabbit.padStart(9, " ");

console.log(startLine);
console.log(turtle);
console.log(rabbit);
