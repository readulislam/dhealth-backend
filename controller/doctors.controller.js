const multer = require("multer");
const { Op ,Sequelize, DataTypes} = require("sequelize");
const path = require("path");


const { Doctors, Departments, Hospitals } = require("../database");
exports.createDoctor = async (req, res) => {
  try {
    // const doctor = await Doctors.create({ ...req.body });

    const doctor = await Doctors.bulkCreate(req.body);
    res.status(200).json(doctor);
  } catch (error) {
    res.status(500).json({ type: error.name, massage: error.massage });
  }
};
exports.getDoctors = async (req, res) => {
  const { offset, limit } = req.query;
  console.log(req.query);
  try {
    const doctors = await Doctors.findAndCountAll({
      limit: limit,
      offset: (offset - 1) * limit,
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
exports.getDoctorBySearch = async (req, res) => {
 

  const { textInput, locationInput, departmentInput, limit, offset } =
    req.query;
  console.log(req.query);
  console.log(typeof locationInput)
  const hospitalId = parseInt(locationInput)
  const departmentId = parseInt(departmentInput);
  const limitNumber = parseInt(limit);
  const offsetNumber = parseInt(offset);
  console.log(typeof hospitalId)

  
  
  const common = {
    limit:5,
    offset: (1 - 1) *5,
    include: [
      { model: Departments, as: "department" },
      { model: Hospitals, as: "hospital" },
    ],
  };


  if (textInput && !locationInput && !departmentId) {
    const doctors = await Doctors.findAndCountAll({
      ...common,
      where:{name:textInput},
  
    });
    res.status(200).json(doctors);
  } else if (textInput && hospitalId && !departmentId) {
    console.log('du da')
     const doctors = await Doctors.findAndCountAll({
    where:{name: textInput, hospitalId},
    ...common
    
    })
    res.status(200).json(doctors);
   
  } else if (textInput && !hospitalId && departmentId) {
    const doctors = await Doctors.findAndCountAll({
      where:{ [Op.and]: [
        { name: textInput },
        { departmentId },
      ]},
      ...common
      
      })
      res.status(200).json(doctors);
      return;
  } else if (!textInput && locationInput && departmentId) {
    const doctors = await Doctors.findAndCountAll({
      where:{ [Op.and]: [
        { departmentId, },
        { hospitalId },
      ]},
      ...common
      
      })
      res.status(200).json(doctors);
      return;
  } else if (!textInput && hospitalId && !departmentId) {
    const doctors = await Doctors.findAndCountAll({
      where:{hospitalId},
      ...common
      
      })
      res.status(200).json(doctors);
      return;
  } else if (!textInput && !hospitalId && departmentId) {
    const doctors = await Doctors.findAndCountAll({
      where:{ departmentId},
      ...common
      
      })
      res.status(200).json(doctors);
      return;
  }else if(textInput && hospitalId && departmentId) {
    const doctors = await Doctors.findAndCountAll({
      where:{ [Op.and]: [
        { name: textInput },
        { hospitalId},
        { departmentId },
      ]},
      ...common
      
      })
      res.status(200).json(doctors);
      return;
  }



};

// jjjjjjjj
 

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

exports.updateFiled=async(req,res)=>{
 try {
  const doctors = await Doctors.addColumn('experience', { type: DataTypes.STRING })
  res.status(200).json(doctors);
 } catch (error) {
  console.log(error);
  
 }
}