import Config from "./Config.js";
import Element from "./Element.js";

const AddNewTask = () => {
  let title, desc, id;
  title = Element.Title.value;
  desc = Element.Desc.value;

  id = Config.TaskList.length + 1;

  Config.TaskList.push({
    id: id,
    title: title,
    description: desc,
  });
  //render all tasks
  RenderTask(Config.TaskList);

  //empty input elements
  Element.Title.value = "";
  Element.Desc.value = "";
  Element.Header.classList.toggle("write");
};

const DeleteTask = (id) => {
  let index = Config.TaskList.findIndex((task) => {
    if (task.id == id) return task;
  });

  //remove the selected task
  Config.TaskList.splice(index, 1);

  //render all tasks
  RenderTask(Config.TaskList);
};

const CompleteTask = (id) => {
  Config.TaskList.forEach((task) => {
    if (task.id == id) task.completed = !task.completed;
  });

  //move completed task to the end of the list
  Config.TaskList.sort((a, b) => {
    if (b.completed) return -1;
  });

  RenderTask(Config.TaskList);
};

const RenderTask = (tasks) => {
  // remove previous tasks from list
  Element.TodoList.innerHTML = "";

  // start rendering
  tasks.forEach((task) => {
    let li = `<li data-task-id="${task.id}" class="${
      task.completed ? "complete" : ""
    }">
                    <div class="radio" data-button="complete"></div>
                    <div class="content">
                        <h3>${task.title}</h3>
                        <p>${task.description}</p>
                    </div>
                    <div class="action">
                        <img src="./images/edit.svg" data-button="edit" />
                        <img src="./images/delete.svg" data-button="delete" />
                    </div>
                </li>`;

    // render li to todo list (ul);
    Element.TodoList.insertAdjacentHTML("beforeend", li);
  });

  // check if task list is empty
  if (tasks.length <= 0) {
    Element.EmptyTask.style.display = "flex";
  } else {
    Element.EmptyTask.style.display = "none";
  }
};

export default {
  RenderTask,
  AddNewTask,
  DeleteTask,
  CompleteTask,
};
