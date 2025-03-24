"use client";

import { useSelector } from "react-redux";
import CustomDrawer from "./CustomDrawer";

const Cart = () => {
  const { open } = useSelector((state) => state.cart);

  return open && <CustomDrawer />;
};

export default Cart;
