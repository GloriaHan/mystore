import styled from "styled-components";

export const Root = styled.div`
  /* display: flex; */
  flex-wrap: wrap;
  background-color: #e0f7fa;
  padding: 8px;
`;
export const Header = styled.div`
  /* display: flex; */
  flex-wrap: wrap;
  background-color: #e0f7fa;
  padding: 8px;
`;
export const span = styled.span`
  /* display: flex; */
  padding-inline: 30px;
`;
export const Product = styled.div`
  background-color: #ffffff;
  display: flex;
  /* text-align: center;
  align-items:center; */
  overflow: hidden;
  margin: 10px;
  border: hidden;
`;

export const Img = styled.img`
  height: 80px;
  width: 80px;
`;

export const Title = styled.p`
  overflow: hidden;
  padding-inline: 20px;
`;

export const Qty = styled.p`
  overflow: hidden;
  padding-inline: 20px;
`;
export const Price = styled.p`
  height: 30px;
  font-weight: bold;
  overflow: hidden;
  margin: 0;
`;
