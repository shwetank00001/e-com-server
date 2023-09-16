const express = require('express')
const { getAllItems, createItem, deleteItem } = require('../controllers/itemController')

const route = express.Router()

route.get('/', getAllItems)
route.post('/', createItem)
route.delete('/:id', deleteItem)

module.exports = route