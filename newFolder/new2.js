function runProgram(input) {
  var input = input.split("\n");
  var testcase = +input[0];
  var line = 1;
  for (var i = 0; i < testcase; i++) {
    var n = +input[line++];
    var arr1 = input[line++].trim().split(" ").map(Number);
    var arr2 = input[line++].trim().split(" ").map(Number);
    twoArrProd(n, arr1, arr2);
  }
}
function twoArrProd(n, arr1, arr2) {
  var sum = 1;
  var sum1 = 1;

  for (var i = 0; i < arr1.length; i++) {
    sum = sum * arr1[i];
  }
  for (var j = 0; j < arr2.length; j++) {
    sum1 = sum1 * arr2[j];
  }
  console.log(sum * sum1);
}
runProgram(`1
3
1 2 3
2 3 1`);
