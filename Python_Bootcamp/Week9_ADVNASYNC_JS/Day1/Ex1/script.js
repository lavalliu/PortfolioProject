let myObj = {
    name : "John",
    lastName : "Doe",
    age : 25,
    friends : ["Mark", "Lucie", "Ana"]
}

var count=0;

for (let key in myObj ) {
    ++count;
}
console.log("The x# key is :" + count);
var count=0;

for (let value in myObj ) {
    ++count;
}

console.log("The x# value is :" + count);