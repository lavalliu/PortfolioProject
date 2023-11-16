// Step 1: npm init
// Step 2: npm install prompt-sync

const prompt = require("prompt-sync")();


//group chat


const user = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];
// const user = [];
// const user = ["Princess45", "cat&doglovers", "helooo@000"];




if (user.length === 0) {
    alert("No one is online.");
        } else if (user.length === 1) {
    alert(`${user[0]} is online.`);
        } else if (user.length === 2) {
    alert(`${user[0]} and ${user[1]} are online.`);
        } else {
    alert(`${user[0]}, ${user[1]}, and ${user.length - 2} more are online.`);
}
