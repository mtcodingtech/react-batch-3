
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import CustomBtn from "@/components/CustomBtn";
import { Box } from "@mui/material";
import CustomSlider from "@/components/CustomSlider";
import CategoryList from "@/components/CategoryList";
import { categoryImages } from "@/utils/data";
import ProductList from "@/components/ProductList";
import Cart from "@/components/Cart";
import CartItems from "@/components/CartItems";

export default function Home() {
  return (
    <>
      <CustomSlider />
      <CategoryList />
      <ProductList />
      <Cart />
      {/* <CartItems /> */}
    </>
  );
}
