// // var left = 10;
// // var right = 30;
// // // 11,12,13,14,15,16,17,18,19
// // // 2,3,4

// // function isDivisible(left, right) {
// //   var sum = 0;
// //   var check = false;
// //   for (; left < right; left++) {
// //     if (left % 2 == 0) {
// //       check = true;
// //       break;
// //     }
// //   }
// //   if (check == true) {
// //     console.log("yes");
// //   } else {
// //     console.log("no");
// //   }
// // }
// // isDivisible(left, right);

// function checkPrimeNum(num) {
//   //13
//   var count = 0;
//   for (var i = 2; i < num; i++) {
//     // 2 - 12
//     if (num % i == 0) {
//       // will never  be true
//       count++;
//     }
//   }
//   if (count == 2) {
//     console.log("yes");
//   } else {
//     console.log("no");
//   }
// }

// checkPrimeNum(13);

// "1234323560" "420" // search

// 11111122233341155
// var ans = ""
// var something = "1234"
// ans += something[i]+" "
// 1 2 3 4

// var arr = ["Early", "Monday", "morning", "MUSIC"];

// var arr = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ];

// sum = ""
// sum += i+j + " "
// 0 1

// i!=0 && j == 0

// var str = "bcdbfbra";
// var extra = false
// for (var i = 0; i < str.length; i++) {
//   if (
//     str[i] == "a" ||
//     str[i] == "e" ||
//     str[i] == "o" ||
//     str[i] == "i" ||
//     str[i] == "u"
//   ) {
//     extra = true
//     break;
//   }
// }

// var arr = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ];
// // [0, 0][(0, 1)][(1, 0)][(1, 1)][(2, 0)][(2, 1)];

// for (var i = 0; i < arr.length; i++) {
//   for (var j = 0; j < arr[i].length; j++) {
//     console.log(arr[i][j]);
//   }
// }
var str = "thisracecarisgood";
var max = 0;
for (var i = 0; i < str.length; i++) {
  for (var j = i + 1; j <= str.length; j++) {
    sum = "";
    for (var k = i; k < j; k++) {
      sum = sum + str[k];
    }
    var isPalindrome = palindrome(sum);
    max = Math.max(max, isPalindrome);
  }
}
console.log(max);

var str = "AMAN";

function palindrome(str) {
  var sum = "";
  for (var i = str.length - 1; i >= 0; i--) {
    sum = sum + str[i];
  }
  if (sum == str) {
    return str.length;
  }
  return 0;
}

// console.log(palindrome(str));
