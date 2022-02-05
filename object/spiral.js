function runProgram(input) {
  input = input.split("\n");
  var testCase = input[0];
  var line = 1;
  for (var i = 0; i < testCase; i++) {
    var [n, m] = input[line].split(" ").map(Number);
    line++;
    var matrix = [];
    for (var j = 0; j < n; j++) {
      var temp = input[line].split(" ").map(Number);
      line++;
      matrix.push(temp);
    }
    spiral(matrix, n, m);
  }
}
function spiral(matrix, n, m) {
  var minRow = 0;
  var maxRow = n - 1; //3
  var minCol = 0;
  var maxCol = m - 1;
  var ans = [];

  while (ans.length < n * m) {
    for (var i = maxRow; i >= minRow && ans.length < n * m; i--) {
      ans.push(matrix[i][minCol]);
    }
    minCol++;
    for (var j = minCol; j <= maxCol && ans.length < n * m; j++) {
      ans.push(matrix[minRow][j]);
    }
    minRow++;
    for (var k = minRow; k <= maxRow && ans.length < n * m; k++) {
      ans.push(matrix[k][maxCol]);
    }
    maxCol--;
    for (var l = maxCol; l >= minCol && ans.length < n * m; l--) {
      ans.push(matrix[maxRow][l]);
    }
    maxRow--;
  }

  console.log(ans.join(" "));
}

if (process.env.LOGNAME === "ellu") {
  runProgram(`2
3 4
1 2 3 4
5 6 7 8
9 10 11 12
4 3
1 2 3
4 5 6
7 8 9
10 11 12`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
