const prompt = require("prompt-sync")();

//group chat

// const user = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];
const user = [];
// const user = ["Princess45", "cat&doglovers", "helooo@000"];
// const user = ["Princess45"];
// const user = ["Lea123", "Princess45"];

if (user.length === 0) {
    console.log("No one is online");
        } else if (user.length === 1) {
    console.log(user[0]+" is online");
        } else if (user.length===2) {
    console.log(user[0],user[1]+" are online");
        } else if (user.length>2) {
    console.log(user[0],user[1]+" and " +(user.length-2) + " more on line");
}
      



