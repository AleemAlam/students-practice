function rotate_array_by90_clock(arr, N) {
  for (var i = 0; i < Math.floor(N / 2); i++) {
    for (var j = 0; j < N - i - 1; j++) {}
  }
}

function print_array(arr, N) {
  for (var i = 0; i < N; i++) {
    var line = "";
    for (var j = 0; j < N; j++) {
      line = line + arr[i][j] + " ";
    }
    console.log(line);
  }
}

var products = [{ id: 1, name: "Apple", price: 20 }];
products.push({ id: 2, name: "banana", price: 20 });

var add = { id: 2, name: "banana", price: 20 };
products.filter(function (item) {
  return item.id != add.id;
});
