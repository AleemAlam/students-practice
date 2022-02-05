function battleOfOddAndEven(n, arr) {
  var oddSum = 0;
  var evenSum = 0;
  for (var i = 0; i < n; i++) {
    if (arr[i] % 2 == 0) {
      evenSum += arr[i];
    } else {
      oddSum += arr[i];
    }
  }

  console.log(oddSum > evenSum ? "Odd" : "Even");
}
battleOfOddAndEven(4, [1, 2, 3, 4]);
