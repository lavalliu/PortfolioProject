async function premain() {
fetch('https://api.chucknorris.io/jokes/random')
.then((response) => {
    if(response.ok){
        return response.json();
    } else {
        throw new Error("Wrong")
    }
})
.then((result) => {
    console.log(result.value);
})
}

async function main() {
for (let i=0; i<10; i++){
    console.log(i + ":" + premain());
}
}

main();
