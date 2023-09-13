const express = require('express')
const { getAllItems } = require('../controllers/itemController')

const route = express.Router()

route.get('/', getAllItems )

module.exports = route