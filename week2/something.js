function runProgram(input) {
  var input = input.split("\n");
  var t = +input[0];
  var line = 1;
  for (var i = 0; i < t; i++) {
    var [N, M] = input[line].split(" ").map(Number);
    line++;
    var arr = input[line].split(" ").map(Number);
    line++;
    console.log(N, M, arr);
    findp(N, M, arr);
  }
}
function findp(N, M, arr) {
  count = 0;
  for (i = 0; i < arr.length; i++) {
    for (j = i + 1; j < N; j++) {
      if (arr[i] * arr[j] == M) {
        count++;
      }
    }
  }
  console.log(count);
}
if (process.env.LOGNAME === "ellu") {
  runProgram(`10
    9 15
    5 10 4 4 8 4 7 6 10
    9 7
    4 3 5 3 6 3 6 5 7
    10 20
    16 13 7 10 7 15 2 18 5 1
    14 9
    8 6 8 3 4 4 3 8 3 1 4 9 1 5
    10 13
    7 6 13 2 2 7 6 8 4 11
    11 2
    1 2 2 2 2 1 1 2 2 2 1
    6 9
    2 5 5 8 5 4
    9 5
    3 2 5 5 2 5 2 3 3
    9 15
    12 12 12 3 15 7 5 9 2
    15 7
    6 2 3 1 6 7 6 3 2 6 5 1 4 6 1`);
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
