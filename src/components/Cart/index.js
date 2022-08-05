import React, { useContext, useEffect, useState } from "react";
import { Context } from "../App/index";
import { Root, Header, Img, Title, Qty, Product, Price } from "./Cart.style";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/joy/Box";
import Chip from "@mui/joy/Chip";
import ChipDelete from "@mui/joy/ChipDelete";

export default function Cart() {
  const [qty, setQty] = React.useState(0);
  const [product, setProduct] = useState("");
  const { productsInCart, setProductsInCart } = useContext(Context);

  const productsQty =
    productsInCart.length > 0
      ? productsInCart.reduce((a, b) => a + b.qty, 0)
      : 0;

  const totalPrice =
    productsInCart.length > 0
      ? productsInCart.reduce((a, b) => a + b.qty * b.price, 0)
      : 0;
  const handleChange = (e, item) => {
    setQty(e.target.value);
    setProduct(item);
  };

  console.log(product);

  useEffect(() => {
    addToCart();
  }, [qty, product]);

  const addToCart = () => {
    let result = productsInCart.find((item) => item.id === product.id);
    if (result) {
      result.qty = qty;
      setProductsInCart([...productsInCart]);
    }
  };
  const deleteProduct = (e, item) => {
    const newProductsList = [...productsInCart].filter((itemObj) => {
      return itemObj.id !== item.id;
    });
    setProductsInCart(newProductsList);
  };
  return (
    <Root>
      <h1>Your shopping Cart : {productsQty} items </h1>
      <Header>
        <span>Product</span>
        <span>Quantity</span>
        <span>Unit Price</span>
        <span>Sub-Total</span>
      </Header>
      {productsInCart.map((item) => (
        <Product key={item.id}>
          <Img src={item.image} alt={item.title} />
          <Title>{item.title}</Title>
          <Qty>
            {" "}
            Qty:
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <InputLabel id="demo-select-small">Qty</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={item.qty}
                label="Qty"
                onChange={(e) => handleChange(e, item)}
              >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={6}>6</MenuItem>
                <MenuItem value={7}>7</MenuItem>
                <MenuItem value={8}>8</MenuItem>
                <MenuItem value={9}>9</MenuItem>
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={11}>11</MenuItem>
                <MenuItem value={12}>12</MenuItem>
                <MenuItem value={13}>13</MenuItem>
                <MenuItem value={14}>14</MenuItem>
                <MenuItem value={15}>15</MenuItem>
                <MenuItem value={16}>16</MenuItem>
                <MenuItem value={17}>17</MenuItem>
                <MenuItem value={18}>18</MenuItem>
                <MenuItem value={19}>19</MenuItem>
                <MenuItem value={20}>20</MenuItem>
              </Select>
            </FormControl>
          </Qty>
          <Qty>Qty: {item.qty}</Qty>
          <Price>${item.price}</Price>
          <Price>${item.qty * item.price}</Price>
          <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
            <Chip
            onClick={(e) => deleteProduct(e, item)}
              variant="outlined"
              color="danger"
              endDecorator={<ChipDelete />}
            >
              Delete
            </Chip>
          </Box>
        </Product>
      ))}

      <button>Checkout</button>
      <div>
        <p>items: {productsQty}</p>
        <p>Post fee : Free</p>
        <p>Total: ${totalPrice}</p>
      </div>
    </Root>
  );
}
