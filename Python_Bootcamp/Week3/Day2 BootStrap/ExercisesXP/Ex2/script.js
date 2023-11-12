const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"]
let myWatchedSeriesLength = myWatchedSeries.length
let myWatchedSeriesSentence = "I watched 3 series " + myWatchedSeries [0] + ", " + myWatchedSeries [1] + ", and " + myWatchedSeries[2]

console.log (myWatchedSeriesSentence);
console.log (myWatchedSeriesLength);

myWatchedSeries.splice (2,1,"friends")

console.log (myWatchedSeries);

myWatchedSeries.push ("the lost kingdom")

console.log (myWatchedSeries);

myWatchedSeries.splice (0,0,"time travellers")

console.log (myWatchedSeries);

myWatchedSeries.splice (1,1)

console.log (myWatchedSeries);

console.log (myWatchedSeries);

let secondseries = myWatchedSeries[1];

console.log ("2nd series");
console.log (secondseries);

let thirdchar = secondseries.substr(2,1);

console.log (thirdchar);
