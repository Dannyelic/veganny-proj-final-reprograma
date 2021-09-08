const express = require('express')
const router = express.Router()
const controller =  require('../controllers/orderController')

router.get('/', controller.getAll)

router.get('/paulista', controller.getAllPaulista)

//router.patch('/:id', controller.updateOrder)

router.post('/', controller.createOrder)

module.exports = router