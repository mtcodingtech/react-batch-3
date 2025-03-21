"use client";
import React from "react";
import { categoryImages } from "@/utils/data";
import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Image from "next/image";
import CategoryItem from "./CategoryItem";
import { grey } from "@mui/material/colors";
import ProductItem from "./ProductItem";
import { useSelector } from "react-redux";

function ProductList() {
  const { status, items } = useSelector((state) => state.products);
  const products = items.products;
  if (status === "loading") return <p>Loading...</p>;
  return (
    <Container sx={{ width: "1100px", my: 8 }}>
      <Grid container>
        {products &&
          products.map((product, index) => {
            return (
              <React.Fragment key={index}>
                <ProductItem product={product} />
              </React.Fragment>
            );
          })}
      </Grid>
    </Container>
  );
}

export default ProductList;
