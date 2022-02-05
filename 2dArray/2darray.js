function traverse(input) {
  input = input.split("\n");
  var row = 1;
  var testCase = +input[0];
  for (var i = 0; i < testCase; i++) {
    var [n, m] = input[row].split(" ").map(Number);
    row++;
    var matrix = [];
    for (var j = 0; j < n; j++) {
      matrix.push(input[row].split(" ").map(Number));
      row++;
    }
    twoDArray(matrix, n, m);
  }
}
function twoDArray(matrix, n, m) {
  var minRow = 0;
  var maxRow = n - 1;
  var minCol = 0;
  var maxCol = m - 1;
  var ans = [];
  var count = 0;
  var totalCount = n * m;
  while (totalCount > count) {
    for (var i = maxRow; i >= minRow && totalCount > count; i--) {
      ans.push(matrix[i][minCol]);
      count++;
    }
    minCol++;
    for (var j = minCol; j <= maxCol && totalCount > count; j++) {
      ans.push(matrix[minRow][j]);
      count++;
    }
    minRow++;
    for (var k = minRow; k <= maxRow && totalCount > count; k++) {
      ans.push(matrix[k][maxCol]);
      count++;
    }
    maxCol--;
    for (var l = maxCol; l >= minCol && totalCount > count; l--) {
      ans.push(matrix[maxRow][l]);
      count++;
    }
    maxRow--;
  }
  console.log(ans.join(" "));
}
traverse(`2
3 4
1 2 3 4
5 6 7 8
9 10 11 12
4 3
1 2 3
4 5 6
7 8 9
10 11 12`);
