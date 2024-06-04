const Product= require('../models/products');

exports.getProducts = async (req, res) => {
    all_products= await Product.find({}); //query in mongodb
    return all_products;
};

exports.getSingleProduct = async (req, res) => {
    product= await Product.findOne({ name: req.body.name }); //query to get one resulut in mongodb
    return product;
};


exports.addProduct = async (req, res) => {
    if (req.body){
        new_product={
            name: req.body.name,
            price: req.body.price,
            description: req.body.description,
            category: req.body.category,
            quantity: req.body.quantity
        }

        const newProduct = new Product(new_product);
        await newProduct.save();
        return ({message: 'Product added successfully!',product: newProduct});
    };
};

exports.deleteProduct = async (req, res) => {
    await Product.findOneAndDelete({ name: req.body.name }); //delete query in mongodb
    return ({message: "Successfully deleted"});
};
