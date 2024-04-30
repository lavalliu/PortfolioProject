//definer routes
const products= require('../controllers/products');

const routes=[
    //get all products
    {
        method:'GET',
        url:'/products',
        handler: products.getProducts

    },
    //get one product
    {
        method:'POST',
        url:'/products',
        handler: products.getSingleProduct
    },
    //add a product
    {
        method:'POST',
        url:'/products/add',
        handler: products.addProduct
    },
    //delete a product
    {
        method:'POST',
        url:'/products/delete',
        handler: products.deleteProduct
    }

]

module.exports=routes