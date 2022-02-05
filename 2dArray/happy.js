function happy(num) {
  //37
  // 10
  // 1 + 0 = 1
  while (num > 10) {
    var str = num.toString();
    var sum = 0;
    for (var i = 0; i < str.length; i++) {
      sum += Number(str[i]) ** 2;
    }
    num = sum;
  }
  // 1 2 3 4 5 6 7 8 9
  // 4
  if (num == 1) {
    return true;
  } else {
    return false;
  }
}

console.log(happy(37));
