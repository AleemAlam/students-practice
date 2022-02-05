function runProgram(input) {
  // Write code here
  var input = input.split("\n");
  var n = +input[0];
  var line = 1;

  var arr = [];
  for (var i = 0; i < n; i++) {
    arr.push(input[line].trim().split(" "));
    line++;
  }
  NewYear(arr);
}

function NewYear(arr) {
  var queue = [];
  var stack = [];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i][0] == 1) {
      queue.unshift(arr[i][1]);
    } else if (arr[i][0] == 2) {
      stack.push(arr[i][1]);
    } else if (arr[i][0] == 3) {
      console.log(queue[queue.length - 1]);
    } else if (arr[i][0] == 4) {
      console.log(stack[stack.length - 1]);
    } else if (arr[i][0] == 5) {
      var front = queue[queue.length - 1];
      stack.push(front);
      queue.pop();
    } else if (stack.length == 0 || queue.length == 0) {
      console.log("-1");
    }
  }
}
