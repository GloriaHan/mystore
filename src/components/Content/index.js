import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Root,Img,Title, Product } from "./Content.style";

export default function Content() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState();
  const { category } = useParams();

  useEffect(() => {
    (async () => {
      const url = `${process.env.REACT_APP_BASE_URL}/products${
        category ? `/category/${category}` : ""
      }`;
      setLoading(true);
      console.log(url);

      const res = await fetch(url);
      const data = await res.json();
      setLoading(false);
      setProducts(data);
    })();
  }, [category]);

  return (
    <Root>
      {products &&
        products.map((item) => (
          
          <Product key={item.id}>
            <span >
              <Img src={item.image} alt={item.title} />
              <Title>{item.title}</Title>
              <p>${item.price}</p>
              {/* <p>{item.description}</p> */}
            </span>
          </Product>
        ))}
    </Root>
  );
}
