let dataDiv = document.getElementById("data");
var data = {
  objects: ["object is none-primitive Data type", "asdakljska"],
  array: ["In Javascript we can add any datatype in array ", "asdzdzdsakljska"],
};
document.getElementById("objects").addEventListener("click", getData);
document.getElementById("array").addEventListener("click", getData);
document.getElementById("number").addEventListener("click", getData);

function getData(e) {
  dataDiv.textContent = "";
  let id = e.target.id; //
  let ul = document.createElement("ul");
  data[id].map(function (item) {
    let li = document.createElement("li");
    li.textContent = item;
    ul.append(li);
  });
  dataDiv.append(ul);
}
