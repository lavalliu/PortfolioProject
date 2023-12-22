// let c = { greeting: 'Hey!' };
// let d;

// d = c;
// // c.greeting = 'Hello';
// console.log(d.greeting);

// say("Sarah"); 
// function say(name) {
//     console.log("Hello " + name);
// }         


// (function (name) {
//     console.log("Hello " + name);
// })("Sarah")


// Nested Functions
function verify (name) {            // outer function  
    function isJohn() {             // inner function
        return name === "John";     // full access to argument        
    }
    if (isJohn()) {
        console.log("Yep, this is John");
    }
}
verify("John");