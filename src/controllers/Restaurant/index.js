const ErrorProvider = require("../../Error/ErrorProvider")
const {Restaurant} = require("../../models/Restaurant/Restaurant")
const RestaurantService = require("../../service/restaurant.service")
const createRestaurant = async(req,res,next) => {
    try {
        const user = req.user
        const file = req.file.path
        const obj = await Restaurant.create({...req.body,owner:user._id,image:file})
        if(!obj) {
            throw new ErrorProvider(202,false,'Falied to create')
        }
        return res.status(201).json({'status':true,'Response':obj})
    }
    catch(err) {
        next(err)
    }
}

const getAllRestaurant = async(req,res,next) => {
    try {
        const allRestaurant = await Restaurant.find({}).populate("owner")
        return res.status(200).json({'status':true,'Response':allRestaurant}) 
    }
    catch(err) {
        next(err)
    }
}

const getRestaurantCategoriesCount = async (req,res,next)=> {
    try {
        const restaurantService = new RestaurantService()
        const result = await restaurantService.getCategoriesWithCount(req.params.restaurantId)
        return res.status(200).json({
            status:true,
            Resposne : result
        })
    }
    catch(err) {
        next(err)
    }
}

const getRestaurantById = async (req,res,next) => {
    try {
        const restaurant = await Restaurant.findById(req.params.restaurantId)
        return res.status(200).json({
            status:true,
            Resposne : restaurant
        })
    }
    catch(err) {
        next(err)
    }
}
module.exports = {createRestaurant,getAllRestaurant,getRestaurantCategoriesCount,getRestaurantById}