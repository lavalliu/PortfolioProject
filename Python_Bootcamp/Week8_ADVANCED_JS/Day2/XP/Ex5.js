// Exercise 5 : Juice Bar
// video
// You will use nested functions, to open a new juice bar.

// Part I:
// The outer function named makeJuice receives 1 argument: the size of the beverage the client wants - small, medium or large.
// The inner function named addIngredients receives 3 ingredients, and displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".
// Invoke the inner function ONCE inside the outer function. Then invoke the outer function in the global scope.

const isLastElement = (array, index) => index === array.length - 1;

function makeJuice(size) {
    let sentence = `The client wants a ${size} drink containing `;
    const ingredients = [];
    addIngredients("rhum","whiskey","coke");
    addIngredients("tequilla","vodka","lime");
    displaySentence(ingredients);
  
    function addIngredients(first, second, third) {
        ingredients.push(first, second, third);
    }
     
        function displaySentence(ingredients) {      
            ingredients.forEach((ingredient, i) => {
                if (i == ingredients.length - 2) {
                    commaFullstop = 'and ';
                } else {    
                    commaFullstop = isLastElement(ingredients, i) ? "." : ", ";
                }
                const word = `${ingredient} ${commaFullstop}`;
                sentence += word;
            });
            const p = document.createElement("p");
            p.innerText = sentence;
            document.body.appendChild(p);
            // console.log("Sentence : ", sentence);
        }
}

makeJuice("big");


