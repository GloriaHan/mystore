import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Sidebar from "../Sidebar";
import Content from "../Content";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "../Homepage";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="products" element={<Content />} />
        </Routes>
      </BrowserRouter>
      <Sidebar />
      <Footer />
    </>
  );
}

export default App;
