const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    item: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    quantity:{
        type: Number,
        require: true
    }
})

module.exports = mongoose.model('order', orderSchema)