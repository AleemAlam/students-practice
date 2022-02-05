function sum() {
  var a = 10;
  var b = 20;
  console.log(a + b);
}

function product() {
  var a = 10;
  var b = 20;
  console.log(a * b);
}

sum();
setTimeout(function () {
  product();
}, 3000);
