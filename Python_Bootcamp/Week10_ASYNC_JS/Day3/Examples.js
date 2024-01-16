const checkRequest = () => {
    console.log('test 2')
    try {
        endSemester
            .then(value => {
                hey //variable not defined
                console.log("I got an amazing gift : A ", value)
            })
            //handle asynchronous errors
            .catch((err) => {
                console.log(err)
            })
    } catch (err) {
        console.log("In the catch ", err)
    }
}

console.log('test 1');
checkRequest();
console.log('test 3');
