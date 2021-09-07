const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Menu = require('../models/order')

// GET - lista todo o menu (doce - salgado)
router.get('/', async(req,res) => {
    const menus = await Menu.find()
    res.json(menus)
})

// CREATE - cria menus

router.post('/', async(req, res) => {
  const menu = new Menu({
      _id: new mongoose.Types.ObjectId(),
      unity: req.body.unity,
  })  
// salvar o menu no banco de dados
  const newMenu = await menu.save()
  res.status(201).json(newMenu)
})

module.exports = router