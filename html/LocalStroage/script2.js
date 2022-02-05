var div = document.getElementById("container");

var data = [
  {
    imgUrl: "https://via.placeholder.com/150",
    title: "Shirt",
    price: 100,
  },
  {
    imgUrl:
      "https://cdn.shopify.com/s/files/1/1002/7150/products/New-Mockups---no-hanger---TShirt-Man-with-a-plan---prof.jpg?v=1627906686",
    title: "T-Shirt",
    price: 200,
  },
  {
    imgUrl: "https://via.placeholder.com/150",
    title: "Apple",
    price: 100,
  },
  {
    imgUrl: "https://via.placeholder.com/150",
    title: "Mango",
    price: 30,
  },
  {
    imgUrl: "https://via.placeholder.com/150",
    title: "Banana",
    price: 50,
  },
];
data.push({
  imgUrl: "https://via.placeholder.com/150",
  title: "Banana",
  price: 5000,
});
localStorage.setItem("data", JSON.stringify(data));
var localData = JSON.parse(localStorage.getItem("data"));

function createCard(item) {
  var card = document.createElement("div");
  var img = document.createElement("img");
  var h1 = document.createElement("h1");
  var p = document.createElement("p");
  var button = document.createElement("button");
  img.src = item.imgUrl;
  h1.textContent = item.title;
  p.textContent = item.price;
  button.textContent = "Continue";
  card.append(img);
  card.append(h1);
  card.append(p);
  card.append(button);
  div.append(card);
}

localData.map(function (item) {
  console.log(item);
  createCard(item);
});
