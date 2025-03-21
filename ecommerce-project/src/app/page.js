import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import CustomBtn from "@/components/CustomBtn";
import { Box } from "@mui/material";
import CustomSlider from "@/components/CustomSlider";
import CategoryList from "@/components/CategoryList";
import { categoryImages } from "@/utils/data";
import ProductList from "@/components/ProductList";

export default function Home() {
  return (
    <>
      <CustomSlider />
      <CategoryList />
      <ProductList />
    </>
  );
}
