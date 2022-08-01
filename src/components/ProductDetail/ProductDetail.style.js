import styled from "styled-components";

export const Root = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: repeat(4, auto);
  height: 100%;
  padding: 30px;
  grid-gap: 20px 20px;
`;

export const ImageContainer = styled.div`
  grid-row: 1 / 5;
`;

export const Title = styled.div`
  font-size: 32px;
  font-weight: bold;
`;

export const Price = styled.div`
  font-size: 32px;
  font-weight: bold;
`;

export const RatingContainer = styled.div`
  display: flex;
  align-items: center;

  p {
    margin: 10px;
  }
`;
