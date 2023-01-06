import React from "react";
import { Route, Routes } from "react-router-dom";
import Cooker from "../Pages/Cooker";

export default function MainRoute() {
  return (
    <Routes>
      <Route path="/" element={<Cooker />} />
    </Routes>
  );
}