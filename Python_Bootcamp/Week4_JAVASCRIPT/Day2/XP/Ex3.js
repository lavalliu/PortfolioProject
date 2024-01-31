// Ex3 Find the Numbers divisble by 23

function isDivisible() {
    let i=0;
    let sum=0;
    while (i<501) {
        if (i % 23 ==0 ) {
        console.log(i);
        sum=sum+i
        }
        i++
    } 
    console.log("Sum : ", sum);
}

isDivisible();
