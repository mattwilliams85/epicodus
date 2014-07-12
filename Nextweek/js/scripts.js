var today = new Date;
var weekDay = today.getDay();
var dayList = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
  var nextWeek = function(weekPlus) {
  var weekPlus = weekPlus.toLowerCase();
  var day = dayList.indexOf(weekPlus);
  weekDay = (day - weekDay) + 7;
  today.setDate(today.getDate() + weekDay);
  var dd = today.getDate();
  var mm = today.getMonth() +1;
  var y = today.getFullYear();
  var formattedDate = mm + "/" + dd + "/" + y;
  return formattedDate;
}
