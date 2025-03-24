"use client";
import { decreaseQuantity, increaseQuantity, removeItem } from "@/redux/cartSlice";
import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

function CartItems() {
  const { open, cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  console.log("cartItems", cartItems);
  return (
    <Box>
      <Typography variant="h4">Shopping Cart</Typography>
      {cartItems.length === 0 && (
        <Typography variant="body1">Cart is empty</Typography>
      )}
      {cartItems.map((item) => {
        return (
          <Box key={item.id} sx={{ display: "flex" }}>
            <Typography variant="body1">{item.title}</Typography>
            <Box sx={{ display: "flex" }}>
              <Button onClick={() => dispatch(decreaseQuantity(item.id))}>
                -
              </Button>
              <Typography variant="body1">{item.quantity}</Typography>
              <Button onClick={() => dispatch(increaseQuantity(item.id))}>
                +
              </Button>
            </Box>
            <Typography variant="body1">
              ${item.price * item.quantity}
            </Typography>
            <Button variant="contained" color="error" onClick={() => dispatch(removeItem(item.id))}>
              Remove
            </Button>
          </Box>
        );
      })}
    </Box>
  );
}

export default CartItems;
