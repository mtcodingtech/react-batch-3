"use client";
import { fetchProducts } from "@/redux/productsSlice";
import { Skeleton } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function Products() {
  const dispatch = useDispatch();

  const { items, status, error } = useSelector((state) => state.products);
  const products = items.products;

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  if (status === "loading")
    return <Skeleton variant="rectangular" width={510} height={300} />;
  return (
    <>
      <div>
        {products &&
          products.map((product) => (
            <div key={product.id}>
              <h2>{product.title}</h2>
              <p>{product.price} USD</p>
            </div>
          ))}
      </div>
    </>
  );
}

export default Products;
