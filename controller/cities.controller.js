const {Cities} = require('../database')

exports.createCities = async(req,res) =>{
    try {
    const addCities = await   Cities.bulkCreate(req.body) ;
    res.status(200).json(addCities) 
    } catch (error) {
        res.status(500).json({type:error.name, massage:error.message})
    }
}
exports.getCitiesByStateId = async(req,res) =>{
    const {stateId} = req.query;
    try {
    const getCities = await   Cities.findAll({where:{stateId}}) ;
    res.status(200).json(getCities) 
    } catch (error) {
        res.status(500).json({type:error.name, massage:error.message})
    }
}