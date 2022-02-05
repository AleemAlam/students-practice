function runProgram(input) {
  input = input.trim().split(" ").map(Number);
  var N = input[0];
  var K = input[1];
  var str = "";
  for (var i = 0; i < K; i++) {
    str += N;
  }
  var sum = 0;
  for (var i = 0; i < str.length; i++) {
    sum += +str[i];
  }

  console.log(fn(sum));
}
function fn(N) {
  //console.log(N);
  if (N < 10) {
    return N;
  }
  var str = N.toString();
  var sum = 0;
  for (var i = 0; i < str.length; i++) {
    sum += +str[i];
  }
  return fn(sum);
}
runProgram(`35466309473120514530 100000`);
