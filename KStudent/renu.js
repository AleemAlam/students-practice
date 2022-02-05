function runProgram(input) {
  var input = input.split("\n");
  var T = +input[0];
  var line = 1;
  var answer = [];
  for (var a = 0; a < T; a++) {
    var [N, O] = input[line].split(" ").map(Number);
    line++;
    var array = input[line].split(" ").map(Number);
    line++;
    for (var b = 0; b < N - O + 1; b++) {
      var max = array[0];
      for (var c = 0; c < O; c++) {
        if (max < array[c]) {
          max = array[c];
        }
      }
      answer.push(max);
      array.shift();
    }
    console.log(answer.join(" "));
  }
}

// function tallest(arr, k) {
//   const ans = [];
//   var max = -Infinity;
//   for (let i = 0; i < k; i++) {
//     if (max < arr[i]) {
//       max = arr[i];
//     }
//   }
//   ans.push(max);
//   for (let i = k; i < arr.length; i++) {
//     max -= arr[i - k];
//     if (max < arr[i]) {
//       max = arr[i];
//     }
//   }

//   console.log(i);
// }
if (process.env.LOGNAME === "ellu") {
  runProgram(`1
143 107
36 34 100 4 65 91 1 30 2 92 79 21 28 39 8 48 68 39 43 67 43 52 94 14 15 53 34 62 44 30 79 60 86 21 86 85 90 32 15 92 22 0 89 88 82 50 88 56 1 7 4 64 23 82 17 66 22 75 55 34 75 59 88 6 12 82 85 7 98 17 32 71 1 1 1 75 96 2 75 8 82 42 64 98 80 54 6 22 21 27 46 97 36 69 59 71 14 7 92 74 44 74 83 82 3 36 1 1 89 4 76 74 91 1 38 70 93 50 20 7 80 97 1 4 3 6 95 19 84 37 57 98 96 94 3 74 0 70 14 46 23 29 29 461 384`);
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
