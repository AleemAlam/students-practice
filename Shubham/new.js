function checkNeighbor(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i == 0 && arr[i] > arr[i + 1]) count++;
    else if (i == arr.length - 1 && arr[i] > arr[i - 1]) count++;
    else if (arr[i] > arr[i + 1] && arr[i] > arr[i - 1]) count++;
  }
  console.log(count);
}
function runProgram(inp) {
  var input = inp.split("\n");
  var N = +input[0];
  var arr = input[1].trim().split(" ").map(Number);
  checkNeighbor(arr);
}

if (process.env.USERNAME === "Hello Moto") {
  runProgram(``);
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
