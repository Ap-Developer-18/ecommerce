import React from "react";
import ProductCard from "./common/ProductCard";
import { useSelector } from "react-redux";
import Welcome from "./Welcome";
import AboutUs from "./AboutUs";
import Heading from "./common/Heading";
import InvestMent from "./InvestMent";
import SeeOurClassicItems from "./SeeOurClassicItems";

const HomePage = () => {
  const productsData = useSelector((state) => state.ProductSlice.products);

  return (
    <>
      <Welcome />
      <AboutUs />
      <div className="lg:max-w-[1290px] mx-auto px-6 container pt-[160px]">
        <Heading simpleText="Our" redText="All Products" />
        <p className="leading-160 text-gray-700 mb-8">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo, dignissimos!</p>
        <div className="grid grid-cols-3 gap-6">
          {productsData.map((obj, index) => (
            <ProductCard obj={obj} key={index} />
          ))}
        </div>
      </div>
      <InvestMent />
      <SeeOurClassicItems />
    </>
  );
};

export default HomePage;