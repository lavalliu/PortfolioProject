import persons from './data.js';

function averageAge() {
    let i = 0;
    let agesum = 0;
    for (let age in persons) {
        agesum = agesum + age
        i += 1
    }
    console.log("Average Age : ", agesum/i);
}

averageAge();