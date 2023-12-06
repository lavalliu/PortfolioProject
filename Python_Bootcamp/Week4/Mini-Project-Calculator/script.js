// Declare the variables
input = "";
prevInput = "";
operator = "";
result = 0;

// Create the number function
function number(num) {
    input += num;
    // Display the input
    document.getElementById("display").innerHTML = input;
}

// Create the operator function
function operator(op) {
    if (prevInput && operator) {
        equal();
        }
    prevInput = input;
    // Clear the input
    input = "";
    // Store the operator
    operator = op;
    // Display the operator
    document.getElementById("display").innerHTML = operator;
}

// Decimal function
function decimal() {
    // If the input does not contain a decimal point, append one
    if (!input.includes(".")) {
    input += ".";
    // Display the input
    document.getElementById("display").innerHTML = input;
    }
}

// Create the equal function
function equal() {
    let num1 = parseFloat(prevInput);
    let num2 = parseFloat(input);
    // Perform the calculation based on the operator
    switch (operator) {
    case "+":
    result = num1 + num2;
    break;
    case "-":
    result = num1 - num2;
    break;
    case "*":
    result = num1 * num2;
    break;
    case "/":
    // If the second number is zero, display an error message
    if (num2 === 0) {
    result = "Error";
    } else {
    result = num1 / num2;
    }
    break;
    default:
    // If there is no operator, display the input
    result = input;
    }
    // Display the result
    document.getElementById("display").innerHTML = result;
    // Clear the input, the previous input, and the operator
    input = "";
    prevInput = "";
    operator = "";
}

//function to reset
input = "";
prevInput = "";
operator = "";
result = 0;
// Display zero
document.getElementById("reset").innerHTML = "0";

function clear() {
    // Clear the input, the previous input, the operator, and the result
    input = "";
    prevInput = "";
    operator = "";
    result = 0;
    // Display zero
    document.getElementById("display").innerHTML = "0";
}