document.getElementById("addTask").addEventListener("click", handleClick);
var tasks = [];
function handleClick() {
  var title = document.getElementById("title").value;
  var date = document.getElementById("date").value;
  var todo = new Task(title, date);
  tasks.push(todo);
  createTodo();
}

function Task(title, date) {
  this.title = title;
  this.date = date;
  this.status = false;
}

function createTodo() {
  var data = document.getElementById("data");
  data.innerHTML = "";

  tasks.map(function (item) {
    var div = document.createElement("div");
    div.id = "dataContainer";
    var h4 = document.createElement("h4");
    var p = document.createElement("p");
    var done = document.createElement("button");
    var remove = document.createElement("button");
    done.addEventListener("click", function () {
      toggleTask(item);
      changeColor(h4, item.status);
    });
    remove.addEventListener("click", function () {
      removeTodo(item);
    });
    h4.innerText = item.title;
    p.textContent = item.date;
    done.textContent = "Done";
    remove.textContent = "Delete";
    div.append(h4, p, done, remove);
    data.append(div);
  });
}

function toggleTask(task) {
  task.status = !task.status;
}
function changeColor(tag, status) {
  if (status) {
    tag.style.color = "green";
    tag.style.textDecoration = "line-through";
  } else {
    tag.style.color = "black";
    tag.style.textDecoration = "none";
  }
}
function removeTodo(task) {
  tasks = tasks.filter(function (item) {
    return item.title != task.title;
  });
  createTodo();
}
