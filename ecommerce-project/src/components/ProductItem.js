import React from 'react'
import { categoryImages } from "@/utils/data";
import { Box, Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "@/redux/productsSlice";
import { green, grey } from "@mui/material/colors";

function ProductItem({product}) {
  return (
    <Grid
      item
      size={{ xs: 6, sm: 4, md: 3, lg: 2 }}
      key={1}
      sx={{
        py: 4,
      
      }}
    >
      <Box
        sx={{ textAlign: "center" }}
      >
        <Image
          src={product.thumbnail}
          alt="img"
          width={500}
          height={500}
          style={{ width: 50, height: 50, margin: "0 auto" }}
        />
        <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
         {product.title}
        </Typography>
        <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
         {product.price}
        </Typography>
        <Button variant='outlined'>Add to cart</Button>
      </Box>
    </Grid>
  )
}

export default ProductItem