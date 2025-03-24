"use client";

import React, { useEffect } from "react";
import { categoryImages } from "@/utils/data";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsByCategory, setCategory } from "@/redux/productsSlice";
import { green } from "@mui/material/colors";

function CategoryItem({ category, index }) {
  const { selectedCategory } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCategory("beauty"));
    dispatch(fetchProductsByCategory("beauty"));
    console.log("dddd>>");
  }, []);

  const handleCategoryClick = (category) => {
    if (selectedCategory === category) return; // Prevent duplicate fetch
    dispatch(setCategory(category));
    dispatch(fetchProductsByCategory(category));
  };

  // const handleCategoryClick = (categorySlug) => {
  //   dispatch(setCategory(categorySlug));
  // };

  const active = selectedCategory === category.slug;
  const activeStyles = active && {
    color: "#fff",
    background: green[800],
    "&::before": {
      content: "''",
      position: "absolute",
      bottom: "-26%",
      border: "20px solid transparent",
      borderTopColor: green[800],
      left: 0,
      right: 0,
      width: 20,
      margin: "auto",
    },
  };
  return (
    <Grid
      item
      size={{ xs: 6, sm: 4, md: 3, lg: 2 }}
      sx={{
        py: 4,
        position: "relative",
        "&:last-child > :first-of-type": {
          borderRight: 0,
        },
      }}
      key={category.slug}
    >
      <Box
        sx={{
          borderRight: "1px solid red",

          textAlign: "center",
          cursor: "pointer",
        }}
        onClick={() => handleCategoryClick(category.slug)}
      >
        <Image
          src={categoryImages[index]}
          alt="img"
          width={500}
          height={500}
          style={{ width: 50, height: 50, margin: "0 auto" }}
        />
        <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
          {category.name}
        </Typography>
      </Box>
    </Grid>
  );
}

export default CategoryItem;
