import { categoryImages } from "@/utils/data";
import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Image from "next/image";
import CategoryItem from "./CategoryItem";
import { grey } from "@mui/material/colors";
import React from "react";

export default async function CategoryList() {
  const data = await fetch("https://dummyjson.com/products/categories");
  const categories = await data.json();

  return (
    <Container disableGutters
      sx={{ width: "1100px", my: 8, border: `1px solid ${grey[400]}` }}
    >
      <Grid container>
        {categories.map((category, index) => {
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
