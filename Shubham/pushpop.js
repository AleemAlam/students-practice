function runProgram(input) {
  input = input.split("\n");
  var testCase = +input[0];
  var queue = [];
  for (let i = 0; i < testCase; i++) {
    let [condition, val] = input[i + 1].split(" ");
    if (condition == "E") {
      queue.push(val);
      console.log(queue.length);
    } else {
      if (queue.length == 0) {
        console.log(-1, queue.length);
      } else {
        let ele = queue.shift();
        console.log(ele, queue.length);
      }
    }
  }
}

runProgram(`5
E 2
D
D
E 3
D`);
