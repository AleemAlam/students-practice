var que = [];
var [q1, q2, q3, q4] = [[], [], [], []];
function masaicoding(condition, club, roll) {
  if (condition == "E") {
    if (club == 1) {
      que.push(club);
      q1.push(roll);
      // console.log(que,q1)
    } else if (club == 2) {
      que.push(club);
      q2.push(roll);
    } else if (club == 3) {
      que.push(club);
      q3.push(roll);
    } else if (club == 4) {
      que.push(club);
      q4.push(roll);
    }
    console.log(q1, q2, q3, q4, que);
  } else {
    if (que[0] == 1) {
      if (q1.length != 0) console.log(1 + " " + q1.shift());

      //console.log(q1.length)
      if (q1.length == 0) {
        que.shift();
      }
    } else if (que[0] == 2) {
      if (q2.length != 0) console.log(2 + " " + q2.shift());

      if (q2.length == 0) {
        que.shift();
      }
    } else if (que[0] == 3) {
      if (q3.length != 0) console.log(3 + " " + q3.shift());
      if (q3.length == 0) {
        que.shift();
      }
    } else if (que[0] == 4) {
      if (q4.length != 0) console.log(4 + " " + q4.shift());

      if (q4.length == 0) {
        que.shift();
      }
    }
  }
}

function runProgram(input) {
  // Write code here
  input = input.split("\n");
  var testcase = +input[0];
  var line = 1;
  for (var i = 0; i < testcase; i++) {
    var [condition, club, roll] = input[line++].trim().split(" ");
    masaicoding(condition, club, roll);
  }
}

runProgram(`18
E 3 1
D
E 3 1
E 3 2
E 2 1
D
D
E 1 1
E 1 2
E 4 1
D
E 4 2
E 1 3
E 2 1
D
D
D
D`);
