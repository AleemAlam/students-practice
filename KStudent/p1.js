var arr = [];
function runProgram(input) {
  var input = input.split("\n");
  var testCase = +input[0];
  for (var i = 0; i < testCase; i++) {
    var [query_type, m] = input[i].split(" ").map(Number);

    q(query_type, m);
  }
}

function q(query_type, m) {
  if (query_type == 1) {
    arr.push(m);
  } else if (query_type == 2) {
    arr.pop();
  } else if (query_type == 3) {
    if (arr.length >= 0) {
      console.log(arr[0]);
    } else {
      console.log("Empty!");
    }
  }
}
runProgram(`6
1 15
1 20
2
3
2
3`);
// if (process.env.USER === "") {
//   runProgram(``);
// } else {
//   process.stdin.resume();
//   process.stdin.setEncoding("ascii");
//   let read = "";
//   process.stdin.on("data", function (input) {
//     read += input;
//   });
//   process.stdin.on("end", function () {
//     read = read.replace(/\n$/, "");
//     read = read.replace(/\n$/, "");
//     runProgram(read);
//   });
//   process.on("SIGINT", function () {
//     read = read.replace(/\n$/, "");
//     runProgram(read);
//     process.exit(0);
//   });
// }
