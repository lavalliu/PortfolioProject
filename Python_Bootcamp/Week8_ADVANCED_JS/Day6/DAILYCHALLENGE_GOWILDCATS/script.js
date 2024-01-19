const gameInfo = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
   ];

const usernames=[];
gameInfo.forEach((element, index, array) => {
  usernames[index] = element.username + "!";
});
console.log(usernames);

const winners=[];
let x = 0;
gameInfo.forEach((element, index, array) => {
    if (element.score > 5) {
      winners[x] = element.username;
      x++
    }
});
console.log(winners);

let totalScore=0;
gameInfo.forEach((element, index, array) => {
    totalScore=totalScore+element.score;
});
console.log(totalScore);