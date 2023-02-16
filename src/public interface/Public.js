import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Donate from "./Donate";
import Volunteer from "./Volunteer";
import Article from "./Article";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Public() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Donate" element={<Donate />} />
        <Route path="/Article" element={<Article />} />
        <Route path="/Volunteer" element={<Volunteer />} />
        <Route path="/Donate" element={<Donate />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default Public;
