// Step 1: npm init
// Step 2: npm install prompt-sync

const prompt = require("prompt-sync")();

// Omnipresent Value
// isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]]);
// isOmnipresent([[5, 0], [1, 3], [5, 1], [6, 1]]);
isOmnipresent([[3, 4], [8, 3, 2], [3], [9, 3], [5, 3], [4, 3]]);
// isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]]);
// isOmnipresent([[2,1],[7,1],[1,9],[11,1],[1,0,8],[3,1,40]]);

function isOmnipresent(string) {
    let counter=0;
    let y=string[0];
    for (j=0;j<y.length; j++) {
        let x=(y[j]);
        for (i=0; i<string.length; i++) {
            let y=string[i];
            if (y.includes(x)) {
                counter=counter+1
            }
            if (counter==string.length) {
                console.log(x +" is omnipresent");
            } 
        }
    }
}
