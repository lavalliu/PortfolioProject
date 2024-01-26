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
    console.log("Sum : ", theSum);
}

isDivisible(3);
console.log('these were the numbers divisible by 3 and the last number is the sum of these numbers');
isDivisible(45);
console.log('these were the numbers divisible by 45 and the last number is the sum of these numbers');