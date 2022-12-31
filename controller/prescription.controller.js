const { Prescription } = require("../database");

exports.createPrescription = async (req, res) => {
    console.log(req.body)
  try {
    const addPrescription = await Prescription.bulkCreate(req.body);
    res.status(200).json(addPrescription)
  } catch (error) {
    res.status(500).json({type:error.name, massage:error.massage})
  }
};
exports.getPrescriptionByPatientId = async (req, res) => {
    console.log(req.body)
    const {patientId,doctorId,appointmentId} = req.query;
  try {
    const getPrescription = await Prescription.findOne({where:{patientId,doctorId,appointmentId}});
    res.status(200).json(getPrescription)
  } catch (error) {
    res.status(500).json({type:error.name, massage:error.massage})
  }
};
exports.getPrescriptionByDoctorId = async (req, res) => {
  console.log(req.body)
  const {doctorId} = req.query;
try {
  const getPrescription = await Prescription.findAll({where:{doctorId}});
  res.status(200).json(getPrescription)
} catch (error) {
  res.status(500).json({type:error.name, massage:error.massage})
}
};