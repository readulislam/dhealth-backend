const moment = require("moment");
  exports.useTimeSlots = (start, end) => {
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