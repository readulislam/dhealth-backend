const {Appointments} = require('../database');
exports.addAppointment =async (req,res) =>{
    const {date, time,patientId} = req.body;
try {
    const sameTimeAppointment = await Appointments.findOne({where:{date, time, patientId}})
    if(sameTimeAppointment){
        res.status(200).json({massage:"you couldn't add  appointment in same time and same date"})
    }else{
        const appointment = await Appointments.create(req.body);
        res.status(200).json(appointment)
    }
   
} catch (error) {
    res.status(500).json({type:error.name, massage:error.massage})
}
}


exports.DoctorAppointmentList =async(req,res) =>{
    const {doctorId,date} = req.query;
    try {
        const appointmentList = await Appointments.findAll({where: {doctorId, date}})
        res.status(200).json(appointmentList)
    } catch (error) {
        res.status(500).json({type:error.name, massage:error.massage})
    }
}
exports.DoctorAppointmentAll =async(req,res) =>{
    const {doctorId} = req.query;
    try {
        const appointmentList = await Appointments.findAll({where: {doctorId}})
        res.status(200).json(appointmentList)
    } catch (error) {
        res.status(500).json({type:error.name, massage:error.massage})
    }
}

exports.patientAppointmentList =async(req,res) =>{
    const {patientId} = req.query;
    try {
        const appointmentList = await Appointments.findAll({where: {patientId}})
        res.status(200).json(appointmentList)  
    } catch (error) {
        res.status(500).json({type:error.name, massage:error.massage})
    }
}