const set = new Set();
const obj = {};
function runProgram(input) {
  input = input.split("\n");
  const len = +input[0];
  const arr = input[1]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  subSeq(arr, "");
  for (ele in obj) {
    console.log(ele);
  }
}

function subSeq(arr, out) {
  obj[out] = 1;
  if (arr.length == 0) {
    return;
  }
  subSeq(arr.slice(1), out + arr[0] + " ");
  subSeq(arr.slice(1), out);
}

if (process.env.LOGNAME == "ellu") {
  runProgram(`7
3 7 2 3 4 3 9`);
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
