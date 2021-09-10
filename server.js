const express = require('express')
const app = express()
const cors = require('cors')
const PORT = process.env.PORT || 3333

const db = require('./src/data/database')
db.connect()

app.use(express.json())

app.use(cors())

const index = require('./src/routes/index')
app.use('/', index)

const menusRouter = require('./src/routes/menu.routes')
app.use('/veganny', menusRouter)

const ordersRouter = require('./src/routes/order.routes')
app.use('/menu', ordersRouter)

const cartRouter = require('./src/routes/cart.routes')
app.use('/cart', cartRouter)

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})