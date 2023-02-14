const {
  Appointments,
  Doctors,
  Patients,
  Hospitals,
  Departments,
  Disease,
} = require("../database");

exports.addAppointment = async (req, res) => {
  const { date, time, patientId } = req.body;
  console.log(req.body);
  try {
    const sameTimeAppointment = await Appointments.findOne({
      where: { date, time, patientId },
    });
    if (sameTimeAppointment) {
      res.status(200).json({
        massage: "you couldn't add  appointment in same time and same date",
      });
    } else {
      const appointment = await Appointments.create(req.body);
      res.status(200).json(appointment);
    }
  } catch (error) {
    res.status(500).json({ type: error.name, massage: error.massage });
  }
};

exports.DoctorAppointmentList = async (req, res) => {
  const { doctorId, date } = req.query;
  try {
    const appointmentList = await Appointments.findAll({
      where: { doctorId, date },
      include: [
        { model: Doctors, as: "doctor" },
        { model: Patients, as: "patient" },
      ],
    });
    res.status(200).json(appointmentList);
  } catch (error) {
    res.status(500).json({ type: error.name, massage: error.massage });
  }
};
exports.DoctorAppointmentAll = async (req, res) => {
  const { doctorId, offset, status, limit } = req.query;
  //hhhhhhhhhh
  try {
    const appointmentList = await Appointments.findAndCountAll({
      where: { doctorId, status },
      limit: limit,
      offset: (offset - 1) * limit,
      include: [
        { model: Doctors, as: "doctor" },
        { model: Patients, as: "patient" },
      ],
    });
    res.status(200).json(appointmentList);
  } catch (error) {
    res.status(500).json({ type: error.name, massage: error.massage });
  }
};
//kkkkk
exports.patientAppointmentList = async (req, res) => {
  const { patientId, limit, offset, status } = req.query;
  try {
    const appointmentList = await Appointments.findAndCountAll({
      where: { patientId, status },

      limit: limit,
      offset: (offset - 1) * limit,
      include: [
        {
          model: Doctors,
          as: "doctor",
          include: [
            { model: Hospitals, as: "hospital" },
            { model: Departments, as: "department" },
          ],
        },
        { model: Patients, as: "patient" },
      ],
    });
    res.status(200).json(appointmentList);
  } catch (error) {
    res.status(500).json({ type: error.name, massage: error.massage });
  }
};
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
exports.patientAppointmentComplete = async (req, res) => {
  const { id } = req.body;

  try {
    const appointmentList = await Appointments.update(
      { status: true },
      { where: { id } }
    );
    res.status(200).json(appointmentList);
  } catch (error) {
    res.status(500).json({ type: error.name, massage: error.massage });
  }
};
exports.AppointmentDelete = async (req, res) => {
  const { id } = req.query;
  //hhhhhhhhhh
  try {
    const appointmentList = await Appointments.destroy({ where: { id } });
    res.status(200).json(appointmentList);
  } catch (error) {
    res.status(500).json({ type: error.name, massage: error.massage });
  }
};

exports.getDiseasesAppointment = async (req, res) => {
  const { patientId, status } = req.query;
  console.log(status);

  try {
    const diseasesList = await Appointments.findAll({
      where: { patientId },
      attributes: ["diseaseName"],
      group: ["diseaseName"],
    });
    res.status(200).json(diseasesList);
  } catch (error) {
    res.status(500).json({ type: error.name, massage: error.massage });
  }
};

exports.getAppointmentByDisease = async (req, res) => {
  const { patientId, diseaseName } = req.query;
  console.log(diseaseName);

  try {
    const diseasesList = await Appointments.findAndCountAll({
      where: { patientId, diseaseName, status: true },
      include: [
        { model: Doctors, as: "doctor" },
        { model: Patients, as: "patient" },
      ],
    });
    res.status(200).json(diseasesList);
  } catch (error) {
    res.status(500).json({ type: error.name, massage: error.massage });
  }
};

exports.updatePatientDisease = async (req, res) => {
  const { diseaseName, departmentId,appointmentId } = req.body;
 
  try {
    const findDisease = await Disease.findOne({ where: { name:diseaseName, departmentId } });
    console.log(findDisease,'find disease')
    console.log(diseaseName,departmentId,appointmentId)
   
    if (!findDisease) {
      const createDisease = await Disease.create({
        name:diseaseName,
        departmentId,
        description: "",
      });
console.log(createDisease,'create disease')
      const updateAppointment = await Appointments.update(
        { diseaseId: createDisease.id, diseaseName: createDisease.name },
        { where: {id:appointmentId} }
      );
      console.log(updateAppointment,'update appointment')
      res.status(200).json(updateAppointment);
    }else{
      const updateAppointment = await Appointments.update(
        { diseaseId: findDisease.id, diseaseName: findDisease.name },
        { where: {id:appointmentId} }
      );
      res.status(200).json(updateAppointment);
    }
   
  } catch (error) {
    res.status(500).json({ type: error.name, massage: error.massage });
  }
};
