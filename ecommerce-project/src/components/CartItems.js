"use client";

import {
  increaseQuantity,
  decreaseQuantity,
  removeItem,
  toggleCart,
} from "@/redux/cartSlice";
import { Close } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CustomDrawer from "./CustomDrawer";

const CartItems = () => {
  const { cartItems, open } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const cart = cartItems;

  // Calculate Grand Total Price

  console.log("open", open);

  if (!cart) return;
  const grandTotal =
    cart && cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div
      style={{ border: "1px solid black", padding: "10px", marginTop: "20px" }}
    >
        <Close onClick={() => dispatch(toggleCart(false))}></Close>
      <h2>Shopping Cart</h2>

      {cart.length === 0 ? <p>Cart is empty</p> : null}
      {cart.map((item) => (
        <div
          key={item.id}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p>
            {item.title} (${item.price} per unit)
          </p>
          <div>
            <button onClick={() => dispatch(decreaseQuantity(item.id))}>
              -
            </button>
            <span> {item.quantity} </span>
            <button onClick={() => dispatch(increaseQuantity(item.id))}>
              +
            </button>
          </div>
          <p>${item.price * item.quantity}</p> {/* Total price for the item */}
          <button
            onClick={() => dispatch(removeItem(item.id))}
            style={{ color: "red" }}
          >
            Remove
          </button>
        </div>
      ))}

      {cart.length > 0 && (
        <div style={{ marginTop: "20px", fontWeight: "bold" }}>
          <h3>Grand Total: ${grandTotal}</h3>
        </div>
      )}
    </div>
  );
};

export default CartItems;
