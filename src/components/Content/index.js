import React, { useEffect, useState } from "react";

export default function Content() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState("");

  useEffect(() => {
    (async () => {
      const url = `${process.env.REACT_APP_BASE_URL}/products`;
      setLoading(true);
      const res = await fetch(url);
      const data = await res.json();
      setLoading(false);
      setProducts(data);
    })();
  }, []);

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
