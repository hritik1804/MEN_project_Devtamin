const mongoose = require('mongoose')

const productSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please enter the name']
        },
        quantity: {
            type: Number,
            required: [true, 'Please enter the quantity'],
            default: 0
        },
        price: {
            type: Number,
            required: true
        },
        image: {
            type: String,
            required: false
        }
    },
    {
        timestamps: true
    }
)

const Product = mongoose.model('Product', productSchema);

module.exports = Product;  