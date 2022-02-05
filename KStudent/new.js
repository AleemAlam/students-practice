function runProgram(input) {
  input = input.split("\n");
  const [k, q] = input[0].split(" ").map(Number);
  const queue = [];
  for (let i = 0; i < q; i++) {
    const [condition, val] = input[i + 1].split(" ").map(Number);
    if (condition == 1) {
      if (queue.length < k) {
        queue.push(val);
        console.log(val);
      } else {
        console.log(-1);
      }
    } else {
      if (queue.length > 0) {
        console.log(queue.shift());
      } else {
        console.log(-1);
      }
    }
  }
}

runProgram(`2 6
1 1
1 2
1 3
2
2
2`);
