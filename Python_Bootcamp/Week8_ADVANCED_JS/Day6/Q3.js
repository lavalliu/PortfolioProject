const prompt = require("prompt-sync")();

// Question 3:
// Write a function that converts HEX to RGB.
// Then Make that function auto-detect the formats so that if you enter HEX color 
// format it returns RGB and if you enter RGB color format it returns HEX.

let string = prompt("Enter a HEX or RGB Code : ");
string = string.toUpperCase();
let hex1a,hex1b,hex2a,hex2b,hex3a,hex3b,rgb1,rgb2,rgb3 = ""
let string2 =[];

function convertHtoR(hex) {
    hex1a = hex.slice(0,1);
    hex1b = hex.slice(1,2);
    hex2a = hex.slice(2,3);
    hex2b = hex.slice(3,4);
    hex3a = hex.slice(4,5);
    hex3b = hex.slice(5);
    console.log("HEX :", hex1a+hex1b, hex2a+hex2b, hex3a+hex3b);
    rgb1 = ((parseInt(hex1a, 16) + (parseInt(hex1b, 16) / 16)) * 16);
    rgb2 = ((parseInt(hex2a, 16) + (parseInt(hex2b, 16) / 16)) * 16);
    rgb3 = ((parseInt(hex3a, 16) + (parseInt(hex3b, 16) / 16)) * 16);
    console.log(`and is converted to RGB : ${rgb1}, ${rgb2}, ${rgb3}`);
}

function convertRtoH(rgb) {
    console.log("RGB : ", rgb[0], ",", rgb[1], ",", rgb[2])
    hex1a = Math.trunc(rgb[0] / 16).toString(16).toUpperCase();
    hex1b = (rgb[0] % 16 ).toString(16).toUpperCase();
    hex2a = Math.trunc(rgb[1] / 16).toString(16).toUpperCase();
    hex2b = (rgb[1] % 16 ).toString(16).toUpperCase();
    hex3a = Math.trunc(rgb[2] / 16).toString(16).toUpperCase();
    hex3b = (rgb[2] % 16 ).toString(16).toUpperCase();
    console.log(`and is converted to HEX : ${hex1a}${hex1b}${hex2a}${hex2b}${hex3a}${hex3b}`);
}

function detect() {
    string2 = string.split(",");
    if (string2.length == 3) {
        console.log("The string is an RGB colour format");
        convertRtoH(string2);
    }
    string2 = string.split("");
    if (string2.length == 6) {
        console.log("The string is a Hex colour format");
        convertHtoR(string2);
    }
}

detect();
