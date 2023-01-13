const { Prescription } = require("../database");

exports.createPrescription = async (req, res) => {
    console.log(req.body)
  try {
    let info = {
      link: req.file.path,
      followUpDate: req.body.followUpDate,
      doctorId: req.body.doctorId,
      patientId: req.body.patientId,
      appointmentId: req.body.appointmentId,
    }
    const addPrescription = await Prescription.create(info);
    res.status(200).json(addPrescription)
  } catch (error) {
    res.status(500).json({type:error.name, massage:error.massage})
  }
  const storage = multer.diskStorage({
    destination:(req,file, callback)=>{
        callback(null,'PrescriptionImages')
    },
    filename:(req,file, callback)=>{
        callback(null,  Date.now() + path.extname(file.originalname))
    }
})

exports.uploadPrescription = multer({
    storage,
    limits:100000,
    fileFilter:(req, file, callback)=>{
        const fileTypes = /jpg|png|jpeg|gif/
        const fileMimeType = fileTypes.test(file.mimetype)
        const extName = fileTypes.test(path.extname(file.originalname   ))

        if(fileMimeType && extName){
            return callback(null, true)
        }
        callback(new Error('only .jpg, .png, .jpeg, .gif format allowed!'))
    }
}).single('file')
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