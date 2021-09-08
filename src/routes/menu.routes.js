const express = require('express')
const router = express.Router()
const controller = require('../controllers/menuController')

router.get('/', controller.getAll)

router.post('/', controller.createMenu)
 
module.exports = router