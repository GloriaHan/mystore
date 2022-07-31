import styled from "styled-components";
import { Link } from "react-router-dom";

export const Root = styled.div`
  width: 100%;
  background-color: green;
  width: 200px;
  height: 100%;
  padding: 10px;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledLink = styled(Link)`
  text-decoration-line: none;
`;
