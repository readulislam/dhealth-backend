const {WeeklyAvailability} = require('../database')
exports.createOneTime = async(req,res) =>{
    try {
        const availability =  await WeeklyAvailability.create(req.body);
        res.status(200).json(availability)
    } catch (error) {
        res.status(500).json({type:error.name, massage:error.massage});
        
    }
}