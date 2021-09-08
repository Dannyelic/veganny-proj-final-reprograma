const express = require('express')
const router = express.Router()
const controller =  require('../controllers/cartController')

router.get('/', controller.getAllCart)
router.patch('/:id', controller.updateCart)

module.exports = router