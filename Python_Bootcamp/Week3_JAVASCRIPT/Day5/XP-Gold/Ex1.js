// Step 1: npm init
// Step 2: npm install prompt-sync

const prompt = require("prompt-sync")();


//divisible by 3

let numbers = [123, 8409, 100053, 333333333, 7]

for (var key in numbers) {
    console.log(numbers[key])
    switch (numbers[key] % 3) {
        case 0:
            console.log(true); 
            break;
        default:
            console.log("false")
            break;
}
}

