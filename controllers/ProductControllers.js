const Product = require('../models/ProductModels')



const addProduct = async(req, res, next) => {
    try {
        const newproduct = await Product.create(req.body)
        res.status(200).json(newproduct)
    } catch (error) {
        next(error);
        // console.log(error.message)
        // res.status(500).json({message: error.message})
    }
}

const getProduct = async(req, res, next) => {
    try {
        const getproduct = await Product.find({});
        res.status(200).json(getproduct)
    } catch (error) {
        next(error);
        // res.status(500).json({message: error.message})
    }
} 

const updateProduct = async(req, res, next) =>{
    try {
        const { id } = req.params;
        const updateProduct = await Product.findByIdAndUpdate(id, req.body);
        if(!updateProduct){
            res.status(404).json({message: 'cannot find the product'})
        }
        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);
    } catch (error) {
        next(error);
        // console.log(error.message)
        // res.status(500).json({message: error.message})
    }
}

const deleteProduct = async(req, res, next) => {
    try {
        const { id } = req.params;
        const deleteProduct = await Product.findByIdAndDelete(id);
        if(!deleteProduct){
            res.status(404).json({message: 'cannot find the product'})
        }
        res.status(200).json(deleteProduct)
    } catch (error) {
        next(error);
        // console.log(error.message)
        // res.status(500).json({message: error.message})
    }
}


module.exports = {
    addProduct,
    getProduct,
    updateProduct,
    deleteProduct
}