function runProgram(input) {
  var obj = { p: 0, i: 0, n: 0, g: 0 };
  for (let i = 0; i < input.length; i++) {
    if (
      input[i] == "p" ||
      input[i] == "i" ||
      input[i] == "n" ||
      input[i] == "g"
    ) {
      obj[input[i]] += 1;
    }
  }
  let min = Infinity;
  for (key in obj) {
    if (min > obj[key]) {
      min = obj[key];
    }
  }
  console.log(min);
}

runProgram("pingpingpin");
