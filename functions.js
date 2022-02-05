// var Person = {
//   name: "Aleem",
//   age: 23,
//   education:{
//       school:"XYZ Public School"
//   }
// };
// console.log(this); //global

// Person.walk();

// // array of string
// ["MA", "SA","I"]
// // array of objects
// var obj = [
//   {
//     a: [{ name: { name: { name: { name: "Nrupul" } } } }],
//   },
//   { name: "Ahad" },
//   { name: "Ahad" },
// ];
// console.log(obj[0].a[0]);

// var name = 2;
// // console.log(name);
// var obj = {
//   name_1: "Nrupul",
//   name: "Aleem",
// };
// obj.name_1;
// //Nrupul

// var varters = "abcdefghijklmnopqrstuvwxyz";
// // {a:30,b:31..., z:n+26}
// var n = 30;
// var obj = {};
// for (var i = 0; i < varters.length; i++) {
//   obj[varters[i]] = i + n;
// }
// var str = "cdf";
// for (var i = 0; i < str.length; i++) {
//   console.log(obj[str[i]]);
// }

var str = "absnbdnmdlfkdl";

for (var i = 0; i < str.length; i++) {
  var subStr = "";
  for (var j = i; j < str.length; j++) {
    subStr += str[j];
    reverseStrFunc(subStr);
  }
}
function reverseStrFunc(subStr) {
  var reverseStr = "";
  for (var k = subStr.length - 1; k >= 0; k--) {
    reverseStr += subStr[k];
  }
  if (reverseStr == subStr) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}
