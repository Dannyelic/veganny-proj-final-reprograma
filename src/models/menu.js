const mongoose = require('mongoose')

const menuSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    candy: {
        type: String,
        required: true
    },
    savory: {
        type: String,
        required: true
    },
    order: {
        type: Date,
        required: true,
        default: new Date
    }
})

module.exports = mongoose.model('menu', menuSchema)