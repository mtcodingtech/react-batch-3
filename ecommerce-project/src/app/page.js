import CustomSlider from "@/components/CustomSlider";
import CategoryList from "@/components/CategoryList";


import Products from "@/components/Products";

import { categoryImages } from "@/utils/data";
// import ProductList from "@/components/ProductList";

export default function Home() {
  return (
    <>
      <CustomSlider />
      <CategoryList />
      <Products />

      {/* <ProductList /> */}
    </>
  );
}
