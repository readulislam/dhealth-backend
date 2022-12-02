
const {EventTypes} = require('../database')
exports.createEvent=async(req,res)=>{
    try {
        const event = await EventTypes.create(req.body);
        res.status(200).json(event)
    } catch (error) {
        res.status(500).json({type:error.name, massage:error.massage})
    }
}

exports.getEvents = async(req,res) =>{
    try {
        const events = await  EventTypes.findAll();
        res.status(200).json(events);
    } catch (error) {
        res.status(500).json({type:error.name, massage:error.massage});
    }
}