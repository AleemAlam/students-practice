function runProgram(input) {
  input = input.split("\n");
  var testCase = input[0];
  var line = 1;
  for (var i = 0; i < testCase; i++) {
    var [condition, value] = input[line++].split(" ");
    if (condition == "Push") {
      enqueue(value);
    } else if (condition == "Pop") {
      dequeue();
    }
  }
}
var rear = 0;
var front = 0;
var queue = [];
function enqueue(value) {
  queue[rear] = value;
  // console.log(queue[rear]);
  rear++;
}
function dequeue() {
  if (queue.length == 0) {
    console.log("Empty");
  } else {
    rear--;
    console.log(queue[rear]);
  }
}

runProgram(`7
Push 591286
Pop
Pop
Pop
Pop
Pop
Pop`);
