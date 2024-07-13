const ErrorProvider = require("../../Error/ErrorProvider")
const parentCategory = require("../../models/category/ParentCategory")

const createParentCategory = async(req,res,next) => {
    try {
        const img = req.file.path
        if(!img) {
            throw new ErrorProvider(404,false,'Image not found')
        }
        const obj = await parentCategory.create({...req.body,'image':img})
        return res.status(201).json({'status':true,"Response":obj})
    }
    catch(err) {
        next(err)
    }
}

const getAllParentCategory = async(req,res,next) => {
    try {
        const allCategories = await parentCategory.find({})
        return res.status(200).json({'status':true,"Response":allCategories})
    }
    catch(err) {
        next(err)
    }
}


module.exports = {createParentCategory,getAllParentCategory}