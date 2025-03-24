"use client";
import { toggleCart } from "@/redux/cartSlice";
import { Close } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CustomDrawer from "./CustomDrawer";

function Cart() {
  const { open, cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  console.log("cartItems", cartItems);
  return (
    <>
      {open && (
        <>
          <CustomDrawer />
          <Close onClick={() => dispatch(toggleCart(false))} />
        </>
      )}
    </>
  );
}

export default Cart;
