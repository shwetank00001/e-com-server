const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
    title: String,
    description: String,

    selectedFile: {
        type: String, 
        required: [true, 'Add img']
    }

})

module.exports = mongoose.model("ItemModel", itemSchema)