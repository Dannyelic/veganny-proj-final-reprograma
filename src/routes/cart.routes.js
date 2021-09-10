const express = require('express')
const router = express.Router()
const controller =  require('../controllers/cartController')

router.get('/:id', controller.getCartById)

router.patch('/:id', controller.updateCart)

router.delete('/delete/:id', controller.deleteById)

module.exports = router