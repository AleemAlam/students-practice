function runProgram(input) {
  input = input.split("\n");
  var stack = [];
  var queue = [];
  var testCase = +input[0];
  for (var i = 0; i < testCase; i++) {
    var [condition, val] = input[i + 1].split(" ");
    if (condition == 1) {
      enqueue(val);
    } else if (condition == 2) {
      stack.push(val);
    } else if (condition == 3) {
      console.log(front());
    } else if (condition == 4) {
      console.log(stack.length > 0 ? stack[stack.length - 1] : -1);
    } else {
      stack.push(dequeue());
    }
  }

  function enqueue(ele) {
    queue.push(ele);
    // console.log(queue);
  }
  function dequeue() {
    var val = queue.reverse().pop();
    queue.reverse();
    return val;
  }
  function front() {
    return queue.length > 0 ? queue[0] : -1;
  }
}

runProgram(`7
1 4
2 3
1 2
3
4
5
4`);
