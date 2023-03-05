import React from "react";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./Home";
import Login from "./Login";
import NavBar from "./NavBar";
import Recipe from "./Recipe";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:id" element={<Recipe />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Toaster position="bottom-center" />
    </>
  );
}

export default App;
