function spiralTraversal(N, M, arr) {
  var op = [];
  if (N > M) {
    var l = M;
  } else if (N < M) {
    var l = N;
  } else var l = N;
  l = Math.ceil(l / 2);

  // console.log(l)
  for (var c = 0; c < l; c++) {
    console.log(c);
    for (var r = c; r < N - 1 - c; r++) {
      op.push(arr[r][c]);
    }
    for (var r = c; r < M - 1 - c; r++) {
      op.push(arr[N - 1 - c][r]);
    }
    for (var r = N - 1 - c; r > c; r--) {
      op.push(arr[r][M - 1 - c]);
    }
    for (var r = M - 1 - c; r > c; r--) {
      op.push(arr[c][r]);
    }
  }

  var newArr = [];
  for (var i = 0; i < N * M; i++) {
    newArr.push(op[i]);
  }
  console.log(newArr.join(" "));
}

spiralTraversal(7, 7, [
  [8, 3, 4, 4, 1, 2, 4],
  [6, 5, 2, 8, 5, 4, 2],
  [3, 9, 3, 7, 3, 3, 9],
  [8, 8, 9, 3, 5, 1, 3],
  [8, 7, 8, 8, 4, 1, 4],
  [8, 9, 8, 7, 3, 4, 5],
  [6, 9, 9, 7, 2, 6, 5],
]);
