function runProgram(input) {
  var input = input.trim().split("\n");
  var testCase = +input[0];
  var line = 1;
  for (var i = 0; i < testCase; i++) {
    var num = +input[line++];
    happy(num);
  }
}

function happy(num) {
  while (num >= 10) {
    var str = num.toString();
    var sum = 0;
    for (var i = 0; i < str.length; i++) {
      sum += Number(str[i]) ** 2;
    }
    console.log(sum);
    num = sum;
  }
  if (num == 1) {
    console.log("true");
  } else {
    console.log("false");
  }
}

if (process.env.LOGNAME === "ellu") {
  runProgram(`1
15
`);
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
