import { categoryImages } from "@/utils/data";
import { Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

import React from "react";
import CategoryItem from "./CategoryItem";

export default async function CategoryList() {
  const data = await fetch("https://dummyjson.com/products/categories");
  const categories = await data.json();

  const updatedCategories = categories.map((category, index) => ({
    ...category,
    image: categoryImages[index],
  }));

  return (
    <Container
      sx={{ width: "1100px", my: 8, border: "1px solid #000" }}
      disableGutters
    >
      <Grid container sx={{ p: 0 }}>
        {updatedCategories &&
          updatedCategories.map((category, index) => {
            return (
              index < 6 && (
                <React.Fragment key={index}>
                  <CategoryItem category={category} index={index} />
                </React.Fragment>
              )
            );
          })}
      </Grid>
    </Container>
  );
}
