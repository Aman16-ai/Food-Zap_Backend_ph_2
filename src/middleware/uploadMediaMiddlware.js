const multer = require('multer')
const storage = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null,getDestination(req))
    },
    filename:(req,file,cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null,file.fieldname+"-"+uniqueSuffix)
    }
})


const getDestination = (req) => {
    let des = "./uploads"
    if(req.originalUrl.startsWith("/category")) {
        des = "./uploads/category"
    }
    return des
}

const uploads = multer({storage:storage})

module.exports = uploads