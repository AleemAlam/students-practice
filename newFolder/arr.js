function runProgram(input) {
  input = input.split("\n");
  var [n, k] = input[0].split(" ").map(Number);
  var arr = input[1].split(" ").map(Number);
  console.log(takeOutMaximum(arr, k));
}
function takeOutMaximum(arr, k) {
  var max = 0;
  var sum = 0;
  for (let i = 0; i < k; i++) {
    sum += arr[i];
  }
  max = Math.max(sum, max);
  for (let i = k; i < arr.length; i++) {
    sum -= arr[i - k];
    sum += arr[i];
    max = Math.max(sum, max);
  }
  return max;
}

runProgram(`10 3
-1 -1 -2 1 -2 4 1 9 3 9`);
