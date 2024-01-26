const prompt = require("prompt-sync")();

function testYear() {
    let InputYear=prompt("Enter the year : ")
    if (InputYear>2000) {
        console.log("You live in the 21st Century")
    } else {
        console.log("You live in the Middle Age")
    }
}

testYear();