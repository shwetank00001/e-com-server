const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
    title: String,
    description: String
})

module.exports = mongoose.model("ItemModel", itemSchema)