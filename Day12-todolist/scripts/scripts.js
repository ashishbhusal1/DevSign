//section selector
var Header = document.getElementById("Header");
var addTaskBlock = document.getElementById("addTaskBlock");
var TodoList = document.getElementById("TodoList");
var EmptyTask = document.getElementById("EmptyTask");
var SearchBtn = document.getElementById("SearchBtn");
var SearchBox = document.getElementById("SearchBox");
var CloseSearch = document.getElementById("closeSearch");
var SearchTxt = document.getElementById("SearchTxt");

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
  TodoList.insertAdjacentHTML("beforeend", list);
  Header.classList.remove("write");
  Title.value = "";
  Desc.value = "";
  addTaskBlock.style.display = "flex";

  //remove empty task
  EmptyTask.style.display = "none";
};

TodoList.addEventListener("click", function (e) {
  let target = e.target;
  let dataid = target.getAttribute("data-id");
  console.log(dataid);
  if (dataid == "delete") {
    alert("Are you sure, you want to delete?");
    let task = target.parentElement.parentElement;
    task.classList.add('animate__fadeOutLeft');
    setTimeout(()=>{
      task.remove();
    },900);

    if (TodoList.childElementCount == 0) {
      EmptyTask.style.display = "flex";
    }
  }
  if (dataid == "complete") {
    let task = target.parentElement;
    task.classList.toggle("complete");
  }
});
// function createTaskList(title, description) {
//   let li = document.createElement("li");
//   let radio = document.createElement("div");
//   radio.classList.add("radio");
//   let content = document.createElement("div");
//   content.classList.add("content");
//   let h3 = document.createElement("h3");
//   h3.innerText = title;
//   let p = document.createElement("p");
//   p.innerText = description;
//   content.append(h3, p);
//   let action = document.createElement("div");
//   action.classList.add("action");
//   action.innerHTML = '<img src="./images/edit.svg" />';
//   action.innerHTML = '<img src="./images/delete.svg" />';
//   li.append(radio, content, action);
//   return li;
// }

function createTaskList(title, description) {
  let li = ` <li class="animate__animated animate__fadeInUp">
  <div class="radio" data-id="complete"></div>
  <div class="content">
    <h3>${title}</h3>
    <p>${description}</p>
  </div>
    <div class="action">
      <img src="./images/edit.svg" />
      <img class="delete" src="./images/delete.svg" data-id="delete"/>
  </div>
</li>`;
  return li;
}
addTaskBlock.onclick = function () {
  Header.classList.add("write");
};
Cancel.onclick = function () {
  Header.classList.remove("write");
};

SearchBtn.onclick = function () {
  this.style.display = "none";
  SearchBox.style.display = "flex";
};
CloseSearch.onclick = function () {
  SearchBtn.style.display = "block";
  SearchBox.style.display = "none";
};
document.addEventListener("keyup", function (e) {
  console.log(e);
  if (e.key == "Escape") {
    //close search
    SearchBtn.style.display = "block";
    SearchBox.style.display = "none";

    Header.classList.remove("write");
  }
});

//search text keyup event
SearchTxt.addEventListener("keyup", function () {
  let query = this.value.toUpperCase();
  let list = TodoList.getElementsByTagName("li");
  console.log(list);
  for (let i = 0; i < list.length; i++) {
    let title = list[i].getElementsByTagName("h3")[0];
    let desc = list[i].getElementsByTagName("p")[0];
    title = title.innerText.toUpperCase();
    desc = desc.innerText.toUpperCase();

    if (title.includes(query) || desc.includes(query)) {
      list[i].style.display = "flex";
    } else {
      list[i].style.display = "none";
    }
  }
});
