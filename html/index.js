function runProgram(input) {
  input = input.trim().split("\n");
  var testCase = Number(input[0]);
  var row = 0;
  for (var i = 0; i < testCase; i++) {
    // var [n, m] = input[row++].trim().split(" ").map(Number);
    // var matrix = [];
    // for (var j = 0; j < n; j++) {
    //   var temp = input[row++].trim().split(" ").map(Number);
    //   matrix.push(temp);
    // }
    // console.log(matrix);
    var n = +input[++row].trim();
    var arr = input[++row].trim().split(" ").map(Number);
    console.log(arr);
    var hori = checkHorizontal(arr);
    var varti = checkVertical(arr);
    if (hori == true && varti == true) {
      ("Both");
    } else if (hori) {
      ("horizontal");
    } else if (verti) {
      ("Vertical");
    } else {
      ("No");
    }
  }

  //   input = input.trim().split("\n");
  //   var testCase = +input[0].trim();
  //   for (var i = 0; i < testCase; i++) {}
}
if (process.env.LOGNAME === "ellu") {
  runProgram(`
4
4
1 2 3 4
3
1 2 3
3
1 2 3
6
1 2 3 4 5 6`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
