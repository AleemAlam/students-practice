let out = [];
function runProgram(input) {
  input = input.split("\n");
  var N = +input[0];
  var [l, r] = input[1].split(" ").map(Number);
  let arr = [];
  for (var i = 1; i <= N; i++) {
    arr.push(i);
  }
  console.log(l, r);
  dracula(arr, 0, arr.length - 1);
  let count = 0;
  out.forEach((item) => {
    let sum = +item[l] + +item[r];
    if (sum % 2 == 1) {
      count++;
    }
  });
  console.log(count);
}

function dracula(arr, l, r) {
  if (l == r) {
    out.push(arr.join(" "));
  } else {
    for (let i = l; i <= r; i++) {
      swap(arr, l, i);
      dracula(arr, l + 1, r);
      swap(arr, l, i);
    }
    // if(arr[i]%2 != 0)
    // {
    //     count++
    // }
    // console.log(count);
  }
}

function swap(arr, l, i) {
  var temp = arr[l];
  arr[l] = arr[i];
  arr[i] = temp;
}

if (process.env.LOGNAME === "ellu") {
  runProgram(`3
0 1`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
