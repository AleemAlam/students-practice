// function countSubArrayDivByK(arr, k) {
//   var count = 0;
//   var max = 0;
//   var obj = { 0: -1 };
//   var sum = 0;
//   for (var i = 0; i < arr.length; i++) {
//     sum += arr[i];
//     var rem = sum % k;
//     console.log(rem);
//     if (obj[rem]) {
//       var index = obj[rem];
//       var len = i - index;
//       console.log(index, len);
//       if (max < len) {
//         max = len;
//       }
//     } else {
//       obj[rem] = i;
//     }
//   }
//   console.log(max, obj);
// }

// countSubArrayDivByK([2, 3, 4, 6], 3);

var str = "masai";
//m
//ma
//mas
//masa
//masai
//a
//as
//asa
//asai
//s
//sa
//sai
//a
//ai
//i
// for (var i = 0; i < str.length; i++) {
//   var line = "";
//   for (var j = i; j < str.length; j++) {
//     line += str[j];
//     console.log(line);
//   }
// }

// A = 1
// B = 2
// C = 3
// AA = 27
// ZY = 701
//result = 0

var letter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var obj = {};
var str = "ABJHJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJ";
for (var i = 0; i < letter.length; i++) {
  obj[letter[i]] = i + 1;
}

var result = 0;
for (var j = 0; j < str.length; j++) {
  //str[i] B
  result *= 26; // 26
  result += obj[str[j]]; // 28
}

console.log(result);
