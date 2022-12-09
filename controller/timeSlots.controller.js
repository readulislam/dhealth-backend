const { DateOverride, WeeklyAvailability, TimeSlote } = require("../database");
const moment = require("moment");

exports.getTimeSlots = async (req, res) => {
  const { date, doctorId } = req.query;
  //date format
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
      const availability = await WeeklyAvailability.findOne({
        where: { doctorId },
      });
      const timeRange = availability.dataValues[properDay];
      if (timeRange === "Unavailable") {
        res.status(200).json({ data: "Unavailable" });
      } else {
        const [startTime, endTime] = timeRange?.split("-");

        const useTimeSlots = (start, end) => {
          var startTime = moment(start, "HH:mm");
          var endTime = moment(end, "HH:mm");

          if (endTime.isBefore(startTime)) {
            endTime.add(1, "day");
          }

          var timeStops = [];
          var id = 1;
          while (startTime <= endTime) {
            const timeObj = {
              id,
              time: new moment(startTime).format("HH:mm"),
              isAvailable: true,
            };
            timeStops.push(timeObj);
            startTime.add(15, "minutes");
            id++;
          }
          return timeStops;
        };
        const slots = useTimeSlots(startTime, endTime);
        const find = await TimeSlote.findOne({
          where: { weekday: properDay, timeRange, doctorId, date },
        });
        if (find) {
          res.status(200).json(find);
        } else {
          const data = await TimeSlote.create({
            doctorId,
            slots: slots,
            timeRange,
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
  // const { doctorId, date, timeRange, slotId } = req.query;
  let doctorId = 6;
  let date = '08/12/2022';
  let timeRange ='9.00-17.00';
  let slotId = 1;
  let weekday = 'thursday';
  try {
    const findSlots = await TimeSlote.findOne({
      where: { doctorId, date, timeRange,weekday },
    });
    console.log(findSlots,'find exit slots')
   if(findSlots){
    const  slots = findSlots.dataValues['slots'];
    console.log(slots)
    const updateSlots = slots.map((slot) => {
      console.log(slot,'1')
      if (slot.id === slotId) {
        slot.isAvailable = false;
      }
      console.log(slot,'2')
    });
    console.log(updateSlots,'updated slots');
    const updated = await TimeSlote.update({
      where: { doctorId, date, timeRange,weekday },

      slots: updateSlots,
    });
    console.log(updated,'update done')
    res.status(200).json(updated);
   }else{
    res.status(200).json({massage:'something wrong'})
   }
   
  } catch (error) {
    res.status(500).json({ type: error.name, massage: error.massage });
  }
};
