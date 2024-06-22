import React from "react";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Login from "./components/Login";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="home">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/" element={<Content />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
