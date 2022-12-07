const { DateOverride, WeeklyAvailability,TimeSlots } = require("../database");
const moment = require('moment');
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
console.log(isAvailable)
   
    //    const updateValue = {};
    //    updateValue[day] = "9.00am-5.00pm";
      const availability = await WeeklyAvailability.findOne({
        where: { doctorId },
      });
      console.log(availability)
     
    //   const timeRange=(availability.dataValues[properDay])
      
    //   const interval = 15
     
    //   console.log(timeRange)
    //   const [startTime, endTime] = availability[day]?.split('-');
    //   console.log(startTime, endTime)
    const useTimeSlots=(start, end)=>{
      var startTime = moment(start, 'HH:mm');
      var endTime = moment(end, 'HH:mm');
      
      if( endTime.isBefore(startTime) ){
        endTime.add(1, 'day');
      }
    
      var timeStops = [];
     var id = 1
      while(startTime <= endTime){
          const timeObj={
              id,
              time:new moment(startTime).format('HH:mm'),
              isAvailable:false,
  
          }
      timeStops.push(timeObj);
        startTime.add(15, 'minutes');
        id++;
      }
      return timeStops;
    }
    const s = useTimeSlots('9.00','17.00')
    console.log(s)
    // res.send({data:true})
       const find = await TimeSlots.findOne({where:{weekday:properDay, timeRange}})
       if(find){
        res.status(200).json(find)
       }else{
        const r = await TimeSlots.create({
          slots:slots.toString(),
          timeRange,
          weekday:properDay

      })
      res.status(200).json({data:r})
       }
        
  
        // if(created) {
        //     res.status(200).json(created)
        // }else{
        //     res.status(200).json(time_slots)
        // }
     
     
  } catch (error) {
    res.status(500).json({ type: error.name, massage: error.massage });
  }


};
