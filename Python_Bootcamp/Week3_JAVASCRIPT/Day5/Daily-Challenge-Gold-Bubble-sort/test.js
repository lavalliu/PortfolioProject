// Step 1: npm init
// Step 2: npm install prompt-sync

const prompt = require("prompt-sync")();

for(var i=0;i<9;i++){
    for(var j=0;j<9;j++){
       console.log(i,j);
    }
}