var form = document.querySelector("form");
//   var tbody = document.querySelector("tbody")
var shoppingList = JSON.parse(localStorage.getItem("totalList")) || [];
//=-------------- function sections--------------= //
var btn = document.getElementById("clickme");
btn.style.background = "green";
var name = "Aleem";
var btn2 = document.createElement("div");
btn2.innerHTML = `<h1>${name}</h1>`;

form.append(btn2);
console.log(typeof btn["style"]["background"]);
function addfunction(event) {
  event.preventDefault();
  var name = document.getElementById("name").value;
  var qty = document.getElementById("qty").value;
  var prior = document.getElementById("prior").value;
  var list = {
    itemName: name,
    itemQty: qty,
    itemPriority: prior,
  };
  // console.log(list)
  shoppingList.push(list);
  localStorage.setItem("totalList", JSON.stringify(shoppingList));
  displayItems(shoppingList);
}
function displayItems(shoppingList) {
  document.querySelector("tbody").textContent = "";
  console.log(shoppingList, "64");
  shoppingList.map(function (item) {
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    td1.textContent = item.itemName;
    // console.log(td1)
    var td2 = document.createElement("td");
    td2.textContent = item.itemQty;
    var td3 = document.createElement("td");
    td3.textContent = item.itemPriority;
    var td4 = document.createElement("Delete");
    td4.innerHTML = "<button>Delete</button>";
    tr.append(td1, td2, td3, td4);
    document.querySelector("tbody").append(tr);
  });
  window.addEventListener("load", function () {
    displayItems(shoppingList);
  });
}
//=---------------- addingEventSection--------------= //
form.addEventListener("submit", addfunction);
