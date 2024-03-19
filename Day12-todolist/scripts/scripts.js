//section selector
var Header = document.getElementById("Header");
var addTaskBlock = document.getElementById("addTaskBlock");
var TodoList = document.getElementById("TodoList");
//button selector
var Cancel = document.getElementById("Cancel");
var AddTask = document.getElementById("AddTask");
//input selector
var Title = document.getElementById("Title");
var Desc = document.getElementById("Desc");
//Add task to the todolist
AddTask.onclick = function () {
  var title = Title.value;
  var description = Desc.value;
  let list = createTaskList(title, description);
  TodoList.appendChild(list);
  Header.classList.remove("write");
  Title.value = "";
  Desc.value = "";
};
function createTaskList(title, description) {
  let li = document.createElement("li");
  let radio = document.createElement("div");
  radio.classList.add("radio");
  let content = document.createElement("div");
  content.classList.add("content");
  let h3 = document.createElement("h3");
  h3.innerText = title;
  let p = document.createElement("p");
  p.innerText = description;
  content.append(h3, p);
  let action = document.createElement("div");
  action.classList.add("action");
  action.innerHTML = '<img src="./images/edit.svg" />';
  action.innerHTML = '<img src="./images/delete.svg" />';
  li.append(radio, content, action);
  return li;
}
addTaskBlock.onclick = function () {
  Header.classList.add("write");
};
Cancel.onclick = function () {
  Header.classList.remove("write");
};
