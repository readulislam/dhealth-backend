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
 

  var dateParts = date.split("/");

  var dateObject = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);

  const splitting = dateObject.toString().split(" ");
  const day = (splitting[0] + "day").toLowerCase();
  try {
    const isAvailable = await DateOverride.findOne({
      where: { date, doctorId },
    });
    console.log(isAvailable)
    if (isAvailable) {
      const updateValue = {};
      updateValue[day] = "Unavailable";
      const updateAvailability = await WeeklyAvailability.update(updateValue, {
        where: { doctorId },
      });
      console.log(updateAvailability)
    }
  } catch (error) {}
};
