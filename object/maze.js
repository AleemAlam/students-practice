function runProgram(input) {
  input = input.split("\n");
  var testCase = +input[0];
  var line = 1;

  for (var i = 0; i < testCase; i++) {
    var n = +input[line];
    line++;
    var arr = [];
    for (var a = 0; a < n; a++) {
      arr.push(input[line]);
      line++;
    }
    console.log(exitTheGrid(n, arr));
  }
}

function exitTheGrid(n, arr) {
  var i = 0;
  var j = 0;
  var count = 0;
  var check = 0;
  var totalCount = n * n;
  while (i >= 0 && j >= 0 && i < n && j < n) {
    if (arr[i][j] == "X") {
      return 0;
    }
    if (arr[i][j] == "L") {
      arr[i][j] = "X";
      j--;
    } else if (arr[i][j] == "R") {
      arr[i][j] = "X";
      j++;
    } else if (arr[i][j] == "U") {
      arr[i][j] = "X";
      i--;
    } else {
      arr[i][j] = "X";
      i++;
    }
    console.log(arr[i][j]);
    count++;
  }
  return count;
}

if (process.env.LOGNAME === "ellu") {
  runProgram(`1
7
DDDRURD
UUDULUU
DDDDLUR
UDRURUD
UDDURDD
LRDDLDL
UULDLRL`);
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
