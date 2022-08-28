import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Procedures from "./Components/Procedures";
import Home from "./Components/Home";
import Contact from "./Components/Contact";

const App = () => {
  return (
    <div>
      <nav>
        <Link to={`/`}>Go to Home Page</Link>
        <Link to={"/procedures"}>See Our Procedures</Link>
        <Link to={"/contact"}>Contact Us!</Link>
      </nav>

      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/procedures" element={<Procedures />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
