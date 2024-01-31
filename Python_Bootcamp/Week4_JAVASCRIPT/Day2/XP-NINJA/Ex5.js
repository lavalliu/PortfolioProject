// Step 1: npm init
// Step 2: npm install prompt-sync

const prompt = require("prompt-sync")();

// Unique Elements

list=[1,2,3,3,3,3,4,5,9,0,3,4,2,5,4,10,5]


function uniqueElements(list) {
let list2=list.sort();
let num=0;
for (let i=0; i<list2.length; i++)  {
    if (list2[i]===num) {
        list2.splice(i,1);
        i=i-1;
    } 
    num=list2[i];
}
console.log("List of unique elements : " + list2);
}

uniqueElements(list);