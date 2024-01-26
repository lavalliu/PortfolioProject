// SCOPE
// #1
function funcOne() {
    let a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(`inside the funcOne function ${a}`);
}

// #1.1 - run in the console:
// Result : inside the funcOne function 3
funcOne()
// #1.2 What will happen if the variable is declared 
// with const instead of let ?
// Result : error on line 5 because const cannot be changed

//#2
let a = 0;
function funcTwo() {
    a = 5;
}

function funcThree() {
    alert(`inside the funcThree function ${a}`);
}

// #2.1 - run in the console:
funcThree()
// Result #2.1: inside the funcThree function 0 because
// Result #2.2: inside the funcThree function 0
funcTwo()
// Result #2.1: inside the funcThree function 5
// Result #2.2: error on line 20 because const cannot be changed
funcThree()
// Result #2.1: inside the funcThree function 5
// Result #2.2: inside the funcThree function 0
// 
// #2.2 What will happen if the variable is declared 
// with const instead of let ?


//#3
function funcFour() {
    window.a = "hello";
}


function funcFive() {
    alert(`inside the funcFive function ${a}`);
}

// #3.1 - run in the console:
funcFour()
// Result #3.1: error at line 44 as window.a is not defined
funcFive()
// Result #3.1: error at line 49 as a is not defined

//#4
let a = 1;
function funcSix() {
    let a = "test";
    alert(`inside the funcSix function ${a}`);
}


// #4.1 - run in the console:
funcSix()
// Result #4.1: inside the funcSix function test
// #4.2 What will happen if the variable is declared 
// with const instead of let ?
// Result #4.2: error at line 61

//#5
let a = 2;
if (true) {
    let a = 5;
    alert(`in the if block ${a}`);
}
alert(`outside of the if block ${a}`);

// #5.1 - run the code in the console
// Result #5.1: in the if block 5
// Result #5.1: outside the if block 2 because let is used in the if scope
// #5.2 What will happen if the variable is declared 
// with const instead of let ?
// Result #5.2: error at line 76