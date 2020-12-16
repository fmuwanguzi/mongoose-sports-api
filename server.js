const express = require('express')
const app = express()
require('dotenv').config()

app.use(express.urlencoded({extended: false}))
app.use(express.json())

const models = require('./models')

app.get('/', (req, res)=>{
    res.send('---this is the root---')
})



const PORT = process.env.PORT || 3000
app.listen(PORT, ()=>{
    console.log(`server started on ${PORT}`)
})