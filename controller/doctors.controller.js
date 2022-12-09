const multer = require("multer");
const path = require("path");
const { Doctors, Departments, Hospitals } = require("../database");
exports.createDoctor = async (req, res) => {
  try {
    const doctor = await Doctors.create({ ...req.body });
    res.status(200).json(doctor);
  } catch (error) {
    res.status(500).json({ type: error.name, massage: error.massage });
  }
};
exports.getDoctors = async (req, res) => {
  try {
    const doctors = await Doctors.findAll({
      include: [
        { model: Departments, as: "department" },
        { model: Hospitals, as: "hospital" },
      ],
    });
    res.status(200).json(doctors);
  } catch (error) {
    console.log(error);
  }
};
exports.dropDoctor = async (req, res) => {
  const { id } = req.query;
  try {
    const dropped = await Doctors.destroy({ where: { id } });
    res.status(200).json(dropped);
  } catch (error) {
    console.log(error);
  }
};

exports.getDoctorByPhone = async (req, res) => {
  console.log(req.query);
  // console.log(typeof req.params.contactNo)

  try {
    const doctor = await Doctors.findOne({
      where: { contactNo: req.query.contactNo },
      include: [
        { model: Departments, as: "department" },
        { model: Hospitals, as: "hospital" },
      ],
    });
    res.status(200).json(doctor);
  } catch (error) {
    res.status(500).json({ type: error.name, massage: error.massage });
  }
};

// upload Image file for doctors
// const storage = multer.diskStorage({
//     destination:(req,file, callback)=>{
//         callback(null,'Images')
//     },
//     filename:(req,file, callback)=>{
//         callback(null,  Date.now() + path.extname(file.originalname))
//     }
// })

// exports.upload = multer({
//     storage,
//     limits:100000,
//     fileFilter:(req, file, callback)=>{
//         const fileTypes = /jpg|png|jpeg|gif/
//         const fileMimeType = fileTypes.test(file.mimetype)
//         const extName = fileTypes.test(path.extname(file.originalname   ))

//         if(fileMimeType && extName){
//             return callback(null, true)
//         }
//         callback(new Error('only .jpg, .png, .jpeg, .gif format allowed!'))
//     }
// })
