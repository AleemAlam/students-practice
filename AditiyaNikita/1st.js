function runProgram(input) {
  input = input.split("\n");
  let testCase = +input[0];
  for (let i = 0; i < testCase; i++) {
    // // console.log(input[i + 1]);
    // let data = input[i + 1].split(" ");
    // console.log(data[0], data[1], data[2]);
    let [condition, val1, val2] = input[i + 1].split(" "); // [D]
    if (condition == "E") {
    } else {
    }
  }
}

// const arr = [1];
// console.log(arr[100]); //

runProgram(`5
E 1 1
E 2 1
E 1 2
D
D`);
