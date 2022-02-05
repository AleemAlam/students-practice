function runProgram(input) {
  input = input.split("\n");
  var testCase = +input[0];
  var line = 1;
  for (var i = 0; i < testCase; i++) {
    var row = +input[line++];
    var matrix = [];
    for (var j = 0; j < row; j++) {
      matrix.push(input[line++]);
    }
    var horiAns = hori(matrix, row);
    var vertyAns = verty(matrix, row);
    if (horiAns == true && vertyAns == true) {
      console.log("BOTH");
    } else if (vertyAns == true) {
      console.log("VERTICAL");
    } else if (horiAns == true) {
      console.log("HORIZONTAL");
    } else {
      console.log("NO");
    }
  }
}

function hori(matrix, n) {
  var flag = true;
  for (var i = 0; i < matrix.length; i++) {
    if (matrix[i] != matrix[n - 1 - i]) {
      flag = false;
      break;
    }
  }
  return flag;
}
function verty(matrix, n) {
  var flag = true;
  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix.length; j++) {
      if (matrix[i][j] != matrix[i][n - 1 - j]) {
        flag = false;
      }
    }
  }
  return flag;
}

runProgram(`3
4
*.*.
.*.*
*.*.
.*.*
3
.*.
*.*
.*.
3
..*
**.
..*`);
