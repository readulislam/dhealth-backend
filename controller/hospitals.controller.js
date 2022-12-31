const { Hospitals } = require("../database");


// create a new hospital
exports.createHospital = async (req, res) => {
  try {
    // const hospital = await Hospitals.create(req.body);
    const hospital = await Hospitals.bulkCreate(req.body);
    res.status(200).send({ success: true, data: hospital });
  } catch (error) {
    res.status(500).send({ type: error.name, message: error.message });
  }
};


// get all hospitals
exports.getHospitals = async (req, res) => {
  try {
    const getHospitals = await Hospitals.findAll();
    res.status(200).send({ success: true, data: getHospitals });
  } catch (error) {
    res.status(500).send({ type: error.name, message: error.message });
  }
};
