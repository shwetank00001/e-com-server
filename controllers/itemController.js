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


async function deleteItem(req,res){
    try {
        const { id : userID} = req.params
        const deleted = await ItemModel.findByIdAndDelete( { _id: userID })

        if(!deleted){
            res.send("Item Not Present")
        }
        res.json({"Value deleted" : deleted})        
    } catch (error) {
        res.send(error)
        console.log(error)
        
    }
}



module.exports ={
    getAllItems,
    createItem,
    deleteItem
}