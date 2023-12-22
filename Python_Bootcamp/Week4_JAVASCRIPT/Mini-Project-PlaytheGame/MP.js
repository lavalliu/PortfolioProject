var i=0;
var mynumber=1;
var answer="N";
function playTheGame() {
askYesNoQuestion();
if (false) {
    alert("No problem, Goodbye");
    } else { playTheGame2()
        }
    }


function askYesNoQuestion(question) {
    let answer = prompt("Do you want to Play the game? Y or N :)");
    if (answer.toLowerCase() === "y") {
      return true;
    } else if (answer.toLowerCase() === "n") {
      return false;
    } else {
      // If the user enters an invalid response, prompt again
      alert("Please enter 'Y' or 'N'");
      return askYesNoQuestion(question);
    }
  }

function playTheGame2() {

while ((mynumber >= 0 && mynumber < 11) && i<3) {
    mynumber = prompt("Enter a number between 0 and 10");
    if (isNaN(mynumber)) {
        alert("Sorry, you did not input a number, Goodbye");
    } else if (mynumber < 0 || mynumber > 10) {
                alert("Sorry the number is not between 1 and 10, Goodbye");
           } else {
            computerNumber = Math.floor(Math.random() * 11);
            alert("The Random Number is: " + computerNumber);
            alert(mynumber +"-" +computerNumber);
            alert("i" + i);
            if (mynumber==computerNumber) {
                alert("Winner!");
                i=3;
            } else if (mynumber>computerNumber) {
                    alert(`Your number is bigger then the computer’s, guess again`);
                    i++;

             } else if (mynumber<computerNumber) {
                    alert(`Your number is smaller then the computer’s, guess again`);
                    i++;

                }
            }
}
 
}
