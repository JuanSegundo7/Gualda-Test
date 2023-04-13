import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../home";

const switchComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
    </Routes>
  );
};

export default switchComponent;
