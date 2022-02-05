var arr = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 9],
  [1, 2, 3, 4, 5],
  [1, 3, 4, 5, 6],
];

for (var i = 1; i < arr.length - 1; i++) {
  for (var j = 1; j < arr[i].length - 1; j++) {
    console.log(arr[i][j]);
  }
}
