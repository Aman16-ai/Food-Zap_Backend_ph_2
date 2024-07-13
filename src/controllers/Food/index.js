const ErrorProvider = require("../../Error/ErrorProvider")
const Food = require("../../models/Food/Food")
const { Restaurant } = require("../../models/Restaurant/Restaurant")


const createFood = async(req,res,next) => {
    try {
        const file = req.file.path
        const user = req.user
        if(!file) {
            throw new ErrorProvider(404,false,"Image not found")
        }

        const restaurant = await Restaurant.findOne({owner:user._id})
        if(!restaurant) {
            throw new ErrorProvider(404,false,"Restaurant not found")
        }

        const food = await Food.create({
            ...req.body,
            restaurantId:restaurant?._id,
            img : file
        })
        return res.status(201).json({'status':true,'Response':food}) 
    }
    catch(err) {
        next(err)
    }
}

module.exports = {createFood}