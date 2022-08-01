import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Root, Img, Title, Product } from "./Content.style";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

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
                  width: 150,
                  height: 200,
                },
              }}
            >
              <Paper elevation={2}>
                <Product onClick={() => navigate(`/products/${item.id}`)}>
                <span>
                  <Img src={item.image} alt={item.title} />
                  <Title>{item.title}</Title>
                  <p>${item.price}</p>
                </span>
                </Product>
              </Paper>
             
            </Box>
         
        ))}
    </Root>
  );
}
