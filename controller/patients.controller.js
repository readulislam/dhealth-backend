const {Patients} = require('../database')
exports.patientRegistration = async(req,res) =>{
    try {
        const addPatient = await Patients.create(req.body);
        res.status(200).json(addPatient);
    } catch (error) {
        res.status(500).json({type:error.name, massage:error.massage});
    }
}
exports.getAllPatient = async(req,res) =>{
    try {
        const patients = await Patients.findAll();
        res.status(200).json(patients);
    } catch (error) {
        res.status(500).json({type:error.name, massage:error.massage});
    }
}
// exports.getAllPatient = async (req, res) => {
//     const { offset, limit } = req.query;
//     console.log(req.query);
//     try {
//       const patients = await Patients.findAndCountAll({
//         limit: limit,
//         offset: (offset - 1) * limit,
//       });
//       res.status(200).json(patients);
//     } catch (error) {
//       console.log(error);
//     }
//   };
exports.getPatientByPhone = async(req,res) =>{
    console.log(req.query)
    console.log(req.params)
    const {contact} = req.query
    try {
        const patient = await Patients.findOne({where:{contact}});
        if(patient){
            res.status(200).json(patient);
        }else{
            res.status(200).json({massage:"You arn't  registered user"})
        }
       
    } catch (error) {
        res.status(500).json({type:error.name, massage:error.massage});
    }
}