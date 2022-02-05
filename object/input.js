function getInput(input) {
  input = input.split("\n");
  var testCase = +input[0];
  var line = 1;
  for (var i = 0; i < testCase; i++) {
    var n = +input[line++];
    var arr = input[line++].split(" ");
    console.log(arr, n);
  }
}

getInput(`2
5
1 2 3 4 5
3
1 2 3`);
