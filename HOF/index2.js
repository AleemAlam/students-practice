// function findContinent(country) {
//   switch (country) {
//     case "india":
//       console.log("Asia");
//       break;
//     default:
//   }
// }

var arr = [1, 2, 3, 4, 5, 5, 6, 7, 7, 7];
var obj = {};
for (var i = 0; i < arr.length; i++) {
  if (obj[arr[i]]) {
    obj[arr[i]] = obj[arr[i]] + 1;
  } else {
    obj[arr[i]] = 1;
  }
}
console.log(obj);
