import { useContext, useState } from "react";
import { AppContext } from "../store/Context";
import { createPortal } from "react-dom";

// components
import Header from "./../components/header/Header";
import TodoCard from "../components/todo/TodoCard";
import DeleteTodo from "../components/modal/DeleteTodo";
import EmptyTodo from "../components/todo/EmptyTodo";
import Notification from "../components/todo/Notification.jsx";

function TodoPage() {
  const { TodoList, setTodoList, showNotification, setShowNotification } =
    useContext(AppContext);

  const [deleteModal, setDeleteModal] = useState({
    show: false,
    todo: {},
  });

  // delete box show & hide
  const DeleteBoxHandler = (todo, visible) => {
    if (visible) {
      deleteModal.show = true;
      deleteModal.todo = todo;
      setDeleteModal({ ...deleteModal });
    } else {
      deleteModal.show = false;
      setDeleteModal({ ...deleteModal });
    }
  };

  const DeleteTodoItem = () => {
    const deleteItemId = deleteModal.todo.id;
    setTodoList(TodoList.filter((todo) => todo.id !== deleteItemId));
    DeleteBoxHandler(null, false);

    // show notification
    setShowNotification("Task Deleted");

    // hide notification
    setTimeout(() => {
      setShowNotification("");
    }, 3000);
  };

  const CompleteHandler = (todo) => {
    const toCompleteId = todo.id;
    setTodoList(
      TodoList.map((item) => {
        if (item.id == toCompleteId) item.completed = !item.completed;
        return item;
      })
    );

    // show notification
    setShowNotification("Task Updated");

    // hide notification
    setTimeout(() => {
      setShowNotification("");
    }, 3000);
  };

  return (
    <div className="todo-app">
      <Header />

      <ul className="todo-list">
        {TodoList.map((todo) => {
          return (
            <TodoCard
              key={todo.id}
              item={todo}
              Delete={() => DeleteBoxHandler(todo, true)}
              Complete={() => CompleteHandler(todo)}
            />
          );
        })}
      </ul>

      {/* Empty Todo UI */}
      {TodoList.length == 0 && <EmptyTodo />}

      {/* Delete Modal */}
      {deleteModal.show &&
        createPortal(
          <DeleteTodo
            item={deleteModal.todo}
            close={() => DeleteBoxHandler(null, false)}
            Delete={DeleteTodoItem}
          />,
          document.body
        )}

      {/* Notification */}
      {showNotification &&
        createPortal(<Notification action={showNotification} />, document.body)}
    </div>
  );
}

export default TodoPage;
