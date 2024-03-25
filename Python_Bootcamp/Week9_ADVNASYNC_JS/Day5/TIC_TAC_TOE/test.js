tictacX = [[1,2,3],[4,5,6],[7,8,9]];
console.log("["+tictacX[0][0]+","+tictacX[1][0]+","+tictacX[2][0]+"]");



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="main-container">
        Tic Tac Toe Game
        <br>
        <div class="grid">
            <div id="cell1" class="cell1" ondblclick="play('cell1')"></div>
            <div id="cell2" class="cell2" ondblclick="play('cell2')"></div>
            <div id="cell3" class="cell3" ondblclick="play('cell3')"></div>
            <div id="cell4" class="cell4" ondblclick="play('cell4')"></div>
            <div id="cell5" class="cell5" ondblclick="play('cell5')"></div>
            <div id="cell6" class="cell6" ondblclick="play('cell6')"></div>
            <div id="cell7" class="cell7" ondblclick="play('cell7')"></div>
            <div id="cell8" class="cell8" ondblclick="play('cell8')"></div>
            <div id="cell9" class="cell9" ondblclick="play('cell9')"></div>
        </div>
        <div id="container2" class="container2">
            <div id="choice" class="choice">Choose with which sign you will start the game : </div>
            <div id="x" class="x" onclick="player_input('x')"> X </div>
            <div id="o" class="o" onclick="player_input('o')"> O </div>
            <br>
        </div>
    </div>
</body>
<script>
    var player;
    var cell;
    let tictacX=[[9,9,9],[9,9,9],[9,9,9]];
    let tictacO=[[9,9,9],[9,9,9],[9,9,9]];
    let tictac=[[9,9,9],[9,9,9],[9,9,9]];
    const winCombos = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [6, 4, 2]
    ]

    function play(cell) {
        if (document.getElementById(cell).innerText != "") {
            console.log("cell already selected pls retry")
            return;
        }
        console.log(player);
        player_input(cell, player);
        checkWinner(player);
        computer_input();
    }

    function assign(cell, player) {
        // let k = 'tictac';

        if (player == "X") {
            // result = eval(k + "X");
        }
        else if (player =="O") {
            // result = eval(k + "O");
        }  

        document.getElementById(cell).innerText = player;
        switch (cell) {
            case "cell1":
                tictac[0][0] = player;
                break;
            case "cell2":
                tictac[0][1] = player;
                break;
            case "cell3":
                tictac[0][2] = player;  
                break;              
            case "cell4":
                tictac[1][0] = player;
                break;
            case "cell5":
                tictac[1][1] = player;
                break;
            case "cell6":
                tictac[1][2] = player;
                break;
            case "cell7":
                tictac[2][0] = player;
                break;
            case "cell8":
                tictac[2][1] = player;
                break;
            case "cell9":
                tictac[2][2] = player;
                break;
            default:
                break;
        }
    }

    function player_input(cell, player) {
        player ="X";
        document.getElementById("container2").innerText = "You have choosen : " + player;
        // document.getElementById("choice").innerText = "";
        assign(cell, player);
    }

    function computer_input() {
        emptyCells = [];
        player = "O"
        for (var i = 1; i <= 9; i++) {
            if (document.getElementById("cell" + i).innerText === "") {
                emptyCells.push("cell" + i);
            }
        }
        let randomCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
        assign(randomCell, player);
    }

    function checkWinner(player) {
        console.log(player);
        if ((tictac[0][0] == "X" & tictac[0][1] == "X" & titac[0][2] == "X") ||
            (tictac[1][0] == "X" & tictac[1][1] == "X" & titac[2][2] == "X") ||
            (tictac[0][0] == "X" & tictac[0][1] == "X" & titac[0][2] == "X") ||
            (tictac[0][0] == "X" & tictac[0][1] == "X" & titac[0][2] == "X") ||
            (tictac[0][0] == "X" & tictac[0][1] == "X" & titac[0][2] == "X") ||
            (tictac[0][0] == "X" & tictac[0][1] == "X" & titac[0][2] == "X") ||
            (tictac[0][0] == "X" & tictac[0][1] == "X" & titac[0][2] == "X") ||
            (tictac[0][0] == "X" & tictac[0][1] == "X" & titac[0][2] == "X")) {
                console.log("Congratulations, you have WON !!!")
        }
    }

</script>
</html>