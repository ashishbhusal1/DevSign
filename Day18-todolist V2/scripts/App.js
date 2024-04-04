import Element from "./Element.js";
import Config from "./Config.js";
import Todo from "./Todo.js";
import Storage from "./Storage.js";

Config.TaskList = Storage.GetTasks();
Todo.RenderTask(Config.TaskList);

(function () {
  //init write mode
  // add task block
  Element.addTaskBlock.onclick = function () {
    Element.Header.classList.add("write");
    Element.Title.focus();
  };
  //cancel write mode
  Element.Cancel.onclick = function () {
    Element.Header.classList.remove("write");
  };

  //create new task
  Element.AddTask.onclick = function () {
    Todo.AddNewTask();

    //save updated tasks to storage
    Storage.SetTasks(Config.TaskList);
  };
  //edit ,complete ,delete tasks
  Element.TodoList.addEventListener("click", function (e) {
    let target = e.target;
    let button = target.getAttribute("data-button");

    //delete task
    if (button == "delete") {
      let TaskLi = target.parentElement.parentElement;
      let taskId = TaskLi.getAttribute("data-task-id");
      Todo.DeleteTask(taskId);

      //save updated tasks to storage
      Storage.SetTasks(Config.TaskList);
    }

    //complete task
    if (button == "complete") {
      let TaskLi = target.parentElement;
      let taskId = TaskLi.getAttribute("data-task-id");
      Todo.CompleteTask(taskId);

      //save updated tasks to storage
      Storage.SetTasks(Config.TaskList);
    }
  });
})();
