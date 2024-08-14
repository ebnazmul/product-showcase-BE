const mongoose = require("mongoose");

const offerSchema = mongoose.Schema({
    productName: String,
    productImg: String,
    productDescription: String,
    price: Number,
    Category: String,
    Rating: Number,
    createdAt: {
        type: Date,
        default: Date.nowO()
    }
})

offerSchema.index({ createdAt: 1 })

const Offer = mongoose.model('Offer', offerSchema)


module.exports = Offer;