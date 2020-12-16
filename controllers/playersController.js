const router = require('express').Router()

const models = require('../models')

router.get('/', (req, res)=>{
    models.Player.find().then((foundPlayers)=>{
        res.status(200).json({ players: foundPlayers })
    })
})

router.get('/:id', (req, res) =>{
    models.Player.findOne({_id: req.params.id}).then((player)=>{
        res.status(200).json({ player })

    })
})

router.post('/', (req, res)=>{
    models.Player.create(req.body).then((player)=>{
        res.status(201).json({ player })
    })
})

router.put("/:id", (req, res)=> {
    models.Player.update({name: req.params.id}, {$set: {team: "patriots"}})
    .then((newPlayer)=> {
        res.status(200).json({ newPlayer })
    })
})

router.delete('/:id', (req, res) => {
    models.Player.deleteMany().then(() => {
        console.log('deleted')
    })
})

module.exports = router;