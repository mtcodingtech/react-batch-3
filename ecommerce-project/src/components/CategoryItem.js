"use client";

import React, { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsByCategory, setCategory } from "@/redux/productsSlice";

function CategoryItem({ category, index }) {
  const dispatch = useDispatch();

  const { selectedCategory } = useSelector((state) => state.products);

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

  const active = selectedCategory === category.slug;
  const activeStyles = active && {
    background: "red",
    "&::before": {
      content: "''",
      width: 20,
      height: 20,
      position: "absolute",
      bottom: "-26%",
      left: 0,
      right: 0,
      margin: "auto",
      border: "20px solid transparent",
      borderTopColor: "red",
    },
  };
  return (
    <Grid
      item
      size={{ xs: 6, sm: 4, md: 3, lg: 2 }}
      sx={{
        py: 4,
        position: "relative",
        "&:last-child > :first-child": {
          borderRight: 0,
        },
        ...activeStyles,
      }}
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
          src={category.image}
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
