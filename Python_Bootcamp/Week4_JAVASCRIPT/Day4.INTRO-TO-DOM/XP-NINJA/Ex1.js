const thirtyOne = [1,3,5,7,8,10,12];
const thirty = [4,6,9,11];
const days = [
    {day : 'Monday', abb : 'MO'},
    {day : 'Tuesday', abb : 'TU'},
    {day : 'Wednesday', abb : 'WE'},
    {day : 'Thursday', abb : 'TH'}, 
    {day : 'Friday', abb : 'FR'}, 
    {day : 'Saturday', abb : 'SA'},
    {day : 'Sunday', abb : 'SU'} 
];
let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
let days31 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
let days30 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
let days29 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29];
let days28 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28];
let dayarray = [];
let day = d  = fill = 0;
let weekday = "";
let year = prompt("Enter the year : ");
let month = prompt("Enter the month : ");
year = Number(year);
month = Number(month);

function createCalendar() {
    if (thirtyOne.includes(month)) {
        day = 31;
        dayarray = days31;
    }
    if (thirty.includes(month)) {
        day = 30;
        dayarray = days30;
    }
    if ((year % 4 === 0) && (month == 2)) {
        day = 29;
        dayarray = days29;
    }
    if ((year % 4 !== 0) && (month == 2)) {
        day = 28;
        dayarray = days28;
    }
    month = month - 1
    d = new Date(year, month, 1);
    weekday = days[(d.getDay())-1];
}

function displayCalendar() {
    let mydiv = document.createElement("div");
    mydiv.innerHTML = ("Calendar : " + months[month] + " of year " + year);
    document.body.appendChild(mydiv);
    let table = document.createElement("table");
    let tbody = document.createElement("tbody");
    let td = ""
    let j = i = 0;
    fill = (d.getDay()-1);
    if (fill < 0) {
        fill = 6;
    }
    if (fill < 7) {
        for (let k = 0; k < fill; k +=1) {
            dayarray.unshift('.')
        }
    }
    for (j = 0; j < 7; j += 1) {
        let tr = document.createElement("tr");
        for (i = 0; i < days.length; i += 1) {
            td = document.createElement("td");
            if (j == 0) {
                td.textContent = days[i].abb;
            }
            if (j > 0) {
                switch(j) {
                    case (1):
                        td.textContent = dayarray[i];
                        break;
                    case (2):
                        td.textContent = dayarray[i+7];
                        break;
                    case (3):
                        td.textContent = dayarray[i+14];
                        break;
                    case (4):
                        td.textContent = dayarray[i+21];
                        break;
                    case (5):
                        td.textContent = dayarray[i+28];
                        break;
                    case (6):
                        td.textContent = dayarray[i+35];
                        break;
                    default:
                }
            }
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }
    table.appendChild(tbody);
    document.body.appendChild(table);
}

createCalendar(month);
displayCalendar();

