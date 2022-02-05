function runProgram(input) {
  // Write code here
  var input = input.trim().split("\n");
  var [N, M] = input[0].split(" ").map(Number);
  var mat = [];
  for (var i = 1; i <= N; i++) {
    mat.push(input[i].trim().split(" ").map(Number));
  }
  evenSum(N, M, mat);
}

function evenSum(N, M, matrix) {
  for (var i = 0; i < M; i++) {
    var sum = 0;
    for (var j = 0; j < N; j++) {
      if (matrix[j][i] % 2 === 0) {
        sum += matrix[j][i];
      }
    }
    console.log(sum);
  }
}

if (process.env.LOGNAME === "ellu") {
  runProgram(`3 3
  1 2 3
  4 5 6
  7 8 9`);
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
