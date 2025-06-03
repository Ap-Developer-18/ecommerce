import React from "react";
import ProductCard from "./common/ProductCard";
import { useSelector } from "react-redux";

const HomePage = () => {
  const productsData = useSelector((state) => state.ProductSlice.products);

  return (
    <div className="grid grid-cols-4 gap-6 lg:max-w-[1380px] mx-auto px-6 container my-20">
      {productsData.map((obj, index) => (
        <ProductCard obj={obj} key={index} />
      ))}
    </div>
  );
};

export default HomePage;