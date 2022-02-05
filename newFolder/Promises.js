let willTakeCls = new Promise((resolve, reject) => {
  if (YesIWillTake()) {
    resolve("I will Take the class");
  } else {
    reject("I will not Take the class");
  }
});

willTakeCls
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

function YesIWillTake() {
  return false;
}
console.log("Something");
