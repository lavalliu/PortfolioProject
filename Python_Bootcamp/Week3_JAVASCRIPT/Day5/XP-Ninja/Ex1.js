// Step 1: npm init
// Step 2: npm install prompt-sync

const prompt = require("prompt-sync")();

//checking the BMI

const detail1 = {
  fullname: "Laval Liu",
  mass: 72,
  height: 1.85,
};
const detail2 = {
  fullname: "Joey Liu",
  mass: 82,
  height: 1.82,
};
function calculateBMI (weight,height) {
let bmi = weight/(height*height);
bmi=bmi.toFixed (2);
return(bmi);
}
let bmi1=calculateBMI(detail1.mass,detail1.height);
let bmi2=calculateBMI(detail2.mass,detail2.height);
if (bmi1>bmi2) {
   console.log(detail1.fullname +" has the largest BMI")  
} else {
   console.log(detail2.fullname +" has the largest BMI")  
}
