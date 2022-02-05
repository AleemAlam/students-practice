function runProgram(input) {
  // Write code here
  input = input.split("\n");
  var n = +input[0];
  var list1 = [];
  var list2 = [];
  for (var i = 1; i < input.length; i++) {
    var int = input[i].split(" ");
    //console.log(int)
    if (int[0] == "E") {
      list1.push(int[1]);
    } else {
      if (list1.length != 0) list2.push(list1[0]);
      list1.shift();
      if (list2.length == 0) {
        console.log("Empty");
      } else {
        console.log(list2.shift());
      }
    }
  }
}
runProgram(`20
D
E 74
E 24
E 68
E 100
E 90
E 88
E 10
E 9
E 65
E 65
E 24
E 74
D
E 68
E 10
E 65
D
E 74
E 71`);
