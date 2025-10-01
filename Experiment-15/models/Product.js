// models/Product.js
const mongoose = require('mongoose');

const variantSchema = new mongoose.Schema({
    color: { type: String, required: true },
    size: { type: String, required: true },
    stock: { type: Number, required: true }
}, { _id: true });

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    category: {
        type: String,
        enum: ['Apparel', 'Electronics', 'Footwear'], // Added Apparel
        required: true
    },
    variants: [variantSchema]
}, { _id: true });

module.exports = mongoose.model('Product', productSchema);
