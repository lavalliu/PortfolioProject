//Ex4 - Shopping List

const shoppingList=["banana", "orange","apple"];
let length=shoppingList.length-1;
let i=0;
let due=0;
const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  
const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 
function myBill() {
    due=due+prices[shoppingList[i]];
    console.log("The amount due : $" + due);
}
while (i<=length) {
    if (stock[shoppingList[i]]>0) {
        console.log(shoppingList[i] + " item is in stock");
        console.log("The price of 1 " + shoppingList[i] + " is $" + prices[shoppingList[i]]);
        stock[shoppingList[i]]=stock[shoppingList[i]]-1;
        myBill();
    }
    if (stock[shoppingList[i]]===0) {
        console.log(shoppingList[i] + " item in OUT of stock");
    }
    i++;
}
console.log("The new stock list is :");
console.log(stock);


