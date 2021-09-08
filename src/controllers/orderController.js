const mongoose = require('mongoose')
const Order = require('../models/order')

const getAll =  async(req,res) => {
    const orders = await Order.find().populate('unity')
    res.json(orders)
}

const getAllPaulista = async(req,res) => {
    const orders = await Order.find().populate('unity')
    const filteredOrders = orders.filter(order => order.menu.unity == "Paulista")
    res.json(filteredOrders)
}
const createOrder = async(req, res) => {
    const order = new Order({
        _id: new mongoose.Types.ObjectId(),
        item: req.body.item,
        description: req.body.description,
        price: req.body.price,
        quantity: req.body.quantity,
        unity: req.body.unity,
        orderedIn: req.body.orderedIn
    })
    const existingOrder = await Order.findOne({item: req.body.item})
    if (existingOrder) {
      return res.status(409).json({error: 'Order already registered.'})
    }   
    try {
      const newOrder = await order.save()
      res.status(201).json(newOrder)
      
    } catch(err) {
        res.status(404).json({ message: err.message })
    }    
  }

// const updateOrder = async(req, res) => {
//   try{
//     const order = await Order.findById(req.params.id)
//     if (order == null) {
//       return res.status(404).json({message: "order not found" })
//     }

//   if (req.body.quantity != null) {
//     order.quantity = req.body.quantity
//   } 
  
//   const updated = await order.save()
//   res.status(200).json(updated)

//   } catch (err) {
//     res.status(500).json({message: err.message})
//   }
// }

module.exports = {
    getAll,
    getAllPaulista,
    createOrder
}