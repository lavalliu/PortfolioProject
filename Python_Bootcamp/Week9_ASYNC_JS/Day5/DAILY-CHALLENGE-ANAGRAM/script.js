const prompt = require("prompt-sync")();

let string1=prompt("Enter first string : ");
let string2=prompt("Enter second string : ");

function anagram_comparison() {
    array1=string1.toLowerCase().split("");
    array2=string2.toLowerCase().split("");
    console.log(array1);
    console.log(array2);
    sortarray1=array1.sort();
    sortarray2=array2.sort();
    console.log(sortarray1);
    console.log(sortarray2);
    
    finalString1=array1.join("").trim();
    finalString2=array2.join("").trim();
    console.log(finalString1);
    console.log(finalString2);
    
    // return finalString1 === finalString2;
    if (finalString1==finalString2) {
        console.log("true");
        return true;
    } else {
        console.log("false");
        return false;
    }
}

anagram_comparison();