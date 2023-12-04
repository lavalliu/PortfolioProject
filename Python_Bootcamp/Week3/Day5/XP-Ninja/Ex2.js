// Step 1: npm init
// Step 2: npm install prompt-sync

const prompt = require("prompt-sync")();

//Grade Average

const gradeList=[95, 56, 74, 35, 75, 81, 61];
let sum=0;
function findAvg() {
    for (let i = 0; i < gradeList.length; i++) {
        sum += gradeList[i];
    }
}
function checkPass() {
findAvg();
if (sum>65) {
    console.log("Congratulations you PASSED!");
} else {
    console.log("Unfortunately your average is less than 65 and you have failed!");
}
}
checkPass();