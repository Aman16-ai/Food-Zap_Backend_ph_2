const ErrorProvider = require("../../Error/ErrorProvider")
const ChildCategory = require("../../models/category/ChildCategory")

const createChildCategory = async(req,res,next) => {
    try {
        const img = req.file.path
        const parentCategory = req.body.parentCategory
        if(!parentCategory) {
            throw new ErrorProvider(404,false,"No parent category found")
        }
        const category = await ChildCategory.create({...req.body,"image":img})
        return res.status(201).json({'status':true,'Response':category})
    }
    catch(err) {
        next(err)
    }
}

const getAllChildCateogry = async(req,res,next) => {
    try {
        const allCateogries = await ChildCategory.find({})
        return res.status(200).json({'status':true,'Response':allCateogries})
    }
    catch(err) {
        next(err)
    }
}

module.exports = {createChildCategory,getAllChildCateogry}