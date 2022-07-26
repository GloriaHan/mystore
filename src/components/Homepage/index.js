import React from "react";
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <div className="bg-indigo-400">
        <h1 > Homepage</h1>
        <h2>WELCOME TO THE OUR STORE!</h2>
     
      <Link to="/products" className="rounded-lg px-4 text-center text-white bg-indigo-600">products</Link>
    </div>
  );
}
