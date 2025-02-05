import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Counter from "./Components/Counter";
import UserForm from "./Components/UserForm";
import Editor from "./Components/Editor";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/user-data" element={<UserForm />} />
        <Route path="/editor" element={<Editor />} />
      </Routes>
    </div>
  );
};

export default App;
