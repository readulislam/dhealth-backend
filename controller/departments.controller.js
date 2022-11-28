const {Departments} = require('../database')
exports.createDepartment = async (req, res) => {
    try {
        const department = await Departments.create(req.body)
        res.status(200).json(department);
    } catch (error) {
        res.status(500).json({type:error.name, massage:error.massage})
    }
}
exports.getDepartments = async (req, res) => {
    try {
        const departments = await Departments.findAll()
        res.status(200).json(departments);
    } catch (error) {
        res.status(500).json({type:error.name, massage:error.massage})
    }
}