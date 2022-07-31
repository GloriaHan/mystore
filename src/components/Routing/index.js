import React from "react";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import Cart from "../Cart";
import Content from "../Content";
import Contents from "../Contents";
import Homepage from "../Homepage";
import ProdectDetail from "../ProductDetail";
import Welcome from "../Welcome";

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
          <Route path="cart" element={<Cart />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
