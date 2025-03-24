import React from "react";
import { categoryImages } from "@/utils/data";
import { Box, Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "@/redux/productsSlice";
import { green, grey } from "@mui/material/colors";
import { addToCart, toggleCart } from "@/redux/cartSlice";

function ProductItem({ product }) {
  const dispatch = useDispatch();
  return (
    <Grid
      size={{ xs: 6, sm: 4, md: 3, lg: 2 }}
      key={1}
      sx={{
        py: 2,
        border: `1px solid ${grey[300]}`,
      }}
    >
      <Box
        sx={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          height: "100%",
          px: 2,
        }}
      >
        <Image
          src={product.thumbnail}
          alt="img"
          width={500}
          height={500}
          style={{ width: 80, height: 100, margin: "0 auto" }}
        />
        <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
          {product.title}
        </Typography>
        <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
          ${product.price}
        </Typography>
        <Button
          size="small"
          variant="outlined"
          sx={{ mt: 2 }}
          onClick={() => {
            dispatch(addToCart(product));
            dispatch(toggleCart(true))
          }}
        >
          Add to cart
        </Button>
      </Box>
    </Grid>
  );
}

export default ProductItem;
