// const mongoose = require('mongoose')

// const cartSchema = new mongoose.Schema({
//     _id: mongoose.Schema.Types.ObjectId,
//     item: {
//         type: String,
//         require: true
//     },
//     description: {
//         type: String,
//         require: true
//     },
//     price: {
//         type: Number,
//         require: true
//     },
//     quantity:{
//         type: Number,
//         require: true
//     },
//     unity: {
//         type:mongoose.Schema.Types.ObjectId,
//         required: true,
//         ref: 'menu'
//     },
//     orderedIn:{
//         type: Date,
//         required: true,
//         default: new Date  
//     }
// })

// module.exports = mongoose.model('cart', cartSchema)