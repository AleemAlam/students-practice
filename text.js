// // function runProgram(input) {
// //   input = input.split("\n");
// //   let testCase = input[0];
// //   for (let i = 0; i < testCase; i++) {
// //     let str = input[i + 1];
// //     decode(str);
// //   }
// // }
// // function decode(str) {
// //   let ans = [];
// //   for (let i = 0; i < str.length; i++) {
// //     if (str[i] == "#") {
// //       ans.pop();
// //     } else {
// //       ans.push(str[i]);
// //     }
// //   }
// //   console.log(ans.join(""));
// // }

// // runProgram(`2
// // ab#d
// // a#bc`);
// const str = "masai";
// // for (let i = 0; i < str.length; i++) {
// //   let subStr = "";
// //   for (let j = i; j < str.length; j++) {
// //     subStr += str[j];
// //     console.log(subStr);
// //   }
// // }
// let flag = 0;
// function subStr(str, index, ans) {
//   if (index == str.length) {
//     flag++;
//     index = flag;
//     ans = "";
//     if (flag == str.length) return;
//   }
//   ans += str[index];
//   console.log(ans);
//   subStr(str, index + 1, ans);
// }
// subStr(str, 0, "");

// const arr = [2, 3, 4, 56, 34, 56, 7, 8, 54, 9, 57];

// function printSum(arr, index, oSum, eSum) {
//   if (index == arr.length) {
//     console.log(oSum, eSum);
//     return;
//   }
//   if (arr[index] % 2 == 0) {
//     eSum += arr[index];
//   } else {
//     oSum += arr[index];
//   }
//   printSum(arr, index + 1, oSum, eSum);
// }
// printSum(arr, 0, 0, 0);
const str = "rar";
function checkPalindrome(str, l, r) {
  if (l >= r) {
    return true;
  }
  if (str[l] != str[r]) {
    return false;
  }
  return checkPalindrome(str, l + 1, r - 1);
}

console.log(checkPalindrome(str, 0, str.length - 1));
