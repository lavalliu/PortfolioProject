function allTruthy(...args) {
    counter = 0
    for (let arg of args) {
        if (!arg) {
            counter = counter + 1
            break
        }
        }
    if (counter == 0) {
        console.log("true");
    }
    else {
        console.log("false");
    }
}

allTruthy(false, true, true)