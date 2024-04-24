const products = require('./products');
console.log(products);

function findProductByName(productName) {
    return products.find(item => item.name === productName);
    }
    console.log(findProductByName('Laptop')); 
    console.log(findProductByName('Rice Cooker')); 
    console.log(findProductByName('Micro Wave')); 