function runProgram(input) {
  input = input.trim().split("\n");
  var arr = [];
  for (var i = 1; i < input.length; i++) {
    var [name, marks] = input[i].split(" ");
    arr.push({ name: name, marks: Number(marks) });
  }
  for (var i = 0; i < arr.length - 1; i++) {
    for (var j = 0; j < arr.length - i - 1; j++) {
      if (arr[j].marks < arr[j + 1].marks) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      } else if (arr[j].marks == arr[j + 1].marks) {
        if (arr[j].name > arr[j + 1].name) {
          var temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
  }
  var rank = 1;
  arr.forEach(function (item, i) {//4
    if (i == 0) {
      console.log(`${rank} ${item.name}`);
    } else if (item.marks == arr[i - 1].marks) {
      console.log(`${rank} ${item.name}`);
    } else {
      rank = i + 1;
      console.log(`${rank} ${item.name}`);
    }
  });
}
runProgram(`6
rancho 45
chatur 32
raju 30
farhan 28
virus 32
joy 45`);
