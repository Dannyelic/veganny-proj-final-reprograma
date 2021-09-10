const express = require('express')
const router = express.Router()
const controller =  require('../controllers/orderController')

router.get('/', controller.getAll)

router.get('/recife', controller.getAllRecife)

router.get('/olinda', controller.getAllOlinda)

router.get('/paulista', controller.getAllPaulista)

router.post('/', controller.createOrder)

module.exports = router