import React, { useEffect, useState } from "react";

export default function Content() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState("");

  const fetchInfo = async () => {
    const url = `https://fakestoreapi.com/products`;
    setLoading(true);
    const res = await fetch(url);
    const data = await res.json();
    setLoading(false);
    setProducts(data);
    console.log(products);

    return data;
  };
  //   useEffect(() => {
  //     fetchInfo().then((response) => {
  //       setProducts(response);
  //     console.log(response);

  //     });
  //   }, []);

  return (
    <div>
      <button onClick={() => fetchInfo()}>get info</button>
      {products &&
        products.map((item) => (
          <span key={item.id}>
            <p>{item.price}</p>
          </span>
        ))}
    </div>
  );
}
