function runProgram(input) {
  var input = input.split("\n");
  var testCase = +input[0];
  var stack = [];
  var queue = [];
  for (var i = 0; i < testCase; i++) {
    var [m, n] = input[i + 1].split(" ");
    if (m == "1") {
      queue.push(n);
    } else if (m == "2") {
      stack.push(n);
    } else if (m == "3") {
      if (queue.length != 0) console.log(queue[0]);
      else console.log("-1");
    } else if (m == "4") {
      if (stack.length != 0) {
        var t = stack[stack.length - 1];
        console.log(t);
      } else console.log("-1");
    } else {
      let r = queue.splice(0, 1).toString(" ");
      stack.push(r);
    }
  }
}

runProgram(`10
1 99999
2 10000
3
4
1 300
4
2 444
5
4
3`);
