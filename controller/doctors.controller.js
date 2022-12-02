const multer = require('multer')
const path = require('path')
const {Doctors} = require('../database')
exports.createDoctor = async(req,res) =>{

try {
    const doctor = await  Doctors.create({...req.body, img:''})
    res.status(200).json(doctor)
} catch (error) {
    console.log(error)
}
}
exports.getDoctors = async(req,res) =>{

try {
    const doctors = await  Doctors.findAll()
    res.status(200).json(doctors)
} catch (error) {
    console.log(error)
}
}
















// upload Image file for doctors
const storage = multer.diskStorage({
    destination:(req,file, callback)=>{
        callback(null,'Images')
    },
    filename:(req,file, callback)=>{
        callback(null,  Date.now() + path.extname(file.originalname))
    }
})

exports.upload = multer({
    storage,
    limits:100000,
    fileFilter:(req, file, callback)=>{
        const fileTypes = /jpg|png|jpeg|gif/
        const fileMimeType = fileTypes.test(file.mimetype)
        const extName = fileTypes.test(path.extname(file.originalname   ))

        if(fileMimeType && extName){
            return callback(null, true)
        }
        callback(new Error('only .jpg, .png, .jpeg, .gif format allowed!'))
    }
})