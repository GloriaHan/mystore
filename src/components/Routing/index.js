import React from "react";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import Homepage from "../Homepage";
import Content from "../Content";
import Contents from "../Contents";
import Welcome from "../Welcome";
import ProdectDetail from "../ProductDetail";

export default function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}>
          <Route index element={<Navigate to="products" />} />
          <Route path="products" element={<Contents />}>
            <Route index element={<Navigate to="welcome" />} />
            <Route index path="welcome" element={<Welcome />} />
            <Route path="all_products" element={<Content />} />
          </Route>

          <Route path="prodectdetail" element={<ProdectDetail />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
