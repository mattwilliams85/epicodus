
var nextWeek = function(day1,month1) {
var monthList = ["january","february","march","april","may","june","july","august","september","october","november","december"];
var startDay = new Date;
startDay.setMonth(monthList.indexOf(month1)); // !! Sets start month to inputted month //
day1 = day1.slice(0,3); // !! Abbreviate day to three letters //
startDay.setDate(1); // !! Set calendar day to the 1st //
var dateArray = [];
while (startDay.getMonth() === monthList.indexOf(month1)) { // !! While the current month is === to the input month, keep looping //
  for (var i = 0; i < day1.length; i++)
  var dd = startDay.getDate(); // !! Formatted in loop to update value of 'startDay' //
  var mm = startDay.getMonth() +1;
  var y = startDay.getFullYear();
  var formattedDate = mm + "/" + dd + "/" + y;
    if (day1 === (String(startDay).slice(0,3).toLowerCase())) { // !! Compares name day to day in month
    dateArray.push(String(formattedDate));
    startDay.setDate(startDay.getDate() + 1)  //!! Sets the calendar day one day forward //
  } else {
    startDay.setDate(startDay.getDate() + 1);
    };
}
return dateArray;
};
