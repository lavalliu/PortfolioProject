function display_board() {
    console.log("Welcome to TIC TAC TOE");
    console.log("TIC TAC TOE");
    console.log("*****************");
    console.log(`*   ${a} | ${b} | ${c}   *`);
    console.log("*  ---|---|---  *");
    console.log(`*   ${d} | ${e} | ${f}   *`);
    console.log("*  ---|---|---  *");
    console.log(`*   ${g} | ${h} | ${i}   *`);
    console.log("*****************");
}

function player_input() {
    if (counter % 2 === 0) {
        player = "O";
    } else {
        player = "X";
    }
    console.log(`Player ${player}'s turn ...`);
    x = parseInt(prompt("Enter row (1-3): "));
    y = parseInt(prompt("Enter column (1-3) : "));
}

function check_win() {
    console.log("check_win");
    if ((a === b && b === c && c !== " ") || (d === e && e === f && f !== " ") || (g === h && h === i && i !== " ") || (a === d && d === g && g !== " ") || (b === e && e === h && h !== " ") || (c === f && f === i && i !== " ") || (a === e && e === i && i !== " ") || (g === e && e === c && c !== " ")) {
        console.log(`Player ${player} has won`);
        return false;
    }
}

function play(player) {
    a = b = c = d = e = f = g = h = i = " ";
    counter = 1;
    while (true) {
        display_board();
        player_input();
        assign();
        if (check_win() === false || counter > 9) {
            display_board();
            break;
        }
    }
}

function assign() {
    if (x === 1) {
        if (y === 1) {
            if (a === "X" || a === "O") {
                console.log("Selection already has an input, please retry");
            } else {
                a = player;
                counter += 1;
            }
        }
        if (y === 2) {
            if (b === "X" || b === "O") {
                console.log("Selection already has an input, please retry");
            } else {
                b = player;
                counter += 1;
            }
        }
        if (y === 3) {
            if (c === "X" || c === "O") {
                console.log("Selection already has an input, please retry");
            } else {
                c = player;
                counter += 1;
            }
        }
    } else if (x === 2) {
        if (y === 1) {
            if (d === "X" || d === "O") {
                console.log("Selection already has an input, please retry");
            } else {
                d = player;
                counter += 1;
            }
        }
        if (y === 2) {
            if (e === "X" || e === "O") {
                console.log("Selection already has an input, please retry");
            } else {
                e = player;
                counter += 1;
            }
        }
        if (y === 3) {
            if (f === "X" || f === "O") {
                console.log("Selection already has an input, please retry");
            } else {
                f = player;
                counter += 1;
            }
        }
    } else if (x === 3) {
        if (y === 1) {
            if (g === "X" || g === "O") {
                console.log("Selection already has an input, please retry");
            } else {
                g = player;
                counter += 1;
            }
        }
        if (y === 2) {
            if (h === "X" || h === "O") {
                console.log("Selection already has an input, please retry");
            } else {
                h = player;
                counter += 1;
            }
        }
        if (y === 3) {
            if (i === "X" || i === "O") {
                console.log("Selection already has an input, please retry");
            } else {
                i = player;
                counter += 1;
            }
        }
    } else {
        console.log("please reenter the row");
    }
}

let player = "X";
play(player);

