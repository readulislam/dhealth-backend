const { TestReports } = require("../database");

exports.createTestReport = async (req, res) => {
    console.log(req.body)
  try {
    const addTestReport = await TestReports.create(req.body);
    res.status(200).json(addTestReport)
  } catch (error) {
    res.status(500).json({type:error.name, massage:error.massage})
  }
};
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