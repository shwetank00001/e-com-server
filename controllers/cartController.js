const mongoose = require('mongoose');
const Cart = require('../model/cartModel');

async function showCartItem(req, res) {
  try {
    const cartItems = await Cart.find();
    res.json(cartItems);
  } catch (error) {
    console.error('Error retrieving cart items:', error);
    res.status(400).json({ error: 'Internal server error' });
  }
}


async function addToCart(req, res) {
  try {

    const { title, qty } = req.body;
    const cartItem = new Cart({ title, qty });
    await cartItem.save();
    res.json(cartItem);
    
  } catch (error) {
    console.error('Error adding item to cart:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = {     
  showCartItem,
  addToCart,
};
