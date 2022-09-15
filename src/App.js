import { Route, Routes } from "react-router-dom";
import FormSignUp from "./components/FormSignup";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<FormSignUp />} />
        <Route path="todolist" element={<TodoList />} />
      </Routes>
    </div>
  );
}

export default App;
