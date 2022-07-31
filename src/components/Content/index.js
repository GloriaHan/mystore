import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Content() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState();
  const { category } = useParams();

  console.log(category);

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

  return (
    <div>
      {products &&
        products.map((item) => (
          <span key={item.id}>
            <p>{item.price}</p>
          </span>
        ))}
    </div>
  );
}
