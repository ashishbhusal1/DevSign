import Header from "./components/header/Header";
import TodoCard from "./components/todo/TodoCard";

function App() {
  return (
    <div className="todo-app">
      <Header />

      <ul className="todo-list">
        <TodoCard />
      </ul>
    </div>
  );
}

export default App;
