import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Category from "./pages/Category";
import About from "./pages/About";

import "./App.css";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" key="about" element={<About />} />
        <Route path="/:category" element={<Category />} />
      </Routes>
    </div>
  );
}

export default App;
