var num = 15;

while (num >= 10) {
  var str = num.toString();
  var sum = 0;
  for (var i = 0; i < str.length; i++) {
    sum += Number(str[i]) ** 2;
  }
  console.log(sum);
  num = sum;
}

if (num == 1) {
  console.log(true);
} else {
  console.log(false);
}
