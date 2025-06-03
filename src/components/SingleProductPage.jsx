import axios from "axios";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link, useParams } from "react-router-dom";
import { FaFacebook, FaInstagram, FaStar, FaTwitter } from "react-icons/fa";
import { useDispatch } from 'react-redux'
import { addProduct } from "../redux/Cart.Slice";

const SingleProductPage = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch()

  const fetchSingleProduct = async () => {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );
      setData(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSingleProduct();
  }, [id]);

  if (loading) return <div>Loading...</div>;

  const AddToCart = () => {
    const item = {
      id: data.id,
      title: data.title,
      image: data.image,
      price: data.price,
      quantity: 1,
    }
    toast.success('Successfully toasted!')
    dispatch(addProduct(item));
  }

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="lg:max-w-[1380px] mx-auto px-6 container  py-24">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            src={data.image}
            alt="ecommerce"
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm uppercase title-font text-gray-500 tracking-widest">
              {data.category}
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {data.title}
            </h1>
            <div className="flex mb-4 items-center gap-3">
              <span className="flex items-center">
                <FaStar className="fill-blue-600" />
                <FaStar className="fill-blue-600" />
                <FaStar className="fill-blue-600" />
                <FaStar className="fill-blue-600" />
                <FaStar />
              </span>
              <span className="text-gray-600 ml-3">4 Reviews</span>
              <span className="flex gap-2 pl-3 py-2 border-l-2 border-gray-200">
                <Link to={""} className="text-gray-500">
                  <FaFacebook />
                </Link>
                <Link to={""} className="text-gray-500">
                  <FaTwitter />
                </Link>
                <Link to={""} className="text-gray-500">
                  <FaInstagram />
                </Link>
              </span>
            </div>
            <p className="leading-relaxed">
              {data.description}
            </p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
              <div className="flex">
                <span className="mr-3">Color</span>
                <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none" />
                <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none" />
                <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none" />
              </div>
              <div className="flex ml-6 items-center">
                <span className="mr-3">Size</span>
                <div className="relative">
                  <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                    <option>SM</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                  </select>
                  <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <div className="flex">
              <span className="title-font font-medium text-2xl text-gray-900">
                ${data.price}
              </span>
              <button onClick={AddToCart} className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                Add to card
              </button>
              <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProductPage;
