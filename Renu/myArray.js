Array.prototype.pop = function () {
  delete this[this.length - 1];
  this.length--;
};
Array.prototype.deleteArr = function () {
  delete this;
  this.length = 0;
};
function Array() {
  this.length = 0;
}
const arr = new Array();
Array.prototype.push = function (ele) {
  this[this.length] = ele;
};
arr.push(10);
console.log(arr);
