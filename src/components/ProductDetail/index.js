import { Root, ImageContainer } from "./ProductDetail.style";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactImageMagnify from "react-image-magnify";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

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
                  width: 300,
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
                      width: 600,
                      height: 800,
                    },
                    isHintEnabled: true,
                    shouldHideHintAfterFirstActivation: false,
                  }}
                />
              </Paper>
            </Box>
          </ImageContainer>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
        </Root>
      )}
    </div>
  );
}
