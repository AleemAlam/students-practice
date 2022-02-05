var stack = [];
var ans = -1;
function runProgram(input) {
  // Write code here
  input = input.split("\n");
  var t = Number(input[0]);
  //console.log(t);
  var line = 1;
  for (var i = 0; i < t; i++) {
    var arr = input[line].split(" ").map(Number);
    // console.log(arr);
    if (arr[0] === 1) {
      Push(arr[1]);
      line++;
    } else if (arr[0] === 2) {
      pop();
      line++;
    } else if (arr[0] === 3) {
      peek();
      line++;
    }
  }
}

function Push(num) {
  ans++;
  stack[ans] = num;
}

function pop() {
  if (ans < 0) {
    return 0;
  }
  ans--;
}

function peek() {
  if (ans < 0) {
    console.log("Empty!");
    return;
  } else {
    console.log(stack[ans]);
  }
}
runProgram(`6
1 15
1 20
2
3
2
3`);
