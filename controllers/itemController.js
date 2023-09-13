const mongoose = require('mongoose')
const ItemModel = require('../model/itemModel')


async function getAllItems(req,res){
    try {
        const getPost = await ItemModel.find()
        res.send(getPost).status(200)
    } catch (error) {
        res.send({ message: error.message }).status(400)
    }
}
async function createItem(req,res){
    try {
        const createdPost = await ItemModel.create(req.body)
        res.send(createdPost).status(201)
    } catch (error) {   
        res.status(400).json({msg:error})
    }
}



module.exports ={
    getAllItems,
    createItem
}