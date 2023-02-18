const {
  DateOverride,
  WeeklyAvailabilities,
  TimeSlote,
} = require("../database");

const { useTimeSlots } = require("../utils/createTimeSlots");

exports.getTimeSlots = async (req, res) => {
  const { date, doctorId } = req.body;
  //date format
  console.log(date);
  const dateParts = date.split("/");
  const dateObject = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);
  console.log(dateObject);
  const splitting = dateObject.toString()?.split(" ");
  const day = splitting[0].toLowerCase();
  console.log(day, splitting);
  let properDay = "";
  switch (day) {
    case "mon":
      properDay = "monday";
      break;

    case "tue":
      properDay = "tuesday";
      break;
    case "wed":
      properDay = "wednesday";
      break;
    case "thu":
      properDay = "thursday";
      break;
    case "fri":
      properDay = "friday";
      break;
    case "sat":
      properDay = "saturday";
      break;
    case "sun":
      properDay = "sunday";
      break;

    default:
      break;
  }
  console.log(properDay);
  try {
    const isAvailable = await DateOverride.findOne({
      where: { date, doctorId },
    });

    if (!isAvailable) {
    const availability = await WeeklyAvailabilities.findOne({
    where: { doctorId },
    });
    const daySchedule = availability.dataValues[properDay];
    console.log(daySchedule)

      if (daySchedule === "Unavailable") {
        res.status(200).json({ data: "Unavailable" });
      } else {
        let timeSlots = [];
        const data = daySchedule.map(({ startTime, endTime, id }) => {
          const slots = useTimeSlots(startTime, endTime);
          timeSlots = timeSlots.concat(slots);

          return;
        });

       
        const find = await TimeSlote.findOne({
          where: { weekday: properDay,  doctorId, date },
        });
        if (find) {
          res.status(200).json(find);
        } else {
          const data = await TimeSlote.create({
            doctorId,
            slots: timeSlots,
           
            weekday: properDay,
            date,
          });
          res.status(200).json(data);
        }
      }
    } else {
      res.status(200).json({ data: "Unavailable" });
    }
  } catch (error) {
    res.status(500).json({ type: error.name, massage: error.massage });
  }
};

exports.getAllslots = async (req, res) => {
  try {
    const slots = await TimeSlote.findAll();
    res.status(200).json(slots);
  } catch (error) {
    res.status(500).json({ type: error.name, massage: error.massage });
  }
};

exports.dropSlots = async (req, res) => {
  const { id } = req.query;
  try {
    const dropped = await TimeSlote.destroy({ where: { id } });
    res.status(200).json(dropped);
  } catch (error) {
    res.status(500).json({ type: error.name, massage: error.massage });
  }
};

exports.updateSlot = async (req, res) => {
  const { doctorId, date,  slotId, weekday, isAvailable } = req.body;
  // let doctorId = 6;
  // let date = '08/12/2022';
  // let timeRange ='9.00-17.00';
  // let slotId = 1;
  // let weekday = 'thursday';
 
  try {
    const findSlots = await TimeSlote.findOne({
      where: { doctorId, date,  weekday },
    });
    console.log(findSlots, "find exit slots");
    if (findSlots) {
      const slots = findSlots.dataValues["slots"];
      console.log(slots);
      const updateSlots = slots.map((slot) => {
        if (slot.id === slotId) {
          slot.isAvailable = isAvailable;
          return slot;
        }
        return slot;
      });
      console.log(updateSlots, "updated slots");
      const updated = await TimeSlote.update(
        {
          slots: updateSlots,
        },
        {
          where: { doctorId, date,  weekday },
        }
      );
      console.log(updated, "update done");
      res.status(200).json(updated);
    } else {
      res.status(200).json({ massage: "something wrong" });
    }
  } catch (error) {
    res.status(500).json({ type: error.name, massage: error.massage });
  }
};

exports.getTimeSlot = async (req, res) => {
  const { date, doctorId } = req.query;
  console.log(date, doctorId);
  try {
    const slot = await TimeSlote.findOne({ where: { date, doctorId } });
    res.status(200).json(slot);
  } catch (error) {
    res.status(500).json({ type: error.name, massage: error.massage });
  }
};
