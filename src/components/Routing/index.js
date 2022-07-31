import React from "react";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import Homepage from "../Homepage";
import Content from "../Content";

export default function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="products" element={<Content />} />.
        <Route path="*" element={<Navigate to="/" replace />}/>
      </Routes>
    </BrowserRouter>
  );
}
