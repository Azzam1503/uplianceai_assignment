import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Counter from "./Components/Counter";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </div>
  );
};

export default App;
