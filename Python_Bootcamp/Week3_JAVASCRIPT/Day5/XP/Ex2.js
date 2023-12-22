// Step 1: npm init
// Step 2: npm install prompt-sync

const prompt = require("prompt-sync")();


//your favorite colors

const color=["Yellow","Grey","Blue","Red","Green"];

for (let i=0; i<color.length; i++) {
    j=i+1
    let k="th"
    switch (j) {
        case 1:
            k="st";
            break;
        case 2:
            k="nd";
            break;
        case 3:
            k="rd";
            break;
        default:
            k="th";
            break;
      }
    console.log("My " +j+k + " choice is " + color[i]);
}
