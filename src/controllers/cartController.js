const mongoose = require('mongoose')
const Order = require('../models/order')

const getAllCart =  async(req,res) => {
    const orders = await Order.find().populate('unity')
    res.json(orders)
}
const updateCart = async(req, res) => {
    try{
      const order = await Order.findById(req.params.id)
      if (order == null) {
        return res.status(404).json({message: "order not found" })
      }
  
    if (req.body.quantity != null) {
      order.quantity = req.body.quantity
    } 
    
    const updated = await order.save()
    res.status(200).json(updated)
  
    } catch (err) {
      res.status(500).json({message: err.message})
    }
  }

module.exports = {
    getAllCart,
    updateCart
}