let quotes = [
    {
    id: 0,
    author: "Albert Einstein",
    quote: "Imagination is more important than knowledge."
    },
    {
    id: 1,
    author: "Oscar Wilde",
    quote: "Be yourself; everyone else is already taken."
    },
    {
    id: 2,
    author: "Mahatma Gandhi",
    quote: "Be the change that you wish to see in the world."
    },
    {
    id: 3,
    author: "Maya Angelou",
    quote: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel."
    },
    {
    id: 4,
    author: "Mark Twain",
    quote: "The secret of getting ahead is getting started."
    },
    {
    id: 5,
    author: "Winston Churchill",
    quote: "Success is not final, failure is not fatal: it is the courage to continue that counts."
    },
    {
    id: 6,
    author: "Mark Twain",
    quote: "Never tell the truth to people who are not worthy of it."
    },
    {
    id: 7,
    author: "Mark Twain",
    quote: "Kindness is the language which the deaf can hear and the blind can see."
    },
    {
    id: 8,
    author: "Mark Twain",
    quote: "The man who does not read has no advantage over the man who cannot read."
    }
];
let quotearray = [];
let wordArray = [];
let lastnum = 0;
let n = 0;
let i = 0;
let search1 = "";
let slideIndex = 0;
let length = 0
let lengthchar = 0;
let lengthAllchar = 0;
let numwords = 0;
let likes = 0

function randomQuote() {
    let x = Math.floor(Math.random() * quotes.length);
    while (lastnum == x) {x = Math.floor(Math.random() * quotes.length);}
    document.getElementById("quote").innerHTML = '"' + quotes[x].quote;
    document.getElementById("author").innerHTML = quotes[x].author;

    // document.getElementById("button2").innerHTML = "Number of characters in the quote :";
    // document.getElementById("resultbt2").innerHTML = lengthchar;
    // document.getElementById("button3").innerHTML = "Number of characters in the quote without the spaces :";
    // document.getElementById("resultbt3").innerHTML = lengthAllchar;
    // document.getElementById("button4").innerHTML = "Number of words in the quote :";
    // document.getElementById("resultbt4").innerHTML = numwords;
    // document.getElementById("button5").innerHTML = "Number of likes : ";
    // document.getElementById("resultbt5").innerHTML = likes;
    lastnum = x
}
    
function storeInput(event) {
    event.preventDefault();
    let value1 = document.getElementById("myquote").value;
    let value2 = document.getElementById("myauthor").value;
    let value3 = quotes.length;
    let myObject = {id : value3, author : value2, quote : value1}
    quotes.push(myObject);
}

function searchQuote(event) {
    quotearray = []
    event.preventDefault();
    let search1 = document.getElementById("mysearch").value;
    filterByAuthor(search1)
    console.log(quotearray);
    if (quotearray.length == 0) {document.getElementById("quote2").innerHTML = "Author cannot be found";}
    else {
        document.getElementById("quote2").innerHTML = quotearray[i];
        document.getElementById("author2").innerHTML = search1;
    }
}

function filterByAuthor(search1) {
    for (let rec of quotes) {
        if (rec.author == search1) {quotearray.push(rec.quote);}
    }
}
    
function plusSlides(slideIndex) {
    showSlides(n += slideIndex);
}

function showSlides(i) {
    if (i >= quotearray.length) {n = 0;}
    if (i < 0) {n = quotearray.length-1;}
    if (quotearray.length == 0) {document.getElementById("quote2").innerHTML = "Author cannot be found";}
    else {document.getElementById("quote2").innerHTML = quotearray[n];}
}

function characters(thequote) {
    newquote = thequote.replace(" ", "");
    lengthchar = newquote.length;
}

function allCharac() {
    lengthAllchar = thequote.length;
}

function numWords() {
    wordArray = thequote.split(" ");
    numwords = wordArray.length
}
function numLikes() {
    likes = likes + 1
}