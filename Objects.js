// var hexa = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// //100%16 = 10
// hexa[4]== 4
// hexa[11] == "B"
// hexa[10] == "A"
// hexa[9]==9

// //6%16 = 6
// // 6B

//OBJECT
var arr = [1, 2, 3, 4, 5, 6];
var person = {
  name: "Aleem",
  age: "23",
};
// console.log(person.name);
// var name = "school";
// var school;
// person["school"] = "ABC School";
// console.log(person[name]);
// person["school"];
// person.school
// person["age"]
// for (key in person) {
//   console.log(person[key]);
// }
// occurrences in b
// b a

//
// var obj = {};
// var str = "aaabbbcdcbaaabba";
// var start;
// for (var i = 0; i < str.length; i++) {
//   if (str[i] == "b") {
//     start = i;
//     break;
//   }
// }

// for (var i = str.length - 1; i >= 0; i--) {
//   if (str[i] == "a") {
//     end = i;
//     break;
//   }
// }
// obj = {
//   a: 31,
//   b: 31,
//   c: 21,
//   d: 12,
//   m: 12,
// };
// var str = "adm";
// obj[str[i]] =31+31
// for (var i = start; i <= end; i++) {
//   if (obj[str[i]] == undefined) {
//     obj[str[i]] = 1;
//   } else {
//     obj[str[i]] = obj[str[i]] + 1;
//   }
// }
// console.log(obj);

// var str = "aaabbbcdcbaaabba";

// var arr = str.split("a");
// console.log(arr);

// a b

// 5 10 15== 30/2 = 15
// 5 10 16 == 31/2 = 15.5

// 10 == 16-

// if(str[i] == "a" && aPresent == false){
//  count++
//  aPresent  = true
// }
// if (obj[a] > 0 && obj[b] > 0) {
//   console.log("Yes");
// } else {
//   console.log("No");
// }

// var letter = "abcdefghijklmnopqrstuvwxyz";
// var upper = "abcdefghijklmnopqrstuvwxyz".toUpperCase();

// var str = ["AADDCC", "CDFHY"];

// function changeCase(ch) {
//   var ans = "";
//   for (var i = 0; i < letter.length; i++) {
//     if (ch == upper[i]) {
//       ans = letter[i];
//     }
//   }
//   return ans;
// }
// var ans = "";
// for (var i = 0; i < str.length; i++) {
//   ans = ans + changeCase(str[i]);
// }
// console.log(ans);

// var person = ["Aleem", 23, 1997];

// person[2]; // 1997

var personObj = {
  name: "Aleem",
  age: 23,
};
// for (key in personObj) {
//   console.log(key);
// }
// personObj.walk();
// console.log(this);
// var arr = [
//   function str() {
//     console.log("print");
//   },
// ];

// arr[0]();
