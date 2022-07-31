import styled from "styled-components";
import { Link } from "react-router-dom";

export const Root = styled.div`
  width: 100%;
  background-color: rgba(255, 100, 100, 0.2);
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledLink = styled(Link)`
  text-decoration-line: none;
`;
