import { useEffect, useState } from "react";
import Hero from "./components/common/Hero";
import HomePage from "./components/HomePage";
import Footer from "./components/common/Footer";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import SingleProductPage from "./components/SingleProductPage";
import { fetchProducts } from "./redux/actions";
import Loader from "./components/common/Loader";
import ProductCard from "./components/common/ProductCard";
import CartPage from "./components/CartPage";
import { Toaster } from "react-hot-toast";
import Welcome from "./components/Welcome";
import AboutUs from "./components/AboutUs";

function App() {
  const loading = useSelector((state) => state.ProductSlice.loading);
  // NOW WE WANT TO STORE OUR DATA IN REDUX
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Toaster position="top-center" />
      <Hero />
      <Welcome />
      <AboutUs />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<HomePage />} />
        <Route path="/product/:id" element={<SingleProductPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;