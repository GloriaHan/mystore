import React from "react";
import { Link } from "react-router-dom";
import { Root } from "./SideBar.style";

export default function Sidebar() {
  return (
    <Root>
      <Link to="/products/all_products">products</Link>
    </Root>
  );
}
