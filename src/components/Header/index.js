import React from "react";
import { Img, Root,SearchBar } from "./Header.style";
import logo from "../../assets/image/logo.png";

export default function Header() {
  return (
    <Root>
      <Img src={logo} alt="logo" />
      <SearchBar>
      <input placeholder='Shopping makes me happy'></input>
      <button>search</button>
      </SearchBar>
    </Root>
  );
}
