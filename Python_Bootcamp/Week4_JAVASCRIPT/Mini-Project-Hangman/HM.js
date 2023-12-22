// Step 1: npm init
// Step 2: npm install prompt-sync

const prompt = require("prompt-sync")();
//secretword is the WORD
let secretword=prompt("Player 1, please enter a secret Word (8 Characters minimum): ");
//convert to array
let swarray=Array.from(secretword);
//displays the secret word
console.log("Secret word array" + swarray);
let i=0;
//counter if the player wins
let winner=false;
//the lenght of secretword
let length=Number(secretword.length);
//array containing all incorrect entered letters
let incorrectlist=[];
//array containing all correct entered letters
let correctlist=[];
//counter for tries player 2 is allowed - 10 in all
let numofguess=0;
//spaces displayed ongoing while player 2 guesses 
let displayArray=[];
//counter to display the number of underscore for the secret word
let y=0;
while (y<length) { 
    displayArray.push("_");
    y++;
}

console.log(displayArray); //display _ _ _ _

do {
    letter=prompt("Player 2, you have " +(10-numofguess)+ " try(ies) left - enter a letter: ");
    position=swarray.indexOf(letter);
    switch (position) {
        case -1:
            if (incorrectlist.indexOf(letter)===0) {
                console.log("Letter has already been inputted previously");
                } else {
            console.log("Letter entered is not one of missing letters");
            incorrectlist.push(letter);
            console.log(displayArray);
            numofguess++
                }
            break;
        default:
            if (correctlist.indexOf(letter)===0) {
                console.log("Letter has already been inputted previously");
                } else {
                console.log("Well done. Letter entered appears once or more in the secret word, please continnue");
                correctlist.push(letter);
                displayArray.splice(swarray.indexOf(letter),1,letter);
                swarray.splice(swarray.indexOf(letter),1,"_");

                if (swarray.indexOf(letter)>=0) {
                    displayArray.splice(swarray.indexOf(letter),1,letter);
                    swarray.splice(swarray.indexOf(letter),1,"_");
                    correctlist.push(letter);
                    displayArray.splice(swarray.indexOf(letter),1,letter);
                }

                console.log(swarray);
                console.log(displayArray);
                }
            if (displayArray.indexOf("_")===-1) {
                winner=true;
                console.log("CONGRATULATIONS WE HAVE A WINNER")
                }
            break;
}
} while (numofguess<9 && winner===false);

