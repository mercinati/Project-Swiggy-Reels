const foodModel = require('../models/food.model');
const storageService = require('../services/storage.service');
const { v4:uuid } = require('uuid');


async function createFood(req, res) { 

    const fileUploadResult = await storageService.uploadFile(req.file.buffer, uuid()); //file, fileName

    const foodItem = await foodModel.create({
        name: req.body.name,
        video: fileUploadResult.url,
        description: req.body.description,
        FoodPartner: req.foodPartner._id
    });

    res.status(201).json ({
        message: "Food item created successfully",
        food: foodItem
    })
}

async function getFoodItems(req, res) {}

module.exports = {
    createFood,
    getFoodItems
}