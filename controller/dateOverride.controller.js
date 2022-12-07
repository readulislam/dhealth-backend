const {DateOverride} = require('../database')
exports.createDateOverride = async(req,res) =>{
    try {
        const overrideDate = await DateOverride.create(req.body)
        res.status(200).json(overrideDate)
    } catch (error) {
        res.status(500).json({type:error.name, massage:error.massage})
    }
} 

// find date override by date
exports.getDateOverrideByDate = async(req,res) =>{
    const {date} = req.query
    try {
        const getDateOverride = await DateOverride.findOne({where:{date}}) 
        res.status(200).json(getDateOverride)
    } catch (error) {
        res.status(500).json({type:error.name, massage:error.massage})
    }
}
exports.dropDateOverride = async(req,res) =>{
    const {doctorId} = req.query
    try {
        const dropped = await DateOverride.destroy({where:{doctorId}}) 
        res.status(200).json(dropped)
    } catch (error) {
        res.status(500).json({type:error.name, massage:error.massage})
    }
}


 








