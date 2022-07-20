import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import Home from "./Components/Home/Home";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/section1" element={<div className="display-3 mt-5">Section 1</div>} />
        <Route path="*" element={<Navigate to={"/404"} replace={true} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
