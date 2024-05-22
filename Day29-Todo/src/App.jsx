import { AppProvider } from "./store/Context";
import TodoPage from "./pages/TodoPage";

function App() {
  return (
    <AppProvider>
      <TodoPage />
    </AppProvider>
  );
}

export default App;
