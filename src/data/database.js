require('dotenv').config()
const mongoose = require ('mongoose')


const connect = () => {mongoose.connect(
    process.env.DATABASE_URL, {
    useNewUrlParser: true,
    UseUnifiedTopology: true
})
    .then(console.log('Database conectada com sucesso!✅'))
    .catch(err => console.err)
}

module.exports = { connect }