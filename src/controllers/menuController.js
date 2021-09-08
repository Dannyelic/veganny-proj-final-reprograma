const mongoose = require('mongoose')
const Menu = require('../models/menu')

const getAll = async(req,res) => {
    const menus = await Menu.find()
    res.json(menus)
}

const createMenu =  async(req, res) => {
    const menu = new Menu({
        _id: new mongoose.Types.ObjectId(),
        unity: req.body.unity,
    })

    const existingUnity = await Menu.findOne({unity: req.body.unity})
    if (existingUnity) {
        return res.status(409).json({error: 'Unit already registered.'})
    }
  try{
    const newMenu = await menu.save()
    res.status(201).json(newMenu)
  
    } catch(err){
      res.status(400).json({ message: err.message})
    }
  }

module.exports = {
    getAll,
    createMenu
}