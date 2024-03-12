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
    }
];
let quotearray = []
function plusSlides(slideIndex) {
    n += slideIndex
    showSlides(n);
}

function showSlides(i) {
    console.log(n, i);
    if (i >= quotearray.length) {
        console.log('>');
        i = 0;
    }
    if (i < 0) {
        console.log('<');
        i = quotearray.length - 1;
    }
}