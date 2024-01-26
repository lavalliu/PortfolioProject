// Exercise 2 : Keys And Values
// Create a function that takes an object and returns the keys and values as separate arrays.
// Return the keys sorted alphabetically, and their corresponding values in the same order.
// Examples

// let keysAndValues = ({ a: 1, b: 2, c: 3 });
// ➞ [["a", "b", "c"], [1, 2, 3]]

// let keysAndValues = ({ a: "Apple", b: "Microsoft", c: "Google" });
// ➞ [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]

let keysAndValues = ({ key1: true, key2: false, key3: undefined });
// ➞ [["key1", "key2", "key3"], [true, false, undefined]]

let newArray = [];
function disassembleNsort() {
    console.log(Object.keys(keysAndValues));
    console.log(Object.values(keysAndValues));
    newArray[0] = Object.keys(keysAndValues)
    newArray[1] = Object.values(keysAndValues)
    console.log(newArray);
}

disassembleNsort();