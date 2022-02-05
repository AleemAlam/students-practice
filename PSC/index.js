var products = [
  {
    imgUrl:
      "https://guesseu.scene7.com/is/image/GuessEU/M63H24W7JF0-L302-ALTGHOST?wid=1500&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0",
    name: "CHECK PRINT SHIRT",
    price: 110,
    category: "clothes",
  },
  {
    imgUrl:
      "https://guesseu.scene7.com/is/image/GuessEU/FLGLO4FAL12-BEIBR?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
    name: "GLORIA HIGH LOGO SNEAKER",
    price: 91,
    category: "shoes",
  },
  {
    imgUrl:
      "https://guesseu.scene7.com/is/image/GuessEU/HWVG6216060-TAN?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
    name: "CATE RIGID BAG",
    price: 94.5,
    category: "bag",
  },
  {
    imgUrl:
      "http://guesseu.scene7.com/is/image/GuessEU/WC0001FMSWC-G5?wid=520&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0",
    name: "GUESS CONNECT WATCH",
    price: 438.9,
    category: "watch",
  },
  {
    imgUrl:
      "http://guesseu.scene7.com/is/image/GuessEU/WC0001FMSWC-G5?wid=520&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0",
    name: "TITAN WATCH",
    price: 438.9,
    category: "watch",
  },
];

var div = document.getElementById("container");
products.map(function (item) {
  createCard(item);
});
function createCard(item) {
  var card = document.createElement("div");
  var imgUrl = document.createElement("img");
  var name = document.createElement("h5");
  var category = document.createElement("p");
  var price = document.createElement("p");
  var button = document.createElement("button");
  imgUrl.src = item.imgUrl;
  name.textContent = item.name;
  category.textContent = item.category;
  price.textContent = item.price;
  button.textContent = "Continue";
  card.append(imgUrl, name, category, price, button);
  div.append(card);
}
var select = document.getElementById("category"); // select
select.addEventListener("click", function (e) {
  console.log(e.target.value);
  var filteredProduct = products.filter(function (item) {
    return item.category == e.target.value; // clothes == shoes
  });
  div.textContent = "";
  filteredProduct.map(function (item) {
    createCard(item);
  });
});
var categoryArray = ["watch", "clothes", "shoes", "bag"]; //
function addCategory(category) {
  var option = document.createElement("option");
  option.value = category;
  option.textContent = category;
  select.append(option);
}
categoryArray.map(function (a) {
  addCategory(a);
});

document.getElementById("lowToHigh").addEventListener("click", function () {
  products.sort(function (a, b) {
    return a.price - b.price;
  });
  addProducts();
});

document.getElementById("highToLow").addEventListener("click", function () {
  products.sort(function (a, b) {
    return b.price - a.price;
  });
  addProducts();
});

function addProducts() {
  div.textContent = "";
  products.map(function (item) {
    createCard(item);
  });
}
