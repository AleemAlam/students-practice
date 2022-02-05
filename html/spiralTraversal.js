// function spiralTraversal(N, M, arr) {
//   var ans = "";
//   var minRow = 0;
//   var minCol = 0;
//   var maxRow = N - 1;
//   var maxCol = M - 1;
//   var totalElement = N * M;
//   var count = 0;

//   while (count < totalElement) {
//     for (var i = minRow; i <= maxRow && count < totalElement; i++) {
//       ans += arr[i][minCol] + " ";
//       count++;
//     }
//     minCol++;
//     for (var i = minCol; i <= maxCol && count < totalElement; i++) {
//       ans += arr[maxRow][i] + " ";
//       count++;
//     }
//     maxRow--;
//     for (var i = maxRow; i >= minRow && count < totalElement; i--) {
//       ans += arr[i][maxCol] + " ";
//       count++;
//     }
//     maxCol--;
//     for (var i = maxCol; i >= minCol && count < totalElement; i--) {
//       ans += arr[minRow][i] + " ";
//       count++;
//     }
//     minRow++;
//   }
//   console.log(ans);
// }
// var arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr.join("a"));

// spiralTraversal(7, 6, [
//   [8, 3, 4, 4, 1, 2],
//   [6, 5, 2, 8, 5, 4],
//   [3, 9, 3, 7, 3, 3],
//   [8, 8, 9, 3, 5, 1],
//   [8, 7, 8, 8, 4, 1],
//   [8, 9, 8, 7, 3, 4],
//   [6, 9, 9, 7, 2, 6],
// ]);

// *.*.
// .*.*
// *.*.
// .*.*

// var arr = ["*.*.", ".*.*", "*.*.", "*.*.", ".*.*"];
// var count = 0;
// var n = arr.length - 1;
// while (count < n) {
//   arr[count] == arr[n];
//   count++;
//   n--;
// }
// var n = 4;
// var m = 5;
// for (var i = 0; i < m; i++) {
//   var line = "";
//   for (var j = 0; j < n; j++) {
//     line += arr[i][j];
//   }
//   console.log(line);
// }

var arr = [2, 9, 4, 10, 6, 7];
function isMax(arr) {
  return 10;
}
function removeElement(ele, arr) {
  return [2, 9, 4, 6, 7];
}
var newArr = [];
for (key in arr) {
  newArr.push(arr[key]);
}

var i = 0;
var ans = [];
while (i < 3) {
  var max = isMax(newArr);
  //[2, 9, 4, 10, 6, 7]
  //[2, 9, 4, 6, 7]
  //[2, 4, 6, 7]
  ans.push(max);
  newArr = removeElement(max, newArr);
  i++;
}
