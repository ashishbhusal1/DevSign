import React from "react";
import { useContext } from "react";
import { AppContext } from "../store/Context";
import Header from "../components/header/Header";
import TodoCard from "../../src/components/todo/TodoCard";

function TodoPage() {
  const { TodoList, setTodoList } = useContext(AppContext);

  const deleteHandler=(item)=>{
    setTodoList(TodoList.filter(todo => todo.id !==item.id))
  }
  return (
    <div className="todo-app">
      <Header />

      <ul className="todo-list">
        {TodoList.map((todo) => {
          return <TodoCard key={todo.id} item={todo} onDelete={() => deleteHandler(todo)}/>;
        })}
      </ul>
    </div>
  );
}

export default TodoPage;
