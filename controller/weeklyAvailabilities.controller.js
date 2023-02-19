const { WeeklyAvailabilities, DateOverride } = require("../database");
exports.createOneTime = async (req, res) => {
  console.log(req.body);
  try {
    const availability = await WeeklyAvailabilities.create(req.body);
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
      const updateAvailability = await WeeklyAvailabilities.findOne({
        where: { doctorId },
      });
      res.status(200).json({ data: updateAvailability });
    } else {
      res.status(200).json({ data: "Unavailable" });
    }
  } catch (error) {
    res.status(500).json({ type: error.name, massage: error.massage });
  }
};

exports.getAvailabilityByDoctorId = async (req, res) => {
  const { doctorId } = req.query;
  try {
    const availability = await WeeklyAvailabilities.findOne({
      where: { doctorId },
    });
    res.status(200).json(availability);
  } catch (error) {
    res.status(500).json({ type: error.name, massage: error.massage });
  }
};

exports.dropAvailability = async (req, res) => {
  const { doctorId } = req.query;
  try {
    const dropped = await WeeklyAvailabilities.destroy({ where: { doctorId } });
    res.status(200).json(dropped);
  } catch (error) {}
};
exports.UpdateAvailability = async (req, res) => {
  const { doctorId, weekday, id, startTime, endTime } = req.body;

  console.log(doctorId, weekday, id);
  try {
    const find = await WeeklyAvailabilities.findOne({ where: { doctorId } });

    if (find) {
      const scheduleValue = find[weekday];
      const updatedValue = scheduleValue.map((value) => {
        if (parseInt(value.id) === parseInt(id)) {
          return { id: value.id, startTime: startTime, endTime: endTime };
        }
        return value;
      });
      const updatedSchedule = await WeeklyAvailabilities.update(
        { [weekday]: updatedValue },
        { where: { doctorId } }
      );

      res.status(200).json(updatedSchedule);
    } else {
      res.status(400).json({ massage: "Not Found Weekly Availability" });
    }
  } catch (error) {}
};
exports.AllAvailability = async (req, res) => {
  const { doctorId } = req.query;
  try {
    const dropped = await WeeklyAvailabilities.findAll();
    res.status(200).json(dropped);
  } catch (error) {}
};
