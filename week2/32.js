var obj = {
  props: 42,
};

Object.freeze(obj);
var newObj = obj;
newObj.props = 23;
console.log(newObj);
