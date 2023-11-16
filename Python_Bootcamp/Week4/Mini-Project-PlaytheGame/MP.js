var i=0;

function playTheGame() {
let answer = confirm("Do you want to Play the game? ");
if (answer === false) {
    alert("No problem, Goodbye");
} else {
//
        let mynumber = prompt("Enter a number between 0 and 10");
        if (isNaN(mynumber)) {
            alert("Sorry, you did not input a number, Goodbye");
        } while (mynumber < 0 || mynumber > 10) {
                alert("Sorry the number is not between 1 and 10, Please retry");
                mynumber = prompt("Enter a number between 0 and 10");
                } 
        if (mynumber!=NaN) {                
            let computerNumber = Math.round(Math.random() * 10);
            alert("The Random Number is: " + computerNumber);
//
            compareNumbers(mynumber,computerNumber);
        }
}
}
// part1
// let mynumber = prompt("Enter a number between 0 and 10");
// if (isNaN(mynumber)) {
//     alert("Sorry, you did not input a number, Goodbye");
// } 
//     for (mynumber < 0 || mynumber > 10) {
//         let mynumber = prompt("Re-enter a number between 0 and 10");
//     }
//     let computerNumber = Math.round(Math.random() * 10);
//     alert(computerNumber);

function playTheGame2() {
    let mynumber = prompt("Enter a number between 0 and 10");
    if (isNaN(mynumber)) {
        alert("Sorry, you did not input a number, Goodbye");
    } while (mynumber < 0 || mynumber > 10) {
            alert("Sorry the number is not between 1 and 10, Please retry");
            mynumber = prompt("Enter a number between 0 and 10");
            } 

    let computerNumber = Math.round(Math.random() * 10);
    alert("The Random Number is: " + computerNumber);
    compareNumbers(mynumber,computerNumber)
}

function compareNumbers(mynumber,computerNumber) {
// let i=0;
while (i<4) {
    alert(mynumber);
    alert(computerNumber);
    alert(i);
    if (mynumber==computerNumber) {   
        alert("WINNER");
        i=4;
    }
    if (mynumber>computerNumber) {
        alert(`Your number is bigger then the computer’s, guess again`);
        i=i+1;
        alert("i :" +i);
        playTheGame2();
    }
    if (mynumber<computerNumber) {
        alert(`Your number is smaller then the computer’s, guess again`);
        i=i+1;
        alert("i :" +i);
        playTheGame2();
    }
}
alert("Out of Chances");
}
