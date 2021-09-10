require('dotenv').config()
const mongoose = require ('mongoose')

const MONGO_URL = process.env.MONGODB_URI || "mongodb://localhost:27017/veganny-db"

const connect = () => {
    mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    UseUnifiedTopology: true
})
    .then(console.log('Database conectada com sucesso!✅'))
    .catch(err => console.err)
}

module.exports = { connect }