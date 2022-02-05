//Primitive
Number;
String;
Boolean;
undefined;
null;
var n = 10;
var n2 = n;
n2 = 20;
var str = "abc";
str[1] = 2;

console.log(n2); //20
//Non-primitive
Array;
Object;
Function;

var arr = [1, "abc", 4, 5, 7];
arr[0]; // 1 Number
console.log(arr);

var obj = {};
var obj2 = obj;

var obj3 = obj2;

obj3.add = "new";
console.log(obj3.add); //new
console.log(obj2.add);
