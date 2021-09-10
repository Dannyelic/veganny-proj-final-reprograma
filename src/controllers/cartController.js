const mongoose = require('mongoose')
const Order = require('../models/order')

const getCartById =  async(req,res) => {
    const orders = await Order.findById(req.params.id)
    res.status(200).json(orders)
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
    if (req.body.price != null) {
      order.price = req.body.price
    } 
    const updated = await order.save()
    res.status(200).json(updated)
  
    } catch (err) {
      res.status(500).json({message: err.message})
    }
  }

  
const deleteById = async (req, res) => {
    const order = await Order.findById(req.params.id)
    if(order == null){
      return res.status(404).json({message: "Order not found."})
    }
    try{
      await order.remove()
      res.status(200).json({ message: "Deleted order." })
    } catch (error){
      res.status(500).json({ message: error.message})
      }
  }

module.exports = {
    getCartById,
    updateCart,
    deleteById
}