function runProgram(input) {
  input = input.trim().split("\n");
  var testCase = +input[0];
  var row = 1;
  for (var i = 0; i < testCase; i++) {
    var [n, m, q] = input[row++].trim().split(" ").map(Number);
    var matrix = [];
    for (var j = 0; j < n; j++) {
      var temp = input[row++].trim().split(" ").map(Number);
      matrix.push(temp);
    }
    console.log(matrix);
    for (var j = 0; j < matrix.length; j++) {
      if (j % 2 == 0) {
        for (var k = 0; k < matrix[j].length; k++) {
          console.log(matrix[j][k]);
        }
      } else {
        for (var k = matrix[j].length - 1; k >= 0; k--) {
          console.log(matrix[j][k]);
        }
      }
    }
  }
}
var input = `2
3 3 1
1 2 3
4 5 6
7 8 9
3 3 2
1 2 3
4 5 6
7 8 9`;
runProgram(input);
