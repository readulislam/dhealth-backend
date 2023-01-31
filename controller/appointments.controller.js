const {Appointments,Doctors,Patients} = require('../database');

exports.addAppointment =async (req,res) =>{
    const {date, time,patientId} = req.body;
    console.log(req.body)
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
    const {doctorId,offset,status, limit} = req.query;
  //hhhhhhhhhh
    try {
        const appointmentList = await Appointments.findAndCountAll({where: {doctorId,status},
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
    const {patientId,limit,offset,status} = req.query;
    try {
        const appointmentList = await Appointments.findAndCountAll({where: {patientId,status},
            
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
// exports.patientAppointmentUpdate =async(req,res) =>{
//     const {patientId,limit,offset} = req.query;
//     try {
//         const appointmentList = await Appointments.findAndCountAll({where: {patientId},
//             limit: limit,
//             offset: (offset - 1) * limit,
//             include: [
//                 { model: Doctors, as: "doctor" },
//                 { model: Patients, as: "patient" },
//               ],
//         })
//         res.status(200).json(appointmentList)  
//     } catch (error) {
//         res.status(500).json({type:error.name, massage:error.massage})
//     }
// }
exports.patientAppointmentComplete=async(req,res)=>{
    const {id} = req.body;
    
    try {
        const appointmentList = await Appointments.update({status:true},{where: {id}})
        res.status(200).json(appointmentList)  
    } catch (error) {
        res.status(500).json({type:error.name, massage:error.massage})
    }
}
exports.AppointmentDelete =async(req,res) =>{
    const {id} = req.query;
  //hhhhhhhhhh
    try {
        const appointmentList = await Appointments.destroy({where: {id}})
        res.status(200).json(appointmentList)
    } catch (error) {
        res.status(500).json({type:error.name, massage:error.massage})
    }
}


exports.getDiseasesAppointment = async(req, res) =>{
    const {patientId} = req.query;
   
      try {
          const diseasesList = await Appointments.findAll({ 
            where:{patientId},
          attributes: ['diseaseName' ],
          group: ['diseaseName'],
         
    
    });
          res.status(200).json(diseasesList)
      } catch (error) {
          res.status(500).json({type:error.name, massage:error.massage})
      }

}


exports.getAppointmentByDisease = async(req, res) =>{
    const {patientId, diseaseName} = req.query;
   
    try {
        const diseasesList = await Appointments.findAndCountAll({ 
          where:{patientId,diseaseName},
        
        
  
  });
        res.status(200).json(diseasesList)
    } catch (error) {
        res.status(500).json({type:error.name, massage:error.massage})
    }

}