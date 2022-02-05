function swastika(row, col, arr) {
  var sum = 0;
  var sum2 = 0;

  for (var i = 0; i <= Math.floor(row / 2); i++) {
    console.log(arr[i][0]);
    sum += arr[i][0];
  }
  console.log("something");
  for (var i = 1; i <= col - 2; i++) {
    console.log(arr[Math.floor(row / 2)][i]);
    sum += arr[Math.floor(row / 2)][i];
  }
  console.log("something");
  for (var i = Math.floor(row / 2); i <= row - 1; i++) {
    console.log(arr[i][col - 1]);
    sum += arr[i][col - 1];
  }
  console.log("something");
  for (var i = col - 1; i >= Math.floor(col / 2); i--) {
    sum2 += arr[0][i];
  }

  for (var i = 1; i < row; i++) {
    sum2 += arr[i][Math.floor(col / 2)];
  }

  for (var i = Math.floor(col / 2) - 1; i >= 0; i--) {
    sum2 += arr[row - 1][i];
  }
  console.log(sum, sum2);
  console.log(Math.abs(sum - sum2));
}
swastika(3, 3, [
  [6, 8, 10],
  [2, 3, 9],
  [7, 4, 5],
]);

// [
//   [6, 8, 10],
//   [2, 3, 9],
//   [7, 4, 5],
// ];
