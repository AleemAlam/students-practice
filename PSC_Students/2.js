let arr = [1, 3, 2, 4];
// 3 4 4 -1
// for (let i = 0; i < arr.length; i++) {
//   var flag = false;
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[i] < arr[j]) {
//       flag = true;
//       console.log(arr[j]);
//       break;
//     }
//   }
//   if (!flag) console.log(-1);
// }

// 1, 3, 2, 4
//       4 -1
// const nextGreater = (arr) => {
//   const stack = [];
//   const ans = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     while (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {
//       stack.pop();
//     }
//     ans[i] = stack.length > 0 ? stack[stack.length - 1] : -1;
//     stack.push(arr[i]);
//   }
//   console.log(ans.join(" "));
// };

// nextGreater(arr);

let str = "mas";

// mas
// msa
// ams
// asm
// sma
// sam

// for (let i = 0; i < str.length; i++) {
//   let subStr = "";
//   for (let j = i; j < str.length; j++) {
//     subStr += str[j];
//     console.log(subStr);
//   }
// }
// let j = 0;
// function subStr(str, index, ans) {
//   if (str.length == index) {
//     index = ++j;
//     ans = "";
//     if (str.length == j) return;
//   }
//   ans += str[index];
//   console.log(ans);
//   subStr(str, index + 1, ans);
// }
// subStr(str, 0, "");

// function fib(n) {
//   if (n <= 1) {
//     return n;
//   }
//   return fib(n - 1) + fib(n - 2);
// }

// console.log(fib(4));

// const board = [
//   [0, 0, 0, 0],
//   [0, 0, 0, 0],
//   [0, 0, 0, 0],
//   [0, 0, 0, 0],
// ];

const board = new Array(5).fill(new Array(5).fill(0));

function nQueen(board, row, n) {
  if (row == n) {
    console.log(board);
    return;
  }
  for (let i = 0; i < n; i++) {
    if (isSafe(board, row, i)) {
      board[row][i] = 1;
      if (nQueen(board, row + 1, n)) {
        return true;
      }
      board[row][i] = 0;
    }
  }
  return false;
}

function isSafe(board, row, i) {}
