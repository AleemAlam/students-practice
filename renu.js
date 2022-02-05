// function copyArray(arr) {
//   let arr2 = [];
//   for (let i = 0; i < arr.length; i++) {
//     arr2.push(arr[i]);
//   }
//   arr2[1] = 14;
//   console.log(arr2);
//   console.log(arr);
// }
// copyArray([1, 2, 3, 4, 5, 6, 7, 8]);

function Task(title, date) {
  this.title = title;
  this.date = date;
  this.status = false;
}

const myTask = new Task("Buy Milk", Date().toString());
const myTask2 = new Task("Buy Something", Date().toString());
