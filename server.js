const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/ProductModels');
const app = express();

app.use(express.json());

app.post('/product', async(req, res) => {
    try {
        const newproduct = await Product.create(req.body)
        res.status(200).json(newproduct)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
})


app.get('/product', async(req, res) => {
    try {
        const getproduct = await Product.find({});
        res.status(200).json(getproduct)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

app.put('/product/:id', async(req, res) =>{
    try {
        const { id } = req.params;
        const updateProduct = await Product.findByIdAndUpdate(id, req.body);
        if(!updateProduct){
            res.status(404).json({message: 'cannot find the product'})
        }
        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
})

app.delete('/product/:id', async(req, res) => {
    try {
        const { id } = req.params;
        const deleteProduct = await Product.findByIdAndDelete(id);
        if(!deleteProduct){
            res.status(404).json({message: 'cannot find the product'})
        }
        res.status(200).json(deleteProduct)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
})

mongoose.connect('mongodb+srv://Cluster91469:hritik1234@cluster91469.akh7yfz.mongodb.net/NODE_API_DEVTAMIN?retryWrites=true&w=majority&appName=Cluster91469')
.then(() => {
    console.log('Connected to DB')
    app.listen(3000, () => {
        console.log('Node App is running on PORT 3000')
    });
}).catch((error) => {
    console.log(error);    
})




