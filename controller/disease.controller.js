const {Disease} = require('../database')

exports.createDisease = async(req,res) =>{
    try {
    const addDisease = await   Disease.bulkCreate(req.body) ;
    res.status(200).json(addDisease) 
    } catch (error) {
        res.status(500).json({type:error.name, massage:error.message})
    }
}
exports.getDisease = async(req,res) =>{
    const {departmentId} = req.query;
    try {
    const getDisease = await   Disease.findAll({where:{departmentId}}) ;
    res.status(200).json(getDisease) 
    } catch (error) {
        res.status(500).json({type:error.name, massage:error.message})
    }
}