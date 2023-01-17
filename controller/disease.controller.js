const {Disease} = require('../database')

exports.createDisease = async(req,res) =>{
    try {
    const addDisease = await   Disease.create(req.body) ;
    res.status(200).json(addDisease) 
    } catch (error) {
        res.status(500).json({type:error.name, massage:error.message})
    }
}
exports.getDisease = async(req,res) =>{
    try {
    const getDisease = await   Disease.findAll() ;
    res.status(200).json(getDisease) 
    } catch (error) {
        res.status(500).json({type:error.name, massage:error.message})
    }
}