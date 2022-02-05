function SNE(arr, N) {
  var s = [];
  var a = [];
  for (var i = N - 1; i >= 0; i--) {
    while (s.length > 0 && s[s.length - 1] >= arr[i]) {
      s.pop();
    }
    a[i] = s.length > 0 ? s[s.length - 1] : -1;
    s.push(arr[i]);
  }
  var count = 0;
  for (var i = 0; i < a.length; i++) {
    if (a[i] == -1) {
      count++;
    }
  }
  console.log(count);
}
