const mongoose = require('mongoose')

const menuSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    unity: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('menu', menuSchema)