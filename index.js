const express = require('express')
require('./db/connect')

const items = require('./routes/itemRoute')

const app= express()


// app.use(bodyParser.json( {limit: "30mb" , extended:true}))
// app.use(bodyParser.urlencoded( {limit: "30mb" , extended:true}))
// app.use(cors())

app.get("/", (req,res) => {
    res.send("TEST")
})

app.use('/items', items)

app.listen(5000, () =>{
    console.log("APP ON PORT 5000")
})