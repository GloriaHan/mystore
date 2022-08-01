import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactImageMagnify from "react-image-magnify";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Rating from "@mui/material/Rating";
import {
  Root,
  ImageContainer,
  Title,
  Price,
  RatingContainer,
} from "./ProductDetail.style";

export default function ProdectDetail() {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState();
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const url = `${process.env.REACT_APP_BASE_URL}/products/${id}`;
      setLoading(true);
      const res = await fetch(url);
      const data = await res.json();
      console.log(url);
      setLoading(false);
      setProduct(data);
    })();
  }, [id]);

  if (loading === true) return null;
  return (
    <div>
      {product && (
        <Root>
          <ImageContainer>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                "& > :not(style)": {
                  m: 1,
                  width: 400,
                  padding: 1,
                },
              }}
            >
              <Paper elevation={9}>
                <ReactImageMagnify
                  {...{
                    smallImage: {
                      alt: `${product.title}`,
                      isFluidWidth: true,
                      src: product.image,
                    },
                    largeImage: {
                      src: product.image,
                      width: 1200,
                      height: 1800,
                    },
                    isHintEnabled: true,
                    shouldHideHintAfterFirstActivation: false,
                  }}
                />
              </Paper>
            </Box>
          </ImageContainer>
          <Title>{product.title}</Title>
          <Price>{`$${Number(product.price).toFixed(2)}`}</Price>
          <RatingContainer>
            <Rating name="simple-controlled" value={product.rating.rate} />
            <p>{product.rating.count}</p>
          </RatingContainer>
          <p>{product.description.toLocaleString()}</p>
        </Root>
      )}
    </div>
  );
}
