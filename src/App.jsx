import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./page/Home";
import Navbar from "./components/Navbar";
import About from "./page/About";
import SingleCoockTail from "./page/SingleCoockTail";
import Error from "./page/Error";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="cocktail/:id" element={<SingleCoockTail />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
