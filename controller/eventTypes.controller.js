
const {EventType} = require('../database')
exports.createEvent=async(req,res)=>{
    try {
        const event = await EventType.create(req.body);
        res.status(200).json(event)
    } catch (error) {
        res.status(500).json({type:error.name, massage:error.massage})
    }
}

exports.getEvents = async(req,res) =>{
    try {
        const events = await  EventType.findAll();
        res.status(200).json(events);
    } catch (error) {
        res.status(500).json({type:error.name, massage:error.massage});
    }
}
exports.dropEventType = async(req,res) =>{
    const {doctorId} = req.query;
    try {
        const dropped = await  EventType.destroy({where:{doctorId}});
        res.status(200).json(dropped);
    } catch (error) {
        res.status(500).json({type:error.name, massage:error.massage});
    }
}