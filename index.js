const express = require('express')
require('./db/connect')
const cors = require('cors')
const bodyParser = require('body-parser')


const items = require('./routes/itemRoute')
const cart = require('./routes/cartRoute')


const app= express()


// app.use(bodyParser.json( {limit: "30mb" , extended:true}))
// app.use(bodyParser.urlencoded( {limit: "30mb" , extended:true}))
// app.use(cors())
app.use(bodyParser.json( {limit: "30mb" , extended:true}))
app.use(bodyParser.urlencoded( {limit: "30mb" , extended:true}))
app.use(cors())

app.get("/", (req,res) => {
    res.send("TEST")
})

app.use('/items', items)
app.use('/cart', cart)

app.listen(5000, () =>{
    console.log("APP ON PORT 5000")
})