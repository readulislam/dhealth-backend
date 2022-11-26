const { States } = require("../database");

exports.createStates = async (req, res) => {
    console.log(req.body)
  try {
    const addState = await States.bulkCreate(req.body);
    res.status(200).json(addState)
  } catch (error) {
    res.status(500).json({type:error.name, massage:error.massage})
  }
};
exports.getStates = async (req, res) => {
    console.log(req.body)
  try {
    const getState = await States.findAll();
    res.status(200).json(getState)
  } catch (error) {
    res.status(500).json({type:error.name, massage:error.massage})
  }
};


