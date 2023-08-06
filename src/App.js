import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Search from "./Components/Search";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
        </Route>

        
        <Route path="/search" element={<Search />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
