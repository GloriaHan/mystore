import styled from "styled-components";
import Button from "@mui/material/Button";

export const Root = styled.div`
  width: 100%;
  display: flex;
  padding: 16px;
  align-items: center;
  background-color: #0097a7;
  color: transparent;
`;

export const Img = styled.img`
  height: 50px;
  border-radius: 20%;
`;

export const SearchBar = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const StyledButton = styled(Button)`
  background-color: #3f51b5 !important;
`;
