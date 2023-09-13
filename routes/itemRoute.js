const express = require('express')
const { getAllItems, createItem } = require('../controllers/itemController')

const route = express.Router()

route.get('/', getAllItems)
route.post('/', createItem)

module.exports = route