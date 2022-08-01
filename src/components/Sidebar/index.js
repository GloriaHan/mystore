import React, { useState, useEffect } from "react";
import { Root, List} from "./SideBar.style";
import Box from "@mui/material/Box";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState();
  const navigate = useNavigate();

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
  if (loading === true) return null;
  return (
    <Root>
       <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <List component="nav" aria-label="secondary mailbox folder">
          <ListItemButton onClick={() => navigate("/mystore/products")}>
            <ListItemText primary="All products" />
          </ListItemButton>

          {categories?.map((category) => (
            <ListItemButton
              key={category}
              onClick={() => navigate(`/mystore/products/${category}`)}
            >
              <ListItemText primary={category} />
            </ListItemButton>
          ))}
        </List>
      </Box>
    </Root>
  );
}
