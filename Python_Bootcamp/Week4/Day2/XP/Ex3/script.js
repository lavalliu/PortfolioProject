//Ex3 Find the Numbers divisble by 23

// function isDivisible() {
//     let i=0;
//     while (i<501) {
//         if (i % 23 ==0 ) {
//         console.log(i);
//         }
//         i++
//     } 
// }

// isDivisible();


function isDivisible(divNum) {
        let i=0;
        let theSum=0;
        while (i<501) {
            if (i % divNum ==0 ) {
            console.log(i);
            theSum=theSum+i;
            }
            i++
        } 
        console.log(theSum);
    }
    
    // isDivisible(3);
isDivisible(45);