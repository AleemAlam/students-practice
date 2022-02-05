function equilibrium(arr, n) {
  var sum = 0;
  var leftSum = 0;
  for (let i = 0; i < n; ++i) {
    sum += arr[i];
  }

  for (let i = 0; i < n; ++i) {
    sum -= arr[i];

    if (leftSum == sum) {
      return i + 1;
    }

    leftSum += arr[i];
  }
  return -1;
}

function runProgram(input) {
  var input = input.trim().split("\n");
  var n = +input[0];
  var arr = input[1].trim().split(" ").map(Number);
  console.log(equilibrium(arr, n));
}
runProgram(`5
3 3 5 5 1`);
