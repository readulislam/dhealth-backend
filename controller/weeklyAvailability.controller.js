const { WeeklyAvailability, DateOverride } = require("../database");
exports.createOneTime = async (req, res) => {
  try {
    const availability = await WeeklyAvailability.create(req.body);
    res.status(200).json(availability);
  } catch (error) {
    res.status(500).json({ type: error.name, massage: error.massage });
  }
};

exports.getAvailabilityBydDate = async (req, res) => {
  const { date, doctorId } = req.query;
  //date format
  const dateParts = date.split("/");
  const dateObject = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);
  const splitting = dateObject.toString()?.split(" ");
  const day = (splitting[0] + "day").toLowerCase();
 
  try {
    const isAvailable = await DateOverride.findOne({
      where: { date, doctorId },
    });
  

   if (!isAvailable) {
    //  const updateValue = {};
    //  updateValue[day] = "9.00am-5.00pm";
     const updateAvailability = await WeeklyAvailability.findOne( {
       where: { doctorId },
     });
    res.status(200).json({data:updateAvailability})

   }else{
    res.status(200).json({data:'Unavailable'})
   }


  } catch (error) {
    res.status(500).json({ type: error.name, massage: error.massage });
  }
};


exports.getAvailabilityByDoctorId= async (req, res) => {
    const {doctorId} = req.query
    try {
        const availability = await WeeklyAvailability.findOne({where:{doctorId}})
        res.status(200).json(availability)
    } catch (error) {
        res.status(500).json({ type: error.name, massage: error.massage });
    }
}

exports.dropAvailability = async(req,res) =>{
  const {doctorId} = req.query
try {
  const dropped = await WeeklyAvailability.destroy({where:{doctorId}})
  res.status(200).json(dropped)
} catch (error) {
  
}

}
exports.AllAvailability = async(req,res) =>{
  const {doctorId} = req.query
try {
  const dropped = await WeeklyAvailability.findAll({where:{doctorId}})
} catch (error) {
  
}

}