const {Patients} = require('../database')
exports.patientRegistration = async(req,res) =>{
    try {
        const addPatient = await Patients.create(req.body);
        res.status(200).json(addPatient);
    } catch (error) {
        res.status(500).json({type:error.name, massage:error.massage});
    }
}