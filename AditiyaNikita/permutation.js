function runProgram(input) {
  var input = input.split("\n");
  var N = +input[0];
  var arr = input[1].split(" ");
  var l = 0;
  var r = N - 1;
  const ans = [];
  permutation(arr, l, r);
  function permutation(arr, l, r) {
    if (l == r) {
      ans.push(arr.join(" "));
    } else {
      for (var i = l; i <= r; i++) {
        swap(arr, l, i);
        permutation(arr, l + 1, r);
        swap(arr, l, i);
      }
    }
  }
  function swap(arr, l, i) {
    var temp = arr[l];
    arr[l] = arr[i];
    arr[i] = temp;
  }
  console.log(ans.sort().join("\n"));
}
if (process.env.LOGNAME === "ellu") {
  runProgram(`3
1 2 3`);
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
