import React, { useState, useEffect } from "react";
import { Root, List, StyledLink } from "./SideBar.style";

export default function Sidebar() {
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState();
  useEffect(() => {
    (async () => {
      const url = `${process.env.REACT_APP_BASE_URL}/products/categories`;
      setLoading(true);
      const res = await fetch(url);
      const data = await res.json();
      setLoading(false);
      setCategories(data);
    })();
  }, []);

  return (
    <Root>
      <List>
      <StyledLink to="/mystore/products">All porducts</StyledLink> 
        {categories?.map((category) => (
          <StyledLink key={category} to={`/mystore/products/${category}`}>
            {category}
          </StyledLink>
        ))}
      </List>
    </Root>
  );
}
