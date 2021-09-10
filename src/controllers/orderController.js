const mongoose = require('mongoose')
const Order = require('../models/order')

const getAllRecife = async (req, res) => {
  const orders = await Order.find().populate('unity')
  const filteredOrders = orders.filter(order => order.unity.unity == "Recife")
  res.json(filteredOrders)
}

const getAllOlinda = async (req, res) => {
  const orders = await Order.find().populate('unity')
  const filteredOrders = orders.filter(order => order.unity.unity == "Olinda")
  res.json(filteredOrders)
}

const getAllPaulista= async (req, res) => {
  const orders = await Order.find().populate('unity')
  const filteredOrders = orders.filter(order => order.unity.unity == "Paulista")
  res.json(filteredOrders)
}

const getAll =  async(req,res) => {
    const orders = await Order.find().populate('unity')
    res.json(orders)
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
    const existingOrder = await Order.findOne({description: req.body.description})
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

module.exports = {
    getAllRecife,
    getAllOlinda,
    getAllPaulista,
    getAll,
    createOrder
}