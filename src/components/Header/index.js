import React, { useState } from "react";
import {
  Img,
  Root,
  SearchBar,
  StyledButton,
  ShoppingCart,
  CartButton,
} from "./Header.style";
import logo from "../../assets/image/logo.png";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

export default function Header() {
  const [inputValue, setInputValue] = useState("");
  const [searchValue, setSearchValue] = useState("");
  return (
    <Root>
      <Link to="/">
        <Img src={logo} alt="logo" />
      </Link>
      <SearchBar>
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 400,
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Buying makes us happy"
            inputProps={{ "aria-label": "Buying makes us happy" }}
            type="text"
            onChange={(e) => setInputValue(e.target.value)}
          />
          <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>

        <Box sx={{ "& button": { m: 1 } }}>
          <StyledButton
            onClick={() => {
              setSearchValue(inputValue);
            }}
            variant="contained"
            size="large"
          >
            search
          </StyledButton>
        </Box>
      </SearchBar>

      <CartButton to="/cart">
        <ShoppingCart fontSize="large" />
      </CartButton>
    </Root>
  );
}
