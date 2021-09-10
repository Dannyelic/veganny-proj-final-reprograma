const express = require("express")
const router = express.Router()

router.get('/', (req, res)=>{
    res.status(200).json({
        "tittle": "Massas Artesanais - Veganny",
        "version": "1.0.0",
        "mensagem": "Um app funcional para visualização de cardápios e realização de pedidos da rede 'Veganny'. "
    })
})

module.exports = router