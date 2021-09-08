const express = require('express')
const app = express()

const db = require('./src/data/database')
db.connect()
app.use(express.json())

const menusRouter = require('./src/routes/menu.routes')
app.use('/veganny', menusRouter)

const ordersRouter = require('./src/routes/order.routes')
app.use('/menu', ordersRouter)

const cartRouter = require('./src/routes/cart.routes')
app.use('/cart', cartRouter)

app.listen(3333, () => console.log('Servidor rodando na porta 3333 ✔'))