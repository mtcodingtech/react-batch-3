"use client";

import { fetchProducts, fetchProductsByCategory } from "@/redux/productsSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Test({ updatedCategories }) {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleCategoryClick = (category) => {
    dispatch(fetchProductsByCategory(category));
  };
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Products</h1>

      {/* Categories List */}
      <div className="mb-4 flex space-x-4">
        {updatedCategories.map((category) => (
          <button
            key={category.name}
            onClick={() => handleCategoryClick(category.slug)}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Products List */}
      {status === "loading" && <p>Loading...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items?.products?.map((product) => (
          <div key={product.id} className="border p-4 rounded shadow">
            <img src={product.image} alt={product.title} className="w-full h-40 object-cover mb-2" />
            <h2 className="text-lg font-semibold">{product.title}</h2>
            <p className="text-gray-700">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
