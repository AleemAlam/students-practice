function runProgram(input) {
  var newInput = input.trim().split("\n");
  var str = newInput[1].split(" ").join("");
  var kol = [];
  function sub(inp, outp) {
    if (inp.length == 0) {
      kol.push([...outp]);
      return;
    }
    var op1 = outp;
    console.log(op1);
    var op2 = [...outp, inp[0]];
    console.log(op2);
    inp.shift();
    sub(inp, op1);
    sub(inp, op2);
  }
  sub([1, 2, 3], []);
  console.log(kol);
  // function sum(str){
  //   var arr = str.split("").map(Number);
  //   var sum =0
  //   for( var i =0;i<arr.length;i++){
  //     sum = sum + arr[i]
  //   }
  //   return sum
  // }
  // var count =0
  // for(var j =0;j<kol.length;j++){
  //   if(sum(kol[j])% 2 ==1){
  //        count++;
  //   }
  // }
  // console.log(count)
}

if (process.env.LOGNAME === "ellu") {
  runProgram(`2
    abc`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
