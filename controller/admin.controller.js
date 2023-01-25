const {Admin} = require('../database')

exports.createAdmin = async(req,res) =>{
    try {
    const addAdmin = await Admin.create(req.body) ;
    res.status(200).json(addAdmin) 
    } catch (error) {
        res.status(500).json({type:error.name, massage:error.message})
    }
}
exports.getAdmin = async(req,res) =>{
    try {
    const getAdmin = await   Admin.findAll() ;
    res.status(200).json(getAdmin) 
    } catch (error) {
        res.status(500).json({type:error.name, massage:error.message})
    }
}