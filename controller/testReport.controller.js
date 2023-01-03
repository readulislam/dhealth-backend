const { TestReports } = require("../database");

exports.createTestReport = async (req, res) => {
    console.log(req.body)
  try {
    let info = {
      link: req.file.path,
      name: req.body.name,
      doctorId: req.body.doctorId,
      patientId: req.body.patientId,
      appointmentId: req.body.appointmentId,
  }
    const addTestReport = await TestReports.create(info);
    res.status(200).json(addTestReport)
  } catch (error) {
    res.status(500).json({type:error.name, massage:error.massage})
  }
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, 'uploadedFile/reports')
  },
  filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname))
  }
})

exports.uploadReport = multer({
  storage: storage,
  limits: { fileSize: '1000000' },
  // fileFilter: (req, file, cb) => {
  //     const fileTypes = /pdf|xlsx/
  //     const mimeType = fileTypes.test(file.mimetype)
  //     const extname = fileTypes.test(path.extname(file.originalname))
  //         if(mimeType && extname) {
      //             return cb(null, true)
      //         }
      //         cb('Give proper files formate to upload')
  // }
}).single('file')

exports.getTestReport = async (req, res) => {
    console.log(req.body)
    const {patientId,doctorId,appointmentId} = req.query;
  try {
    const getTestReport = await TestReports.findAll({where:{patientId,doctorId,appointmentId}});
    res.status(200).json(getTestReport)
  } catch (error) {
    res.status(500).json({type:error.name, massage:error.massage})
  }
};
exports.getTestReportByDoctorId = async (req, res) => {
  console.log(req.body)
  const {doctorId} = req.query;
try {
  const getTestReport = await TestReports.findAll({where:{doctorId}});
  res.status(200).json(getTestReport)
} catch (error) {
  res.status(500).json({type:error.name, massage:error.massage})
}
};
exports.dropTestReports = async (req, res) => {
  const { id } = req.query;
  try {
    const dropped = await TestReports.destroy({ where: { id } });
    res.status(200).json(dropped);
  } catch (error) {
    console.log(error);
  }
};