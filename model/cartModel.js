const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    productId: mongoose.Schema.Types.ObjectId,
    title: String,
    description: String,
    selectedFile: String, 
    qty: Number
});

module.exports = mongoose.model('Cart', cartSchema);
