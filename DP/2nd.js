let minSteps = (i, arr, dp) => {
  if (i === arr.length) {
    return;
  }

  for (let j = 0; j < i; j++) {
    if (arr[j] >= i - j) {
      dp[i] = j;
      break;
    }
  }

  return minSteps(i + 1, arr, dp);
};

function runProgram(input) {
  let newInput = input.split("\n");
  let n = +newInput[0];
  let arr = newInput[1].split(" ").map(Number);

  let dp = new Array(n).fill(-1);

  minSteps(1, arr, dp);

  console.log(dp);

  let count = 0;

  let i = n - 1;

  while (i >= 0) {
    if (i === 0) {
      break;
    }
    count++;

    i = dp[i];
  }

  console.log(count);
}

runProgram(`11
1 3 5 8 9 2 6 7 6 8 9`);

// process.stdin.resume();
// process.stdin.setEncoding("ascii");
// let read = "";
// process.stdin.on("data", function (input) {
//   read += input;
// });
// process.stdin.on("end", function () {
//   read = read.replace(/\n$/, "");
//   read = read.replace(/\n$/, "");
//   runProgram(read);
// });
// process.on("SIGINT", function () {
//   read = read.replace(/\n$/, "");
//   runProgram(read);
//   process.exit(0);
// });
