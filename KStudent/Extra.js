function runProgram() {
  let data = fetch("https://jsonplacsfddeholder.typicode.com/posts");
  return data;
}

document.getElementById("btn").addEventListener("click", function () {
  checkPromise();
});

async function checkPromise() {
  var search = document.getElementById("search").value;

  try {
    data = await fetch(`https://www.omdbapi.com/?s=${search}&apikey=2313e1bc`); // promise
    data = await data.json(); // promise
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

// checkPromise();

// console.log(runProgram());
// runProgram()
//   .then(function (res) {
//     return res.json();
//   })
//   .then(function (res) {
//     console.log(res);
//   })
//   .catch(function (err) {
//     console.log(err);
//   });

// class Array {
//   constructor() {
//     this.length = 0;
//     this.data = {};
//   }
//   push(item) {
//     this.data[this.length] = item;
//     this.length++;
//   }
// }

// const myArr = new Array();
// myArr.push(10);
// myArr.push(20);
// console.log(myArr.length);
// console.log(myArr);
