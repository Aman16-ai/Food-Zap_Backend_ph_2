const Rating = require("../../models/Restaurant/Rating")

const createReview = async(req,res,next) => {
    try {
        const user = req.user
        const review = await Rating.create({
            ...req.body,
            user : user._id
        })
        return res.status(201).json({
            status:true,
            Resposne : review
        })
    }
    catch(err) {
        next(err)
    }
}