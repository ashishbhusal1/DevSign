import Element from "./Element.js";
import Config from "./Config.js";

const AddNewTask = () => {
  let title, desc, id;
  title = Element.Title.value;
  desc = Element.Desc.value;
  if(title.length<=3) alert("enter the title");
  let NewId = Config.TaskList.length + 1;
  Config.TaskList.push({
    id: NewId,
    title: title,
    description: desc,
  });
  Rendertask(Config.TaskList);
};

const DeleteTask = () => {
  let index = Config.TaskList.findIndex((task) => {
    if (task.id == id) return task;
  });
  Config.TaskList.splice(index, 1);
  Rendertask(Config.TaskList); 
};
const Rendertask = (tasks) => {
  //Remove previous tasks
  Element.TodoList.innerHTML = "";
  tasks.forEach((task) => {
    let li = ` <li class="animate__animated animate__fadeInUp">
                <div class="radio" data-id="complete"></div>
                <div class="content">
                <h3>${task.title}</h3>
                <p>${task.description}</p>
                </div>
                <div class="action">
                    <img src="./images/edit.svg" />
                    <img class="delete" src="./images/delete.svg" data-id="delete"/>
                </div>
                </li>`;

    //render li to todo list (ul);
    Element.TodoList.insertAdjacentElement("beforeend", li);
  });

  //check if task list is empty
  if(tasks.length<=0){
    Element.EmptyTask.style.display='flex';
  }else{
Element.EmptyTask.style.display='none';
  }
};

export default { Rendertask, AddNewTask, DeleteTask };
