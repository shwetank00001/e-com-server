const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
    title: String,
    description: {
        type: String,
        required: [true, "Add a Product description"]
    },

    selectedFile: {
        type: String, 
        required: [true, 'Add img']
    }

})

module.exports = mongoose.model("ItemModel", itemSchema)