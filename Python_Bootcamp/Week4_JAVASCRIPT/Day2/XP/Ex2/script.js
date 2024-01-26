const prompt = require("prompt-sync")();

//Ex2 Tips

function calculateTip() {
    let billAmount=parseFloat(prompt("Please enter the amount of the bill $: "));
    if (billAmount<50) {
        tip=billAmount*0.2;
    } else if (billAmount>=50 && billAmount<=200) {
        tip=billAmount*0.15;
    } else if (billAmount>200) {
        tip=billAmount*0.1;
    }
    
    // let total=tip+billAmount

    console.log("Tips : ", tip);
    console.log("Total Bill : ", tip + billAmount);
}

calculateTip();