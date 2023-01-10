const {Appointments,Doctors,Patients} = require('../database');
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
        const appointmentList = await Appointments.findAll({where: {doctorId, date},
            include: [
                { model: Doctors, as: "doctor" },
                { model: Patients, as: "patient" },
              ],
        })
        res.status(200).json(appointmentList)
    } catch (error) {
        res.status(500).json({type:error.name, massage:error.massage})
    }
}
exports.DoctorAppointmentAll =async(req,res) =>{
    const {doctorId,offset, limit} = req.query;
  //hhhhhhhhhh
    try {
        const appointmentList = await Appointments.findAndCountAll({where: {doctorId},
            limit: limit,
            offset: (offset - 1) * limit,
            include: [
                { model: Doctors, as: "doctor" },
                { model: Patients, as: "patient" },
              ],
        })
        res.status(200).json(appointmentList)
    } catch (error) {
        res.status(500).json({type:error.name, massage:error.massage})
    }
}
//kkkkk
exports.patientAppointmentList =async(req,res) =>{
    const {patientId,limit,offset} = req.query;
    try {
        const appointmentList = await Appointments.findAndCountAll({where: {patientId},
            limit: limit,
            offset: (offset - 1) * limit,
            include: [
                { model: Doctors, as: "doctor" },
                { model: Patients, as: "patient" },
              ],
        })
        res.status(200).json(appointmentList)  
    } catch (error) {
        res.status(500).json({type:error.name, massage:error.massage})
    }
}
exports.patientAppointmentUpdate =async(req,res) =>{
    const {patientId,limit,offset} = req.query;
    try {
        const appointmentList = await Appointments.findAndCountAll({where: {patientId},
            limit: limit,
            offset: (offset - 1) * limit,
            include: [
                { model: Doctors, as: "doctor" },
                { model: Patients, as: "patient" },
              ],
        })
        res.status(200).json(appointmentList)  
    } catch (error) {
        res.status(500).json({type:error.name, massage:error.massage})
    }
}
exports.patientAppointmentComplete=async(req,res)=>{
    const {id} = req.query;
    try {
        const appointmentList = await Appointments.update({status:true},{where: {id},
            include: [
                { model: Doctors, as: "doctor" },
                { model: Patients, as: "patient" },
              ],
        })
        res.status(200).json(appointmentList)  
    } catch (error) {
        res.status(500).json({type:error.name, massage:error.massage})
    }
}