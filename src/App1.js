import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Category";
import About from "./pages/About";

import "./App.css";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" key="general" element={<Home category="general" />} />
        <Route path="/about" key="about" element={<About />} />
        <Route
          path="/science"
          key="science"
          element={<Home category="science" />}
        />
        <Route
          path="/business"
          key="business"
          element={<Home category="business" />}
        />
        <Route
          path="/technology"
          key="technology"
          element={<Home category="technology" />}
        />
        <Route
          path="/health"
          key="health"
          element={<Home category="health" />}
        />
        <Route
          path="/sports"
          key="sports"
          element={<Home category="sports" />}
        />
      </Routes>
    </div>
  );
}

export default App;
