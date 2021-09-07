const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Menu = require('../models/menu')

// GET - lista todo o menu (doce - salgado)
router.get('/', async(request,response)=>{
    const menus = await Menu.find()
    response.json(menus)
})

// CREATE - cria menus

router.post('/', async(request, response) =>{
  const menu = new Menu({
      _id: new mongoose.Types.ObjectId(),
      candy: request.body.candy,
      savory: request.body.savory,
      order: request.body.order
  })  

// salvar o menu no banco de dados
  const newMenu = await menu.save()
  response.status(201).json(newMenu)

})

module.exports = router