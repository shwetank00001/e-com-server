const express = require('express')
const route = express.Router()
const {showCartItem, addToCart} = require('../controllers/cartController')

route.get('/', showCartItem)
route.post('/add', addToCart)


module.exports = route
