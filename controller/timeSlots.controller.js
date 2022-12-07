const { DateOverride, WeeklyAvailability,TimeSlots } = require("../database");

const useTimeSlots = require("../hooks/useTimeSlots");

exports.getTimeSlots = async (req, res) => {
  const { date, doctorId } = req.query;
  //date format
  const dateParts = date.split("/");
  const dateObject = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);
  const splitting = dateObject.toString()?.split(" ");
  const day = (splitting[0]).toLowerCase();
    let properDay = ''
  switch (day) {
    case 'tue':
        properDay='tuesday'
        break;
  
    default:
        break;
  }

  try {
    const isAvailable = await DateOverride.findOne({
      where: { date, doctorId },
    });

    if (!isAvailable) {
      //  const updateValue = {};
      //  updateValue[day] = "9.00am-5.00pm";
      const availability = await WeeklyAvailability.findOne({
        where: { doctorId },
      });
      console.log(day)
      console.log(availability.dataValues[properDay])
      console.log('1')
      if (!availability[day]==='Unavailable') {
        console.log('1')
        const interval = 15
        const timeRange= availability[day]
        console.log(timeRange)
        const [startTime, endTime] = availability[day]?.split('-');
        const slots = await useTimeSlots('9.00', '12.00', interval)
        console.log(slots,'slots')
        const r = await TimeSlots.create({
            slots:{'slots':`${slots}`},
            timeRange,
            weekday:day
        })
    res.send(r)
        // if(created) {
        //     res.status(200).json(created)
        // }else{
        //     res.status(200).json(time_slots)
        // }
      }
    } else {
      res.status(200).json({ data: "Unavailable" });
    }
  } catch (error) {
    res.status(500).json({ type: error.name, massage: error.massage });
  }


};
