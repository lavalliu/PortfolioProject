// Exercise 1 : Merge Words
//incomplete
// 1. Create a function such as mergeWords('Hello')() that returns the following string: 'Hello'
// function mergeWords(word) {
//     return function (anotherWord) {
//     if (!anotherWord) {
//         return word;
//     }   else {
//             return word + " " + anotherWord;
//         }
//     };
// }
// console.log(mergeWords("Hello")("you"));

// Call the function with 'Hello' and then with an empty argument
// console.log(mergeWords("")(""));


// 2. When the function is called without any arguments return a string where all words have been merged into a sentence.

// For example
// console.log(mergeWords('There')('is')('no')('spoon.')());
// should return 'There is no spoon.'

function mergeWords (word) {
    let words = [word];
    return function (nextWord) {
    if (nextWord === undefined) {
        return words.join (" ");
    }
    words.push (nextWord);
    return arguments.callee;
    };
}
    
console.log(mergeWords("There")("is")("no")("spoon")("you")("silly.")());