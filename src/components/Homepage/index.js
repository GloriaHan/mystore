import React from "react";
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <div>
      <h1> Homepage</h1>
      <h2>WELCOME TO THE OUR STORE!</h2>

      <Link to="/products">products</Link>
    </div>
  );
}
