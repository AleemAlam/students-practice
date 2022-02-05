window.onload = async () => {
  let data = await fetch("https://aleemalam.pythonanywhere.com/api/medicine");
  data = await data.json();
  console.log(data);
};
