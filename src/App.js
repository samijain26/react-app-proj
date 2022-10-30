import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Category from "./pages/Category";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div >
      <NavBar />
      <Routes>
        <Route path="/home" key="home" element={<Home />} />
        <Route path="/" key="about" element={<About />} />
        <Route path="/:category" key="category" element={<Category />} />
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;
