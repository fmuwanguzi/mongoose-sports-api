const router = require('express').Router()

const models = require('../models')

router.get('/', (req, res)=>{
    models.Player.find().then((foundPlayers)=>{
        res.status(200).json({ players: foundPlayers })
    })
})

module.exports = router;