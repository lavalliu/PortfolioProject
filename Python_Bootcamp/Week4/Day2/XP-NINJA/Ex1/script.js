//Randon Number
let evenNum=1;
let num=(Math.floor(Math.random()*100) +1);
console.log("random num : " + num);
for (let i=1; i<num; i++) {
    if (evenNum %2 ===0) {
        console.log("Even Num : " + evenNum);

    }
    evenNum=evenNum+1;
    // console.log("i " +i);
}
