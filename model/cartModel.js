const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    productId: mongoose.Schema.Types.ObjectId,
    title: String,
    description: String,
    selectedFile: {
        type: String, 
        required: [true, 'Add img']
    },
    qty: Number
});

module.exports = mongoose.model('Cart', cartSchema);
