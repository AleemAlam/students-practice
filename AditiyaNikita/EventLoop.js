// console.log(name); // undefine
// var name = "Aleem";
var a = 30;

function func1(a) {
  return function (b) {
    console.log(a + b);
  };
}

var myFunc = func1(12);
console.log(myFunc(10));
