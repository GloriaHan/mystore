import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Root, Img, Title, Product, Price } from "./Content.style";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

export default function Content() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState();
  const { category } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const url = `${process.env.REACT_APP_BASE_URL}/products${
        category ? `/category/${category}` : ""
      }`;
      setLoading(true);
      const res = await fetch(url);
      const data = await res.json();
      setLoading(false);
      setProducts(data);
    })();
  }, [category]);

  if (loading === true) return null;
  return (
    <Root>
      {products &&
        products.map((item) => (
          <Box
            key={item.id}
            sx={{
              display: "flex",
              flexWrap: "wrap",
              "& > :not(style)": {
                m: 1,
                width: 180,
                height: 240,
              },
            }}
          >
            <Paper elevation={2}>
              <Product onClick={() => navigate(`/products/${item.id}`)}>
                <span>
                  <Img src={item.image} alt={item.title} />
                  <Title>{item.title}</Title>
                  <Price>${item.price}</Price>
                  <Button
                    variant="contained"
                    size="small"
                    onClick={(e) => {
                      e.preventDefault();
                    }}
                  >
                    BUY NOW
                  </Button>
                </span>
              </Product>
            </Paper>
          </Box>
        ))}
    </Root>
  );
}
