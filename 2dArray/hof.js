function runProgram(input) {
  // Write code here
  input = input.split("\n");
  var testCase = +input[0];
  var line = 1;
  for (var i = 0; i < testCase; i++) {
    var n = +input[line++];
    var arr = input[line++].split(" ").map(Number);
    console.log(arr, n);
  }
}

`
5
1 2 3 4 5
`;
if (process.env.LOGNAME === "ellu") {
  runProgram(`2
4 
1 2 3 4
3 
1 2 3`);
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
