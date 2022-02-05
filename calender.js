var calender = {};
var input = [2021, "Wednesday"];

var months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
var week_days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
var days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var start = 0;

for (var i = 0; i < months.length; i++) {
  var daysInMonths = {};
  for (var j = 0; j < week_days.length; j++) {
    var dates = [];
    daysInMonths[week_days[j]] = dates;
    if (week_days[j] == input[1]) {
      start = j;
    }
  }
  calender[months[i]] = daysInMonths;
}
console.log(calender);
for (var m = 0; m < months.length; m++) {
  monthSize = days[m];
  if (m == 1 && input[0] % 4 == 0) {
    monthSize = 29;
  }
  for (var j = 1; j <= monthSize; j++) {
    calender[months[m]][week_days[start % 7]].push(j);
    start++;
  }
}

// console.log(calender);
