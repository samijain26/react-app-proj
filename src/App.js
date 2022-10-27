import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Category from "./pages/Category";
import Home from "./pages/Home";

import "./App.css";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" key="home" element={<Home />} />
        <Route path="/:category" key="category" element={<Category />} />
      </Routes>
    </div>
  );
}

export default App;
