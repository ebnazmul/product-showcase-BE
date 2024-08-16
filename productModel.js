const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    productName: String,
    productImage: String,
    description: String,
    brandName: String,
    category: String,
    createdAt: String,
    ratings: Number,
    price: Number
})

productSchema.index({ createdAt: 1 })

const Product = mongoose.model('Product', productSchema)

module.exports = Product;