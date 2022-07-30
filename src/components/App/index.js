import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Sidebar from "../Sidebar";

import Routing from "../Routing";
function App() {
  return (
    <>
      <Header />
      <Routing />
      <Sidebar />
      <Footer />
    </>
  );
}

export default App;
