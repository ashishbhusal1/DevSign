import { AppProvider } from "./store/Context";
import TodoPage from "./pages/TodoPage";
import LoginPage from "./pages/LoginPage";
import { Routes,Route } from "react-router-dom";

function App() {
  return (
    <AppProvider>
      <Routes>
        <Route path="/" element={<TodoPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </AppProvider>
  );
}

export default App;
