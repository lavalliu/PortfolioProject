const prompt = require("prompt-sync")();

const thirtyOne = [1,3,5,7,8,10,12];
const thirty = [4,6,9,11];
var day=0;
let year=prompt("Enter the year : ");
let month=prompt("Enter the month : ");
year = Number(year);
month = Number(month);
function createCalendar(month) {
    if (thirtyOne.includes(month)) {
        let day = 31;
        console.log("Year : ", year, "Month : ", month, "Days : ", day)
    }
    if (thirty.includes(month)) {
        let day = 30;
        console.log("Year : ", year, "Month : ", month, "Days : ", day)
    }
    if ((year % 4 === 0) && (month == 2)) {
        let day = 29;
        console.log("Year : ", year, "Month : ", month, "Days : ", day)
    }
    if ((year % 4 !== 0) && (month == 2)) {
        let day = 28;
        console.log("Year : ", year, "Month : ", month, "Days : ", day)
    }

//     switch (year, month) {
//         case (thirtyOne.includes(month)):
//             day = 31;
//             break;
//         case (thirty.includes(month)):                
//             day = 30;
//             break;
//         case ((year % 4 === 0) && (month == 2)):
//             day = 29;
//             break;
//         case ((year % 4 !== 0) && (month == 2)):
//             day = 28;
//             break;
//     }


console.log(day);
}
createCalendar();