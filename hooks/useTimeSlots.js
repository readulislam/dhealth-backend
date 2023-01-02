const moment = require('moment');
const useTimeSlots=(start, end, interval)=>{
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
      startTime.add(interval, 'minutes');
      id++;
    }
    return timeStops;
  }
  
module.exports = useTimeSlots;


